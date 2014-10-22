/**
 * @jsx React.DOM
 */

var React = require('react');
var TypeMessage = require('./TypeMessage.react.js');
var Messages = require('./Messages.react.js');
var Videos = require('./Videos.react.js');

var Chatterbox = React.createClass({
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