import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <>
      <h1>JSON data</h1>
      {data.map((data, index) => (
        <ListGroup key={index}>
          <ListGroupItem>
            <span>id : {data.id} </span>
            <br />
            <span>name : {data.name} </span>
            <br />
            <span>email : {data.email} </span>
          </ListGroupItem>
        </ListGroup>
      ))}
    </>
  );
}
