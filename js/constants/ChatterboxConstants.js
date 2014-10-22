var keyMirror = require('react/lib/keyMirror');

var ChatterboxConstants = {
	ActionTypes: keyMirror({
		SEND_MESSAGE: null,
		RECEIVE_MESSAGE: null
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null
	})
};

module.exports = ChatterboxConstants;