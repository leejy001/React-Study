import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: ""
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((item) => item.id !== id);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    };
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };

  handleCompChange = (id) => {
    let newTodoData = this.state.todoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((item) => (
            <div style={this.getStyle(item.completed)} key={item.id}>
              <input
                type="checkbox"
                onChange={() => this.handleCompChange(item.id)}
                defaultChecked={false}
              />
              {item.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(item.id)}
              >
                X
              </button>
            </div>
          ))}
          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>
        </div>
      </div>
    );
  }
}
