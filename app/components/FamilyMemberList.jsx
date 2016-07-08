var React = require('react');

var FamilyMember = require('FamilyMember');

var FamilyMemberList = React.createClass({
  handleEdit: function(e){
    alert("Edit");
    console.log(e);
  },
  handleDelete: function(id){
    alert("Delete!" +id)
  },
  render: function(){

    var familyMembers = this.props.familyMembers;
    var handleEdit = this.handleEdit;

    var renderEveryMember = function(){
      return familyMembers.map((member) => {
        return(
          <FamilyMember key={member.id} {...member} onEdit={handleEdit} />
        )
      });
    }
    return(
      <div>
        <h2>FamilyMemberList Component</h2>
        {renderEveryMember()}
      </div>
    );
  }
});

module.exports = FamilyMemberList;
