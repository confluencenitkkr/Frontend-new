import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image1 from "../styles/images/conflu.png"
import { Modal, ModalBody } from "reactstrap";
const Header = () => {
  const [login,setLogin]=useState(false);
  const [sign,setsign]=useState(false);
  const google = () => {
   window.open("http://localhost:5000/auth/google", "_self");
 };
 const facebook = () => {
   window.open("http://localhost:5000/auth/facebook", "_self");
 };

  return (
    <>
     <header>
         <div class="navigation">
            <nav class="navbar navbar-expand-lg navbar-light">
               <div class="container">
                  <a class="navbar-brand" href="index.html"><img class="logo-img" src={image1} alt=""/></a>
                  <a class="login-out-nav-btn" onClick={e=>{
                     setLogin(true);
                  }}>Log in / Sign Up</a>
                  <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="navbar-collapse collapse" id="navbarNav">
                     <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                           <a class="nav-link " aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="/Sponsors">Sponsors</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="/AboutUs">AboutUs</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="privacy.html">Events</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="/Team">Team</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="error-page.html">Developers</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link login-nav-btn" data-bs-toggle="modal" data-bs-target="#getstartedmodal" onClick={e=>{
                              setLogin(true);
                           }}>Log in / Sign Up</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      </header>
      <Modal
      isOpen={login}
      toggle={() => {
        setLogin(false);
        setsign(false);
      }}
      className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
    >
      <div className="auth-modal-wrp">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="auth-modal-artwork">
              <img
                src="./assets/img/human-right-artwok.png"
                className="img img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="auth-modal-content">
              <div className="w-100">
                <div className="auth-modal-logo">
                  <img
                    src={image1}
                    className="img img-fluid"
                    alt=""
                  />
                </div>
                <h2>Please Sign in to Confluence</h2>
                <div className="auth-input-wrp">
                  <label for="">Enter Email</label>
                  <input
                    type="text"
                    name="mobileNo"
                    // onChange={}
                    className="form-control"
                    placeholder=""
                  />
                    <label for="">Enter password</label>
                  <input
                    type="text"
                    name="mobileNo"
                    // onChange={}
                    className="form-control"
                    placeholder=""
                  />
                  <button
                    role="button"
                    data-bs-target="#verifyOTPmodal"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn auth-main-btn"
                    type="button"
                    onClick={() => {
                    
                    }}
                  >
                    Login
                  </button>
                </div>
                <p>Or Sign in with</p>
                <ul>
                  <li className="pe-2">
                    <button className="btn" onClick={e => {
                    e.preventDefault();
                    google()
                    }}>
                      {" "}
                      <img
                        src="./assets/img/login-with-google.png"
                        className="img img-fluid"
                        alt=""
                      />
                      Log in with Gmail
                    </button>
                  </li>
                  {/* <li className="ps-2">
                    <button className="btn" onClick={e => {
                      e.preventDefault();
                      
                    }}>
                      {" "}
                      <img
                        src="./assets/img/login-with-facebook.png"
                        className="img img-fluid"
                        alt=""
                      />
                      Log in with Facebook
                    </button>
                  </li> */}
                </ul>
                <h5>
                  Don’t have account ?{" "}
                  <a
                    role="button"
                    data-bs-target="#createAccmodal"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    onClick={(e) => {
                       e.preventDefault();
                     setsign(true)
                     setLogin(false);
                    }}
                  >
                    Create now
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div></Modal>
      <Modal
      isOpen={sign}
      toggle={() => {
        setsign(false)
        setLogin(false);
      }}
      className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
    >
      <div className="auth-modal-wrp">
        <div className="row">
        <div className="col-lg-6 p-0">
            <div className="auth-modal-artwork">
              <img
                src="./assets/img/human-right-artwok.png"
                className="img img-fluid"
                alt=""
              />
            </div>
          </div>
        <div className="col-lg-6 p-0">
                <div className="auth-modal-content">
                  <div className="w-100">
                    <div className="auth-profile-pic-wrp">
                    <div className="profile-pic-chooose">
                                  
                                    <img
                                      src={image1}
                                      className="img img-fluid"
                                      alt=""
                                    />
                                    </div>
                    </div>
                    <div className="auth-input-wrp">
                      <div className="row">
                        <div className="col-lg-6">
                          <label for="">First Name</label>
                          <input
                            type="text"
                            // onChange={}
                            className="form-control"
                            name="firstName"
                            placeholder=""
                          />
                        </div>
                        <div className="col-lg-6">
                          <label for="">Last Name</label>
                          <input
                            type="text"
                            // onChange={onChangeUser}
                            className="form-control"
                            name="lastName"
                            placeholder=""
                          />
                        </div>
                        <div className="col-lg-12">
                          <label for="">Email ID</label>
                          <input
                            type="email"
                            className="form-control"
                            // onChange={onChangeUser}
                            name="email"
                            placeholder=""
                          />
                        </div>
                        <div className="col-lg-12">
                          <label for="">Mobile No.</label>
                          <input
                            type="string"
                            className="form-control"
                            name="mobileNo"
                            // onChange={onChangeUser}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn auth-main-btn"
                        onClick={() => {
                          // setmodalstateno(7);
                        }}
                      >
                        Create Account
                      </button>
                    </div>
                    <h5>
                      By signing up , you agree to{" "}
                      <a href="javascript:;">terms and condition</a>{" "}
                      and Borhan <a href="javascript:;">policy</a>
                    </h5>
                  </div>
                </div>
              </div>
       
        </div>
      </div></Modal>

      
    </>
  );
};

export default Header;
