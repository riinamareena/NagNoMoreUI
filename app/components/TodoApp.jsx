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
      todoid: 3,
      todoPage: "todoList",
      todoEditid: null
    }
  },
  getInitialState: function() {
    return {
      todos: this.props.todos,
      categories: this.props.categories,
      todoid: this.props.todoid,
      todoPage: this.props.todoPage,
      todoEditid: this.props.todoEditid
    }
  },
  findTodo: function(id){
    var todos = this.state.todos;
    var todo = null;
    todos.forEach(function(entry) {
      if (entry.id == id){
        todo = entry;
      }
    });
    return todo;
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
    this.setState({
      todoPage: "editTodo",
      todoEditid: id
    })
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
  handleSaveEditedTodo: function(id, text, assignee){
    var todos = this.state.todos;

    var editedTodos = todos.map(function(item, index) {
      if (item.id == id){
        item.text = text;
        item.assignee = assignee;
      }
      return item;
    });

    this.setState({
      todos : editedTodos,
      todoPage: "todoList",
      todoEditid: null
    })

  },
  renderPage: function(page){

    var handleEditTodo = this.handleEditTodo;
    var handleDeleteTodo = this.handleDeleteTodo;
    var handleAddTodo = this.handleAddTodo;
    var handleSaveEditedTodo = this.handleSaveEditedTodo;

    var todos = this.state.todos;
    var familyMembers = this.props.familyMembers;

    if(page == "editTodo"){

      var todo = this.findTodo(todoEditid);

      return(
        <div>
          <h1 className="text-center">To do</h1>
          <TodoEdit todo={todo} familyMembers={familyMembers} onSaveEditedTodo={handleSaveEditedTodo} />
        </div>
      )
    } else if (page == "todoList") {
      return(
        <div>
          <h1 className="text-center">To do</h1>
          <TodoList todos={todos} familyMembers={familyMembers} onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />
          <TodoAdd familyMembers={familyMembers} onAddTodo={handleAddTodo} />
        </div>
      );
    }

  },
  render: function(){


    var page = this.state.todoPage;

    var content = this.renderPage(page);

    return content;


  }
});

module.exports = TodoApp;
