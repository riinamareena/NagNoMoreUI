var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
  render: function(){
    return(
      <div>
        <h2>TodoApp Component</h2>
        <TodoList />
        <TodoAdd />
      </div>
    );
  }
});

module.exports = TodoApp;
