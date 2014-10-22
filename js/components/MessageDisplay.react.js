/**
 * @jsx React.DOM
 */

var React = require('react');

var ReactPropTypes = React.PropTypes;

var MessageDisplay = React.createClass({
	propTypes: {
		message: ReactPropTypes.string
	},

	render: function() {
		var message = this.props.message;
		return (
			<p>{message}</p>
		);
	}
});

module.exports = MessageDisplay;