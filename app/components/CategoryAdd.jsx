var React = require('react');

var CategoryAdd = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;

    if(name.length > 0){
      this.refs.name.value='';
      this.props.onSaveNewCategory(name);
    } else {
      this.refs.name.focus();
    }

  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" refs="name" placeholder="Enter new category name" />
          <button className="expanded round button">Add category</button>
        </form>

      </div>
    );
  }
});

module.exports = CategoryAdd;
