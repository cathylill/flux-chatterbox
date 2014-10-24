var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var RtcChannel = require('../utils/RtcChannel');

var ActionTypes = ChatterboxConstants.ActionTypes;

var RtcActions = {
	captureMedia: function (stream) {
		ChatterboxDispatcher.handleRtcAction({
			type: ActionTypes.CAPTURE_MEDIA,
			stream: stream
		});
	},

	connect: function (room) {
		ChatterboxDispatcher.handleRtcAction({
			type: ActionTypes.CONNECT,
			room: room
		});

		RtcChannel.connect(room);
	},

	createChannel: function (channel) {
		ChatterboxDispatcher.handleRtcAction({
			type: ActionTypes.CREATE_CHANNEL,
			channel: channel
		});
	},
};

module.exports = RtcActions;