var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var EventEmitter = require('events').EventEmitter;
var media = require('rtc-media');
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _streams = {};
var CHANGE_EVENT = 'change';

var StreamStore = merge(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getStream: function(id) {
		return _streams[id] || _streams;
	}
});

StreamStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.GOT_PEER:
			console.log('stream store has a peer');
			var peerStreams = action.peer.peer.getRemoteStreams();
			peerStreams.forEach(function (item, index) {
				return (function (it, ind) {
					_streams[it.id] = {
						source: 'remote',
						peerId: action.peer.id,
						media: media(it)
					}
				})(item, index);
			});
			StreamStore.emitChange();
			break;

		case ActionTypes.CAPTURED_MEDIA:
			console.log('stream store has local media');
			_streams[action.media.stream.id] = {
				source: 'local',
				peerId: '0',
				media: action.media
			};
			StreamStore.emitChange();
			break;

		case ActionTypes.LOST_PEER:
			delete _streams[action.id];
			StreamStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = StreamStore;