import React, { useState } from "react";

function IterationSample2() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  function onChange(e) {
    setInputText(e.target.value);
  }

  // 버튼 클릭 함수
  function onClick() {
    // concat을 이용하여 새로운 배열을 만들어줌
    const nextNames = names.concat({
      id: nextId, // nextId를 id로 설정한다.
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 줌
    setNames(nextNames); // names 값을 업데이트 함
    setInputText(""); // inputText를 비운다.
  }

  // 데이터 제거
  // 불변성을 유지하며 배열의 특정 항목을 지울 때 배열의 내장 함수 filter를 사용한다.
  function onRemove(id) {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }

  // key를 name.id 값으로 지정
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  );
}

export default IterationSample2;
