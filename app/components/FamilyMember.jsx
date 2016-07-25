var React = require('react');

var FamilyMember = React.createClass({
  handleDeleteMember: function(id){
    this.props.onDelete(id);
  },
  handleEditMember: function(id){
    this.props.onEdit(id);
  },
  render: function(){

    var handleEditMember = this.handleEditMember;
    var handleDeleteMember = this.handleDeleteMember;

    var id = this.props.id;
    var name = this.props.username;
    var role = this.props.role;
    var roleText = "";

    if(role == "ROLE_CHILD"){
      roleText = "Child";
    } else if (role == "ROLE_PARENT") {
      roleText = "Parent";
    }


    return(
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{roleText}</td>
        <td><label onClick={handleEditMember.bind(this, id)}>Edit</label><label onClick={handleDeleteMember.bind(this, id)}>Delete</label></td>
      </tr>
    );
  }
});

module.exports = FamilyMember;
