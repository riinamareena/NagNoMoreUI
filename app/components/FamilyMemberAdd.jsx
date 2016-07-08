var React = require('react');

var FamilyMemberAdd = React.createClass({
  onFormSubmit: function(e){
    var name = this.refs.name.value;
    alert(name);
    this.props.onAddMember(name);
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter name"/>
          </div>
          <div>
            <button>Add member</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = FamilyMemberAdd;
