/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');
var LocalStreamStore = require('../stores/LocalStreamStore');
var RemoteStreamStore = require('../stores/RemoteStreamStore');

var source;

function getSource (propSource) {
	source = (propSource === 'local') ? LocalStreamStore : RemoteStreamStore;
};

var LocalVideo = React.createClass({
	getInitialState: function() {
		return {stream: null};
	},

	componentDidMount: function () {
		var reactClass = this;

		RtcLocalActions.captureMedia();
		LocalStreamStore.addChangeListener(function () {
			reactClass.setState({
				stream: LocalStreamStore.getLocalStream()
			});
		});
	},

	componentDidUpdate: function () {
		this.state.stream.render(reactClass.getDOMNode());
	},

	render: function() {
		return (
			<div className="render-video"></div>
		);
	}
});

module.exports = LocalVideo;