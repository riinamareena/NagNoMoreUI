var React = require('react');

var Todo = React.createClass({
  handleDeleteTodo: function(id){
    this.props.onDelete(id);
  },
  handleEditTodo: function(id){
    this.props.onEdit(id);
  },
  render: function(){

    var handleEditTodo = this.handleEditTodo;
    var handleDeleteTodo = this.handleDeleteTodo;

    var id = this.props.id;
    var text = this.props.text;
    var assignee = this.props.assignee;


    return(
      <tr>
        <td>{id}</td>
        <td>{text}</td>
        <td>{assignee}</td>
        <td><label onClick={handleEditTodo.bind(this, id)}>Edit</label><label onClick={handleDeleteTodo.bind(this, id)}>Delete</label></td>
      </tr>
    );
  }
});

module.exports = Todo;
