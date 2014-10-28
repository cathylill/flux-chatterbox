var keyMirror = require('react/lib/keyMirror');

var ChatterboxConstants = {
	ActionTypes: keyMirror({
		CAPTURE_MEDIA: null,
		CAPTURED_MEDIA: null,
		CONNECT: null,
		CONNECTED: null,
		CREATE_CHANNEL: null,
		CREATED_CHANNEL: null,
		SEND_MESSAGE: null,
		RECEIVE_MESSAGE: null,
		GOT_PEER: null,
		LOST_PEER: null
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null,
		RTC_LOCAL_ACTION: null,
		RTC_REMOTE_ACTION: null
	})
};

module.exports = ChatterboxConstants;