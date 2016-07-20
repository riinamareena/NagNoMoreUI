var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var About = require('About');
var Family = require('Family');
var TodoApp = require('TodoApp');
var Category = require('Category');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles')




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="family" component={Family} />
      <Route path="category" component={Category} />
      <Route path="about" component={About} />
      <IndexRoute component={TodoApp} />
    </Route>
  </Router>,
  document.getElementById('app')
);
