import React from "react";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";
import ColorBox from "./contexts/ColorBox";

function App() {
  return (
    // Provider를 사용할 때는 value 값을 주어야 제대로 작동
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
