import React, { useState } from "react";

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

import teamConflu from "../../styles/images/Team_conflu.png";

const Team = () => {
  const [key, setKey] = useState("Photography");

  const clubInfo = {
    Photography: [
      {
        url: "https://i.ibb.co/4pCDJSL/Vamsi-Naidu-Duvvana-4124.jpg",
        name: "Vamsi Naidu Duvvana",
        designation: "Secretary",
      },
      {
        url: "https://i.ibb.co/XxD4c0w/Jayant2005-CS1.jpg",
        name: "Jayant Kumar Naik",
        designation: "Secretary",
      },
      {
        url: "https://i.ibb.co/Gp9bKfD/Ishita-Kamboj.jpg",
        name: "Ishita Kamboj",
        designation: "Secretary",
      },
    ],
    Elad: [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689237/Conflu%20Secy/ELAD/IMG-20191229-WA0033_-_saloni_vij_dopidc.jpg",
        name: "Saloni Vij",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689237/Conflu%20Secy/ELAD/Harsh_kumar_vmati7.jpg",
        name: "Harsh Kumar",
        designation: "Secretary",
      },
    ],
    Hlad: [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689238/Conflu%20Secy/HLAD/Parveen_Kumar_-_kashish_bmeq3j.jpg",
        name: "Parveen Kumar",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689238/Conflu%20Secy/HLAD/Kashish_-_kashish_rljzn9.jpg",
        name: "Kashish",
        designation: "Secretary",
      },
    ],
    Colours: [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689243/Conflu%20Secy/Colours/shika_Saha_j62taf.jpg",
        name: "Ishika Saha",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689236/Conflu%20Secy/Colours/Abhinav_Pandey_flupyn.jpg",
        name: "Abhinav Pandey",
        designation: "Secretary",
      },
    ],
    "Fine Arts": [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689247/Conflu%20Secy/FA/Picsart_22-07-09_20-46-39-104_-_harshit_kumar_rph9sc.jpg",
        name: "",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689238/Conflu%20Secy/FA/Radhika_lkvbex.jpg",
        name: "Radhika Chaudhari",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689241/Conflu%20Secy/FA/IMG_20220218_111746824_-_harshit_kumar_eehhzq.jpg",
        name: "",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689238/Conflu%20Secy/FA/IMG-20220709-WA0009_-_harshit_kumar_d7nu3v.jpg",
        name: "",
        designation: "Secretary",
      },
    ],
    "Hikking and Trekking Club": [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689239/Conflu%20Secy/HTC/Paritosh_Photo_-_Paritosh_Singh_q8vm4q.jpg",
        name: "Paritosh Singh",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689240/Conflu%20Secy/HTC/MoniKa_Photo_-_Paritosh_Singh_mkcmzl.jpg",
        name: "Monika Jangid ",
        designation: "Secretary",
      },
    ],
    AVA: [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689235/Conflu%20Secy/AVA/sachin_qf4csn.jpg",
        name: "Sachin",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689237/Conflu%20Secy/AVA/Prince_yams6i.jpg",
        name: "Prince",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689236/Conflu%20Secy/AVA/tejas_-_Prince_a2qrtm.jpg",
        name: "Tejas Bansal",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689236/Conflu%20Secy/AVA/Harshit_-_Prince.JPG_qal0bq.jpg",
        name: "Harshit",
        designation: "Secretary",
      },
    ],
    Spicmacy: [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689260/Conflu%20Secy/Spic/20220208_222615_-_Gopikrishnan_Satheesh_rlnahp.jpg",
        name: "Gopikrishnan Satheesh",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689244/Conflu%20Secy/Spic/IMG-20220709-WA0008_-_Gopikrishnan_Satheesh_b8zwk6.jpg",
        name: "Amisha Jangir",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689244/Conflu%20Secy/Spic/IMG-20220709-WA0009_-_Gopikrishnan_Satheesh_aq7lmd.jpg",
        name: "Aarushi Hans",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689246/Conflu%20Secy/Spic/Screenshot_20220710-000847_Gallery_-_Gopikrishnan_Satheesh_tihtie.jpg",
        name: "Kshitij Meshram",
        designation: "Secretary",
      },
    ],
    MAD: [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689241/Conflu%20Secy/MAD/Satvik_-_ME_B8_6001_Mukund_Kumar_Malviya_ewd4sp.jpg",
        name: "Satvik Shukla",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689241/Conflu%20Secy/MAD/Mukund_-_ME_B8_6001_Mukund_Kumar_Malviya_c68tyi.jpg",
        name: "Mukund Kumar Malviya",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689251/Conflu%20Secy/MAD/Shraddha_-_ME_B8_6001_Mukund_Kumar_Malviya_spgrw9.jpg",
        name: "Shraddha Jain",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689240/Conflu%20Secy/MAD/Mohit_-_ME_B8_6001_Mukund_Kumar_Malviya_yuyf1e.jpg",
        name: "Mohit Kumar",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689242/Conflu%20Secy/MAD/Vipin_Yadav_-_ME_B8_6001_Mukund_Kumar_Malviya_tv8hdp.jpg",
        name: "Vipin Yadav",
        designation: "Secretary",
      },
    ],
    "Sponsership Committee": [
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689246/Conflu%20Secy/Sponsorship/aryan.JPG_mhqu45.jpg",
        name: "Aryan Kabra",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689247/Conflu%20Secy/Sponsorship/IMG_8458_-_Priyam_Thakuria.JPG_sxdwlz.jpg",
        name: "",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689248/Conflu%20Secy/Sponsorship/umang_vpflu9.jpg",
        name: "Umang Jain",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689266/Conflu%20Secy/Sponsorship/IMG20220703184552_-_Priyam_Thakuria_brz5vj.jpg",
        name: "",
        designation: "Secretary",
      },
      {
        url: "https://res.cloudinary.com/dmwoknpni/image/upload/v1659689273/Conflu%20Secy/Sponsorship/IMG_20220709_165645_-_Priyam_Thakuria_mpz9wg.jpg",
        name: "",
        designation: "Secretary",
      },
    ],
  };

  return (
    <>
      <section class="">
        <div class="container1">
          <div className="teamConfluenceLeft">
            <div className="teamText">
              <h1 className="font-head">Team Confluence</h1>
            </div>
            <div class="menu">
              <input
                className="input1"
                type="checkbox"
                id="toggle"
                hidden
                checked
              />
              <label id="show-menu" for="toggle">
                <div class="btn1 conflu-btn">
                  <i class="">
                    <img class="conflu_logo" src={image1} />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image2}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Photography");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image3}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Colours");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image4}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Elad");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image5}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Fine Arts");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image6}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Hikking and Trekking Club");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image7}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Hlad");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image8}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("AVA");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image9}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Spicmacy");
                      }}
                    />
                  </i>
                </div>

                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image11}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("MAD");
                      }}
                    />
                  </i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36">
                    <img
                      src={image10}
                      class="club_logo"
                      onClick={(e) => {
                        setKey("Sponsership Committee");
                      }}
                    />
                  </i>
                </div>
              </label>
            </div>
          </div>

          <div class="detailsBox">
            <div class="detailsBoxHeading">
              <p> {key} </p>
            </div>
            <div class="details">
              {clubInfo[key].map((e) => {
                return (
                  <div class="teamCard">
                    <img src={e.url === "" ? user : e.url} class="photoo" />
                    <div class="teamCardDesc">
                      <p class="teamCardName">{e.name}</p>
                      <p class="teamCardDesignation">{e.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
