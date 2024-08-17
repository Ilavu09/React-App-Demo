import {React,createContext,useState} from "react";
import GetContext from "./GetContext";

export const nameContx = createContext();

export default  function MainContext(){
    const[name,setname] = useState(" UseContext");
    return(
        <>
        <nameContx.Provider value={ {data : name}}>
            <GetContext/>
        </nameContx.Provider>
        </>
    )
}