import React, { Component } from "react";
import "./ValidationSample.css";

export class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
    console.log(e.target.value);
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };
  // input의 className 값은 버튼을 누르기 전까지 비어있는 문자열 전달
  // 버튼을 누른 뒤에는 검증 결과에 따라 success or failure값 설정
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          // handleChange 호출 state의 password값 업데이트
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button
          // handleButtonClick을 호출하여 clicked 값 참 설정, validated 값 검증 결과로 설정
          onClick={this.handleButtonClick}
        >
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSample;
