var React = require('react');
var reactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');


reactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
reactDOM.render(<ListManager title="TODOs"/>, document.getElementById('TODOs'));
reactDOM.render(<ListManager  title="Christmas List" headingColor="#b31217"/>, document.getElementById('Christmas'));
