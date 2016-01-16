var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  getInitialState: function () {
    return {open: false,
            };
  },
  handleClick: function () {
    this.setState({open: !this.state.open});
  },
  handleItemClicked: function(itemName) {
    this.setState({
      open: false,
      itemName: itemName
    });
  },
  render: function () {
    var listItems = this.props.items.map(function (item, i) {
      return <ListItem
                key={i}
                item={item}
                whenItemClicked={this.handleItemClicked}
                className={this.state.itemName === item ? "active" : ""}
              />;
    }, this);
    return (
      <div className="dropdown">
        <Button className="btn-default"
                title={this.state.itemName || this.props.title}
                subTitleClassName="caret"
                whenClicked={this.handleClick}
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
          {listItems}
        </ul>
      </div>
    );
  }
});