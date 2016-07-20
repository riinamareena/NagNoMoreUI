var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
  getDefaultProps: function(){
    return {
      testArray:[
        { id: 1, name: "Anna"},
        { id: 2, name: "Riina"}
      ],
      testValue: 888,
      testFunction: function(){
        alert("Meitsi on kingi!");
      },
      todos: [
        { id: 1, text: "Ota antihistamiini", assignee: 2 },
        { id: 2, text: "Laita ruokaa", assignee: 3 }
      ],
      todoid: 3,
      categories:  [
          { id: 1,  title: "Harrastukset",  description: "Kategoria harrastusluonteiselle toiminnalle."},
          { id: 2,  title: "Lääkkeet",  description: "Kategoria muistutuksille lääkkeenottoajoista."},
          { id: 3,  title: "Kotityöt",  description: "Kategoria kotitöille."},
          { id: 4,  title: "Työ",  description: "Kategoria työasioille."},
          { id: 5,  title: "Koulu",  description: "Kategoria kouluun liittyville asioille."},
          { id: 6,  title: "Talo",  description: "Kategoria taloon liittyville asioille."}
      ],
      categoryid: 7,
      familyMembers : [
        { id: 1, name: "Matti", role: "parent" },
        { id:2, name: "Liisa", role: "child" },
        { id:3, name: "Maija", role: "parent" },
        { id:4, name: "Henna", role: "child" },
        { id:5, name: "Joona", role: "child" }
      ],
      id: 6
    }
  },
  getInitialState: function(){
    return{
      testArray: this.props.testArray,
      testValue: this.props.testValue,
      testFunction: this.props.testFunction,
      todos: this.props.todos,
      todoid: this.props.todoid,
      categories: this.props.categories,
      categoryid: this.props.categoryid,
      familyMembers: this.props.familyMembers,
      id: this.props.id
    }
  },
  handleChangeTestValue: function(value){
    alert(this.state.testValue);
    debugger;
    this.setState({
      testValue: value
    });
    debugger;
    alert(this.state.testValue);
    debugger;

  },
  handleChangeTodos(todos){
    this.setState({
      todos: todos
    })
  },
  handleChangeTodoid(todoid){
    this.setState({
      todoid: todoid
    })
  },
  handleChangeCategories(categories){
    this.setState({
      categories: categories
    })
  },
  handleChangeCategoryid(categoryid){
    this.setState({
      categoryid: categoryid
    })
  },
  handleChangeFamilyMembers(familyMembers){
    this.setState({
      familyMembers: familyMembers
    })
  },
  handleChangeId(id){
    this.setState({
      id: id
    })
  },
  render: function(){



    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        testArray: this.state.testArray,
        testValue: this.state.testValue,
        testFunction: this.state.testFunction,
        onChangeTestValue: this.handleChangeTestValue,
        todos: this.state.todos,
        todoid: this.state.todoid,
        categories: this.state.categories,
        categoryid: this.state.categoryid,
        familyMembers: this.state.familyMembers,
        id: this.props.id,
        handleChangeTodos: this.handleChangeTodos,
        handleChangeTodoid: this.handleChangeTodoid,
        handleChangeCategories: this.handleChangeCategories,
        handleChangeCategoryid: this.handleChangeCategoryid,
        handleChangeFamilyMembers: this.handleChangeFamilyMembers,
        handleChangeId: this.handleChangeId,
      })
    );

    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {childrenWithProps}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
