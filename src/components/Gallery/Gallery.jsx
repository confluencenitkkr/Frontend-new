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
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440372/public/images/edu2onozhtxwh2l8ulec.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440374/public/images/t80phroos9lcj3xqixp6.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow2">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440376/public/images/uvfqr2s34kvqbodrqjta.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440376/public/images/whkn0lubec41nbrlqshp.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow3">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440377/public/images/ydlv9fbrpxrowz44oxgw.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper faster">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440372/public/images/cwfaf2lylypzqilnxlva.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow4">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440372/public/images/iwrxajblwqupwojirfnj.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow5">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440372/public/images/ffvsqimsseajngf1xasv.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow2">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440380/public/images/kd8jesodilkho5o8u0fy.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster1">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440381/public/images/nm903tdtgm99st7o7pu2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow2">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440379/public/images/knacivoyylzfkjfoqr3o.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow3">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440382/public/images/tkwfba7vk3yrkg8psbz7.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster2">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440372/public/images/drpifivy2omvlry0d4uy.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow3">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440382/public/images/ilogjaooj51xalh8q9kt.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440385/public/images/mkkoho6my4yonz5j9mpb.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper slow2">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440384/public/images/pnqkjsl5ievzk22f5gnh.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440385/public/images/tydmrb3uj2wbctehrove.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="img_wrapper faster">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440372/public/images/cwfaf2lylypzqilnxlva.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="img_wrapper slow">
            <a>
              <img
                src="https://res.cloudinary.com/dryfxhged/image/upload/v1665440377/public/images/ydlv9fbrpxrowz44oxgw.jpg"
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
