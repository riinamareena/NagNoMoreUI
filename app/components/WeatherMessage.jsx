var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var city = this.props.city;
    var temp = this.props.temp;
    return (
      <div>
        <h4>It's {temp} in {city}</h4>
      </div>
    );
  }
});

module.exports = WeatherMessage;
