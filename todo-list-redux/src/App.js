import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  // const onInput = useCallback(
  //   (text) => {
  //     const todo = { id: nextId.current, text, checked: false };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   },
  //   [todos]
  // );

  const onInput = useCallback((text) => {
    const todo = { id: nextId.current, text, checked: false };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //       )
  //     );
  //   },
  //   [todos]
  // );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInput onInput={onInput} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
