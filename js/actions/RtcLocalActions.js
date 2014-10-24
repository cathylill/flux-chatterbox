var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var RtcChannel = require('../utils/RtcChannel');

var ActionTypes = ChatterboxConstants.ActionTypes;

var RtcLocalActions = {
	captureMedia: function (stream) {
		ChatterboxDispatcher.handleRtcLocalAction({
			type: ActionTypes.CAPTURE_MEDIA,
			stream: stream
		});
	},

	connect: function (room) {
		ChatterboxDispatcher.handleRtcLocalAction({
			type: ActionTypes.CONNECT,
			room: room
		});

		RtcChannel.connect(room);
	},

	createChannel: function (channel) {
		ChatterboxDispatcher.handleRtcLocalAction({
			type: ActionTypes.CREATE_CHANNEL,
			channel: channel
		});

		RtcChannel.createChannel(channel);
	}
};

module.exports = RtcLocalActions;