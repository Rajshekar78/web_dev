import { useState } from "react";
import "./styles.css";

export default function App() {
  const [circles, setCircles] = useState([]);
  // const [selectedCricles, setSelectedCircles] = useState(0);
  const handleAddCircle = () => {
    const copyCircles = circles.map((item) => item);
    copyCircles.push({ selected: false });
    setCircles(copyCircles);
  };
  const handleCircle = (idx) => {
    const copyCircles = circles.map((item) => item);
    copyCircles[idx].selected = !copyCircles[idx].selected;
    setCircles(copyCircles);
  };
  const getSelectedCircles = () => {
    const count = circles.filter((item) => item.selected).length;
    return count;
  };
  return (
    <div className="App"> 
      <button onClick={handleAddCircle}>Add Circle</button>
      <br />
      selected circles: {getSelectedCircles()}
      {circles.length &&
        circles.map((circle, idx) => (
          <div
            className={`circle ${circle.selected && "selected"}`}
            key={idx + 1}
            onClick={() => handleCircle(idx)}
          ></div>
        ))}
    </div>
  );
}
