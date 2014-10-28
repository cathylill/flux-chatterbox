var quickconnect = require('rtc-quickconnect');
var captureConfig = require('rtc-captureconfig');
var media = require('rtc-media');
var RtcRemoteActions = require('../actions/RtcRemoteActions');

var iceServers = [
	{ url: 'stun:stun.l.google.com:19302' }
];
var channel = {};
var connection;

var RtcChannel = {
	connect: function (room) {
		connection = quickconnect('http://rtc.io/switchboard/', {
			room: room,
			iceServers: iceServers,
			reactive: true
		})
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
		var localMedia = media({
			constraints: captureConfig('camera min:640x480').toConstraints()
		});

		localMedia.once('capture', function(stream) {
			RtcRemoteActions.capturedMedia(localMedia);
			connection.addStream(stream);
		});
	},

	createChannel: function (name) {
		connection
		.createDataChannel(name)
		.on('channel:opened:' + name, function(id, dc) {
			channel = dc;
			RtcRemoteActions.createdChannel(channel);

			channel.onmessage = function(evt) {
				RtcRemoteActions.receiveMessage(evt.data);
			};
		});
	},

	getChannel: function () {
		return channel;
	},

	getConnection: function () {
		return connection;
	},

	postMessage: function (message) {
		channel.send(message);
	}
};

module.exports = RtcChannel;