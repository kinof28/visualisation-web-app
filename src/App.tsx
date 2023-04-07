import "./App.css";
import { arc } from "d3";

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
const mouth_radius = 180;
const mouthArc = arc()
  .innerRadius(mouth_radius - 20)
  .outerRadius(mouth_radius)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2)
  .cornerRadius(5);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <svg height={height} width={width}>
        <g transform={`translate(${center_x},${center_y})`}>
          <circle
            stroke="black"
            strokeWidth={stroke_width}
            fill={circle_color}
            r={center_y - stroke_width / 2}
          ></circle>
          <circle
            cx={-small_circle_offset_x}
            cy={-small_circle_offset_y}
            fill={little_circle_color}
            r={small_radius}
          ></circle>
          <circle
            cx={small_circle_offset_x}
            cy={-small_circle_offset_y}
            fill={little_circle_color}
            r={small_radius}
          ></circle>

          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}

export default App;
