var React = require('react');

var TodoAdd = React.createClass({
  onFormSubmit: function(){
    alert("Gonna save something new to do");
  },
  renderSelectForEveryMember: function(){

    var familyMembers = this.props.familyMembers;
    debugger;
    /*
    var familyMembers = this.props.familyMembers;

    var optionsText = "";

    console.log(familyMembers);

    var options = familyMembers.map(function(item, index){
      var id = item.id;
      var name = item.name;
      var text = "<option id="+id+">"+name+"</option>";
      return text;
    });

    /*familyMembers.forEach(function(entry) {
      options += "<option value="+entry.id+">"+entry.name+"</option>\n";
    });*/


    /*renderedContent += (
          </label>
        </select>
      </div>
    );

    return renderedContent;

    return options;*/
  },
  render: function(){

  var renderSelectForEveryMember = this.renderSelectForEveryMember;

    return(
      <div>
        <h1 className="text-center">More to do?</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <input type="text" ref="name" placeholder="What needs to be done?"/>
          </div>
          <div className="row">
            <label>Who needs to do it?</label>
            <select>
              {renderSelectForEveryMember()}
            </select>
          </div>
          <div>
            <button className="expanded round button">Add member</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;
