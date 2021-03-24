import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      name={props.name}
      value={props.text}
      onChange={props.handleChangeText}
      onKeyDown={props.addTodo}
    />
  );
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
