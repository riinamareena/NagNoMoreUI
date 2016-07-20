var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoEdit = require('TodoEdit');



var TodoApp = React.createClass({
  getDefaultProps: function(){
    return {
      todoPage: "todoList",
      todoEditid: undefined,
      showTodoAdd: false
    }
  },
  getInitialState: function() {
    return {
      todoPage: this.props.todoPage,
      todoEditid: this.props.todoEditid,
      showTodoAdd: this.props.showTodoAdd,
    }
  },
  findTodo: function(id){
    var todos = this.props.todos;
    var todo = undefined;
    todos.forEach(function(entry) {
      if (entry.id == id){
        todo = entry;
      }
    });
    return todo;
  },
  handleAddTodo: function(text, assignee){
    var todoid = this.props.todoid;
    var todos = this.props.todos;

    todos.push({
      id: todoid,
      text: text,
      assignee: assignee
    });
    todoid += 1;

    this.props.handleChangeTodos(todos);
    this.props.handleChangeTodoid(todoid);

  },
  handleEditTodo: function(id){
    this.setState({
      todoPage: "editTodo",
      todoEditid: id
    })
  },
  handleDeleteTodo: function(id){
    var todos = this.props.todos;
    var filteredTodos = todos.filter(function(item, index){
      if(item.id != id){
        return item;
      }
    });

    this.props.handleChangeTodos(filteredTodos);

  },
  handleSaveEditedTodo: function(id, text, assignee){
    var todos = this.props.todos;

    var editedTodos = todos.map(function(item, index) {
      if (item.id == id){
        item.text = text;
        item.assignee = assignee;
      }
      return item;
    });

    this.props.handleChangeTodos(editedTodos);

    this.setState({
      todoPage: "todoList",
      todoEditid: undefined
    })

  },
  handleShowTodoAdd: function(){
    this.setState({
      showTodoAdd: true
    })
  },
  handleHideTodoAdd: function(){
    this.setState({
      showTodoAdd: false
    })
  },
  renderPage: function(page){

    var handleEditTodo = this.handleEditTodo;
    var handleDeleteTodo = this.handleDeleteTodo;
    var handleAddTodo = this.handleAddTodo;
    var handleSaveEditedTodo = this.handleSaveEditedTodo;

    var handleShowTodoAdd = this.handleShowTodoAdd;
    var handleHideTodoAdd = this.handleHideTodoAdd;

    var showTodoAdd = this.state.showTodoAdd;


    var todos = this.props.todos;
    var familyMembers = this.props.familyMembers;
    var categories = this.props.categories;


    if(page == "editTodo"){

      var todoEditid = this.state.todoEditid;
      var todo = this.findTodo(todoEditid);

      return(
        <div>
          <h1 className="text-center">Edit todo</h1>
          <TodoEdit todo={todo} familyMembers={familyMembers} onSaveEditedTodo={handleSaveEditedTodo} />
        </div>
      )
    } else if (page == "todoList") {
      return(
        <div>
          <h1 className="text-center page-title">To do list</h1>
          <TodoList todos={todos} familyMembers={familyMembers} onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />

          {showTodoAdd ?
          <TodoAdd familyMembers={familyMembers} categories={categories} onAddTodo={handleAddTodo} onHideTodoAdd={handleHideTodoAdd} />
          : <h1 className="text-center" onClick={handleShowTodoAdd}>More to do?</h1> }
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
