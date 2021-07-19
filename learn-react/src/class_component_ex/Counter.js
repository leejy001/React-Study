import React, { Component } from "react";

class Counter extends Component {
  // 컴포넌트에 state 설정 시 constructor 메서드 작성하여 설정
  //    constructor(props) {
  //      super(props);
  //      // state의 초깃값 설정
  //      this.state = {
  //        number: 0,
  //        fixedNumber: 0,
  //      };
  //    }
  // constructor를 사용하지 않아도 설정 가능
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button // onClick을 통해 버튼이 클릭될 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값 넣을 수 있다.
            // 값을 업데이트하고 난 다음 특정 작업을 하고 싶을 때
            // setState의 두 번째 파라미터로 callback 함수를 등록하여 작업을 처리한다.
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });

            // // number가 +2씩 오르게 하기
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // // 위 코드와 같은 기능 (함수에서 바로 객체를 반환)
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
