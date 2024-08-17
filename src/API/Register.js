import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://mytravels.store/api.php", {
        params: {
          name: register.name,
          email: register.email,
          action: "create",
        },
      })
      .then((res) => {
        console.log(res.data, "show data");
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
                onChange={(e) => setRegister(e.target.value)}
              />
              <br />
              <h5>Email:</h5>{" "}
              <input
                className="form-control  border-secondary"
                type="text"
                value={register.email}
                name="email"
                placeholder="enter your email"
                onChange={(e) => setRegister(e.target.value)}
              />
              <br />
              <button
                className="btn border-secondary btn-primary"
                type="submit"
              >
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
