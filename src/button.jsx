var React = require('react');

module.exports = React.createClass({
  _handleClick: function () {

  },
  render: function () {
    return (
      <button className={"btn " + this.props.className} type="button"
              onClick={this.props.whenClicked}>
        {this.props.title}
        <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
      </button>
    );
  }
});
