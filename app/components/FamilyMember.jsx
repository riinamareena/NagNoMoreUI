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
    var name = this.props.name;
    var role = this.props.role;


    return(
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{role}</td>
        <td><label onClick={handleEditMember.bind(this, id)}>Edit</label><label onClick={handleDeleteMember.bind(this, id)}>Delete</label></td>
      </tr>
    );
  }
});

module.exports = FamilyMember;
