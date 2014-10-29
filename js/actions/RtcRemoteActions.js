var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var RtcChannel = require('../utils/RtcChannel');

var ActionTypes = ChatterboxConstants.ActionTypes;

var RtcRemoteActions = {
	capturedMedia: function (media) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.CAPTURED_MEDIA,
			media: media
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
	},

	receiveMessage: function (text) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.RECEIVE_MESSAGE,
			text: text
		});
	},

	gotPeer: function (peer) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.GOT_PEER,
			peer: peer
		});
	},

	lostPeer: function (id) {
		ChatterboxDispatcher.handleRtcRemoteAction({
			type: ActionTypes.LOST_PEER,
			id: id
		});
	}
};

module.exports = RtcRemoteActions;