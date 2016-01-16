var React = require('react');
var Badge = require('./badge'); // reason for ./badge is because node modules are always unique, but our files may have name conflict

module.exports = React.createClass({
  render: function () {
    return (
      <div className="thumbnail">
        <img src={this.props.imageURL} />
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <Badge title={this.props.title} number={this.props.number}/>
        </div>
      </div>
    );
  }
});
