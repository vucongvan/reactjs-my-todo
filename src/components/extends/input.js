import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.text}
        onChange={(event) => this.props.handleChangeText(event)}
        onKeyDown={(event) => this.props.addTodo(event)}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default Input;
