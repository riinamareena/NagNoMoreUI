var React = require('react');

var CategoryItem = React.createClass({
  getInitialState: function(){
    return{
      id: this.props.item.id,
      title: this.props.item.title,
      desc: this.props.item.description,
      edit: false
    }
  },
  handleTitleChange: function(e){
    this.setState({
      title: e.target.value
    })
  },
  handleDescChange: function(e){
    this.setState({
      desc: e.target.value
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
    var title = this.state.title;
    var desc = this.state.desc;

    if(title.length > 0){
      this.props.onSaveEditedCategory(id, title, desc);

      this.setState({
        edit: false
      })
    }
    else{
      alert("Category title is way too short.")
    }

  },
  render: function(){

    var title = this.state.title;
    var desc = this.state.desc;
    var edit = this.state.edit;



    if(edit){
      return(
        <div className="row">
          <form onSubmit={this.handleSave}>
            <input type="text" refs="title" value={title} onChange={this.handleTitleChange} />
            <input type="text" refs="desc" value={desc} onChange={this.handleDescChange} />
            <button className="expanded round button">Save</button>
          </form>
        </div>
      )
    } else {
    return(
      <div>
        <div className="row">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="row">
            <div>
              <label onClick={this.handleEdit}>Edit</label>
              <label onClick={this.handleDelete}>Delete</label>
            </div>
        </div>
      </div>
      );
    }
  }
});

module.exports = CategoryItem;

/*var old = (
  <div>
  <label onClick={this.handleEdit}>Edit</label>
  <label onClick={this.handleDelete}>Delete</label>
  </div>
);*/
