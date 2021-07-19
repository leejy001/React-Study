import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Info2() {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });

  const { name, nickname } = state;

  // useReducer의 액션은 어떤 값도 사용 가능 (인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지)
  function onChange(e) {
    dispatch(e.target);
  }

  // useReducer 사용시 input 태그에 name 값 할당
  // e.target.name을 참조하여 setState를 한 것과 유사한 방식으로 작업 처리
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default Info2;
