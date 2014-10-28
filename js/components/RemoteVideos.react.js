/**
 * @jsx React.DOM
 */

var React = require('react');
var RemoteStreamStore = require('../stores/RemoteStreamStore');

function getRemoteStreamsState () {
	return {
		streams: RemoteStreamStore.getRemoteStreams()
	}
}

function getPeerVideo (id) {
	return (
		<PeerVideo
			id={id}
		/>
	);
}

var RemoteVideos = React.createClass({
	getInitialState: function() {
		return {streams: null};
	},

	componentDidMount: function () {
		var reactClass = this;

		RemoteStreamStore.addChangeListener(function () {
			reactClass.setState(getRemoteStreams());
		});
	},

	render: function() {
		var reactClass = this;

		if (!reactClass.state.streams) {
			return (
				<div className="remote-videos">
					Waiting for remote videos...
				</div>
			);
		} else if (reactClass.state.streams) {
			var streams = this.state.streams.map(getMessageDisplay);
			return (
				<div className="remote-videos">
					{streams}
				</div>
			);
		}
	}
});

module.exports = RemoteVideos;