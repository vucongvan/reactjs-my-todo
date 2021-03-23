import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={(event) => this.onChange(event)}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Input;
