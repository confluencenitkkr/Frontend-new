import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image1 from "../styles/images/a tryst with magic.png";
import { Modal, ModalBody } from "reactstrap";
import authAction from "../actions/auth.action";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Agent from "../actions/super";
import "../../src/styles/Header.css";
import image2 from "../styles/images/photog.jpg";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

import welcomepng from "../styles/images/welcome.png";
const Header = () => {
  let location = useLocation();
  const CLIENT_ID =
    "192073990165-k8uk1edbbhb0lm03lqb7ikvf3ibqotr5.apps.googleusercontent.com";

  const [login, setLogin] = useState(false);
  const [sign, setsign] = useState(false);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [number, setNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [token, setToken] = useState(null);
  const [show, setShow] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    fetch();
    let token = Agent.getToken() ? Agent.getToken() : null;
    setToken(token);
  }, [show]);
  const fetch = () => {
    authAction.getuser((err, res) => {
      if (err) {
      } else {
      }
    });
  };
  const handleNavClick = () => {
    setShow(false);
  };

  const responseGoogleSuccess = async (response) => {
    console.log(response);
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    let data = response.profileObj;
    console.log(data, "ksdhcbsdbc");
    authAction.googleLoginSignup(data, (err, res) => {
      if (err) {
      } else {
        cookies.set("token", data.token, { path: "/" });
        window.location.reload();
      }
    });
  };

  const responseGoogleError = (response) => {
    console.log(response);
  };

  const logout = (response) => {
    Agent.removeSession();
    console.log(response);
    window.location.reload();
  };
  const log = () => {
    if (!email && !password) {
      toast.warning("ENTER email password");
      return;
    }
    let dataToSend = {
      email: email,
      password: password,
    };
    authAction.Login(dataToSend, (err, res) => {
      console.log(err, res, "jcjndc");

      if (res.statusCode == 400) {
        toast.warning("user is not found");
        return;
      }
      let user = res.data;
      toast("user login successfully");
      console.log("here is responsse", res);
      cookies.set("token", user.token, { path: "/" });
      setLogin(false);
      setsign(false);
    });
  };
  const Sign = () => {
    if (!email && !password1 && !name) {
      toast.warning("fill name,email,password");
      return;
    }
    let dataToSend = {
      email: email1,
      password: password1,
      rollNo: number,
      collegeName: collegeName,
      name: name,
    };
    console.log(dataToSend, "njnjdnjcdn");
    authAction.Signup(dataToSend, (err, res) => {
      if (err) {
      } else {
        let user = res.data;
        console.log("here is responsse", res);
        cookies.set("token", user.token, { path: "/" });
        toast("signup successfully");
        setLogin(false);
        setsign(false);
        window.location.reload();
      }
    });
  };
  const google = () => {
    cookies.set(
      "token",
      "dkcjbkbcwkdjbcjsdbclvsdljhcvlsdvcvsdhjlcvlsdvchvsdlhjcvlsjdhvcjhlsdvcljhvsdhjcvlshdvcljhsdv",
      { path: "/" }
    );
    const googleLoginURL = "https://nitkkr.herokuapp.com/auth/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );
  };
  const facebook = () => {
    window.open("https://nitkkr.herokuapp.com/auth/facebook", "_self");
  };

  return (
    <>
      <header>
        <div class="nav-container container">
          <ul class="nav">
            <li><a href="#">Home</a></li>
            <li>
              <a href="#">Portofolio</a>
              <ul>
                <li><a href="#">Webdesign</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">App Design</a></li>
                <li>
                  <a href="#">Identity</a>
                  <ul>
                    <li><a href="#">Level 2</a></li>
                    <li><a href="#">Level 2</a></li>
                    <li>
                      <a href="#">Level 2</a>
                      <ul>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Level 2</a></li>
                  </ul>
                </li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="img-container">
          <img src={image2} class="nav-image"/>
        </div>
      </header>
    </>
  );
};

export default Header;
