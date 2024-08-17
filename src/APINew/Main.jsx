import React from "react";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Error from "./ErrorPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function Main(){
    return(
        <div>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/*" element={<Error/>}/>
</Routes>
</BrowserRouter>
        </div>
    );
}