import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataForm() {
  const [values, setvalues] = useState([]);
  const [formData, setformData] = useState({
    name: "",
    email: "",
  });
  const [selectedData, setselectedData] = useState("");

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setformData((preData) => ({ ...preData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedData) {
      axios
        .get("https://mytravels.store/api.php", {
          params: {
            id: selectedData.id,
            name:formData.name ,
            email:formData.email ,
            action: "update",
          },
        })
        .then((res) => {
          console.log(res.data, "show data");
          alert("Updated Successfull");
          getdata();
        })
        .catch((error) => {
          console.log(error, "getting error");
        });

      console.log(selectedData.id);
    }
    else{
      axios
      .get("https://mytravels.store/api.php", {
        params: {
          name: formData.name,
          email: formData.email,
          action: "create",
        },
      })
      .then((res) => {
        console.log(res.data, "show data");
        alert("Created Successfull");

        getdata();
      })
      .catch((error) => {
        console.log(error, "getting error");
      });

    setformData({ name: "", email: "" });
  };

  }
    
    

  const deleteId = (id) => {
    axios
      .get("https://mytravels.store/api.php", {
        params: {
          id: id,
          action: "delete",
        },
      })
      .then((res) => {
        getdata();
      })
      .catch((error) => {
        console.log(error, "getting error");
      });
  };
  const editData = (id) => {
    const editRecord = values.find((item)=> item.id===id);
    if(editRecord){

      setformData({ name: editRecord.name, email: editRecord.email });
    }
    setselectedData(editRecord);
    
  };

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios
      .get("https://mytravels.store/api.php")
      .then((res) => {
        console.log(res.data, "show data");
        setvalues(res.data);
      })
      .catch((error) => {
        console.log(error, "getting error");
      });
  };

  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <form
          className="border rounded border-3 bg-light m-3 "
          onSubmit={handleSubmit}
        >
          <div className="m-4">
            <h5>Enter Your Name:</h5>
            <input
              className="rounded form-control"
              type="text"
              value={formData.name}
              name="name"
              placeholder="name"
              onChange={handleInputchange}
            />
            <br />
            <h5>Enter Your Email:</h5>
            <input
              className="rounded form-control"
              type="text"
              value={formData.email}
              name="email"
              placeholder="email "
              onChange={handleInputchange}
            />
            <br />
            <button
              className="rounded-pill "
              type="submit"
              disabled={selectedData}
            >
              Submit
            </button>{" "}
            <button
              className="rounded-pill mx-3"
              type="submit"
              disabled={!selectedData}
            >
              Update
            </button>
          </div>
        </form>
      </div>

      <div>
        <h1 className="text-center">Show All Table Data</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {values.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.created_at}</td>
                <td>
                  <button
                    onClick={() => {
                      editData(d.id);
                    }}
                  >
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => {
                      deleteId(d.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
