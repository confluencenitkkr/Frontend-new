import React, { useState } from "react";
import "../../src/styles/NavBar.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../utils/Backdrop/backdrop";
import { useEffect } from "react";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isBackdrop, setIsBackdrop] = useState(false);

  let url = window.location.href.split("/");
  url = url[url.length - 1];

  useEffect(() => {
    let main_container = document.getElementById("main_container_navbar_pro");
    let social_media = document.getElementById("social_media_navbar_pro");

    if (showMediaIcons) {
      main_container.classList.add("sidebar");
      social_media.classList.add("active_navbar");
    } else {
      main_container.classList.remove("sidebar");
      social_media.classList.remove("active_navbar");
    }
  }, [showMediaIcons, isBackdrop]);

  const navbarHandler = () => {
    setShowMediaIcons((show) => !show);
    setIsBackdrop((backdrop) => !backdrop);
  };

  const backdropClicked = () => {
    setIsBackdrop((show) => !show);
    setShowMediaIcons(false);
  };

  const clickNavbar = () => {
    if (showMediaIcons) {
      navbarHandler();
    }
  };

  let sidebar_logo = (
    <NavLink to="/" onClick={() => clickNavbar()}>
      <img src="/images/bgMedia/logo.png" alt="" className="sidebar_logo" />
    </NavLink>
  );

  let hamburgerIcon = !isBackdrop ? (
    <i class="bi-list"></i>
  ) : null;

  return (
    <>
      <Backdrop backdropClicked={backdropClicked} isBackdrop={isBackdrop} />

      {sidebar_logo}
      <nav className="main_container_navbar_pro" id="main_container_navbar_pro">
        <div className="img_wrapper_nav">
          <img
            src="/images/bgMedia/logo.png"
            alt=""
            className="nav_logo_img_pro"
          />
          <img
            src="/images/bgMedia/paperDesign.png"
            alt=""
            className="nav_img_paper_pro"
          />
          <img
            src="/images/bgMedia/ribbon.png"
            className="nav_img_navbar_pro"
          />
          <p className="sidebar_heading_nav">Confluence</p>
        </div>
        <div className="navItem1_navbar_pro">
          <NavLink to="/" onClick={() => clickNavbar()}>
            Home
          </NavLink>
          <NavLink to="/Gallery" onClick={() => clickNavbar()}>
            Gallery
          </NavLink>
          <NavLink to="/Featured" onClick={() => clickNavbar()}>
            Featured
          </NavLink>
          <NavLink to="/Sponsors" onClick={() => clickNavbar()}>
            Sponsors
          </NavLink>
          <NavLink to="/Events" onClick={() => clickNavbar()}>
            Events
          </NavLink>

          <NavLink to="/AboutUs" onClick={() => clickNavbar()}>
            AboutUs
          </NavLink>
          <NavLink to="/Developers" onClick={() => clickNavbar()}>
            Developers
          </NavLink>
        </div>
      </nav>
      <div
        className="social_media_navbar_pro"
        id="social_media_navbar_pro"
        onClick={() => navbarHandler()}
      >
        <img src="/images/bgMedia/ribbon_drop.png" alt="" />
        { hamburgerIcon }
      </div>
    </>
  );
};

export default Navbar;
