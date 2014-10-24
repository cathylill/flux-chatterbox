var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');
var ChatterboxConstants = require('../constants/ChatterboxConstants');
var PayloadSources = ChatterboxConstants.PayloadSources;

var ChatterboxDispatcher = copyProperties(new Dispatcher(), {
	handleServerAction: function(action) {
		var payload = {
			source: PayloadSources.SERVER_ACTION,
			action: action
		};

		this.dispatch(payload);
	},

	handleViewAction: function(action) {
		var payload = {
			source: PayloadSources.VIEW_ACTION,
			action: action
		};

		this.dispatch(payload);
	},

	handleRtcAction: function(action) {
		var payload = {
			source: PayloadSources.RTC_ACTION,
			action: action
		};

		this.dispatch(payload);
	}
});

module.exports = ChatterboxDispatcher;