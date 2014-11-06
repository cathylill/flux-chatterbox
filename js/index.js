/**
 * @jsx React.DOM
 */

var React = require('react');
var routes = require('./routes/ChatterboxRoutes');

window.React = React; // export for http://fb.me/react-devtools

React.render(routes, document.getElementById('chatterbox'));