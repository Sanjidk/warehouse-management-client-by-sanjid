import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Spinner} from "react-bootstrap";
import axios from "axios";
import { Toast } from "bootstrap";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const navigate = useNavigate();

  let errorElement;
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading5, error5] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  if (error5) {
    errorElement = (
      <h5 className="text-danger m-4">
        Error: {error5?.message}
        {resetError?.message}
      </h5>
    );
  }

  const handleLogin = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

    const {data} = await axios.post(`http://localhost:5000/login`, {email});
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });

  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);

      Toast.success("Sent email");
    } else {
      Toast.error5("Email Address Not Found");
    }
  };



  if (loading5 || sending) {
    return <Spinner animation="grow" variant="dark" />;
  }

  return (
    <div className="wrapper">
      <div className="text-center mb-4 name">LOGIN</div>
      <div className="text-center">
        <SocialLogin></SocialLogin>
      </div>

      <form onSubmit={handleLogin} className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <Button variant="primary" type="submit">
          Login{" "}
        </Button>
      </form>
      {errorElement}
      <div className=" d-flex w-75 mx-auto justify-content-between align-items-center fs-6">
        <Link
          to="/login"
          onClick={resetPassword}
          className="text-primary pe-auto text-decoration-none"
        >
          Forget Password
        </Link>{" "}
        <span className="text-dark">or</span>
        <Link
          to="/signup"
          onClick={navigateSignup}
          className="text-primary pe-auto text-decoration-none"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
