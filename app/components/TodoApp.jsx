var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
  getDefaultProps: function(){
    return {
      todos: [
        {
            id: 1,
            text: "Ota antihistamiini",
            assignee: "Child-2"
        },
        {
            id: 2,
            text: "Laita ruokaa",
            assignee: "Child-1"
        }
      ],
      categories: [
        "work",
        "school",
        "home"
      ]
    }
  },
  getInitialState: function() {
    return {
      todos: this.props.todos,
      categories: this.props.categories,
    }
  },
  handleEditTodo: function(id){
    alert("App handles edit "+id);
  },
  handleDeleteTodo: function(id){
    alert("App handles delete "+id);
  },
  render: function(){

    var handleEditTodo = this.handleEditTodo;
    var handleDeleteTodo = this.handleDeleteTodo;
    var todos = this.state.todos;
    var familyMembers = this.props.familyMembers;

    debugger;

    return(
      <div>
        <h1 className="text-center">To do</h1>
        <TodoList todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />
        <TodoAdd familyMembers={familyMembers} />
      </div>
    );
  }
});

module.exports = TodoApp;
