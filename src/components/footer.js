import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import classes from "./footer.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <div className={classes.row}>
          <a href="#" className={classes.a_class}>
            {/* <i class="fa fa-facebook"></i> */}
            <FiFacebook
              className={classes.icn}
              // style={{ color: "grey", fontSize: "2em", margin: "0% 1%" }}
            />
            {/* <Icon icon="akar-icons:facebook-fill" className={classes.icn} height="4vh" /> */}
          </a>
          <a href="" className={classes.a_class}>
            <FiInstagram className={classes.icn} />
          </a>
          <a href="#" className={classes.a_class}>
            <FiYoutube className={classes.icn} />
          </a>
          <a href="#" className={classes.a_class}>
            <FiTwitter className={classes.icn} />
          </a>
        </div>

        <div className={classes.row}>
          <ul className={classes.ul_class}>
            <li className={classes.li_class}>
              <a href="#" className={classes.a_class}>
                Our Story
              </a>
            </li>
            <li className={classes.li_class}>
              <a href="#" className={classes.a_class}>
                Code of Conduct
              </a>
            </li>
            <li className={classes.li_class}>
              <a href="#" className={classes.a_class}>
                Privacy and Terms
              </a>
            </li>
            <li className={classes.li_class}>
              <a href="#" className={classes.a_class}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={classes.row}>
          ©2022 Conflunce NIT KKR All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
