import React, { useState, useMemo, useCallback } from "react";

function getAverage(numbers) {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

// 숫자, 문자열, 객체 등 일반 값을 재사용하려면 useMemo
// 함수를 재사용하려면 useCallback을 사용
function Average2() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // number 혹은 list가 바뀌었을 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);

  // 렌더링 과정 중 특정 값이 바뀔 때만 연산 실행
  // 원하는 값이 바뀌지 않을 시 이전에 연산한 결과를 다시 사용하는 방식
  // list 배열의 내용이 바뀔 때만 getAverage 함수가 호출 된다.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

export default Average2;
