import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용, 다음 코드와 같은 의미
      const scrollHeight = this.box.scrollHeight;
      const clientHeight = this.box.cliengHeight;
      */
    // scrollTop : 세로 스크롤바 위치 (0~350)
    // scrollHeight : 스크롤이 있는 박스 안의 div 높이 (650)
    // clientHeight : 스크롤이 있는 박스의 높이 (300)
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      margin: "0px auto",
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
