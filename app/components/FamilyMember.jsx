var React = require('react');

var FamilyMember = React.createClass({
  render: function(){
    return(
      <div>
        <h2>FamilyMember Component</h2>
        <p>id: {this.props.id}</p>
        <p>name: {this.props.name}</p>
        <p onClick={this.props.onEdit}>Edit</p>

      </div>
    );
  }
});

module.exports = FamilyMember;
