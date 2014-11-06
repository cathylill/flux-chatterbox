/**
 * @jsx React.DOM
 */

var React = require('react');
var MessageActions = require('../actions/MessageActions');

var ENTER_KEY_CODE = 13;

var TypeMessage = React.createClass({

	getInitialState: function() {
		return {text: ''};
	},

	render: function() {
		return (
			<div className="type-message">
				<textarea
					name="message"
					placeholder="Type a message..."
					value={this.state.text}
					onChange={this._onChange}
					onKeyDown={this._onKeyDown}
				></textarea>
			</div>
		);
	},

	_onChange: function (event, value) {
		this.setState({text: event.target.value});
	},

	_onKeyDown: function (event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			var text = this.state.text.trim();

			if (text) MessageActions.createMessage(text);

			this.setState({text: ''});
			event.preventDefault();
    	}
	}
});

module.exports = TypeMessage;