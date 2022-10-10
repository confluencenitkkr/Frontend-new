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
    console.log(showMediaIcons);

    if (showMediaIcons) {
      main_container.classList.add("sidebar");
      social_media.classList.add("active_navbar");
    } else{
      main_container.classList.remove("sidebar");
      social_media.classList.remove("active_navbar");
    }
  }, [showMediaIcons, isBackdrop])

  const navbarHandler = () => {
    setShowMediaIcons((show) => !show);
    setIsBackdrop((backdrop) => !backdrop)
  };

  const backdropClicked = () => {
    setIsBackdrop((show) => !show);
    setShowMediaIcons(false);
  };

  return (
    <>
      <Backdrop backdropClicked={backdropClicked} isBackdrop={isBackdrop} />

      <nav className="main_container_navbar_pro" id="main_container_navbar_pro">
        <img src="/images/bgMedia/paperDesign.png" alt="" className="nav_img_paper_pro"/>
        <img src="/images/bgMedia/ribbon.png" className="nav_img_navbar_pro" />
        <div className="navItem1_navbar_pro">
          <NavLink to="/" className={url === "" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink
            to="/Gallery"
            className={url === "Gallery" ? "active" : ""}
          >
            Gallery
          </NavLink>
          
          <NavLink
            to="/Featured"
            className={url === "Featured" ? "active" : ""}
          >
            Featured
          </NavLink>
          <NavLink
            to="/Sponsors"
            className={url === "Sponsors" ? "active" : ""}
          >
            Sponsors
          </NavLink>
          {/* <NavLink
            to="/Team"
            className={url === "Team" ? "active" : ""}
          >
            Team
          </NavLink> */}
          <NavLink
            to="/Events"
            className={url === "Events" ? "active" : ""}
          >
            Events
          </NavLink>

          <NavLink
            to="/AboutUs"
            className={url === "AboutUs" ? "active" : ""}
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/Developers"
            className={url === "Developers" ? "active" : ""}
          >
            Developers
          </NavLink>
        </div>
      </nav>
      <div className="social_media_navbar_pro" id ="social_media_navbar_pro" onClick={() => navbarHandler()}>
        <img src="/images/bgMedia/ribbon_drop.png" alt="" />
      </div>
    </>
  );
};

export default Navbar;
