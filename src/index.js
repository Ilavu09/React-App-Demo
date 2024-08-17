import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./redux/App";
import ClassApp from "./ClassApp";
import DataForm from "./API/DataForm";
import DataForm1 from "./API/DataForm1";
import Main from "./APINew/Main";
import FetchData from "./FetchAPI/FetchData";
import ColorApp from "./UseContext/ColorApp";
import MainContext from "./Context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
