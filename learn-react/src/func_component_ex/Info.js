import React, { useState, useEffect } from "react";

function Info() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //   // 렌더링 시마다 특정 작업 수행
  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다!");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   });

  //   // 마운트될 때만 실행
  //   useEffect(() => {
  //     console.log("마운트될 때만 실행된다.");
  //   }, []);

  //   // 특정 값이 업데이트될 때만 실행
  //   useEffect(() => {
  //     console.log("name");
  //   }, [name]);

  //   // 컴포넌트가 언마운트 되기 전, 업데이트 직전에 작업을 수행하기 위해선
  //   // useEffect에서 뒷정리(cleanup) 함수 반환
  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(name);

  //     return () => {
  //       console.log("cleanup");
  //       console.log(name);
  //     };
  //   });

  // 언마운트시에만 뒷정리 함수를 호출하고 싶을 때 두번째 파라미터에 빈 배열 삽입
  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeNickname(e) {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info;
