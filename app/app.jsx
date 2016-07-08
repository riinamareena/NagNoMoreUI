var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var Family = require('Family');
var TodoApp = require('TodoApp');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <Route path="family" component={Family} />
      <Route path="tasks" component={TodoApp} />
      <IndexRoute component={Weather} />

    </Route>
  </Router>,
  document.getElementById('app')
);
