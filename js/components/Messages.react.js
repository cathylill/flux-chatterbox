/**
 * @jsx React.DOM
 */

var React = require('react');
var MessageDisplay = require('./MessageDisplay.react');
var MessageStore = require('../stores/MessageStore');
var ConnectionStore = require('../stores/ConnectionStore');
var RtcLocalActions = require('../actions/RtcLocalActions');

function getMessagesState () {
	return {
		messages: MessageStore.getAll()
	}
}

function getMessageDisplay (message) {
	return (
		<MessageDisplay
			message={message}
		/>
	);
}

var Messages = React.createClass({
	getInitialState: function() {
		return getMessagesState();
	},

	// componentWillMount: function () {
	// 	RtcLocalActions.createChannel('trapchat');
	// },

	componentDidMount: function () {
		MessageStore.addChangeListener(this._onChange);
		ConnectionStore.addChangeListener(function () {
			console.log(arguments);
		});
	},

	render: function () {
		var messages = this.state.messages.map(getMessageDisplay);

		return (
			<div className="messages">
				{messages}
			</div>
		);
	},

	_onChange: function () {
		this.setState(getMessagesState());
	}
});

module.exports = Messages;