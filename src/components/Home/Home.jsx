import React, { useEffect, useState } from "react";
import "../../styles/Home.css";

const Home = () => {
  // useEffect(() => {
  //   let main_container = document.getElementById("home_main_container");
  //   main_container.style.background =
  //     'url("/images/bgMedia/bg.jpg") 50% repeat';
  // });

  return (
    <>
      <main className="home_main_main">
        <section class="hero" id="home_main_container">
          {/* <img
            src="/images/bgMedia/homepage.png"
            alt=""
            className="back_img_home"
          /> */}

          {/* <div class="container">
            <div class="row">
              <div class="col-lg-5 col-12 m-auto">
                <div class="hero-text">
                  <h1 class="text-white mb-4"><u class="text-info">Confluence</u> 2022</h1>

                  <div class="d-flex justify-content-center align-items-center">
                        <span class="date-text">July 12 to 18, 2022</span>

                        <span class="location-text">Times Square, NY</span>
                    </div>

                  <a href="#section_2" class="custom-link bi-arrow-down arrow-icon"></a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div class="video-wrap">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              class="custom-video"
            >
              <source src="images/avatar/confluewebsite.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

          {/* <div  className="flickering_home" >
          <div id="text">
            <h1>
              O<span id="offset">P</span>EN
            </h1>
          </div>
          </div> */}
        </section>
      </main>
    </>
  );
};

export default Home;
