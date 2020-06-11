import React, { useState } from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

import { signIn } from '../../../services/authentication';

const AuthenticationSignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    signIn(formData)
      .then((user) => {
        console.log(user);
        props.updateUser(user);
        props.history.push('/posts');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="signs">
      <Form onSubmit={handleSubmitForm}>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button id="button" size="md" block variant="primary" type="submit">
          Sign in
        </Button>
        <small>
          Not a member?{' '}
          <a id="links" href="/signup">
            Sign up!
          </a>
        </small>
      </Form>
    </div>
  );
};
export default AuthenticationSignIn;
