import React, { useState, useEffect } from "react";
import db from "./firebase";
import TodoTemplate from "./components/TodoTemplate";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(
        //   snapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     todo: doc.data().todo,
        //     checked: doc.data().checked,
        //   }))
        // );
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            checked: doc.data().checked,
          }))
        );
      });
  }, []);

  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
