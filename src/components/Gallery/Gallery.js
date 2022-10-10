import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState, Component, useEffect } from "react";
import action from "../../actions/events.Actions";
import "./gallery.css";
import Navbar from "../../components/hader";

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
                src="images/Gallery/img1.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="images/Gallery/img2.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow2">
            <a>
              <img
                src="images/Gallery/img3.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="images/Gallery/img4.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow3">
            <a>
              <img
                src="images/Gallery/img5.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper faster">
            <a>
              <img
                src="images/Gallery/img6.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow4">
            <a>
              <img
                src="images/Gallery/img7.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="images/Gallery/img8.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow5">
            <a>
              <img
                src="images/Gallery/img9.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster">
            <a>
              <img
                src="images/Gallery/img10.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster2">
            <a>
              <img
                src="images/Gallery/img11.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow3">
            <a>
              <img
                src="images/Gallery/img12.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster2">
            <a>
              <img
                src="images/Gallery/img13.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster1">
            <a>
              <img
                src="images/Gallery/img14.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow1">
            <a>
              <img
                src="images/Gallery/img15.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow2">
            <a>
              <img
                src="images/Gallery/img16.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster">
            <a>
              <img
                src="images/Gallery/img17.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster3">
            <a>
              <img
                src="images/Gallery/img18.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow5">
            <a>
              <img
                src="images/Gallery/img19.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow1">
            <a>
              <img
                src="images/Gallery/img20.jpg"
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
