var React = require('react');

var CategoryItem = React.createClass({
  getInitialState: function(){
    return{
      id: this.props.item.id,
      name: this.props.item.name,
      edit: false
    }
  },
  handleChange: function(e){
    this.setState({
      name: e.target.value
    })
  },
  handleEdit: function(){
    this.setState({
      edit: true
    })
  },
  handleDelete: function(e){
    e.preventDefault();
    var id = this.state.id;
    this.props.onDeleteCategory(id);

  },
  handleSave: function(e){
    e.preventDefault();
    var id = this.state.id;
    var name = this.state.name;

    if(name.length > 0){
      this.props.onSaveEditedCategory(id, name);

      this.setState({
        edit: false
      })
    }
    else{
      alert("Category name is way too short.")
    }

  },
  render: function(){

    var name = this.state.name;
    var edit = this.state.edit;


    console.log(name);
    console.log(edit);



    if(edit){
      return(
        <div>
          <form onSubmit={this.handleSave}>
            <input type="text" refs="name" value={name} onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
    return(
        <div>
          <h3>{name}</h3>
          <label onClick={this.handleEdit}>Edit</label>
          <label onClick={this.handleDelete}>Delete</label>
        </div>
      );
    }
  }
});

module.exports = CategoryItem;
