var React = require('react');


var TodoAdd = React.createClass({
  getInitialState: function(){
    return {
      selectedValue: "default"
    }
  },
  onFormSubmit: function(e){
    e.preventDefault();

    var todo = this.refs.todo.value;
    var assignee = this.state.selectedValue;

    this.props.onAddTodo(todo, assignee);
  },
  handleSelect: function(event){
    this.setState({
      selectedValue: event.target.value
    })
  },
  render: function(){

    var familyMembers = this.props.familyMembers;
    var handleSelect = this.handleSelect;
    var selectedValue = this.state.selectedValue;


    var renderSelectOptions = function(that){

        return familyMembers.map((member) => {
          var refs = "ass"+member.id;
          console.log(refs);
          return(
            <option id={member.id} key={member.id} onSelect={handleSelect}>{member.name}</option>
          )
        });
    }



    return(
      <div>
        <h1 className="text-center">More to do?</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <input type="text" ref="todo" placeholder="What needs to be done?"/>
          </div>
          <div className="row">

            <select refs="assignee" id="assignee" onChange={handleSelect} value={selectedValue}>
              <option value="default" id="default" onSelect={handleSelect} disabled>Who needs to do it?</option>
              {
                familyMembers.map(function(member) {
                  return (
                    <option value={member.id} key={member.id} onSelect={handleSelect}>{member.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <button className="expanded round button">Add todo</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;
