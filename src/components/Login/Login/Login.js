import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container w-50 mx-auto my-5 p-3 text-start shadow-lg">
      <h1 className="fw-bold text-center text-danger mt-3 mb-5">LOGIN</h1>
      <Form onSubmit=''>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            required
          />
        </Form.Group>
        <div className='d-flex justify-content-between'>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
        >
          Forget Password
        </Link>
        </div>
      </Form>
      <h5 className="mt-3">
        New to This Website: {" "}
        <Link
          to="/signup"
          className="text-info pe-auto text-decoration-none"
        >
          Sign-Up Here
        </Link>{" "}
      </h5>
    </div>
  );
};

export default Login;