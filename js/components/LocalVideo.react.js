/**
 * @jsx React.DOM
 */

var React = require('react');
var StreamStore = require('../stores/StreamStore');

var LocalVideo = React.createClass({
	render: function() {
		return (
			<div className="local-video">
				Waiting for local video...
			</div>
		);
	}
});

module.exports = LocalVideo;