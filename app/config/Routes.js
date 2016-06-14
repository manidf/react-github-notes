var React = require('react');
var ReactDom = require('react-dom');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
	<Route path="/" component={Main}>
		<IndexRoute component={home} />
 	</Route>
);
