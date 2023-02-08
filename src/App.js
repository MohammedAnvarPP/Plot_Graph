import React, { useState } from "react";
import InputForm from "./InputForm";

function App() {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  return (
    <div className="App">
      <InputForm
        xData={xData}
        setXData={setXData}
        yData={yData}
        setYData={setYData}
      />
    </div>
  );
}

export default App;
