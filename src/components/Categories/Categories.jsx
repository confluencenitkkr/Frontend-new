import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import "../../styles/Categories.css";
import "../../styles/Developers.css";
import data from "../../config/usaState.json";
import eventsActions from "../../actions/events.Actions";
import logo from "../../styles/images/photog.jpg";
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
import Modal from "../Events/Events";

const Categories = () => {
  const [dataa, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [club, setClub] = useState("");
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    let main_container = document.getElementById("category_main_container");
    main_container.style.background =
      'url("/images/bgMedia/bg.jpg") 50% repeat';

    setLoad(true);

    if(localStorage.getItem("eventData") == null)
    {
      fetch();
    }
    else{
      let d = localStorage.getItem("eventData");
      d = JSON.parse(d);
      setData(d);
      setLoad(false)
    }
  }, []);

  const fetch = () => {
    let text = "";
    eventsActions.getEvent(text, (err, res) => {
      if (err) {
      } else {
        setData(res.data);
        localStorage.setItem("eventData", JSON.stringify(res.data));
        setLoad(false);
      }
    });
  };
  const fetch1 = (text) => {
    eventsActions.Search(text, (err, res) => {
      if (err) {
      } else {
        setData(res.data);
      }
    });
  };

  const showHandler = () => {
    setShow((show) => !show);
  };

  const modalHandler = (e) => {
    showHandler();
    setModalData(e);
  };

  return (
    <>
      <section class="" id="category_main_container">
        <Modal showModal={show} data={modalData} showHandle={showHandler} />
        <div class="container categories-page">
          <div class="row mt-4">
            <div class="col-lg-6">
              <div class="common-head">
                <h2 className="font-head">Confluence Events</h2>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="search-wrp">
                <select
                  class="form-select"
                  value={club}
                  placeholder="Club Name"
                  onChange={(e) => {
                    e.preventDefault();
                    setClub(e.target.value);
                    fetch1(e.target.value);
                  }}
                >
                  <option selected>Select Club</option>
                  {data.data.map((e, index) => {
                    return <option value={e}>{e}</option>;
                  })}{" "}
                </select>

                {/* </select>  
                    {dataa.length > 0 ? (
                <Select
                  placeholder="Club Name"
                  isClearable
                  onChange={handleChange}
                  classNamePrefix="form-select"
                  options={dataa}
                />
              ) : (
                <Select
                  placeholder="cat"
                  isClearable
                  onChange={handleChange}
                  classNamePrefix="form-select"
                  class="form-select"
                  options={[]}
                />
              )} */}
                <img src="JJN" class="img img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class=" ">
            <div class="accordion container py-5" id="accordionExample">
              <div class="row text-center">
                {dataa.length == 0 && load == false ? (
                  <div
                    class="col-xl-3 col-sm-6 mb-5 justify-content-center widthfull"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }}> NO event found</h1>
                  </div>
                ) : (
                  ""
                )}
                {load == true ? (
                  <div
                    class="col-xl-3 col-sm-6 mb-5 justify-content-center widthfull"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }}> LOADING</h1>
                  </div>
                ) : (
                  ""
                )}
                {dataa.map((e, index) => {
                  let image;
                  switch (e.clubName) {
                    case "Photography Club":
                      image = image2;
                      break;
                    case "Music & Dramatics Club":
                      image = image11;
                      break;
                    case "Fine Arts & Modelling":
                      image = image5;
                      break;
                    case "Audio Visual Aids Club":
                      image = image8;
                      break;
                    case "Hiking & trekking Club":
                      image = image6;
                      break;
                    case "Spicmacay":
                      image = image9;
                      break;
                    case "Post Graduate Club":
                      image = image1;
                      break;
                    case "Lit & Deb Club English/Hindi":
                      image = image7;
                      break;
                    case "Colors":
                      image = image3;
                      break;
                  }
                  return (
                    <div
                      class="col-xl-3 col-sm-6 mb-5 card_container"
                      style={{ cursor: "pointer" }}
                      onClick={() => modalHandler(e)}
                    >
                      <Tilt
                        className="parallax-effect"
                        glareMaxOpacity={0.9}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={800}
                        // gyroscope={true}
                        transitionSpeed={1000}
                      >
                        {/* <div className="card_container_wrapper"></div> */}
                        <img
                          src={e.image}
                          alt=""
                          width="100"
                          className="heloo"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src =
                              "/images/bgMedia/default_poster.jpeg";
                          }}
                        />
                        <img
                          src={image ? image : "/images/bgMedia/event_logo.png"}
                          alt=""
                          className="inner-element"
                        />
                        <div class="card-name ">{e.eventName}</div>
                      </Tilt>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
