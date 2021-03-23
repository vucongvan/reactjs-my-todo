import React from "react";
import PropTypes from "prop-types";

class TabButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href="#!" className={this.props.className}>{this.props.tabName}</a>
    );
  }
}

TabButton.propTypes = {
  className: PropTypes.string,
};

export default TabButton;
