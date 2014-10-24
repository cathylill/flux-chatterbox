/**
 * @jsx React.DOM
 */

var React = require('react');
var LocalVideo = require('./LocalVideo.react.js');

var Videos = React.createClass({
	render: function() {
		return (
			<div className="videos">
				Local Video:
				<LocalVideo />
			</div>
		);
	}
});

module.exports = Videos;