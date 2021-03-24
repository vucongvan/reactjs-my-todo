import Tabs from "./tabs";
import Input from "../extends/input";
import List from "./list";
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
    this.addToDo = this.addToDo.bind(this);
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

  addToDo(event) {
    if (event.key === "Enter") {
      let text = event.target.value;
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
          <div className="form-group mb-5">
            <Input
              type="text"
              className="form-control mb-2"
              placeholder="What do you want to do?"
              name="input"
              handleChangeText={this.handleChangeText}
              addTodo={this.addToDo}
              text={this.state.text}
            />
            <label htmlFor="#input">
              <em>
                Press <code>Enter</code> to save
              </em>
            </label>
          </div>
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
