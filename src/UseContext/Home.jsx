import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Main";

export default function Home() {
  const { changeColor } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = (color) => {
    changeColor(color);
    // navigate("/about");
  };
  return (
    <>
      <h1>Home Page</h1>
      <div className="d-flex gap-3">
      <button style={{backgroundColor: "red"}} onClick={() => handleClick("red")}>Red</button>
      <button style={{backgroundColor: "blue"}} onClick={() => handleClick("blue")}>Blue</button>
      <button style={{backgroundColor: "green"}} onClick={() => handleClick("green")}>Green</button>
      </div>
    </>
  );
}
