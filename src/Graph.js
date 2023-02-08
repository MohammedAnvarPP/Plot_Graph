import React from "react";
import "./App.css";
import "./Graph.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({ xData, yData }) => {
  const data = xData.map((x, index) => ({ x, y: yData[index] }));

  return (
    <>
      <h3>The X-value is:{xData}</h3>
      <h3>The Y-value is:{yData}</h3>
      <LineChart
        width={500}
        height={300}
        data={data}
        className="graph-container"
      >
        <XAxis dataKey="x" className="axis" />
        <YAxis className="axis" />
        <CartesianGrid strokeDasharray="3 3" className="grid-line" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          className="data-point"
        />
      </LineChart>
    </>
  );
};

export default Graph;
