/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');
var TypeMessage = require('./TypeMessage.react.js');
var Messages = require('./Messages.react.js');
var LocalVideo = require('./LocalVideo.react.js');
var RemoteVideos = require('./RemoteVideos.react.js');

var Chatterbox = React.createClass({
	componentWillMount: function() {
		RtcLocalActions.connect('itsatrap');
	},

	render: function() {
		return (
			<div className="container">
				<div className="everyone">
					<RemoteVideos />
					<Messages />
				</div>
				<div className="me">
					<LocalVideo />
					<TypeMessage />
				</div>
			</div>
		);
	}
});

module.exports = Chatterbox;