var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var MessageStore = require('../stores/MessageStore');
var RtcChannel = require('../utils/RtcChannel');

var ActionTypes = ChatterboxConstants.ActionTypes;

var MessageActions = {
	createMessage: function (text) {
		ChatterboxDispatcher.handleViewAction({
			type: ActionTypes.SEND_MESSAGE,
			text: text
		});

		RtcChannel.postMessage(text);
	}
};

module.exports = MessageActions;
