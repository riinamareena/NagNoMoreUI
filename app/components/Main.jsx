var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
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
              name: "Joona",
              role: "child"
          }
      ]
    }
  },
  getInitialState: function(){
    return{
      familyMembers: this.props.familyMembers
    }
  },
  render: function(){

    var familyMembers = this.state.familyMembers;
    debugger;

    var childrenWithProps = React.Children.map(this.props.children, function(child){
      return React.cloneElement(child, {
        familyMembers: {familyMembers}
      })
    });

    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {childrenWithProps}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
