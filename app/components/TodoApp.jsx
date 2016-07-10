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
            assignee: 2
        },
        {
            id: 2,
            text: "Laita ruokaa",
            assignee: 3
        }
      ],
      categories: [
        "work",
        "school",
        "home"
      ],
      familyMembers :[
        {
            id: 1,
            name: "Matti",
            role: "parent"
        },
        {
            id:2,
            name: "Liisa",
            role: "child"
        },
        {
            id:3,
            name: "Maija",
            role: "parent"
        },
        {
            id:4,
            name: "Henna",
            role: "child"
        },
        {
            id:5,
            name: "Joona",
            role: "child"
        }
      ],
      todoid: 3
    }
  },
  getInitialState: function() {
    return {
      todos: this.props.todos,
      categories: this.props.categories,
      todoid: this.props.todoid
    }
  },
  handleAddTodo: function(text, assignee){
    var todoid = this.state.todoid;
    var todos = this.state.todos;

    todos.push({
      id: todoid,
      text: text,
      assignee: assignee
    });
    todoid += 1;

    this.setState({
      todoid: todoid,
      todos: todos
    });


  },
  handleEditTodo: function(id){
    alert("App handles edit "+id);
  },
  handleDeleteTodo: function(id){

    alert("App handles delete "+id);

    var todos = this.state.todos;
    var filteredTodos = todos.filter(function(item, index){
      if(item.id != id){
        return item;
      }
    });

    this.setState({
      todos: filteredTodos
    })

  },
  render: function(){

    var handleEditTodo = this.handleEditTodo;
    var handleDeleteTodo = this.handleDeleteTodo;
    var handleAddTodo = this.handleAddTodo;
    var todos = this.state.todos;
    var familyMembers = this.props.familyMembers;


    return(
      <div>
        <h1 className="text-center">To do</h1>
        <TodoList todos={todos} familyMembers={familyMembers} onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />
        <TodoAdd familyMembers={familyMembers} onAddTodo={handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
