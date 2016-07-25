var React = require('react');
var DateTime = require('react-datetime');
var moment = require('moment');


var DateTimePicker = React.createClass({
  getDefaultProps: function(){
    return{
      input: true,
      closeOnBlur: true,
      open: null,
      dateFormat: "D.M.Y",
      timeFormat: "HH.mm"
    }
  },
  handleChange: function(time){
    var value = time._d;
    var momentVal = moment(value);
    this.props.onChange(momentVal);
  },
  render: function(){
    var input = this.props.input;
    var open = this.props.open;
    var closeOnBlur = this.props.closeOnBlur;
    var handleChange = this.handleChange;
    var dateFormat = this.props.dateFormat;
    var timeFormat = this.props.timeFormat;

    return(
      <DateTime  input={input} open={open} closeOnBlur={closeOnBlur} onChange={handleChange} dateFormat={dateFormat} timeFormat={timeFormat} />
    );
  }
});

module.exports = DateTimePicker;
