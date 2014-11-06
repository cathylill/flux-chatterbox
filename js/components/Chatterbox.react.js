/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');

var Chatterbox = React.createClass({
	componentWillMount: function() {
		RtcLocalActions.connect('itsatrap');
	},

	render: function() {
		return (
			<div className="container">
				{this.props.activeRouteHandler() || <h1>No route loaded</h1>}
			</div>
		);
	}
});

module.exports = Chatterbox;