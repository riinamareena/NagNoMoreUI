var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  handleEdit: function(id) {
    alert("Edit "+id);
    this.props.onEditTodo(id);
  },
  handleDelete: function(id){
    alert("Delete "+id);
    this.props.onDeleteTodo(id);
  },
  render: function(){

    var todos = this.props.todos;
    var handleEdit = this.handleEdit;
    var handleDelete = this.handleDelete;

    var renderEveryTodo = function(){
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} onEdit={handleEdit} onDelete={handleDelete} />
        )
      });
    }

    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Assignee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderEveryTodo()}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TodoList;
