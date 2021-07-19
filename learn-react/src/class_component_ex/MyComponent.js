import React from "react";
import Name from "./Name";
import Name1 from "./Name1";

const MyComponent = () => {
  return (
    <div>
      <Name name="React" favoriteNumber={1}>
        리액트
      </Name>
      <Name></Name>
      <br />
      <Name1 name="React" favoriteNumber={1}>
        리액트
      </Name1>
      <Name1></Name1>
    </div>
  );
};

export default MyComponent;
