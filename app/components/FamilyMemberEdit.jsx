var React = require('react');

var FamilyMemberEdit = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var roleParent = this.refs.roleParent.checked;
    var roleChild = this.refs.roleChild.checked;

    if(name.length > 0){
      if(roleParent || roleChild){
        this.refs.name.value='';
        this.refs.roleParent.checked = false;
        this.refs.roleChild.checked = false;
        //this.props.onSaveEditedMember(name, roleParent, roleChild);

      }
      else{
        alert("Select role");
      }
    } else {
      this.refs.name.focus();
    }

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
            <label><input type="radio" name="role" ref="roleParent" id="roleParent" />Parent</label>
            <label><input type="radio" name="role" ref="roleChild" id="roleChild" checked />Child</label>
          </div>
        );
      } else {
        renderedRoleRadio = (
          <div className="row">
            <label><input type="radio" name="role" ref="roleParent" id="roleParent" checked />Parent</label>
            <label><input type="radio" name="role" ref="roleChild"  id="roleChild" />Child</label>
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
            <div className="row">
              <input type="text" ref="name" value={name}/>
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
