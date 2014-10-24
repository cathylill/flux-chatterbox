/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcActions = require('../actions/RtcActions');
var TypeMessage = require('./TypeMessage.react.js');
var Messages = require('./Messages.react.js');
var Videos = require('./Videos.react.js');

var Chatterbox = React.createClass({
	componentDidMount: function() {
		RtcActions.connect('itsatrap');
	},

	render: function() {
		return (
			<div id="box">
				<TypeMessage />
				<Messages />
				<Videos />
			</div>
		);
	}
});

module.exports = Chatterbox;