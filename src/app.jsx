var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: "Inbox",
    number: 32,
    header: "Learn React",
    description: "I love learning React",
    imageURL: "https://facebook.github.io/react/img/logo_og.png"
  },
    {
      title: "Show Courses",
      number: 5,
      header: "Learn Gulp",
      description: "I love learning Gulp",
      imageURL: "https://avatars0.githubusercontent.com/u/6200624?v=3&s=400"
    }
  ]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.target'));