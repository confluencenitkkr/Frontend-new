import React, { useState } from 'react';

import '../../styles/Categories.css';
import '../../styles/Developers.css';
import data from "../../config/usaState.json";
const Categories = () => {
  

  let a = 0, b = 0;

  return (
    <>
      <section class="search-result-wrp">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-6">
              <div class="common-head">
                <h2>
                  CONFLUNECE  <span>EVENTS</span>
                </h2>
              </div>
            </div>
          
                <div class="col-lg-6">
                  <div class="search-wrp">
                  
                    <select class="form-select" value=""  placeholder="Club Name"
                  isClearable onClick={e=>{
                    console.log(e.target.value);
                  }}>
  {/* <option value="volvo">select </option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option> */}
  {data.data.map((e,index)=>{
    return (
      <option value={e}>{e}</option>
  )
  })}
</select>
                    <img src="JJN" class="img img-fluid" alt="" />
                  </div>
                </div>
              
          </div>
          <div class=" ">
            <div class="accordion container py-5 downsection" id="accordionExample">
              <div class="row text-center">
              
                 
                      <div class="col-xl-3 col-sm-6 mb-5">
                      <div class=" rounded shadow-sm py-5 px-4"><img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg" alt="" width="100" class="heloo"/>
            <h5 class="mb-0  ">eventName</h5>
            <h5 class="mb-0  ">Venue</h5>
            <span class="small text-uppercase text-muted">club name </span>
          
          </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 mb-5">
                      <div class=" rounded shadow-sm py-5 px-4"><img src="https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo=" alt="" width="100" class="heloo"/>
            <h5 class="mb-0  ">eventName</h5>
            <h5 class="mb-0  ">Venue</h5>
            <span class="small text-uppercase text-muted">club name </span>
            
          </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 mb-5">
                      <div class=" rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="heloo"/>
            <h5 class="mb-0  ">eventName</h5>
            <h5 class="mb-0  ">Venue</h5>
            <span class="small text-uppercase text-muted">club name </span>
            
          </div>
                      </div>
                      <div class="col-xl-3 col-sm-6 mb-5">
                      <div class=" rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="heloo"/>
            <h5 class="mb-0  ">eventName</h5>
            <h5 class="mb-0  ">Venue</h5>
            <span class="small text-uppercase text-muted">club name </span>
            
          </div>
                      </div>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
};

export default Categories;