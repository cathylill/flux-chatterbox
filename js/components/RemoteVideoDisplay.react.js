/**
 * @jsx React.DOM
 */

var React = require('react');
var RemoteStreamStore = require('../stores/RemoteStreamStore');

var ReactPropTypes = React.PropTypes;

var RemoteVideoDisplay = React.createClass({
	propTypes: {
		message: ReactPropTypes.string
	},

	getInitialState: function() {
		return {
			stream: RemoteStreamStore.getRemoteStream(this.props.id)
		};
	},

	componentWillMount: function () {
		this.state.stream.render(reactClass.getDOMNode());
	},

	componentDidUpdate: function () {
		this.state.streams.peer.getRemoteStreams().forEach(function () {
			console.log(arguments);
		});
	},

	render: function() {
		var id = this.props.message;
		return (
			<div className='remote-video' id={id}></div>
		);
	}
});

module.exports = RemoteVideoDisplay;