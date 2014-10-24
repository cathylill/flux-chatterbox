var quickconnect = require('rtc-quickconnect');
var captureConfig = require('rtc-captureconfig');
var media = require('rtc-media');
var RtcRemoteActions = require('../actions/RtcRemoteActions');
var MessageActions = require('../actions/MessageActions');

var iceServers = [
	{ url: 'stun:stun.l.google.com:19302' }
];
var channel = {};
var connection;

channel.onmessage = function(evt) {
	MessageActions.recieveMessage(evt.data);
};

var RtcChannel = {
	connect: function (room) {
		connection = quickconnect('http://rtc.io/switchboard/', {
			room: room,
			iceServers: iceServers
		});

		RtcRemoteActions.connected(room);
	},

	captureMedia: function () {
		var localMedia = media({
			constraints: captureConfig('camera min:640x480').toConstraints()
		});

		localMedia.once('capture', function(stream) {
			RtcRemoteActions.capturedMedia(stream);
		});
	},

	createChannel: function (name) {
		connection
		.createDataChannel(name)
		.on('channel:opened:' + name, function(id, dc) {
			channel = dc;
			RtcRemoteActions.createdChannel(channel);
		});
	},

	getChannel: function () {
		return channel;
	},

	getConnection: function () {
		return connectionl
	},

	postMessage: function (message) {
		channel.send(message);
	}
};

module.exports = RtcChannel;