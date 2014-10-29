var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var StreamStore = require('./StreamStore');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _localMedia = {};
var CHANGE_EVENT = 'change';

var LocalMediaStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getLocalMedia: function() {
		return _localMedia;
	}
});

LocalMediaStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.CAPTURED_MEDIA:

			ChatterboxDispatcher.waitFor([StreamStore.dispatchToken]);
			_localMedia = action.media;
			LocalMediaStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = LocalMediaStore;