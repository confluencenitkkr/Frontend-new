import React, { useState } from "react";
import classes from "../../src/styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../utils/Backdrop/backdrop";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isBackdrop, setIsBackdrop] = useState(false);

  let main_class = [classes.main_container];
  let navbar_style = [classes.social_media];
  let url = window.location.href.split("/");
  url = url[url.length - 1];

  if (showMediaIcons) {
    main_class.push(classes.sidebar);
    navbar_style.push(classes.active_navbar);
  }

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

      <nav className={main_class.join(" ")}>
        <img src="/images/bgMedia/ribbon.png" className={classes.nav_img} />
        <div className={classes.navItem1}>
          <NavLink to="/" className={url === "" ? classes.active : ""}>
            Home
          </NavLink>
          <NavLink
            to="/Gallery"
            className={url === "Gallery" ? classes.active : ""}
          >
            Gallery
          </NavLink>
          
          <NavLink
            to="/Featured"
            className={url === "Featured" ? classes.active : ""}
          >
            Featured
          </NavLink>
          <NavLink
            to="/Sponsors"
            className={url === "Sponsors" ? classes.active : ""}
          >
            Sponsors
          </NavLink>
          {/* <NavLink
            to="/Team"
            className={url === "Team" ? classes.active : ""}
          >
            Team
          </NavLink> */}
          <NavLink
            to="/Events"
            className={url === "Events" ? classes.active : ""}
          >
            Events
          </NavLink>

          <NavLink
            to="/AboutUs"
            className={url === "AboutUs" ? classes.active : ""}
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/Developers"
            className={url === "Developers" ? classes.active : ""}
          >
            Developers
          </NavLink>
        </div>
      </nav>
      <div className={navbar_style.join(' ')} onClick={() => navbarHandler()}>
        <img src="/images/bgMedia/ribbon_drop.png" alt="" />
      </div>
    </>
  );
};

export default Navbar;
