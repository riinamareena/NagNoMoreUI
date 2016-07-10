var React = require('react');

var FamilyMemberList = require('FamilyMemberList');
var FamilyMemberAdd = require('FamilyMemberAdd');
var FamilyMemberEdit = require('FamilyMemberEdit');



var Family = React.createClass({
  getDefaultProps: function(){
    return {
      familyMembers: [
          {
              id: 1,
              name: "Matti",
              role: "parent"
          },
          {
              id:2,
              name: "Liisa",
              role: "child"
          },
          {
              id:3,
              name: "Maija",
              role: "parent"
          },
          {
              id:4,
              name: "Henna",
              role: "child"
          },
          {
              id:5,
              name: "Jonna",
              role: "child"
          }
      ],
      familyPage : "list",
      id : 6,
      editid : null
    }
  },
  getInitialState: function(){
    return {
      familyMembers: this.props.familyMembers,
      id: this.props.id,
      familyPage: this.props.familyPage,
      editid : this.props.editid
    }
  },
  handleAddMember: function(name, roleParent, roleChild){
    var role = "child";
    if(roleParent){
      role = "parent";
    }
    var id = this.state.id;

    var familyMembers = this.state.familyMembers;

    familyMembers.push({
      id: id,
      name: name,
      role: role
    });

    var newid = id + 1;

    this.setState({
      familyMembers: familyMembers,
      id: newid
    })


  },
  findFamilyMember: function(id){
    var familyMembers = this.state.familyMembers;
    var familyMember = null;
    familyMembers.forEach(function(entry) {
      if (entry.id === id){
        familyMember = entry;
      }
    });
    return familyMember;

  },
  handleDeleteMember: function(id){
    var familyMembers = this.state.familyMembers;
    var filteredFamilyMembers = familyMembers.filter(function(item, index){
      if(item.id != id){
        return item;
      }
    });

    this.setState({
      familyMembers: filteredFamilyMembers
    })

  },
  handleEditMember: function(id){
    this.setState({
          familyPage: "editMember",
          editid: id
    });
  },
  handleSaveEditedMember: function(id, name, role){
    var familyMembers = this.state.familyMembers;

    var editedFamilyMembers = familyMembers.map(function(item, index) {
      if (item.id == id){
        item.name = name;
        item.role = role;
      }
      return item;
    });

    this.setState({
      familyMembers : editedFamilyMembers,
      familyPage: "list",
      editid: null
    })

  },
  render: function(){

    var familyMembers = this.state.familyMembers;
    var handleAddMember = this.handleAddMember;
    var handleDeleteMember = this.handleDeleteMember;
    var handleEditMember = this.handleEditMember;
    var handleSaveEditedMember = this.handleSaveEditedMember;
    var findFamilyMember = this.findFamilyMember;

    var page = this.state.familyPage;
    var editid = this.state.editid;



    var renderFamilyPage = function(page){
      var renderContent = "";
      if (page === "list"){
        renderContent = (
          <div>
            <h1 className="text-center">Family</h1>
            <FamilyMemberList familyMembers={familyMembers} onEditMember={handleEditMember} onDeleteMember={handleDeleteMember} />
            <FamilyMemberAdd  onAddMember={handleAddMember} />
          </div>
        );
      } else if (page === "editMember") {

        // Go get data with the id
        var familyMember = findFamilyMember(editid);

        renderContent = (
          <div>
            <h1 className="text-center">Family Member Edit</h1>
            <FamilyMemberEdit familyMember={familyMember} onSaveEditedMember={handleSaveEditedMember} />
          </div>

        );
      }
      else {
        renderContent = (
          <div>
            <h1>Noniin.</h1>
          </div>
        );
      }
      return renderContent;
    }

    return renderFamilyPage(page);

  }
});

module.exports = Family;
