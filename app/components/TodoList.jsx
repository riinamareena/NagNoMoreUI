var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    return(
      <div>
        <h2>TodoList Component</h2>
        <Todo />
        <Todo />
      </div>
    );
  }
});

module.exports = TodoList;
