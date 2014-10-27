/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');
var StreamStore = require('../stores/StreamStore');

var LocalVideo = React.createClass({
	componentDidMount: function () {
		RtcLocalActions.captureMedia();
		StreamStore.addChangeListener(function () {
			console.log(StreamStore.getLocalStream());
		});
	},

	render: function() {
		return (
			<div className="local-video">
				Waiting for local video...
			</div>
		);
	}
});

module.exports = LocalVideo;