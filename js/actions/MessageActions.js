var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var MessageStore = require('../stores/MessageStore');

var ActionTypes = ChatterboxConstants.ActionTypes;

var MessageActions = {
	createMessage: function (text) {
		ChatterboxDispatcher.handleViewAction({
			type: ActionTypes.SEND_MESSAGE,
			text: text
		});
	}
};

module.exports = MessageActions;
