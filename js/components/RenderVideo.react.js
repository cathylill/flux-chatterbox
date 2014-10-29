/**
 * @jsx React.DOM
 */

var React = require('react');
var StreamStore = require('../stores/StreamStore');

var RenderVideo = React.createClass({
	getInitialState: function() {
		return {stream: StreamStore.getStream(this.props.id)};
	},

	componentDidMount: function () {
		this.state.stream.media.render(this.getDOMNode());
	},

	render: function() {
		return (
			<div className="render-video"></div>
		);
	}
});

module.exports = RenderVideo;