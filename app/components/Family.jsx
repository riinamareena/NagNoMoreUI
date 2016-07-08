var React = require('react');

var FamilyMemberList = require('FamilyMemberList');
var FamilyMemberAdd = require('FamilyMemberAdd');



var Family = React.createClass({
  getDefaultProps: function(){
    return {
      familyMembers: [
          {
              id: 1,
              name: "Parent-1"
          },
          {
              id:2,
              name: "Child-1"
          },
          {
              id:3,
              name: "Child-2"
          }
      ]
    }
  },
  getInitialState: function(){
    return {
      familyMembers: this.props.familyMembers,
      id: 4
    }
  },
  handleAddMember: function(name){
    var id = this.state.id;
    alert("New "+id+" "+name);
    var familyMembers = this.state.familyMembers;

    familyMembers.push({
      id: id,
      name: name
    });

    var newid = id + 1;

    debugger;

    this.setState({
      familyMembers: familyMembers,
      id: newid
    })

    debugger;

  },
  render: function(){

    var familyMembers = this.state.familyMembers;
    var handleAddMember = this.handleAddMember;

    return(
      <div>
        <h2>Family Component</h2>
        <FamilyMemberList familyMembers={familyMembers} />
        <FamilyMemberAdd  onAddMember={handleAddMember} />
      </div>
    );
  }
});

module.exports = Family;
