import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInput.scss";
import db from "../firebase";
import firbase from "firebase";

function TodoInput() {
  const [input, setInput] = useState("");

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the Refresh
    db.collection("todos").add({
      todo: input,
      checked: false,
      timestamp: firbase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Add Todo!!");
    setInput(""); // clear up the input after clicking add todo button
  };

  return (
    <form className="TodoInput">
      <input
        placeholder="할 일을 입력하세요."
        value={input}
        onChange={onChange}
      />
      <button disabled={!input} type="submit" onClick={addTodo}>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInput;
