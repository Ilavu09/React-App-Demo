import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLogin((preData) => ({ ...preData, [name]: value }));
    
  };
  const handleRegister=()=>{
    navigate("register");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.name && login.email) {
      axios
        .get("https://mytravels.store/api.php", {
          params: {
            name: login.name,
            email: login.email,
            action: "login",
          },
        })
        .then((res) => {
          console.log(res.data);
          if(res.data=="User Found"){
            
            alert("Login Successfull")
            navigate("/dataform");
          }
          else{
            alert("User not found");
            
          }
        }
        
      )
        .catch((error) => {
          console.log(error , "getting error");
          
          
        }
      
      
      );
        
         

      
    } 
    else {
      alert("Please enter the login details");
    }

    setLogin({ name: "", email: "" });
  };

  return (
    <>
      <div style={{ marginTop: "150px" }} >
        <div className="container w-25 ">
          <form className="border  rounded border-3 bg-light  " onSubmit={handleSubmit}>
            <div className="my-3 mx-3 ">
              <figure className="text-center">
                <h1>Login Form</h1>
              </figure>
              <h5>Name:</h5>{" "}
              <input
                className="form-control  border-secondary "
                type="text"
                value={login.name}
                name="name"
                placeholder="enter your name"
                onChange={handleInputs}
              />
              <br />
              <h5>Email:</h5>{" "}
              <input
                className="form-control  border-secondary"
                type="text"
                value={login.email}
                name="email"
                placeholder="enter your email"
                onChange={handleInputs}
              />
              <br />
              <div className="d-flex justify-content-between mb-4  ">
              <button className="btn border-secondary btn-primary " type="submit">
                Submit
              </button>
              <button className="btn border-secondary btn-success "  type="button" onClick={handleRegister}>
                Register
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    </>
  );
}
