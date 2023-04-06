import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const height = 520;
const width = 900;
const center_x = width / 2;
const center_y = height / 2;
const stroke_width = 10;
const circle_color = "yellow";
const little_circle_color = "black";
const small_radius = 50;
const small_circle_offset_x = 100;
const small_circle_offset_y = 100;
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <svg height={height} width={width}>
        <circle
          cx={center_x}
          cy={center_y}
          stroke="black"
          strokeWidth={stroke_width}
          fill={circle_color}
          r={center_y - stroke_width / 2}
        ></circle>
        <circle
          cx={center_x - small_circle_offset_x}
          cy={center_y - small_circle_offset_y}
          fill={little_circle_color}
          r={small_radius}
        ></circle>
        <circle
          cx={center_x + small_circle_offset_x}
          cy={center_y - small_circle_offset_y}
          fill={little_circle_color}
          r={small_radius}
        ></circle>
      </svg>
    </div>
  );
}

export default App;
