/**
 * @jsx React.DOM
 */

var React = require('react');
var TypeMessage = require('../components/TypeMessage.react');
var Messages = require('../components/Messages.react');
var LocalVideo = require('../components/LocalVideo.react');
var RemoteVideos = require('../components/RemoteVideos.react');
var RtcLocalActions = require('../actions/RtcLocalActions');

var Call = React.createClass({
	componentWillMount: function() {
		console.log(this.props);
		RtcLocalActions.connect(this.props.room, this.props.person);
	},

	render: function () {
		return (
			<div className="call">
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

module.exports = Call;