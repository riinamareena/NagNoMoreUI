var React = require('react');

var FamilyMember = require('FamilyMember');


var FamilyMemberList = React.createClass({
  handleEdit: function(id){
    this.props.onEditMember(id);
  },
  handleDelete: function(id){
    this.props.onDeleteMember(id);
  },
  render: function(){

    var familyMembers = this.props.familyMembers;
    var handleEdit = this.handleEdit;
    var handleDelete = this.handleDelete;

    var renderEveryMember = function(){
      return familyMembers.map((member) => {
        return(
          <FamilyMember key={member.id} {...member} onEdit={handleEdit} onDelete={handleDelete} />
        )
      });
    }
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderEveryMember()}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = FamilyMemberList;
