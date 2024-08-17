import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setColor } from "./actions";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (color) => {
    dispatch(setColor(color));
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page Redux</h1>
      <button onClick={() => handleClick("red")}>Red</button>
      <button onClick={() => handleClick("blue")}>Blue</button>
      <button onClick={() => handleClick("green")}>Green</button>
    </div>
  );
}
