import React from "react";
import PropTypes from "prop-types";
import Input from "../extends/input";

function Create(props) {

    return (
        <div className="form-group mb-5">
        <Input
          type="text"
          className="form-control mb-2"
          placeholder="What do you want to do?"
          name="input"
          handleChangeText={(event) =>props.handleChangeText(event)}
          addTodo={(event) => props.addTodo(event)}
          text={props.text}
        />
        <label htmlFor="#input">
          <em>
            Press <code>Enter</code> to save
          </em>
        </label>
      </div>
    );
}

Create.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default Create;
