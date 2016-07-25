var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoEdit = require('TodoEdit');



var TodoApp = React.createClass({
  getDefaultProps: function(){
    return {
      todoPage: "todoList",
      todoEditid: undefined,
      showTodoAdd: false,
      showTodoList: true
    }
  },
  getInitialState: function() {
    return {
      todoPage: this.props.todoPage,
      todoEditid: this.props.todoEditid,
      showTodoAdd: this.props.showTodoAdd,
      showTodoList: this.props.showTodoList
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
  handleAddTodo: function(todo){
    this.props.handleAddTodo(todo);
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
  handleShowTodoList: function(){
    this.setState({
      showTodoList: true
    })
  },
  handleHideTodoList: function(){
    this.setState({
      showTodoList: false
    })
  },
  renderPage: function(page){

    var handleEditTodo = this.handleEditTodo;
    var handleDeleteTodo = this.handleDeleteTodo;
    var handleAddTodo = this.handleAddTodo;
    var handleSaveEditedTodo = this.handleSaveEditedTodo;

    var showTodoAdd = this.state.showTodoAdd;
    var showTodoList = this.state.showTodoList;

    var handleShowTodoAdd = this.handleShowTodoAdd;
    var handleHideTodoAdd = this.handleHideTodoAdd;

    var handleShowTodoList = this.handleShowTodoList;
    var handleHideTodoList = this.handleHideTodoList;

    var todos = this.props.todos;
    var familyMembers = this.props.familyMembers;
    var categories = this.props.categories;
    var family = this.props.family;



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
          {showTodoList ? (
              <div>
                <h1 className="text-center page-title">To do list</h1>
                <TodoList todos={todos} familyMembers={familyMembers} onEditTodo={handleEditTodo} categories={categories} onDeleteTodo={handleDeleteTodo} />
                <h3 className="text-center" onClick={handleHideTodoList}>Click to hide the to do list</h3>
              </div>
            )
          : (
              <div>
                <h3 className="text-center" onClick={handleShowTodoList}>Click to see the to do list</h3>
              </div>
            )
          }
          {showTodoAdd ? (
              <TodoAdd familyMembers={familyMembers} categories={categories} family={family} onAddTodo={handleAddTodo} onHideTodoAdd={handleHideTodoAdd} />
            )
          : (
              <div>
                <h1 className="text-center" onClick={handleShowTodoAdd}>More to do?</h1>
              </div>
            )
          }
        </div>
      );
    } else if ( page == "todoAdd") {
      <TodoAdd familyMembers={familyMembers} categories={categories} family={family} onAddTodo={handleAddTodo} onHideTodoAdd={handleHideTodoAdd} />
    }

  },
  render: function(){

    var page = this.state.todoPage;

    var content = this.renderPage(page);

    return content;

  }
});

module.exports = TodoApp;
