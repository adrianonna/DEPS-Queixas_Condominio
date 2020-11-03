import React, { useState, useEffect } from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {useHistory} from "react-router-dom";

import HousePng from "./../../assets/img/house.png"

const Home = () => {
  const [state, setState] = useState("");
  const history = useHistory();

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    history.push("/Dashboard");
  }

  return (
      <div style={{display: "flex", flex: "100%", width:"60%", margin: "auto", height: "90vh"}}>

      <img src={HousePng} alt="" style={{width: "inherit", opacity: "0.7"}}/>

      <Form style={{margin: "auto"}} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Digite seu login</Form.Label>
          <Form.Control type="email" placeholder="Login..." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Digite sua senha</Form.Label>
          <Form.Control type="password" placeholder="Senha..." />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Entrar
        </Button>
      </Form>
      </div>
      
  );
};

export default Home;
