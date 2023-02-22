import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompChange = (id) => {
    let newTodoData = todoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((item) => (
        <div style={getStyle(item.completed)} key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCompChange(item.id)}
            defaultChecked={false}
          />
          {item.title}
          <button style={btnStyle} onClick={() => handleClick(item.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
