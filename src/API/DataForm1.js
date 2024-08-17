import React, { useEffect,useState } from "react";
import axios from "axios";

export default function DataForm1(){
    const[values,setvalues]=useState([]);
    useEffect(()=>{
        getdata();
    },[])

    const getdata=()=>{
        axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        .then((res)=>{
            console.log(res.data.products,"show data");
            setvalues(res.data.products);
        })
        .catch((error)=>{
            console.log(error,"getting error");
        })
    }
    return<>
        <h1 className="text-center">Dummy Axios Data</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
            {values.map((d,i)=>(
               
                <tr key={i}>
                    <td>{i}</td>
                    <td>{d.id}</td>
                    <td>{d.title}</td>
                    <td>{d.price}</td>
                    <td><button>Edit</button> <button>Delete</button></td>
                </tr>
           

            ))}
             </tbody>
            
        </table>
    
    </>
}  