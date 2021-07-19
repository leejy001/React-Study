import React, { Component } from "react";
import PropTypes from "prop-types";

// 비구조화 할당, 함수의 피라미터 부분에서도 사용 가능
//const Name = ({name, favoriteNumber, children}) => {
//const Name = (props) => {
// 비구조화 할당
class Name extends Component {
  render() {
    //const {name, favoriteNumber, children} = props;
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

//props 기본 값 설정
Name.defaultProps = {
  name: "기본 이름",
};

Name.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default Name;
