import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Events.css";
import eventsActions from "../../actions/events.Actions";
import { Modal } from "reactstrap";
import Backdrop from "../../utils/Backdrop/backdrop";

const Events = (props) => {
  let { id } = useParams();
  // const [description, setDescription] = useState("")

  let data = props.data;
  console.log(data);

  return (
    // <Modal
    //   isOpen={props.showModal}
    //   toggle={props.showHandle}
    //   className="authentication-modal modal-dialog modal-dialog-centered modal-lg"
    // >
    //   <div className="auth-modal-wrp" id="modal">
    //     <div className="row">
    //       <div className="col-lg-6 p-0">
    //         <div className="auth-modal-artwork">
    //           <div className="event_time">
    //           </div>
    //           <img src={data.image} className="poster" alt="" />
    //           <div className="event_date">
    //             <div class="month">
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 p-0">
    //         <div className="auth-modal-content">
    //           <div className="w-100">
    //             <h2 className="event_name">{data.eventname}</h2>
    //             <div className="auth-input-wrp" id="event_description">
    //               DESCRIPTION
    //               {data.description}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Modal>

    <>
      <Backdrop
        isBackdrop={props.showModal}
        backdropClicked={props.showHandle}
      />
      <div
        className="modal_events_main_container"
        style={{
          display: props.showModal ? "flex" : "none",
        }}
      >
        <div className="poster_wrapper_event_modal">
          <img
            src={data.image}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/images/bgMedia/default_poster.jpeg";
            }}
          />
        </div>
        <div className="description_wrapper_event_modal">
          <div className="heading_wrapper_event_modal">{data.eventName}</div>
          <div className="detail_wrapper_event_modal" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </>
  );
};

export default Events;
