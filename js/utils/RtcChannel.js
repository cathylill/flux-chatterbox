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
		});

		RtcRemoteActions.connected(connection);
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