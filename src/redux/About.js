import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const color = useSelector((state) => state.color);

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h1>About Page Redux</h1>
      <p>The background color is: {color}</p>
    </div>
  );
}
