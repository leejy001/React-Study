import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInput.scss";

function TodoInput({ onInput }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInput(value);
      setValue("");
      e.preventDefault();
    },
    [onInput, value]
  );

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInput;
