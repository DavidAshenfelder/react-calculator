var React = require('react');

var NumberField = React.createClass({
  style: function() {
    if (this.props.type === "results") {
      return "col-sm-8 col-sm-offset-2"
    } else {
      return "col-sm-5"
    }
  },
  readOnly: function() {
    return this.props.read === "true" ? true : false;
  },
  getInitialState: function() {
    return {value: ""};
  },
  onChange: function(e) {
    this.setState({value: e.target.value})
  },
  render: function() {
    return (
      <div className={this.style()}>
        <input className="form-control" readOnly={this.readOnly()} type="number" onChange={this.onChange} value={this.state.value}/>
      </div>
    );
  }
});

module.exports = NumberField;
