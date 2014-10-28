var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _localStream = {};
var CHANGE_EVENT = 'change';

var LocalStreamStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getLocalStream: function() {
		return _localStream;
	}
});

LocalStreamStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.CAPTURED_MEDIA:

			console.log('captured local media');
			_localStream = action.stream;
			LocalStreamStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = LocalStreamStore;