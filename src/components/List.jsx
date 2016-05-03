var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  getInitialState() {
    return {items: []}
  },
  createItem(text, index, boundClick) {
    console.log("in createItem", text, index);
    React.render(<ListItem onClick={boundClick} key={text + index} text={text} id={text+index}/>)
  },
  deleteItem(i, item) {
    var newList = this.state.items.filter(function(li, idx) {
      if (li+idx !== item+i) {
        console.log("li", li);
        return li;
      }
    });
    this.setState({items: newList})
    console.log(this);
  },
  showList() {
    return this.state.items.map(function(item, i) {
      console.log("in showList", item, i);
      var boundClick = this.deleteItem.bind(this, i, item);
      return this.createItem(item, i, boundClick);
    }, this)
  },
  render: function() {
    return (
      <div>{this.showList()}</div>
    )
  }
});

module.exports = List;
