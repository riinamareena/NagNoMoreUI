var React = require('react');
var moment = require('moment');

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
    var title = this.props.title;
    var assignee = this.props.assignee;
    var username = this.props.assignee.username;
    var due = moment(this.props.due).format("D.M.YYYY H:mm");
    var categoryTitle = this.props.category.title;


    return(
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{username}</td>
        <td>{due}</td>
        <td><label onClick={handleEditTodo.bind(this, id)}>Edit</label><label onClick={handleDeleteTodo.bind(this, id)}>Delete</label></td>
      </tr>
    );
  }
});

module.exports = Todo;
