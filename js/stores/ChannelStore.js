var ChatterboxDispatcher = require('../dispatcher/ChatterboxDispatcher');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var ActionTypes = ChatterboxConstants.ActionTypes;
var _channels = [];
var CHANGE_EVENT = 'change';

var ChannelStore = merge(EventEmitter.prototype, {
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

ChannelStore.dispatchToken = ChatterboxDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case ActionTypes.CREATED_CHANNEL:

			console.log('channel created');
			_channels.push(action.channel);
			ChannelStore.emitChange();
			break;

		default:
			return;
	}
});

module.exports = ChannelStore;