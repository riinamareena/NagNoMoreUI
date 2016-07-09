var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var Family = require('Family');
var TodoApp = require('TodoApp');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="family" component={Family} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <Route path="weather" component={Weather} />
      <IndexRoute component={TodoApp} />

    </Route>
  </Router>,
  document.getElementById('app')
);
