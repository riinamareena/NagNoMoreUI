var React = require('react');

var CategoryAdd = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    var desc = this.refs.desc.value;

    if(name.length > 0){
      this.refs.name.value='';
      this.refs.desc.value='';
      this.props.onSaveNewCategory(name, desc);
    } else {
      this.refs.name.focus();
    }

  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="Enter new category name" />
          <input type="text" ref="desc" placeholder="Enter new category description" />
          <button className="expanded round button">Add category</button>
        </form>

      </div>
    );
  }
});

module.exports = CategoryAdd;
