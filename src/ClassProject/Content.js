import React from "react";
export default class Content extends React.Component
{
    render()
    {
        let name = "Student";
        
        let person  = {
        "name" :"Ila",
        "email" : "ilavu@gmail.com"
        }
        var a = 6;
        const b = 86;  

        return(
            <div className="content">
                <h3>Content of the Page:</h3>
                <p> 
                    Variable{name}
                    Object{person.name}
                </p>
            </div>
        )
    }
}