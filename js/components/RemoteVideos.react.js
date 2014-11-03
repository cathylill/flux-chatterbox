/**
 * @jsx React.DOM
 */

var React = require('react');
var RenderVideo = require('./RenderVideo.react');
var PeerStore = require('../stores/PeerStore');

function getPeersState () {
	var peersObj = PeerStore.getPeers();
	var peerList = [];

	for (var id in peersObj) {
		peerList.push(peersObj[id]);
	}

	return {
		peers: peerList
	};
}

function getRenderVideo (remotePeer) {
	var streams = remotePeer.peer.getRemoteStreams();
	var id = streams[0].id;

	return (
		<div className='single-video'>
			<h3>Peer: {remotePeer.id}</h3>
			<RenderVideo id={id} />
		</div>
	);
}

var RemoteVideos = React.createClass({
	getInitialState: function() {
		return getPeersState();
	},

	componentDidMount: function () {
		PeerStore.addChangeListener(this._onChange);
	},

	render: function () {
		var videos = this.state.peers.map(getRenderVideo);
		return (
			<div className='remote-videos'>
				{videos}
			</div>
		);
	},

	_onChange: function () {
		this.setState(getPeersState());
	}
});

module.exports = RemoteVideos;