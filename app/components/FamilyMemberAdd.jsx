var React = require('react');
var ErrorModal = require('ErrorModal');

var FamilyMemberAdd = React.createClass({
  getInitialState: function(){
    return({
      errorMessage: undefined
    })
  },
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
        this.props.onAddMember(name, roleParent, roleChild);

      }
      else{
        alert("Select role");
      }
    } else {
      this.refs.name.focus();
    }

  },
  render: function(){

    var errorMessage = this.state.errorMessage;



    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <input type="text" ref="name" placeholder="Enter name"/>
          </div>
          <div className="row">
            <label>Family member role</label>
            <label><input type="radio" name="role" ref="roleParent" value="parent" id="roleParent" />Parent</label>
            <label><input type="radio" name="role" ref="roleChild" value="child" id="roleChild" />Child</label>
          </div>
          <div>
            <button className="expanded round button">Add member</button>
          </div>
        </form>

      </div>
    );
  }
});

module.exports = FamilyMemberAdd;
