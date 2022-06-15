//
//  Created by Ken Cooke on 6/11/22.
//  Copyright 2022 High Fidelity, Inc.
//
//  The contents of this file are PROPRIETARY AND CONFIDENTIAL, and may not be
//  used, disclosed to third parties, copied or duplicated in any form, in whole
//  or in part, without the prior written consent of High Fidelity, Inc.
//

'use strict';

const simdBlob = Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
const simdSupported = WebAssembly.validate(simdBlob);
console.log('WebAssembly SIMD is ' + (simdSupported ? 'supported' : 'not supported') + ' by this browser.');

const encodedTransformSupported = !!window.RTCRtpScriptTransform;
console.log('WebRTC Encoded Transform is ' + (encodedTransformSupported ? 'supported' : 'not supported') + ' by this browser.');

// create Agora client
let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8"
});

let localTracks = {
    videoTrack: null,
    audioTrack: null
};

let remoteUsers = {};

// Agora client options
let options = {
    appid: null,
    channel: null,
    uid: null,
    token: null,
    username: null
};

function decrypt_appid(data, key) {
    let k = BigInt(key.split('').reduce((a, b) => a = Math.imul(a, 33) + b.charCodeAt(0) | 0, 0));
    let t = BigInt('0x' + data) ^ (k * 38038099725390353860267635547n);
    return t.toString(16);
}

// the demo can auto join channel with params in url
$(()=>{
    let urlParams = new URL(location.href).searchParams;
    options.channel = urlParams.get("channel");
    options.password = urlParams.get("password");
    options.username = urlParams.get("username");
    if (options.channel && options.password) {
        $("#channel").val(options.channel);
        $("#password").val(options.password);
        $("#username").val(options.username);
        //$("#join-form").submit();
    }
}
)

$("#username").change(function (e) {
    options.username = $("#username").val();
    $("#local-player-name").text(options.username);

    // if already connected, update my name
    if (localTracks.audioTrack) {
        client.sendStreamMessage((new TextEncoder).encode(options.username));
        console.log('%cusername changed, sent stream-message of:', 'color:cyan', options.username);
    }
})

$("#join-form").submit(async function(e) {
    e.preventDefault();
    $("#join").attr("disabled", true);
    try {
        options.appid = decrypt_appid($("#appid").val(), $("#password").val());
        options.token = $("#token").val();
        options.channel = $("#channel").val();
        options.username = $("#username").val();
        await join();
        $("#success-alert").css("display", "block");
    } catch (error) {
        console.error(error);
    } finally {
        $("#leave").attr("disabled", false);
    }
})

$("#leave").click(function(e) {
    leave();
    $("#success-alert").css("display", "none");
})

let isAecEnabled = false;
$("#aec").click(async function(e) {
    // toggle the state
    isAecEnabled = !isAecEnabled;
    $("#aec").css("background-color", isAecEnabled ? "purple" : "");

    // if already connected, leave and rejoin
    if (localTracks.audioTrack) {
        await leave();
        $("#join").attr("disabled", true);
        await join();
        $("#leave").attr("disabled", false);
    }
})

let isMuteEnabled = false;
$("#mute").click(function(e) {
    // toggle the state
    isMuteEnabled = !isMuteEnabled;
    $("#mute").css("background-color", isMuteEnabled ? "purple" : "");

    // if muted, set gate threshold to 0dB, else follow slider
    setThreshold(isMuteEnabled ? 0.0 : threshold.value);
})

$("#sound").click(function(e) {
    playSoundEffect();
})

// threshold slider
threshold.oninput = () => {
    if (!isMuteEnabled) {
        setThreshold(threshold.value);
    }
    document.getElementById("threshold-value").value = threshold.value;
}

let usernames = {};

let audioElement = undefined;
let audioContext = undefined;

let hifiSources = {};
let hifiNoiseGate = undefined;  // mic stream connects here
let hifiListener = undefined;   // hifiSource connects here
let hifiLimiter = undefined;    // additional sounds connect here

function setThreshold(value) {
    if (hifiNoiseGate !== undefined) {
        hifiNoiseGate.parameters.get('threshold').value = value;
        console.log('set noisegate threshold to', value, 'dB');
    }
}

//
// Sortable layout of video elements
//
let sortable = Sortable.create(playerlist, {
    sort: true,
    direction: "horizontal",
    onChange: updatePositions,  // update positions on drag-and-drop
});

let resizeObserver = new ResizeObserver(updatePositions);
resizeObserver.observe(playerlist); // update positions on resize

// recompute azimuth, based on current video layout
function updatePositions() {
    let order = sortable.toArray();

    // compute horizontal bounds
    let xmin = 999999;
    let xmax = 0;
    order.forEach((uid, i) => {
        let rect = sortable.el.children[i].getClientRects();
        xmin = Math.min(xmin, rect[0].left);
        xmax = Math.max(xmax, rect[0].right);
    });

    // center the horizontal axis at zero
    let xoff = (xmin + xmax) / 2;
    xmin -= xoff;
    xmax -= xoff;

    // compute azimuth from center of video element
    order.forEach((uid, i) => {
        let rect = sortable.el.children[i].getClientRects();
        let x = (rect[0].left + rect[0].right) / 2 - xoff;
        let azimuth = (Math.PI / 2) * (x / xmax);   // linear, not atan(x)

        // update hifiSource
        let hifiSource = hifiSources[uid];
        if (hifiSource !== undefined) {
            hifiSource.parameters.get('azimuth').value = azimuth;
            console.log("Set uid =", uid, "to azimuth =", (azimuth * 180) / Math.PI);
        }
    });
}

async function join() {

    await startSpatialAudio();

    // add event listener to play remote tracks when remote user publishs.
    client.on("user-published", handleUserPublished);
    client.on("user-unpublished", handleUserUnpublished);

    let audioConfig = {
        AEC: isAecEnabled,
        AGC: false,
        ANS: false,
        bypassWebAudio: true,
        encoderConfig: {
            sampleRate: 48000,
            bitrate: 64,
            stereo: false,
        },
    };

    let videoConfig = {
        encoderConfig: "240p_1",
    };

    // Join a channel and create local tracks. Best practice is to use Promise.all and run them concurrently.
    [options.uid, localTracks.audioTrack, localTracks.videoTrack] = await Promise.all([
        client.join(options.appid, options.channel, options.token || null, options.uid || null),
        AgoraRTC.createMicrophoneAudioTrack(audioConfig),
        AgoraRTC.createCameraVideoTrack(videoConfig),
    ]);

    // Play the local video track
    localTracks.videoTrack.play("local-player");
    $("#local-player-name").text(options.username);

    //
    // route mic stream through Web Audio noise gate
    //
    let mediaStreamTrack = localTracks.audioTrack.getMediaStreamTrack();
    let mediaStream = new MediaStream([mediaStreamTrack]);

    let sourceNode = audioContext.createMediaStreamSource(mediaStream);
    let destinationNode = audioContext.createMediaStreamDestination();

    hifiNoiseGate = new AudioWorkletNode(audioContext, 'wasm-noise-gate');
    setThreshold(isMuteEnabled ? 0.0 : threshold.value);

    sourceNode.connect(hifiNoiseGate).connect(destinationNode);

    let destinationTrack = destinationNode.stream.getAudioTracks()[0];
    await localTracks.audioTrack._updateOriginMediaStreamTrack(destinationTrack, false);

    // publish local tracks to channel
    await client.publish(Object.values(localTracks));
    console.log("publish success");

    // on broadcast from remote user, set corresponding username
    client.on("stream-message", (uid, data) => {
        usernames[uid] = (new TextDecoder).decode(data);
        $(`#player-name-${uid}`).text(usernames[uid]);
        console.log("%creceived stream-message from:", "color:cyan", usernames[uid]);
    });
}

async function leave() {

    for (let trackName in localTracks) {
        let track = localTracks[trackName];
        if (track) {
            track.stop();
            track.close();
            localTracks[trackName] = undefined;
        }
    }

    // remove remote users and player views
    for (const [id, user] of Object.entries(remoteUsers)) {
        delete remoteUsers[id];
        $(`#player-wrapper-${id}`).remove();
    }

    // leave the channel
    await client.leave();

    $("#local-player-name").text("");
    $("#join").attr("disabled", false);
    $("#leave").attr("disabled", true);

    hifiSources = {};
    stopSpatialAudio();

    console.log("client leaves channel success");
}

function handleUserPublished(user, mediaType) {
    const id = user.uid;
    remoteUsers[id] = user;
    subscribe(user, mediaType);
}

function handleUserUnpublished(user) {
    const id = user.uid;
    delete remoteUsers[id];
    $(`#player-wrapper-${id}`).remove();
    unsubscribe(user);
}

async function subscribe(user, mediaType) {
    const uid = user.uid;

    // subscribe to a remote user
    await client.subscribe(user, mediaType);
    console.log("subscribe uid:", uid);

    if (mediaType === 'video') {
        const player = $(`
        <div id="player-wrapper-${uid}" data-id="${uid}">
            <div id="player-${uid}" class="player"></div>
            <p id="player-name-${uid}" class="player-name"></p>
        </div>
        `);
        $("#playerlist").append(player);
        $(`#player-name-${uid}`).text(usernames[uid]);
        updatePositions();

        user.videoTrack.play(`player-${uid}`);
    }

    if (mediaType === 'audio') {

        //user.audioTrack.play();

        let mediaStreamTrack = user.audioTrack.getMediaStreamTrack();
        let mediaStream = new MediaStream([mediaStreamTrack]);
        let sourceNode = audioContext.createMediaStreamSource(mediaStream);

        let hifiSource = new AudioWorkletNode(audioContext, 'wasm-hrtf-input');
        hifiSources[uid] = hifiSource;
        updatePositions();

        sourceNode.connect(hifiSource).connect(hifiListener);
    }

    // broadcast my name
    client.sendStreamMessage((new TextEncoder).encode(options.username));
    console.log('%csent stream-message of:', 'color:cyan', options.username);
}

async function unsubscribe(user) {
    const uid = user.uid;
    delete hifiSources[uid];
    updatePositions();

    console.log("unsubscribe uid:", uid);
}

//
// Chrome (as of M100) cannot perform echo cancellation of the Web Audio output.
// As a workaround, a loopback configuration of local peer connections is inserted at the end of the pipeline.
// This should be removed when Chrome implements browser-wide echo cancellation.
// https://bugs.chromium.org/p/chromium/issues/detail?id=687574#c60
//
let loopback = undefined;
async function startEchoCancellation(element, context) {

    loopback = [new RTCPeerConnection, new RTCPeerConnection];

    // connect Web Audio to destination
    let destination = context.createMediaStreamDestination();
    hifiLimiter.connect(destination);

    // connect through loopback peer connections
    loopback[0].addTrack(destination.stream.getAudioTracks()[0]);
    loopback[1].ontrack = e => element.srcObject = new MediaStream([e.track]);

    async function iceGatheringComplete(pc) {
        return pc.iceGatheringState === 'complete' ? pc.localDescription :
            new Promise(resolve => {
                pc.onicegatheringstatechange = e => { pc.iceGatheringState === 'complete' && resolve(pc.localDescription); };
            });
    }

    // start loopback peer connections
    let offer = await loopback[0].createOffer();
    offer.sdp = offer.sdp.replace('useinbandfec=1', 'useinbandfec=1; stereo=1; sprop-stereo=1; maxaveragebitrate=256000');
    await loopback[0].setLocalDescription(offer);
    await loopback[1].setRemoteDescription(await iceGatheringComplete(loopback[0]));

    let answer = await loopback[1].createAnswer();
    answer.sdp = answer.sdp.replace('useinbandfec=1', 'useinbandfec=1; stereo=1; sprop-stereo=1; maxaveragebitrate=256000');
    await loopback[1].setLocalDescription(answer);
    await loopback[0].setRemoteDescription(await iceGatheringComplete(loopback[1]));

    console.log('Started AEC using loopback peer connections.')
}

function stopEchoCancellation() {
    loopback && loopback.forEach(pc => pc.close());
    loopback = null;
    console.log('Stopped AEC.')
}

async function startSpatialAudio() {

    audioElement = new Audio();

    try {
        audioContext = new AudioContext({ sampleRate: 48000 });
    } catch (e) {
        console.log('Web Audio API is not supported by this browser.');
        return;
    }

    console.log("Audio callback latency (samples):", audioContext.sampleRate * audioContext.baseLatency);

    await audioContext.audioWorklet.addModule(simdSupported ? 'HifiProcessorSIMD.js' : 'HifiProcessor.js');

    // temporary license token that expires 1/1/2023
    const token = 'aGlmaQAAAAHLuJ9igD2xY0xxPKza+Rcw9gQGOo8T5k+/HJpF/UR1k99pVS6n6QfyWTz1PTHkpt62tta3jn0Ntbdx73ah/LBv14T1HjJULQE=';
    let hifiLicense = new AudioWorkletNode(audioContext, 'wasm-license');
    hifiLicense.port.postMessage(token);

    hifiListener = new AudioWorkletNode(audioContext, 'wasm-hrtf-output', {outputChannelCount : [2]});
    hifiLimiter = new AudioWorkletNode(audioContext, 'wasm-limiter');
    hifiListener.connect(hifiLimiter);

    if (isAecEnabled && !!window.chrome) {
        startEchoCancellation(audioElement, audioContext);
    } else {
        hifiLimiter.connect(audioContext.destination);
    }

    $("#sound").attr("hidden", false);
    audioElement.play();
}

function stopSpatialAudio() {
    $("#sound").attr("hidden", true);
    stopEchoCancellation();
    audioContext.close();
}

let audioBuffer = null;
async function playSoundEffect() {

    // load on first play
    if (!audioBuffer) {
        let response = await fetch('https://raw.githubusercontent.com/kencooke/spatial-audio-room/master/sound.wav');
        let buffer = await response.arrayBuffer();
        audioBuffer = await audioContext.decodeAudioData(buffer);
    }

    let sourceNode = new AudioBufferSourceNode(audioContext);
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(hifiLimiter);
    sourceNode.start();
}
