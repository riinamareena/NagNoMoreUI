var React = require('react');

var CategoryList = require('CategoryList');
var CategoryAdd = require('CategoryAdd');

var Category = React.createClass({

  getInitialState: function(){
    return{
      categories: this.props.categories,
      categoryid: this.props.categoryid
    }
  },
  handleDeleteCategory: function(id){
    alert("app deletes category "+id);
    var categories = this.state.categories;
    var filteredCats = categories.filter(function(item, index){
      if(item.id != id){
        return item;
      }
    });

    this.setState({
      categories: filteredCats
    })



  },
  handleSaveEditedCategory: function(id, title, desc){
    alert("app saves edit "+id+" "+name+" "+desc);
  },
  handleSaveNewCategory: function(name, desc){
    var id = this.state.categoryid;
    var newCat = this.state.categories;
    newCat.push(
      {
        id: id,
        title: name,
        description: desc
      }
    );

    id += id;
    this.setState({
      categories: newCat,
      categoryid: id
    });


  },
  render: function(){

    var categories = this.state.categories;

    return(
        <div>
          <h1 className="text-center">Categories</h1>
          { categories == [] || categories == null ?
            <h4>Categories make it easier to keep track of your todo items. It is easy to add a category below.</h4>
            : <CategoryList categories={categories} onDeleteCategory={this.handleDeleteCategory} onSaveEditedCategory={this.handleSaveEditedCategory} />
          }
          <CategoryAdd onSaveNewCategory={this.handleSaveNewCategory} />
        </div>
    );
  }
});

module.exports = Category;
