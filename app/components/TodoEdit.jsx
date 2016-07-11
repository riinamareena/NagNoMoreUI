var React = require('react');

var TodoEdit = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.todo.text,
      assignee: this.props.todo.assignee
    }
  },
  handleTextChange: function(event){
    this.setState({
      text: event.target.value
    })
  },
  handleAssigneeChange: function(event){
    this.setState({
      assignee: event.target.value
    })
  },
  onFormSubmit: function(e){
    e.preventDefault();

    var id = this.refs.id.value;
    var text = this.state.text;
    var assignee = this.state.assignee;

    if(text.length > 0){
      this.props.onSaveEditedTodo(id, text, assignee);
    } else {
      this.refs.text.focus();
    }
  },
  render: function(){

    var text = this.state.text;
    var assignee = this.state.assignee;

    var familyMembers = this.props.familyMembers;
    var id = this.props.todo.id;

    var renderContent = "";

    renderContent = (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
              <input type="hidden" ref="id" value={id} />
          </div>
          <div className="row">
            <label>What needs to be done?</label>
            <input type="text" ref="text" value={text} onChange={this.handleTextChange} />
          </div>
          <div className="row">
            <label>Who needs to do it?</label>
            <select refs="assignee" id="assignee" onChange={this.handleAssigneeChange} value={assignee}>

              {
                familyMembers.map(function(member) {
                  return (
                    <option value={member.id} key={member.id}>{member.name}</option>
                  )
                })
              }
            </select>
          </div>
            <div>
              <button className="expanded round button">Save</button>
            </div>
          </form>
        </div>
      );

      return (renderContent);

    }



});
module.exports = TodoEdit;
