import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={(e) => {
            this.setState({
              username: e.target.value,
            });
          }}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          // e 객체는 SyntheticEvent (웹 브라우저의 네이티브 이벤트를 감싸는 객체)
          // 이벤트가 끝나면 이벤트가 초기화된다.
          // 비동기적으로 이벤트를 참조하려면 e.persist() 함수를 호출해야함
          //   onChange={(e) => {
          //     console.log(e.target.value);
          //   }}
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.username + ": " + this.state.message);
            this.setState({
              username: "",
              message: "",
            });
          }}
        >
          확인!
        </button>
      </div>
    );
  }
}

export default EventPractice;
