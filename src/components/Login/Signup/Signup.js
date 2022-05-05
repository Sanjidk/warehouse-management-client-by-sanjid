import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
  <div className='bg-primary'>
    <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-left d-none d-md-flex">
          </div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInputUsername" placeholder="Username" required />
                <label>Username</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInputEmail" placeholder="email" />
                <label>Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label>Password</label>
              </div>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Sign Up</button>
              </div>

              <Link to="/login" className="text-primary pe-auto text-decoration-none" >
           Have an account? Login
         </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>

  );
};

export default Signup;