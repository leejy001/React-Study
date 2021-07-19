import React, { useState } from "react";

function EventPractice() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangeMessage(e) {
    setMessage(e.target.value);
  }

  function onClick() {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice;
