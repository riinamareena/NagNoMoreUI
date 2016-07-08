var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Navigation Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        <Link to="family" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Family</Link>
        <Link to="tasks" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Tasks</Link>
      </div>
    );
  }
});

module.exports = Nav;
