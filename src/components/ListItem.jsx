var React = require('react');
var List = require('./List.jsx');
var ListManager = require('./ListManager.jsx')

var ListItem = React.createClass({
  render() {
    return (
      <div className="row margin-10">
          <div className="col-sm-8">{this.props.text}</div>
          <div className="colsm-4">
            <button className="btn btn-danger pull-right" onClick={this.props.onClick}>X</button>
          </div>
      </div>
    );
  }
});

module.exports = ListItem;
