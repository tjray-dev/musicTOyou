import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useFormFields } from "../libs/hooksLib";
import {Container} from '@material-ui/core';

import "./SignUp.css"

export default function Signup({ users }) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }
console.log(users)
function handleSubmit(event) {
  const user = {
    userEmail: fields.email,
    password: fields.password
  }
  console.log(user)
    event.preventDefault();

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' 
      },
      body: JSON.stringify(user)
    })
    history.push('/')
  }


  function renderForm() {
    return (
      <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="lg">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder='NeverGunnaGiveYouUp@rickAstly.com'
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder='Never Gonna Let You Down'
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder='Turn Around And Desert You...'
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          variant="success"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Signup
        </Button>
      </Form>
      </Container>
    );
  }

  return (
    <div className="Signup">
      {renderForm() }
    </div>
  );
}
