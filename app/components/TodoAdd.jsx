var React = require('react');


var DateTimePicker = require('DateTimePicker');




var TodoAdd = React.createClass({
  getInitialState: function(){
    return {
      selectedValueFamilyMember: "default",
      time: undefined,
      showAdditionalProps: false,
      selectedValueCategory: "default",
      priority: undefined
    }
  },
  onFormSubmit: function(e){
    e.preventDefault();

    var todo = this.refs.todo.value;
    var assignee = this.state.selectedValueFamilyMember;
    var time = this.state.time;

    this.props.onAddTodo(todo, assignee);
    this.props.onHideTodoAdd();
  },
  handleSelectFamilyMember: function(event){
    this.setState({
      selectedValueFamilyMember: event.target.value
    })
  },
  handleSelectCategory: function(event){
    this.setState({
      selectedValueCategory: event.target.value
    })
  },
  handleTimeChange: function(time){
    this.setState({
      time: time
    })
  },
  handleShowAdditionalProps: function(){
    this.setState({
      showAdditionalProps: true
    })
  },
  render: function(){

    var familyMembers = this.props.familyMembers;
    var handleSelectFamilyMember = this.handleSelectFamilyMember;
    var selectedValueFamilyMember = this.state.selectedValueFamilyMember;

    var categories = this.props.categories;
    var handleSelectCategory = this.handleSelectCategory;
    var selectedValueCategory = this.state.selectedValueCategory;

    var priorities = [
      { id: 1, title: "Urgent and Important" },
      { id: 2, title: "Urgent but not Important" },
      { id: 3, title: "Important but not Urgent" },
      { id: 4, title: "Neither Important nor Urgent" }
    ];
    var handleSelectPriority = this.handleSelectCategory;
    var selectedValuePriority = this.state.selectedValueCategory;




    var handleTimeChange = this.handleTimeChange;
    var showAdditionalProps = this.state.showAdditionalProps;
    var handleShowAdditionalProps = this.handleShowAdditionalProps;




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
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <input type="text" ref="todo" placeholder="What needs to be done?"/>
          </div>
          <div className="row">

            <select refs="assignee" id="assignee" onChange={handleSelectFamilyMember} value={selectedValueFamilyMember}>
              <option value="default" id="default" onSelect={handleSelectFamilyMember} disabled>Who needs to do it?</option>
              {
                familyMembers.map(function(member) {
                  return (
                    <option value={member.id} key={member.id} onSelect={handleSelectFamilyMember}>{member.name}</option>
                  )
                })
              }
            </select>
          </div>

          {showAdditionalProps ?
            <div>
            <div className="row">
              <label>When it needs to be done?</label>
              <DateTimePicker onChange={handleTimeChange} />
            </div>
            <div className="row">
              <select refs="category" id="category" onChange={handleSelectCategory} value={selectedValueCategory}>
                <option value="default" id="default" onSelect={handleSelectCategory} disabled>Select category</option>
                {
                  categories.map(function(category) {
                    return (
                      <option value={category.id} key={category.id} onSelect={handleSelectCategory}>{category.title}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="row">
              <select refs="priority" id="priority" onChange={handleSelectPriority} value={selectedValuePriority}>
                <option value="default" id="default" onSelect={handleSelectPriority} disabled>Select priority</option>
                {
                  priorities.map(function(priority) {
                    return (
                      <option value={priority.id} key={priority.id} onSelect={handleSelectPriority}>{priority.title}</option>
                    )
                  })
                }
              </select>
            </div>



            <div>
              <button className="expanded round button">Add todo</button>
            </div>
            </div>
          :
          <div>
          <div>
              <label onClick={handleShowAdditionalProps}>Show additional properties</label>
          </div>
          <div>
            <button className="expanded round button">Add todo</button>
          </div>
          </div>
          }



        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;
