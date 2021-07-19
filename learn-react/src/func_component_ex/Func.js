import React, { useState } from "react";
import Average from "./Average";
import Average2 from "./Average2";
import Average3 from "./Average3";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Info from "./Info";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Say from "./Say";

const Func = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h2>Func Component</h2>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <Say />
      <Counter />
      <hr />
      {visible && <Info />}
      <Counter2 />
      <Info2 />
      <Info3 />
      <Average />
      <Average2 />
      <Average3 />
    </div>
  );
};

export default Func;
