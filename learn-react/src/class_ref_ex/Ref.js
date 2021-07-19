import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

export class Ref extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button
          // 컴포넌트가 처음 렌더링 시 this.scrollBox 값이 undefined이므로
          // this.scrollBox.scrollToBottom 값을 읽어오는 과정에서 오류가 나기 때문에
          // arraw fuction을 이용하여 새로운 함수를 만들고 내부에서 메서드를 실행한다.
          onClick={() => this.scrollBox.scrollToBottom()}
        >
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default Ref;
