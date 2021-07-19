import React, { useState } from "react";
import IterationSample from "./IterationSample";
import IterationSample2 from "./IterationSample2";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 색상 랜덤 설정
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Example() {
  const [color, setColor] = useState("#000000");

  // 불러온 random Color값을 전달
  function handleClick() {
    setColor(getRandomColor());
  }

  return (
    <div>
      <IterationSample />
      <IterationSample2 />
      <button onClick={handleClick}>랜덤 색상</button>
      <ErrorBoundary>
        <LifeCycleSample color={color} />
      </ErrorBoundary>
    </div>
  );
}

export default Example;
