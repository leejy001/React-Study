import React, { useReducer } from "react";

// useReducer는 컴포넌트 업데이트 로직을 바깥으로 뺄 수 있다.
function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 변환
      return state;
  }
}

function Counter2() {
  // 첫 번째 파라미터에 리듀서 함수, 두 번째 파라미터에 해당 리듀서 기본 값
  // state: 현재 가리키고 있는 상태, dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
}

export default Counter2;
