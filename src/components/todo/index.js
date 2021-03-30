import Tabs from "./tabs";
import List from "./list";
import Create from "./create";
import { TABS } from "../../constants";
import Header from "./header";
import { useState } from "react";
import "./todo.css"

function Todo() {
  const [tabSelected, setTabSelected] = useState(TABS.ALL);
  const [todos, setTodo] = useState(
    [
      { id: 1, name: "Todo1", status: TABS.ACTIVE },
      { id: 2, name: "Todo2", status: TABS.COMPLETED },
      { id: 3, name: "Todo3", status: TABS.ACTIVE },
      { id: 4, name: "Todo4", status: TABS.COMPLETED },
    ],
  );
  const [text, setText] = useState("");
  
  function changeTab(tab) {
    setTabSelected(tab)
  }

  function handleChangeText(event) {
    setText(event.target.value)
  }

  function addTodo(event) {
    let text = event.target.value;
    if (event.key === "Enter" && text) {
      let id = Math.max(...todos.map((todo) => todo.id)) + 1;
      let todo = {
        id: id,
        name: text.trim(),
        status: TABS.ACTIVE,
      };
      todos.push(todo);
      setText('');
      setTodo(todos);
    }
  }

  function getToDos() {
    switch (tabSelected) {
      case TABS.ACTIVE:
        return todos.filter((todo) => todo.status === TABS.ACTIVE);
      case TABS.COMPLETED:
        return todos.filter(
          (todo) => todo.status === TABS.COMPLETED
        );
      default:
        return todos;
    }
  }

  function removeTodo(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodo(newTodos);
  }

  function toggleTodoCompleted(id) {
    let index = todos.findIndex((todo) => todo.id === id);
    todos[index].status = todos[index].status === TABS.ACTIVE ? TABS.COMPLETED : TABS.ACTIVE;
    let newTodos = [...todos];
    setTodo(newTodos);
  }

  return (
    <div className="container">
      <Header />
      <Tabs tabSelected={tabSelected} changeTab={changeTab} />
      <div className="main container rounded p-3">
        <Create
          handleChangeText={handleChangeText}
          addTodo={addTodo}
          text={text}
        />
        <List
          todos={getToDos()}
          removeTodo={removeTodo}
          toggleTodoCompleted={toggleTodoCompleted}
        />
      </div>
    </div>
  );
}

export default Todo;
