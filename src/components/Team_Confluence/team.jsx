import React, { useState } from 'react';

import '../../styles/team.css';
import image1 from "../../styles/images/conflu.png"
import image2 from "../../styles/images/photog.jpg"
import image3 from "../../styles/images/colours.jpg"
import image4 from "../../styles/images/elad.jpg"
import image5 from "../../styles/images/fa.jpg"
import image6 from "../../styles/images/htc.jpg"
import image7 from "../../styles/images/hlad.jpg"
import image8 from "../../styles/images/ava.jpg"
import image9 from "../../styles/images/spic.jpg"
import image10 from "../../styles/images/sponsi.jpg"
import image11 from "../../styles/images/mad.jpg"
import user from "../../styles/images/user.png"

import teamConflu from '../../styles/images/Team_conflu.png' 

const Team = () => {

  const [key, setKey] = useState("Photography")

  const clubInfo = {
    "Photography": [
      {
        url: "https://i.ibb.co/4pCDJSL/Vamsi-Naidu-Duvvana-4124.jpg",
        name: "Vamsi Naidu Duvvana",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/XxD4c0w/Jayant2005-CS1.jpg",
        name: "Jayant Kumar Naik",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/Gp9bKfD/Ishita-Kamboj.jpg",
        name: "Ishita Kamboj",
        designation: "Secretary"
      }
    ],
    "Elad": [
      {
        url: "https://i.ibb.co/DVCF7wT/289-BB563-DB3-A-49-A5-A687-0-FDC1-B4-FE9-C7-apekshita-pandey-1-min.jpg",
        name: "Apekshita Pandey",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/tsSR3FZ/20211104-193058-Nandini-Goel-min.jpg",
        name: "Nandini Goel",
        designation: "Secretary"
      }
    ],
    "Hlad": [
      {
        url: "https://i.ibb.co/zFPcZhM/IMG20211017141427-Rishabh-Mishra-min.jpg",
        name: "Rishabh Mishra",
        designation: "Secretary"
      },
      {
        url: "",
        name: "Shubham Goyal",
        designation: "Secretary"
      },
    ],
    "Colours": [
      {
        url: "",
        name: "Surabh Pandey",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/LJkg2qV/IMG-20210224-171356-Mukul-Kumar.jpg",
        name: "Mukul Kumar",
        designation: "Secretary"
      }
    ],
    "Fine Arts": [
      {
        url: "https://i.ibb.co/sgQ3dz9/20210215-205822-resized-Sparshgarg-min.jpg",
        name: "Sparsh Garg",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/4R5b7K9/IMG-20200206-120422-164-Yashmittal-min.jpg",
        name: "Yash Mittal",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/6JGVwzP/IMG-20220417-WA0010-Priyanka-Raj.jpg",
        name: "Priyanka Raj",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/J7x1rzb/IMG-20220417-130639-Rachit-Keshari.jpg",
        name: "Rachit Keshari",
        designation: "Secretary"
      },
    ],
    "Hikking and Trekking Club": [
      {
        url: "https://i.ibb.co/yBT0wMX/IMG-20220417-WA0006-Mayank-Chauhan.jpg",
        name: "Mayank Chauhan",
        designation: "Secretary"
      }
    ],
    "AVA": [
      {
        url: "https://i.ibb.co/mh93BTd/ME4-6070-ISHAN-MEHRA-2.jpg",
        name: "Ishan Mehra",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/m43vy3M/IMG-20220417-WA0006-ME4-6070-ISHAN-MEHRA.jpg",
        name: "Anmol Dhand",
        designation: "Secretary"
      },
      {
        url: "",
        name: "Jai Kishan",
        designation: "Secretary"
      }
    ],
    "Spicmacy": [
      {
        url: "https://i.ibb.co/HYjY24C/20211211194256-MG-3295-Shubham-Jha-CE5.jpg",
        name: "Shubham Jha",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/NVDqDX8/IMG-20211128-023824-852-Bhanu-Sharma.jpg",
        name: "Bhanu Sharma",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/hD1YM9P/satvik-khandelwal.png",
        name: "Satvik Khandelwal",
        designation: "Secretary"
      }
    ],
    "MAD": [
      {
        url: "",
        name: "Varchasv",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/YkqSzLT/IMG-10341-Toyesh-Saini-min.jpg",
        name: "Toyesh Saini",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/6BKwvQh/IMG-20220326-085003-Aashima-Matharu-min.jpg",
        name: "Aashima Mathura",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/wYQBcRj/IMG20190518122348-Surbhi-Jain-min.jpg",
        name: "Surbhi Jain",
        designation: "Secretary"
      }
    ],
    "Sponsership Committee": [
      {
        url: "https://i.ibb.co/4jLZcmD/IMG20220227131159-01-01-Samyak-Jain.jpg",
        name: "Samyak Jain",
        designation: "Secretary"
      },
      {
        url: "https://i.ibb.co/KybGXps/manish-balot.jpg",
        name: "Manish Balot",
        designation: "Secretary"
      },
      {
        url: "",
        name: "Shiv Nagendra Sharma",
        designation: "Secretary"
      }
    ]
  }

  return (
    <>
      <section class="">
        <div class="container1">
          <div className='teamConfluenceLeft'>
            <div className='teamText'>
              <h1 className='font-head'>Team Confluence</h1>
            </div>
            <div class="menu">
              <input className='input1' type="checkbox" id="toggle" hidden checked />
              <label id="show-menu" for="toggle">
                <div class="btn1 conflu-btn">
                  <i class=""><img class="conflu_logo" src={image1} /></i>

                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image2} class="club_logo" onClick={(e) => { setKey("Photography") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image3} class="club_logo" onClick={(e) => { setKey("Colours") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image4} class="club_logo" onClick={(e) => { setKey("Elad") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image5} class="club_logo" onClick={(e) => { setKey("Fine Arts") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image6} class="club_logo" onClick={(e) => { setKey("Hikking and Trekking Club") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image7} class="club_logo" onClick={(e) => { setKey("Hlad") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image8} class="club_logo" onClick={(e) => { setKey("AVA") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image9} class="club_logo" onClick={(e) => { setKey("Spicmacy") }} /></i>
                </div>

                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image11} class="club_logo" onClick={(e) => { setKey("MAD") }} /></i>
                </div>
                <div class="logoBtn btn1">
                  <i class="material-icons md-36"><img src={image10} class="club_logo" onClick={(e) => { setKey("Sponsership Committee") }} /></i>
                </div>
              </label>
            </div>
          </div>

          <div class="detailsBox">
            <div class="detailsBoxHeading">
              <p> {key} </p>

            </div>
            <div class="details">
              {
                clubInfo[key].map((e) => {
                  return (
                    <div class="teamCard">
                      <img src={e.url === "" ? user : e.url} class="photoo" />
                      <div class="teamCardDesc">
                        <p class="teamCardName">{e.name}</p>
                        <p class="teamCardDesignation">{e.designation}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

    </>
  )
};

export default Team;