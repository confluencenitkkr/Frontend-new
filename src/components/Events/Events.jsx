import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import '../../styles/Events.css';
import eventsActions from "../../actions/events.Actions";
const Events = (props) => {
   let { id } = useParams();
   const [data,setData]=useState([]);
const image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
  useEffect(()=>{
    fetch();
  },[])
  const  fetch=()=>{
    console.log(id)
    eventsActions.getEventId(id,(err,res)=>{
      if(err){

      }else{
        console.log(res.data);
        setData(res.data);
      }
    })

  }
  return (
    <div class="page-event">
  <div class="cover">
    <div class="heading">events</div>
  </div>
  <div class="container">
    <div class="upcoming-sec">
      <div class="heading">Confluence Events</div>
    </div>
    <div class="upcoming-event-list">
      <div class="event-block">
        <div class="row">
          <div class="col-lg-2 sec-1">
            <table>
              <tr>
                <td>
                  <div class="month">April</div>
                  <div class="month-date-devider"></div>
                  <div class="date">{data.date?data.date.slice(-2):22}</div>
                </td>
                <td class="title">{data.eventName}</td>
              </tr>
            </table>
          </div>
          <div class="col-lg-5 sec-2">
            <img src={image}/>
          </div>
          <div class="col-lg-5 sec-3">
            <div class="title">{data.eventName}</div>
            <div class="venue">
              <table>
                <tr>
                  <td><i class="fa fa-map-marker"></i></td>
                  <td>
                    <div>{data.venue}</div>
                    <div class="dim-color">
                      {/* <a href="https://www.google.co.in" target="blank">Get Directions</a> */}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="time">
              <table>
                <tr>
                  <td><i class="fa fa-clock-o"></i></td>
                  <td>
                    <div>{data.date} at {data.time?data.time:"11:00 AM"}</div>
                    <div data-livestamp="1517054400" class="dim-color"></div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="sort-story"> cooridnator:  {data.cooridnatorName} /  {data.cooridnatorName2}  <br/>
            phone No:  {data.cooridnatorNumber} /  {data.cooridnatorNumber}<br/>

             </div>
            <div class="group-of-btn">
              <a target="blank" class="btn book-ticket" onClick={() =>{}}>Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="upcoming-event-list">
      <div class="event-block">
        <div class="row">
          {/* <div class="col-lg-1 sec-1">
            <table>
              <tr>
                <td>
                  <div class="month"></div>
                  <div class="month-date-devider"></div>
                  <div class="date"></div>
                </td>
                <td class="title">Description</td>
              </tr>
            </table>
          </div> */}
          <div class="col-lg-6 sec-3">
          <div class="title">Description</div>
            <div class="venue">
              <table>
                <tr>
                  <td><i class="fa fa-map-marker"></i></td>
                  <td>
                    <div>Description</div>
                    <div class="dim-color">
                      <h1></h1>

                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="time">
              <table>
                <tr>
                  <td><i class="fa fa-clock-o"></i></td>
                  <td>
                    <div></div>
                    <div data-livestamp="1517054400" class="dim-color"></div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="sort-story">
              {data.description}

                  </div>
            {/* <div class="group-of-btn">
              <a href="https://www.google.com" target="blank" class="btn book-ticket">Book Your Entry Pass</a>
            </div>           */}
            </div>
          <div class="col-lg-6 sec-3">
            <div class="title">{data.eventName}</div>
            <div class="venue">
              <table>
                <tr>
                  <td><i class="fa fa-map-marker"></i></td>
                  <td>
                    <div>Rule</div>
                    <div class="dim-color">
                      <h1></h1>
                      <h1></h1>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="time">
              <table>
                <tr>
                  <td><i class="fa fa-clock-o"></i></td>
                  <td>
                    <div></div>
                    <div data-livestamp="1517054400" class="dim-color"></div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="sort-story"><p>{
              /* data.rule?(data.rule).replaceAll(/\n/g, "<br />"):console.log("data.rule is null") */
              data.rule && data.rule.split("\n").map((e) => {
                return (
                  <p>{e}</p>
                )
              })
            }</p>
</div>
            {/* <div class="group-of-btn">
              <a href="https://www.google.com" target="blank" class="btn book-ticket">Book Your Entry Pass</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )  
};

export default Events;