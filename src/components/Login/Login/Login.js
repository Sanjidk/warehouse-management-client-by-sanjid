import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Button, Spinner, Toast } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
  useSendPasswordResetEmail(auth);

  if (error) {
    errorElement = (
      <h5 className="text-danger m-4">Error: {error?.message}{resetError?.message} </h5>
    );
  }

  const handleLogin = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  const navigateSignup = () => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);

      Toast.success("Sent email");
    } else {
      Toast.error("Email Address Not Found");
    }
  };

  if (loading || sending) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  
  return (
      <div className="wrapper">
      <div className="text-center mb-4 name">
            LOGIN
        </div>
        <div>
        <SocialLogin></SocialLogin>
        </div>
        
        <form onSubmit={handleLogin}  className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input ref={emailRef} type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input ref={passwordRef} type="password" name="password" id="pwd" placeholder="Password" required />
            </div>
            <Button variant="primary" type="submit">
          Login </Button>
        </form>
        {errorElement}
        <div className=" d-flex w-75 mx-auto justify-content-between align-items-center fs-6">
        <Link onClick={resetPassword} to="/login" className="text-primary pe-auto text-decoration-none">
           Forget Password
         </Link>
         <span className='text-dark'>or</span>
         <Link
          to="/signup" onClick={navigateSignup}
           className="text-primary pe-auto text-decoration-none"
         >
           Sign Up
         </Link>

        </div>
    </div>
  );
};

export default Login;