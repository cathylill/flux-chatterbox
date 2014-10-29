var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var StreamStore = require('./StreamStore');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _peers = {};
var CHANGE_EVENT = 'change';

var PeerStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getPeers: function(id) {
		if (id) return _peers[id];
		return _peers;
	}
});

PeerStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.GOT_PEER:

			console.log('got peer: ' + action.peer.id);
			ChatterboxDispatcher.waitFor([StreamStore.dispatchToken]);
			_peers[action.peer.id] = action.peer;
			PeerStore.emitChange();
			break;

		case ActionTypes.LOST_PEER:

			console.log('lost peer: ' + id);
			ChatterboxDispatcher.waitFor([StreamStore.dispatchToken]);
			delete _peers[action.id];
			PeerStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = PeerStore;