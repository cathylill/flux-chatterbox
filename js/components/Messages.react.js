/**
 * @jsx React.DOM
 */

var React = require('react');
var MessageDisplay = require('./MessageDisplay.react');
var MessageStore = require('../stores/MessageStore');

function getMessagesState () {
	return {
		messages: MessageStore.getAll()
	}
}

function getMessageDisplay(message) {
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

	componentDidMount: function() {
		MessageStore.addChangeListener(this._onChange);
	},

	render: function() {
		var messages = this.state.messages.map(getMessageDisplay);

		return (
			<div className="messages">
				{messages}
			</div>
		);
	},

	_onChange: function() {
		this.setState(getMessagesState());
	}
});

module.exports = Messages;