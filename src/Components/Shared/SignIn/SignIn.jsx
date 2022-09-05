import React from 'react';
import { NavLink } from "react-router-dom";
import '../../../Styles/SignIn.css';
import logImg from '../../../Assets/img/Signin.jpg';

const SignIn = () => {
  return (
    <>
      <div className="page-title hosting-bg d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center con-txt">Sign-in</h1>
              <p className="text-center"></p>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div class="card mb-3" style={{ border: 'none' }}>
          <div class="row g-0">
            <div class="col-md-6">
              <img src={logImg} class="img-fluid rounded-start " alt="..." />
            </div>

            <div class="col-md-6">
              <div class="card-body">

                <div className='bodyLogin '>
                  <div class="mainLog ">
                    <form className='logFrom '>
                      <label className='labelLog' for="Log" aria-hidden="true">Sign in</label>
                      <span>Provide your valid login credentials</span>

                      <div className='logLabel2'>
                        <label for="login-email" >Email</label>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3"><i class="fa-solid fa-envelope"></i></span>
                        <input class="form-control" type="email" name='email' placeholder="Email" id="basic-url" aria-describedby="basic-addon3" required="" />
                      </div>

                      <div className='logLabel2'>
                        <label for="login-email" >Password</label>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3"><i class="fa-solid fa-key"></i></span>
                        <input class="form-control" type="password" name="pswd" placeholder="Password" id="basic-url" aria-describedby="basic-addon3" required="" />
                      </div>
                      <button className='buttonLog'>Sign in</button>
                    </form>
                    <NavLink style={{ textDecoration: "none", color: 'white' }} to='/signup'>
                      {" "}
                      <span>Already have an account? <a style={{ color: '#00002E' }}>Signup</a></span>
                    </NavLink>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
