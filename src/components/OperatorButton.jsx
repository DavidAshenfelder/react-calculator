var React = require('react');

var OperatorButton = React.createClass({
  width: function() {
    if (this.props.operator === "=" || this.props.operator === "Clear") {
      return "col-sm-6 center-text"
    } else {
      return "col-sm-3 center-text"
    }
  },
  style: function() {
    if (this.props.operator === "=") {
      return "btn btn-success col-sm-12"
    } else if (this.props.operator === "Clear") {
      return "btn btn-danger col-sm-12"
    } else {
      return "btn btn-primary col-sm-12"
    }
  },
  onClick: function() {
    this.props.onClick(this.props.operator);
  },
  render: function() {
    return (
      <div className={this.width()}>
        <button className={this.style()} onClick={this.onClick}>{this.props.operator}</button>
      </div>
    )
  }
});

module.exports = OperatorButton;
