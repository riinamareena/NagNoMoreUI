var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  findAssignee: function(id){
    var familyMembers = this.props.familyMembers;

    var assigneeName = "";
      familyMembers.forEach(function(entry) {
        if (entry.id == id){
          assigneeName = entry.name;
        }
      });
      return assigneeName;

  },
  handleEdit: function(id) {
    this.props.onEditTodo(id);
  },
  handleDelete: function(id){
    this.props.onDeleteTodo(id);
  },
  render: function(){

    var todos = this.props.todos;
    var handleEdit = this.handleEdit;
    var handleDelete = this.handleDelete;
    var findAssignee = this.findAssignee;

    var renderEveryTodo = function(){




      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} onEdit={handleEdit} onDelete={handleDelete} onSearchAssignee={findAssignee} />
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
            {todos.map((todo) => {
              return(
                <Todo key={todo.id} {...todo} onEdit={handleEdit} onDelete={handleDelete} onSearchAssignee={findAssignee} />
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TodoList;
