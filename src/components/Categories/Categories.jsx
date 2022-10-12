import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import "../../styles/Categories.css";
import "../../styles/Developers.css";
import data from "../../config/usaState.json";
import eventsActions from "../../actions/events.Actions";
import logo from "../../styles/images/photog.jpg";


const Categories = () => {
  const [dataa, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [club, setClub] = useState("");

  useEffect(() => {
      let main_container = document.getElementById("category_main_container");
      main_container.style.background =
        'url("/images/bgMedia/bg.jpg") 50% repeat';
    }, []);

  const optionMaker = (arr) => {
    let data = [];
    arr.map((e) => {
      data.push({
        value: e,
        label: e,
      });
    });
    return data;
  };
  const handleChange = (newValue, actionMeta) => {
    console.log(newValue);
    setClub(newValue.label);
  };
  const history = useNavigate();
  useEffect(() => {
    setLoad(true);
    fetch();
  }, []);
  const fetch = () => {
    let text = "";
    eventsActions.getEvent(text, (err, res) => {
      if (err) {
      } else {
        setData(res.data);
        setLoad(false);
        console.log(res);
      }
    });
  };
  const fetch1 = (text) => {
    console.log(text);
    eventsActions.Search(text, (err, res) => {
      if (err) {
      } else {
        setData(res.data);
        console.log(res);
      }
    });
  };
  const viewEvent = (id) => {
    history(`/EventView/${id}`);
  };
  return (
    <>
      <section class="" id="category_main_container">
        <div class="container categories-page">
          <div class="row mt-4">
            <div class="col-lg-6">
              <div class="common-head">
                <h2 className="font-head">
                  Confluence Events
                </h2>
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
                    console.log(e.target.value);
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
            <div
              class="accordion container py-5"
              id="accordionExample"
            >
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
                  return (
                    <div
                      class="col-xl-3 col-sm-6 mb-5 card_container"
                      style={{ cursor: "pointer" }}
                      onClick={(a) => {
                        a.preventDefault();
                        viewEvent(e._id);
                      }}
                    >
                      <Tilt
                        className="parallax-effect"
                        glareMaxOpacity={0.9}
                        tiltMaxAngleX={30}
                        tiltMaxAngleY={30}
                        perspective={800}
                        gyroscope={true}
                        transitionSpeed={1000}
                      >
                        {/* <div className="card_container_wrapper"></div> */}
                        {/* <div class="event-list"> */}
                        <img
                          src={e.image}
                          alt=""
                          width="100"
                          className="heloo"
                        />
                        <img src={logo} alt="" className="inner-element" />
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
