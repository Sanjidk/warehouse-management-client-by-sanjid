import React from 'react';
// import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
  return (
      <div className="wrapper">
      <div className="text-center mb-4 name">
            LOGIN
        </div>
        <div className="logo">
            <img src="https://www.lucabottarostudio.com/wp-content/uploads/2019/05/google_PNG19635.png" alt="" />
        </div>
        
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username" />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" />
            </div>
            <button className="btn mt-3 text-white">Login</button>
        </form>
        <div className=" d-flex w-75 mx-auto justify-content-between align-items-center fs-6">
        <Link
          to="/login"
           className="text-primary pe-auto text-decoration-none"
         >
           Forget Password
         </Link>
         <span className='fw-bold text-white'>or</span>
         <Link
          to="/signup"
           className="text-primary pe-auto text-decoration-none"
         >
           Sign Up
         </Link>

        </div>
    </div>
  );
};

export default Login;