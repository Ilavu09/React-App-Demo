import React from "react";

export default function content() 
{

    let a =8;
    var b = 18;
    const c = 76;  
    let abc = {
        "name" :"Ila",
        "email" : "ilavu@gmail.com"
    }

    let arr = [1,3,4,5];

    return(
        <div className="content">
        <p>
            <h3> Types of Variable</h3>
            </p> 
            <ul>
                <li>Variable {a} {c}</li>
                <li>Object {abc.name} {abc.email}</li>
                <li>Array {arr[0]} {arr[1]}</li>
            </ul>
    </div>
    )
    
}