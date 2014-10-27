/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');
var TypeMessage = require('./TypeMessage.react.js');
var Messages = require('./Messages.react.js');
var Videos = require('./Videos.react.js');

var Chatterbox = React.createClass({
	componentWillMount: function() {
		RtcLocalActions.connect('itsatrap');
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