import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import classes from "../../styles/team.module.css";
import image1 from "../../styles/images/conflu.png";
import image2 from "../../styles/images/photo.jpg";
import image3 from "../../styles/images/colours.jpg";
import image4 from "../../styles/images/elad.jpg";
import image5 from "../../styles/images/fa.jpg";
import image6 from "../../styles/images/htc.jpg";
import image7 from "../../styles/images/hlad.jpg";
import image8 from "../../styles/images/ava.jpg";
import image9 from "../../styles/images/spic.jpg";
import image10 from "../../styles/images/sponsi.jpg";
import image11 from "../../styles/images/mad.jpg";
import user from "../../styles/images/user.png";
import item from "./teamcard";
import "swiper/css";

import teamConflu from "../../styles/images/Team_conflu.png";

const Card = (props) => {
  let cname = props.copy;

  return (
    <div
      className={classes.team_club_outer}
      onClick={(e) => {
        e.preventDefault();
        console.log("onclick");
        props.changeTeam(item[cname.toString()]);
      }}
    >
      <img class="material-icons" src={props.icon} alt="" />
      <div className={classes.team_club_name}>
        <p>{props.copy}</p>
      </div>
    </div>
  );
};

const items = [
  {
    clubname: "photog",
    imageurl: image2,
  },
  {
    clubname: "Elad",
    imageurl: image4,
  },
  {
    clubname: "Hlad",
    imageurl: image7,
  },
  {
    clubname: "Colours",
    imageurl: image3,
  },
  {
    clubname: "FineArts",
    imageurl: image5,
  },
  {
    clubname: "HTC",
    imageurl: image6,
  },
  {
    clubname: "AVA",
    imageurl: image8,
  },
  {
    clubname: "Spic",
    imageurl: image9,
  },
  {
    clubname: "MAD",
    imageurl: image11,
  },
  {
    clubname: "Sponsy",
    imageurl: image10,
  },
];

const Team = () => {
  const [carouselItems, setCarouselItems] = useState(items);
  const [teamData, setData] = useState(item['photog']);

  // You can change global variables here:
  let radius = 240; // how big of the radius
  let odrag, ospin, aImg, aEle, ground;

  useEffect(() => {
    setTimeout(init, 0);

    rotationHandler();
  }, [teamData]);

  function ayuhs(data) {
    setData(data);
  }

  const rotationHandler = () => {
    odrag = document.getElementById("drag_container");
    ospin = document.getElementById("spin_container");
    aImg = ospin.getElementsByTagName("img");
    aEle = [...aImg];

    // Size of ground - depend on radius
    radius = getRadius(aEle.length);

    ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";
  };

  const init = (delayTime) => {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  };

  const getRadius = (val) => {
    switch (val) {
      case 2:
        return "90";
      case 3:
        return "150";
      case 4:
        return "180";
      case 5:
        return "220";
    }
  };

  return (
    <div className={classes.main_container}>
      <div id="drag_container" className={classes.drag_container}>
        <div id="spin_container" className={classes.spin_container}>
          {
            teamData.map((data, index) => {
              return (
                <img src={data.url} key={index}/>
              )
            })
          }
        </div>
        <div id="ground" className={classes.ground}></div>
      </div>
      <div>
          <Swiper
            grabCursor={true}
            navigation={true}
            modules={[FreeMode, Autoplay, Navigation]}
            className={classes.mySwiper}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
          >
            {carouselItems.map((t, index) => {
              return (
                <SwiperSlide>
                  <Card
                    key={t.copy + index}
                    icon={t.imageurl}
                    copy={t.clubname}
                    changeTeam={ayuhs}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    </div>
  );
};

export default Team;
