import React from "react";
import Todo from "./todo";
import PropTypes from "prop-types";

function List(props) {
  const todos = props.todos;

  return (
    <div className="cards">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          item={todo}
          removeItem={() => props.removeTodo(todo.id)}
          toggleTodoCompleted={() => props.toggleTodoCompleted(todo.id)}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
};

export default List;
