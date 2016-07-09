var React = require('react');

var FamilyMemberEdit = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var currName = this.refs.currName.value;
    var currRole = this.refs.currRole.value;
    var id = this.refs.id.value;

    var name = this.refs.name.value;
    var roleParent = this.refs.roleParent.checked;
    var roleChild = this.refs.roleChild.checked;
/*
    this.refs.name.value='';
    this.refs.roleParent.checked = false;
    this.refs.roleChild.checked = false;
    */

    var saveName = currName;
    if( typeof(name) === 'string' && name.length > 0){
      saveName = name;
    }

    var saveRole = "child";
    if(roleParent){
      saveRole = "parent";
    }



    this.props.onSaveEditedMember(id, saveName, saveRole);

  },
  render: function(){

    var familyMember = this.props.familyMember;
    var name = familyMember.name;
    var role = familyMember.role;
    var id = familyMember.id;

    var renderContent = "";


    var renderRoleRadio = function(role){
      var renderedRoleRadio = "";

      if(role === "child"){
        renderedRoleRadio =  (
          <div className="row">
            <fieldset>
              <legend>Select role:</legend>
                <label><input type="radio" name="role" ref="roleParent" id="roleParent" />Parent</label>
                <label><input type="radio" name="role" ref="roleChild" id="roleChild" defaultChecked />Child</label>
            </fieldset>
          </div>
        );
      } else {
        renderedRoleRadio = (
          <div className="row">
            <fieldset>
              <legend>Select role:</legend>
                <label><input type="radio" name="role" ref="roleParent" id="roleParent" defaultChecked />Parent</label>
                <label><input type="radio" name="role" ref="roleChild"  id="roleChild" />Child</label>
              </fieldset>
          </div>
        );
      }
      return renderedRoleRadio;
    }

    if(familyMember === null){
      renderContent = (
        <div>
          <h3 className="text-center">Something went wrong</h3>
        </div>
      );
    }
    else {
      renderContent = (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <div>
              <input type="hidden" ref="id" value={id} />
              <input type="hidden" ref="currName" value={name} />
              <input type="hidden" ref="currRole" value={role} />
            </div>
            <div className="row">
              <span className="radius label">Current name: {name}</span>
              <input type="text" ref="name" placeholder="Enter new name"  />
            </div>
            {renderRoleRadio(role)}
            <div>
              <button className="expanded round button">Save</button>
            </div>
          </form>
        </div>
      );
    }

    return (renderContent);
 }

});
module.exports = FamilyMemberEdit;
