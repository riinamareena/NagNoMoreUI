var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function(){
    return({
      city: 'Miami',
      temp: 32
    });
  },
  handleSearch: function(city){
    this.setState({
      city: city,
      temp: 17
    });
  },
  render: function(){

    var city = this.state.city;
    var temp = this.state.temp;

    return(
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage city={city} temp={temp} />
      </div>
    );
  }
});

module.exports = Weather;
