/**
 * @jsx React.DOM
 */

var React = require('react');
var Chatterbox = require('./components/Chatterbox.react');

window.React = React; // export for http://fb.me/react-devtools

React.renderComponent(<Chatterbox />, document.getElementById('chatterbox'));