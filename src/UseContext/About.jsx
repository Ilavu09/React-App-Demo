import React, { useContext } from "react";
import { AppContext } from "./Main";

export default function About(){
    const {color} = useContext(AppContext);
    return(
        <>
        <div style={{backgroundColor:color, height: "100vh", padding: "20px" }}>
        <h1>About Page</h1>
        <p>The backgroundcolor is : {color}</p>
        </div>
        
        </>
    )
}