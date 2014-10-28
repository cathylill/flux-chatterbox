var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _remoteStreams = {};
var CHANGE_EVENT = 'change';

var RemoteStreamStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getRemoteStreams: function(id) {
		if (id) return _remoteStreams[id];
		return _remoteStreams;
	}
});

RemoteStreamStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.GOT_PEER:

			console.log('got peer' + action.peer.id);
			_remoteStreams[action.peer.id] = action.peer;
			RemoteStreamStore.emitChange();
			break;

		case ActionTypes.LOST_PEER:

			console.log('lost peer' + id);
			delete _remoteStreams[action.id];
			RemoteStreamStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = RemoteStreamStore;