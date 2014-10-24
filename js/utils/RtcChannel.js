var quickconnect = require('rtc-quickconnect');
var captureConfig = require('rtc-captureconfig');
var media = require('rtc-media');
var RtcActions = require('../actions/RtcActions');
var MessageActions = require('../actions/MessageActions');

var room = location.pathname.replace(reRoomName, '$1').replace('/', '');
var iceServers = [
	{ url: 'stun:stun.l.google.com:19302' }
];
var channel = {};
var connection;

channel.onmessage = function(evt) {
	MessageActions.recieveMessage(evt.data);
};

var RtcChannel = {
	connect: function () {
		connection = quickconnect(location.href + '../../', {
			room: room,
			iceServers: iceServers
		});

		RtcActions.connect(room);
	},

	captureMedia: function () {
		var localMedia = media({
			constraints: captureConfig('camera min:640x480').toConstraints()
		});

		localMedia.once('capture', function(stream) {
			RtcActions.captureMedia(stream);
		});
	},

	createChannel: function (name) {
		connection
		.createDataChannel(name)
		.on('channel:opened:' + name, function(id, dc) {
			channel = dc;
			RtcActions.createChannel(channel);
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