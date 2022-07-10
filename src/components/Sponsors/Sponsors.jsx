import React, { useEffect, useState } from "react";
// import { Modal, ModalBody } from "reactstrap";

import "../../styles/Sponsors.css";
import image1 from "../../styles/images/conflu.png";
import eventsActions from "../../actions/events.Actions";

const Sponsors = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = () => {
    eventsActions.getSponsor((err, res) => {
      if (err) {
      } else {
        console.log(res);
        setList(res.data);
      }
    });
  };
  let background =
    "https://raw.githubusercontent.com/ankitk84/confluence-2022/main/sponsor-bursh-1.png";

  const sponsors = [
    {
      name: "Lakshay",
      role: "Title",
      image:
        "https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg",
      redirectURL: "google.com",
    },

    {
      name: "Lakshay",
      role: "Food",
      image:
        "https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg",
      redirectURL: "google.com",
    },
  ];

  let titleSponsor = [];
  let coTitleSponsor = [];
  let otherSponsor = [];

  list.map((e) => {
    if (e.role === "Title") {
      titleSponsor.push(e);
    } else if (e.role === "Co Title") {
      coTitleSponsor.push(e);
    } else {
      otherSponsor.push(e);
    }
  });

  return (
    <>
      <div class="bg-drak py-5">
        <div class="container py-5 downsection">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light font-head">Sponsors</h2>
            </div>
          </div>

          <div class="row text-center">
            {titleSponsor.length !== 0 ? (
              <>
                <div className="sponsor-title">
                  <h1>Title Sponsor</h1>
                </div>
              </>
            ) : (
              <></>
            )}

            {titleSponsor?.map((e) => {
              return (
                <div class="col-xl-3 col-sm-6 mb-5 justify-content-center widthfull">
                  <div class="sponsor-division">
                    <div
                      class="spons-image"
                      style={{ backgroundImage: `url(${background})` }}
                    >
                      <a
                        href={e.redirectURL}
                        type="button"
                        layout="sponsor"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span class="u-visually-hidden">{e.name}</span>
                        <img src={e.image} alt={e.name}></img>
                      </a>
                    </div>
                    <div className="sponsor-name">
                      <h3>{e.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="row text-center">
            {coTitleSponsor.length !== 0 ? (
              <>
                <div className="sponsor-title">
                  <h1>Co-Title Sponsor</h1>
                </div>
              </>
            ) : (
              <></>
            )}

            {coTitleSponsor?.map((e) => {
              return (
                <div class="col-xl-3 col-sm-6 mb-5  justify-content-center widthfull">
                  <div class="sponsor-division">
                    <div
                      class="spons-image"
                      style={{ backgroundImage: `url(${background})` }}
                    >
                      <a
                        href={e.redirectURL}
                        type="button"
                        layout="sponsor"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span class="u-visually-hidden">{e.name}</span>
                        <img src={e.image} alt={e.name}></img>
                      </a>
                    </div>
                    <div className="sponsor-name">
                      <h3>{e.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="row text-center">
            {otherSponsor.length !== 0 ? (
              <>
                <div className="sponsor-title">
                  <h1>Other Sponsors</h1>
                </div>
              </>
            ) : (
              <></>
            )}

            {otherSponsor?.map((e) => {
              return (
                <div class="col-xl-3 col-sm-6 mb-5  ">
                  <div class="sponsor-division">
                    <div
                      class="spons-image"
                      style={{ backgroundImage: `url(${background})` }}
                    >
                      <a
                        href={e.redirectURL}
                        type="button"
                        layout="sponsor"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span class="u-visually-hidden">{e.name}</span>
                        <img src={e.image} alt={e.name}></img>
                      </a>
                    </div>
                    <div className="sponsor-name">
                      <h3>{e.name}</h3>
                      <h4>{e.role} Sponsor</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
