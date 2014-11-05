/**
 * @jsx React.DOM
 */

var React = require('react');
var RtcLocalActions = require('../actions/RtcLocalActions');
var LocalMediaStore = require('../stores/LocalMediaStore');
var RenderVideo = require('./RenderVideo.react');

var LocalVideo = React.createClass({
	getInitialState: function() {
		return {media: null};
	},

	componentDidMount: function () {
		RtcLocalActions.captureMedia();
		LocalMediaStore.addChangeListener(this._onChange);
	},

	render: function() {
		if (!this.state.media) {
			return (
				<div className="local-video">
					Waiting for local video...
				</div>
			);
		} else if (this.state.media) {
			var id = this.state.media.stream.id;

			return (
				<div className="local-video">
					<RenderVideo id={id} />
				</div>
			);
		}
	},

	_onChange: function () {
		this.setState({
			media: LocalMediaStore.getLocalMedia()
		});
	}
});

module.exports = LocalVideo;