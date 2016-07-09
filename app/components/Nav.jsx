var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(){
    alert("Not yet working");
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Nag No More</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check out the tasks</IndexLink>
            </li>
            <li>
              <Link to="family" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>See the family</Link>
            </li>
            <li>
              <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
            <li>
              <Link to="weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get the weather</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search task" />
              </li>
              <li>
                <input type="submit" className="button" value="Find" />
              </li>
            </ul>
          </form>
        </div>

      </div>

    );
  }
});

module.exports = Nav;
