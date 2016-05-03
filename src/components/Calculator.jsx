var React = require('react');
var NumberField = require('./NumberField.jsx');
var OperatorButton = require('./OperatorButton.jsx');


var Calculator = React.createClass({
  getInitialState: function() {
    return {operator: ""}
  },
  clear: function() {
    this.refs.NumberField1.state.value = "";
    this.refs.NumberField2.state.value = "";
    this.refs.ResultField.state.value = "";
    this.setState({operator: ""});
  },
  selectOperator: function(operator) {
    if (operator !== "=") {
      this.setState({operator: operator});
    }
  },
  calculate: function(operator) {
    var result = eval(this.refs.NumberField1.state.value + this.state.operator + this.refs.NumberField2.state.value);
    console.log(result);
    this.refs.ResultField.state.value = result;
    this.setState({operator: this.state.operator});
  },
  render: function() {
    return (
      <div className="col-sm-6">
      <div className="panel panel-default">
        <div className="panel-heading panel-heading-primary center-text">
          <h3>The Reactulator</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <NumberField ref="NumberField1" read="false"/>
            <div className="col-sm-2 center-text">{this.state.operator}</div>
            <NumberField ref="NumberField2" read="false"/>
          </div>
          <div className="row margin-10">
            <OperatorButton onClick={this.selectOperator} operator="+"/>
            <OperatorButton onClick={this.selectOperator} operator="-"/>
            <OperatorButton onClick={this.selectOperator} operator="*"/>
            <OperatorButton onClick={this.selectOperator} operator="/"/>
          </div>
          <div className="row margin-10 center-text">
            <OperatorButton onClick={this.calculate} operator="=" />
            <OperatorButton onClick={this.clear} operator="Clear" />
          </div>
          <div className="row margin-10 center-text">
            <NumberField ref="ResultField" read="true" type="results"/>
          </div>
        </div>
      </div>
      </div>

    );
  }
});

module.exports = Calculator;
