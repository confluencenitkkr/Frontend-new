import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import "../../styles/team.css";
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
import 'swiper/css';

// // import { Navigation } from "swiper";
// import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"

import teamConflu from "../../styles/images/Team_conflu.png";

const Card = (props) => {
  let cname=props.copy;
  // console.log(cname.toString())
  // console.log()
  //  console.log(item[cname.toString()],"heloo")
   
  return (
    <div className="team_club_outer" onClick={(e)=>{
      e.preventDefault();
      console.log("onclick")
      props.changeTeam(item[cname.toString()]);

    }}>
      <img class="material-icons" src={props.icon} alt="" />
      <div className="team_club_name">
      <p>{props.copy}</p>
      </div>
    </div>
  );
};
const items = [
  {
    clubname: "photog",
    imageurl:
      image2,
  },
  {
    clubname: "Elad",
    imageurl:
     image4,
  },
  {
    clubname: "Hlad",
    imageurl:
      image7,
      },
  {
    clubname: "Colours",
    imageurl:
     image3,
  },
  {
    clubname: "FineArts",
    imageurl:
      image5,
  },
  {
    clubname: "HTC",
    imageurl:
      image6,
  },
  {
    clubname: "AVA",
    imageurl:
      image8,
  },
  {
    clubname: "Spic",
    imageurl:
      image9,
  },
  {
    clubname: "MAD",
    imageurl:
     image11,
  },
  {
    clubname: "Sponsy",
    imageurl:
      image10,
  },
];
const Team = () => {
  // const [key, setKey] = useState("Photog");
  // const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(items);
  const [teamData ,setData]=useState([])
  useEffect(()=>{
    setData(item["photog"]);
  },[])
  // const [indexS,setIndex]=useState[0];
  // const setindexF=(data)=>{
  //   setIndex(data);
  // }
  function ayuhs(data){
    console.log(data);
    setData(data);

  }

 
  return (
    <>
    <div className="team_section_main">
  <div className="team_section2">
    <div className="team_body">
      <figure className="team_icon-cards mt-3">
        <div className="team_icon-cards__content">
          {
            
            teamData.length>0?teamData.map((item,index)=>{
              return(
                <>
                 
                <div className="team_icon-cards__item d-flex  align-items-center justify-content-center">
                     
               <div className="team_secyimage">
              <img src={item.url} />
              <div className="team_secyname">
                {item.name}
              </div>
              
              </div>
            
            
          </div>
                </>
              )
            }):''
          }
          
          
        </div>
      </figure>
    </div>

  </div>
  <div>
    <div>
  <Swiper
    
    grabCursor={true}
    navigation={true}

    // autoplay={{
    //   delay: 1000,
      
    // }}
    modules={[FreeMode,Autoplay,Navigation]} 
    className="mySwiper"
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
            <SwiperSlide >
            
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
   </div>
  
</>
  );
};

export default Team;
