/**
 * @jsx React.DOM
 */

var React = require('react');

var Chatterbox = React.createClass({
	render: function() {
		return (
			<div className="container">
				{this.props.activeRouteHandler() || <h1>No route loaded</h1>}
			</div>
		);
	}
});

module.exports = Chatterbox;