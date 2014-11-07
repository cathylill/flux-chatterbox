var quickconnect = require('rtc-quickconnect');
var captureConfig = require('rtc-captureconfig');
var rtcMedia = require('rtc-media');
var rtcMesh = require('rtc-mesh');
var uuid = require('uuid');
var RtcRemoteActions = require('../actions/RtcRemoteActions');

var iceServers = [
	{ url: 'stun:stun.l.google.com:19302' }
];
var channel = null;
var connection = null;
var mesh = null;

var RtcChannel = {
	connect: function (room, name) {
		connection = quickconnect('http://rtc.io/switchboard/', {
			room: room,
			iceServers: iceServers,
			reactive: true
		})
		.profile({name: name})
		.on('call:started', function(id, pc, data) {
			RtcRemoteActions.gotPeer({
				id: id,
				peer: pc,
				data: data
			});
		})
		.on('call:ended', function(id, pc, data) {
			RtcRemoteActions.lostPeer(id);
		});

		RtcRemoteActions.connected(connection);
	},

	captureMedia: function () {
		var localMedia = rtcMedia({
			constraints: captureConfig('camera max:320x240').toConstraints()
		});

		localMedia.once('capture', function(stream) {
			RtcRemoteActions.capturedMedia(localMedia);
			connection.addStream(stream);
		});
	},

	createChannel: function (name) {
		mesh = rtcMesh(connection);
		mesh.on('update', function (args, updateId, source) {
			if (source !== this.id) RtcRemoteActions.receiveMessage(args[1]);
		});
	},

	postMessage: function (message) {
		if (mesh) {
			mesh.set(uuid.v4(), message);
		} else {
			console.log('sorry no mesh yet');
		}
	},

	getChannel: function () {
		return channel;
	},

	getConnection: function () {
		return connection;
	},

	getMesh: function () {
		return mesh;
	}
};

module.exports = RtcChannel;