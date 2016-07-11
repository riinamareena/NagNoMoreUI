var React = require('react');

var CategoryItem = require('CategoryItem');

var CategoryList = React.createClass({
  handleDeleteCategory: function(id){
    this.props.onDeleteCategory(id);
  },
  handleSaveEditedCategory: function(id, name){
    this.props.onSaveEditedCategory(id, name);
  },
  render: function(){
    var categories = this.props.categories;

    var handleSaveEditedCategory = this.handleSaveEditedCategory;
    var handleDeleteCategory = this.handleDeleteCategory;

    return(
      <div>
        {
          categories.map(function(entry){
            return(
              <CategoryItem key={entry.id} item={entry} onSaveEditedCategory={handleSaveEditedCategory} onDeleteCategory={handleDeleteCategory} />
            )
          })

        }
      </div>
    );
  }
});

module.exports = CategoryList;
