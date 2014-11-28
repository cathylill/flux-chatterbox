/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var TypeMessage = require('../components/TypeMessage.react');
var Messages = require('../components/Messages.react');
var LocalVideo = require('../components/LocalVideo.react');
var RemoteVideos = require('../components/RemoteVideos.react');

var Hello = React.createClass({
	mixins: [ Router.Navigation ],

	getInitialState: function() {
		return {
			name: '',
			room: ''
		};
	},

	render: function () {
		return (
			<div className="hello">
				<div className="me">
					<form onSubmit={this._gotoRoom}>
						<input type="text" ref="name" placeholder="Your name" />
						<input type="text" ref="room" placeholder="Room to join" />
						<input type="submit" value="Go" />
					</form>
				</div>
			</div>
		);
	},

	_gotoRoom: function (event) {
		var nom = this.refs.name.getDOMNode();
		var room = this.refs.room.getDOMNode();

		this.transitionTo('call', { 'room': room.value.trim() });

		event.preventDefault();
	}
});

module.exports = Hello;