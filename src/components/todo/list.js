import React from "react";
import ToDo from "./todo";
import PropTypes from "prop-types"; 

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    const todos = this.props.todos;

    return (
      <div className="cards">
        {
          todos.map((todo) => (
            <ToDo key= {todo.id} 
                  item = {todo}
                  removeItem = {() => this.props.removeTodo(todo.id)}
                  toggleTodoCompleted = {() => this.props.toggleTodoCompleted(todo.id)}

            />
          ))
        }   
      </div>
    );
  }
}

List.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
};

export default List;
