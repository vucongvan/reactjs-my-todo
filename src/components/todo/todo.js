import React from "react";
import { TABS } from "../../constants";
import PropTypes from "prop-types";

class ToDo extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="card">
        <div className="card-body">
          <button
            id="delete"
            type="button"
            className="btn btn-link float-right"
            onClick={this.props.removeItem}
          >
            ❌
          </button>
          <button
            id="done"
            type="button"
            className="btn btn-link float-right mr-3"
            onClick={this.props.toggleTodoCompleted}
          >
            ✔️
          </button>
          {item.status === TABS.COMPLETED ? (
            <del>
              <p className="card-title lead">{item.name}</p>
            </del>
          ) : (
            <p className="card-title lead">{item.name}</p>
          )}
        </div>
      </div>
    );
  }
}

ToDo.propTypes = {
  removeItem: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
  }),
};

export default ToDo;
