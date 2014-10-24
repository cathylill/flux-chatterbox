var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _connection = {};
var CHANGE_EVENT = 'change';

var ConnectionStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	get: function() {
		return _connection;
	}
});

ConnectionStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.CONNECTED:

			_connection = action.connection;
			ConnectionStore.emitChange();
			break;

		case ActionTypes.CREATED_CHANNEL:
			ConnectionStore.emitChange();
			break;

		default:
	}
});

module.exports = ConnectionStore;