import React, { useState } from "react";
import "./App.css";
import Graph from "./Graph";

const InputForm = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [inputX, setInputX] = useState("");
  const [inputY, setInputY] = useState("");
  console.log("xData", xData, "yData", yData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setXData([...xData, inputX]);
    setYData([...yData, inputY]);
    setInputX("");
    setInputY("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter x value"
          value={inputX}
          onChange={(e) => setInputX(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter y value"
          value={inputY}
          onChange={(e) => setInputY(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
<p>Yunus Edited fh</p>
      <Graph xData={xData} yData={yData} />
    </>
  );
};

export default InputForm;
