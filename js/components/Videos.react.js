/**
 * @jsx React.DOM
 */

var React = require('react');
var LocalVideo = require('./LocalVideo.react.js');
var RemoteVideos = require('./RemoteVideos.react.js');

var Videos = React.createClass({
	render: function() {
		return (
			<div className="videos">
				Local Video:
				<LocalVideo />

				Remote Videos:
				<RemoteVideos />
			</div>
		);
	}
});

module.exports = Videos;