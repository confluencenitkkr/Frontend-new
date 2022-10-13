import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Events.css";
import eventsActions from "../../actions/events.Actions";
import { Modal } from "reactstrap";

const Events = (props) => {
  let { id } = useParams();
  // const [description, setDescription] = useState("")

  let data = props.data;
  console.log(data);

  return (
    //
    <Modal
      isOpen={props.showModal}
      toggle={props.showHandle}
      className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
    >
      {/* <div className="auth-modal-wrp" id="modal">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="auth-modal-artwork">
              <div className="event_time">
                {data.date} at {data.time ? data.time : "11:00 AM"}
              </div>
              <img src={data.image} className="poster" alt="" />
              <div className="event_date">
                <div class="month">
                  October {data.date ? data.date.slice(-2) : 22}
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="auth-modal-content">
              <div className="w-100">
                <h2 className="event_name">{data.eventname}</h2>
                <div className="auth-input-wrp" id="event_description">
                  DESCRIPTION
                  {data.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="main_container_event">
        <div className="img_wrapper_event">
          <img src="" alt="" />
          <div className="date_time_event"></div>
        </div>
        <div className="content_wrapper_event">
          <div className="heading_event"></div>
          <div className="content_description_event"></div>
        </div>
      </div>
    </Modal>
  );
};

export default Events;
