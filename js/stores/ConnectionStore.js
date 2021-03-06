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

	getConnection: function() {
		return _connection;
	}
});

ConnectionStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.CONNECTED:

			console.log('connected');
			_connection = action.room;
			ConnectionStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = ConnectionStore;