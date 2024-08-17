import "./App.css";

import Login from "./API/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataForm from "./API/DataForm";
import Register from "./API/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dataform" element={<DataForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
