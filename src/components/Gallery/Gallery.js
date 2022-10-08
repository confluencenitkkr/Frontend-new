import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState, Component, useEffect } from "react";
import action from "../../actions/events.Actions";
import classes from "./gallery.module.css";
import Navbar from "../../components/hader";

const Gallery = (props) => {
  useEffect(() => {
    let main_container = document.getElementById("gallery_mainContainer");
    main_container.style.background =
      'url("/images/bgMedia/bg.jpg") 50% repeat';
  });

  let img_wrapper_slow = [classes.img_wrapper, classes.slow].join(" ");
  let img_wrapper_slow1 = [classes.img_wrapper, classes.slow1].join(" ");

  let img_wrapper_slow2 = [classes.img_wrapper, classes.slow2].join(" ");

  let img_wrapper_slow3 = [classes.img_wrapper, classes.slow3].join(" ");

  let img_wrapper_slow4 = [classes.img_wrapper, classes.slow4].join(" ");

  let img_wrapper_slow5 = [classes.img_wrapper, classes.slow5].join(" ");

  let img_wrapper_faster = [classes.img_wrapper, classes.faster].join(" ");

  let img_wrapper_faster1 = [classes.img_wrapper, classes.faster1].join(" ");
  let img_wrapper_faster2 = [classes.img_wrapper, classes.faster2].join(" ");
  let img_wrapper_faster3 = [classes.img_wrapper, classes.faster3].join(" ");
   
  return (
    <>
      <Navbar></Navbar>
      <div class={classes.external}>
        <div class={classes.horizontal_scroll_wrapper} id="gallery_mainContainer">
          <div class={img_wrapper_slow}>
            <a
              href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img1.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={classes.img_wrapper}>
            <a
              href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img2.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={img_wrapper_slow2}>
            <a
              href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img3.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={classes.img_wrapper}>
            <a
              href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img4.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={img_wrapper_slow3}>
            <a
              href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img5.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={img_wrapper_faster1}>
            <a
              href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img6.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={img_wrapper_slow4}>
            <a
              href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img7.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={classes.img_wrapper}>
            <a
              href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img8.jpg"
                alt=""
              />
            </a>
          </div>

          <div class={img_wrapper_slow5}>
            <a
              href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img9.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_faster}>
            <a
              href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img10.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_faster2}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img11.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_slow3}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img12.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_faster2}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img13.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_faster1}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img14.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_slow1}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img15.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_slow2}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img16.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_faster}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img17.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_faster3}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img18.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_slow5}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img19.jpg"
                alt=""
              />
            </a>
          </div>
          <div class={img_wrapper_slow1}>
            <a
              href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/Gallery/img20.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* <p class="scroll-info"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" ><path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"/></svg></span> Try scrolling down</p> */}
      </div>
    </>
  );
};

export default Gallery;
