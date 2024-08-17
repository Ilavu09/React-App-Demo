import {React,useContext} from "react";
import {nameContx} from "./MainContext";

export default function GetContext(){
    const abc = useContext(nameContx);
    return(
        <>
            <h1>My name is {abc.data}</h1>
        </>
    )
}