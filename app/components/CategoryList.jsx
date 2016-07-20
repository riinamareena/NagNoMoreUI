var React = require('react');

var CategoryItem = require('CategoryItem');

var CategoryList = React.createClass({
  handleDeleteCategory: function(id){
    this.props.onDeleteCategory(id);
  },
  handleSaveEditedCategory: function(id, title, desc){
    this.props.onSaveEditedCategory(id, title, desc);
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
