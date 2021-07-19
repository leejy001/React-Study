import React, { useState } from "react";

function EventPractice2() {
  //useState를 이용하여 사용하는 상태에 문자열이 아닌 객체를 넣는다.
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;

  function onChangeValue(e) {
    // e.target.name을 활용하려면, useState를 쓸 때 인풋 값들이 들어있는 form 객체를 사용하면 된다.
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사
      [e.target.name]: e.target.value, // 원하는 값을 덮어 쓰기
    };
    setForm(nextForm);
  }

  function onClick() {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
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
        onChange={onChangeValue}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeValue}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice2;
