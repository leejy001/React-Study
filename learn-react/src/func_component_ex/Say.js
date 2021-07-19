import React, { useState } from "react";

// 항상 state값을 바꿀 땐 setState, useState를 통해 전달받은 세터 함수를 사용해야한다.
const Say = () => {
  // 1번째 원소 (현재 상태), 2번째 원소 (상태를 바꾸어 주는 함수)
  // useState는 state 초깃값을 넣어줌
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  //const onClickEnter = () => setMessage("안녕하세요!");
  function onClickEnter() {
    setMessage("안녕하세요!");
  }
  const onClickLeave = () => setMessage("안녕히 가세요!");

  function onClickGreen() {
    setColor("green");
  }

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={function () {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={onClickGreen}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
