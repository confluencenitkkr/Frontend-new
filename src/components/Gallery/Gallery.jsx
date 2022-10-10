import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState, Component, useEffect } from "react";
import action from "../../actions/events.Actions";
import "./gallery.css";
import Navbar from "../hader";

const Gallery = (props) => {
  useEffect(() => {
    let main_container = document.getElementById("gallery_mainContainer");
    main_container.style.background =
      'url("/images/bgMedia/bg.jpg") 50% repeat';
  });

  return (
    <>
      <div className="external">
        <div className="horizontal_scroll_wrapper" id="gallery_mainContainer">
          <div className="img_wrapper slow">
            <a>
              <img
                src="images/avatar/img1.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="images/avatar/img2.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow2">
            <a>
              <img
                src="images/avatar/img3.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="images/avatar/img4.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow3">
            <a>
              <img
                src="images/avatar/img5.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper faster">
            <a>
              <img
                src="images/avatar/img6.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow4">
            <a>
              <img
                src="images/avatar/img7.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="images/avatar/img8.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow5">
            <a>
              <img
                src="images/avatar/img9.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster">
            <a>
              <img
                src="images/avatar/img10.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster2">
            <a>
              <img
                src="images/avatar/img11.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow3">
            <a>
              <img
                src="images/avatar/img12.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster2">
            <a>
              <img
                src="images/avatar/img13.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster1">
            <a>
              <img
                src="images/avatar/img14.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow1">
            <a>
              <img
                src="images/avatar/img15.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow2">
            <a>
              <img
                src="images/avatar/img16.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster">
            <a>
              <img
                src="images/avatar/img17.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster3">
            <a>
              <img
                src="images/avatar/img18.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow5">
            <a>
              <img
                src="images/avatar/img19.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow1">
            <a>
              <img
                src="images/avatar/img20.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
