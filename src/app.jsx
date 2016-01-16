var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: ['Apple Pie', 'Peach Cobbler', 'Coconut Cream Pie']
};

ReactDOM.render(<Dropdown {...options} />, document.querySelector('.container'));