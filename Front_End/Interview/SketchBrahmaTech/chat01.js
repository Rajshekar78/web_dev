import React, { useState } from "react";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);

  const handleAddCircle = () => {
    setCircles([...circles, { selected: false }]);
  };

  const handleCircleClick = (index) => {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      newCircles[index] = {
        ...prevCircles[index],
        selected: !prevCircles[index].selected
      };
      return newCircles;
    });
  };

  const selectedCount = circles.filter((circle) => circle.selected).length;

  return (
    <div className="App">
      <button onClick={handleAddCircle}>Add Circle</button>
      <p>Selected Circles: {selectedCount}</p>
      <div className="circle-container">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`circle ${circle.selected ? "selected" : ""}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
