var React = require('react');

var CategoryList = require('CategoryList');
var CategoryAdd = require('CategoryAdd');

var Category = React.createClass({
  getDefaultProps: function(){
    return{
      categories: [
        { id: 1, name: "work" },
        { id: 2, name: "school"},
        { id: 3, name: "home" }
      ],
      categoryid: 4
    }
  },
  getInitialState: function(){
    return{
      categories: this.props.categories,
      categoryid: this.props.categoryid
    }
  },
  handleDeleteCategory: function(id){
    alert("app deletes category "+id);
  },
  handleSaveEditedCategory: function(id, name){
    alert("app saves edit "+id+" "+name);
  },
  handleSaveNewCategory: function(name){
    var id = this.state.categoryid;
    alert("app saves new "+id+" "+name);
  },
  render: function(){

    var categories = this.state.categories;

    return(
        <div>
          <h1 className="text-center">Categories</h1>
          <CategoryList categories={categories} onDeleteCategory={this.handleDeleteCategory} onSaveEditedCategory={this.handleSaveEditedCategory} />
          <CategoryAdd onSaveNewCategory={this.handleSaveNewCategory} />
        </div>
    );
  }
});

module.exports = Category;
