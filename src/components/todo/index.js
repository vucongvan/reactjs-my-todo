import Tabs from "./tabs";
import List from "./list";
import Create from "./create";
import React from "react";
import { TABS } from "../../constants";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: TABS.ALL,
      todos: [
        { id: 1, name: "Todo1", status: TABS.ACTIVE },
        { id: 2, name: "Todo2", status: TABS.COMPLETED },
        { id: 3, name: "Todo3", status: TABS.ACTIVE },
        { id: 4, name: "Todo4", status: TABS.COMPLETED },
      ],
      text: "",
    };

    this.changeTab = this.changeTab.bind(this);
    this.getToDos = this.getToDos.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  changeTab(tab) {
    this.setState({
      tabSelected: tab,
    });
  }

  handleChangeText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  addTodo(event) {
    let text = event.target.value;
    if (event.key === "Enter" && text) {
      let todos = this.state.todos;
      let id = Math.max(...todos.map((todo) => todo.id)) + 1;
      let todo = {
        id: id,
        name: text.trim(),
        status: TABS.ACTIVE,
      };
      todos.push(todo);
      this.setState({
        text: "",
        todos: todos,
      });
    }
  }

  getToDos() {
    switch (this.state.tabSelected) {
      case TABS.ACTIVE:
        return this.state.todos.filter((todo) => todo.status === TABS.ACTIVE);
      case TABS.COMPLETED:
        return this.state.todos.filter(
          (todo) => todo.status === TABS.COMPLETED
        );
      default:
        return this.state.todos;
    }
  }

  removeTodo(id) {
    let newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos: newTodos,
    });
  }

  toggleTodoCompleted(id) {
    const todos = this.state.todos;
    let index = todos.findIndex((todo) => todo.id === id);
    todos[index].status =
      todos[index].status === TABS.ACTIVE ? TABS.COMPLETED : TABS.ACTIVE;

    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <span className="navbar-brand text-white">Todo List App</span>
        </div>
        <Tabs tabSelected={this.state.tabSelected} changeTab={this.changeTab} />
        <div className="main container rounded p-3">
          <Create
            handleChangeText={this.handleChangeText}
            addTodo={this.addTodo}
            text={this.state.text}
          />
          <List
            todos={this.getToDos()}
            removeTodo={this.removeTodo}
            toggleTodoCompleted={this.toggleTodoCompleted}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
