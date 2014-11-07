/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var Chatterbox = require('../components/Chatterbox.react');
var Call = require('../components/Call.react');
var Hello = require('../components/Hello.react');

var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
	<Routes>
		<Route handler={Chatterbox}>
			<DefaultRoute handler={Hello} />
			<Route name="call" path="/call/:room" handler={Call} />
		</Route>
	</Routes>
);

module.exports = routes;

//<NotFoundRoute handler={NotFound}/>