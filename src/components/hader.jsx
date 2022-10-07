import React from "react";
import { useEffect } from "react";
import authAction from "../actions/auth.action";
import "react-toastify/dist/ReactToastify.css";
import Agent from "../actions/super";
import "../../src/styles/Header.css";

const Header = () => {

  return (
    <>
      <header>
        {/* <div class="nav-container container">
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
        </div> */}
      </header>
    </>
  );
};

export default Header;
