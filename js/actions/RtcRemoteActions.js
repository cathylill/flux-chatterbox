var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var RtcChannel = require('../utils/RtcChannel');

var ActionTypes = ChatterboxConstants.ActionTypes;

var RtcRemoteActions = {
	capturedMedia: function (stream) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.CAPTURED_MEDIA,
			stream: stream
		});
	},

	connected: function (room) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.CONNECTED,
			room: room
		});
	},

	createdChannel: function (channel) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.CREATED_CHANNEL,
			channel: channel
		});
	}
};

module.exports = RtcRemoteActions;