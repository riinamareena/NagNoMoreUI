var React = require('react');


var DateTimePicker = require('DateTimePicker');

var moment = require('moment');




var TodoAdd = React.createClass({
  getInitialState: function(){
    return {
      selectedValueFamilyMember: "default",
      selectedValuePriority: "default",
      selectedValueCategory: "default",
      showAdditionalProps: false,
      time: undefined,
      priority: undefined,
      privacy: false,
      me: 17,
      meObj: {"id":17,"username":"Ville","password":"salasana","enabled":true,"email":"ville@huu.haa","phoneNumber":"123456789","fullName":"Ville Rujo","family":null,"created":null,"credentialsNonExpired":true,"accountNonExpired":true,"accountNonLocked":true,"role":"ROLE_PARENT","authorities":[{"authority":"ROLE_PARENT"}]},
      desc: undefined
    }
  },
  findUser: function(id){
    var familyMembers = this.props.familyMembers;

    var assignee = undefined;
    if(id != null && id != "default"){
      familyMembers.forEach(function(entry) {
        if (entry.id == id){
          assignee = entry;
        }
      });
    }

    return assignee;
  },
  findCategory: function(id){
    var categories = this.props.categories;
    var category = undefined;
    if(id != null && id != "default"){
      categories.forEach(function(entry) {
        if (entry.id == id){
          category = entry;
        }
      });
    }
    return category;
  },
  onFormSubmit: function(e){
    e.preventDefault();
    //id tulee ylempää

    var title = this.refs.title.value;
    var desc = this.state.desc;
    var created = moment.now();
    var due = this.state.time;
    var priority = undefined;
    if(this.state.selectedValuePriority != "default"){
      priority = this.state.selectedValuePriority;
    }
    var privacy = this.state.privacy;
    var alarm = false;
    //var category = this.findCategory(this.state.selectedValueCategory);
    var category = undefined;
    if(this.state.selectedValueCategory != "default"){
      category = this.state.selectedValueCategory;
    }
    var family = this.props.family;
    var creator = this.state.me;
    var assignee = undefined;
    if(this.state.selectedValueFamilyMember != "default"){
      assignee = this.state.selectedValueFamilyMember;
    }
    //var assigneeid = this.state.selectedValueFamilyMember;
    //var assignee = this.findUser(assigneeid);
    var location = undefined;
    var reminder = undefined;
    var status = "NEEDS_ACTION";

    var todo = {
      id: undefined,
      title: title,
      description: desc,
      created: created,
      due: due,
      priority: priority,
      privacy: privacy,
      alarm: alarm,
      categoryId: category,
      familyId: family,
      creatorId: creator,
      assigneeId: assignee,
      location: location,
      reminder: reminder,
      status: status
    };



    this.props.onAddTodo(todo);
    this.props.onHideTodoAdd();
  },
  handleSelectFamilyMember: function(event){
    this.setState({
      selectedValueFamilyMember: event.target.value
    });
  },
  handleSelectCategory: function(event){
    this.setState({
      selectedValueCategory: event.target.value
    });
  },
  handleSelectPriority: function(event){
    this.setState({
      selectedValuePriority: event.target.value
    });
  },
  handleTimeChange: function(time){
    this.setState({
      time: time
    });
  },
  handleShowAdditionalProps: function(){
    this.setState({
      showAdditionalProps: true
    })
  },
  handleClickPrivacy: function(){
    this.setState({
      privacy: !this.state.privacy
    })
  },
  handleDescChange: function(e){
    this.setState({
      desc: e.target.value
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
    var handleSelectPriority = this.handleSelectPriority;
    var selectedValuePriority = this.state.selectedValuePriority;

    var handleTimeChange = this.handleTimeChange;
    var handleDescChange = this.handleDescChange;

    var showAdditionalProps = this.state.showAdditionalProps;
    var handleShowAdditionalProps = this.handleShowAdditionalProps;

    var handleClickPrivacy = this.handleClickPrivacy;

    /*var renderSelectOptions = function(that){

        return familyMembers.map((member) => {
          var refs = "ass"+member.id;
          console.log(refs);
          return(
            <option id={member.id} key={member.id} onSelect={handleSelect}>{member.name}</option>
          )
        });
    }*/

    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <input type="text" ref="title" placeholder="What needs to be done?"/>
          </div>
          <div className="row">
            <select refs="assignee" id="assignee" onChange={handleSelectFamilyMember} value={selectedValueFamilyMember}>
              <option value="default" id="default" onSelect={handleSelectFamilyMember} disabled>Who needs to do it?</option>
              {
                familyMembers.map(function(member) {
                  return (
                    <option value={member.id} key={member.id} onSelect={handleSelectFamilyMember}>{member.username}</option>
                  )
                })
              }
            </select>
          </div>

          {showAdditionalProps ?
            <div>
              <div className="row">
                <label>
                Explain the task further, give some details or just make notes
                <textarea ref="desc" placeholder="If you wish" onChange={handleDescChange} />
                </label>
              </div>
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
              <div className="row">
                <div className="switch">
                  <label>Make this private</label>
                  <input id="privacyCheckboxSwitch" ref="privacyCheckbox" type="checkbox" onClick={handleClickPrivacy}/>
                </div>
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
