import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(){
    const [register, setRegister] = useState({
        name: "",
        email: "",
      });
   
      const handleInputs = (e) => {
        const { name, value } = e.target;
        setRegister((preData) => ({ ...preData, [name]: value }));
        
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(register.name);
        console.log(register.email);
        axios
          .get("https://mytravels.store/api.php", {
            params: {
              name: register.name,
              email: register.email,
              action: "create",
            },
          })
          .then((res) => {
            
            alert("Reigister Successfull");
          })
          .catch((error) => {
            console.log(error, "getting error");
          });
        setRegister({ name: "", email: "" });
      };
    
      return (
        <>
          <div style={{ marginTop: "150px" }}>
            <div className="container w-25">
              <form
                className="border  rounded border-3 bg-light "
                onSubmit={handleSubmit}
              >
                <div className="my-3 mx-3">
                  <figure className="text-center">
                    <h1>Register Here</h1>
                  </figure>
                  <h5>Name:</h5>{" "}
                  <input
                    className="form-control  border-secondary "
                    type="text"
                    value={register.name}
                    name="name"
                    placeholder="enter your name"
                    onChange={handleInputs}
                  />
                  <br />
                  <h5>Email:</h5>{" "}
                  <input
                    className="form-control  border-secondary"
                    type="text"
                    value={register.email}
                    name="email"
                    placeholder="enter your email"
                    onChange={handleInputs}
                  />
                  <br />
                  <div className="d-flex justify-content-around mb-4 ">
                  <button
                    className="btn border-secondary btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                  <Link className="btn border-secondary btn-success" to={'/'}>Login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    }
    