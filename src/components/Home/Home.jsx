import React, { useEffect, useState } from "react";
import "../../styles/Home.css";

const Home = () => {

  return (
    <>
      <main className="home_main_main">
        <img
          src="/images/bgMedia/circle.png"
          alt=""
          id="main_container_cirle"
          className="home_circle_img_pro"
        />
        <div id="text">
          <h1>
            <div className="first_home">A</div>
            <div className="second_home" id="offset">
              Shimmering
            </div>
            <div className="third_home">Soiree</div>
          </h1>
        </div>

        <div className="radio_wrapper_home">
          <img src="/images/bgMedia/radio.png" alt="" className="radio_radio"/>
          <img src="/images/bgMedia/table.png" alt="" className="radio_table"/>
        </div>
      </main>
    </>
  );
};

export default Home;
