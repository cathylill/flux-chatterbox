var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _messages = [];
var CHANGE_EVENT = 'change';


var MessageStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getAll: function() {
		return _messages;
	}
});

MessageStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.SEND_MESSAGE:
			var message = action.text;

			_messages.push(message);
			MessageStore.emitChange();
			break;

		case ActionTypes.RECEIVE_MESSAGE:
			break;

		default:
	}
});

module.exports = MessageStore;
