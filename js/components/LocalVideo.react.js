/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');
var LocalStreamStore = require('../stores/LocalStreamStore');

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
		var reactClass = this;

		reactClass.state.stream.render(reactClass.getDOMNode());
	},

	render: function() {
		var reactClass = this;

		if (!reactClass.state.stream) {
			return (
				<div className="local-video">
					Waiting for local video...
				</div>
			);
		} else if (reactClass.state.stream) {
			return (
				<div className="local-video"></div>
			);
		}
	}
});

module.exports = LocalVideo;