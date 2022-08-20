import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Welcome = () => {
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((res) => {
        if (res !== "" || res !== null) {
          console.log(res.data.data);
          setPopulation(res.data.data);
        }
      });
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      {population.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.name}</h4>
            <h4>{item.capital}</h4>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Welcome;
