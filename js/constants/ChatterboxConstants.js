var keyMirror = require('react/lib/keyMirror');

var ChatterboxConstants = {
	ActionTypes: keyMirror({
		CAPTURE_MEDIA: null,
		CONNECT: null,
		CREATE_CHANNEL: null,
		SEND_MESSAGE: null,
		RECEIVE_MESSAGE: null
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null,
		RTC_ACTION: null
	})
};

module.exports = ChatterboxConstants;