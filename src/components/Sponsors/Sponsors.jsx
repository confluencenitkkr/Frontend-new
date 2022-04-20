import React from 'react';
// import { Modal, ModalBody } from "reactstrap";

import '../../styles/Sponsors.css';
import image1 from "../../styles/images/conflu.png";

const Sponsors = () => {
  let background = "https://raw.githubusercontent.com/ankitk84/confluence-2022/main/sponsor-bursh-1.png"
  return (
    <>
      <div class="bg-drak py-5 ">
        <div class="container py-5 downsection">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">Our Sponsors</h2>
              <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div class="row text-center">
          <div className="sponsor-title">
            <h1>Food Sponsor</h1>
          </div>
          {/* <div className="subSponsor"> */}
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="sponsor-division">
                <div class="spons-image" style={{ backgroundImage: `url(${background})` }}>
                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                    <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                    </img></a>
                </div>
                <div className="sponsor-name">
                  <h3>Name</h3>
                </div>

                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="sponsor-division">
                <div class="spons-image" style={{ backgroundImage: `url(${background})` }}>
                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                    <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                    </img></a>
                </div>
                <div className="sponsor-name">
                  <h3>Name</h3>
                </div>

                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="sponsor-division">
                <div class="spons-image" style={{ backgroundImage: `url(${background})` }}>
                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                    <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                    </img></a>
                </div>
                <div className="sponsor-name">
                  <h3>Name</h3>
                </div>

                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="sponsor-division">
                <div class="spons-image" style={{ backgroundImage: `url(${background})` }}>
                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                    <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                    </img></a>
                </div>
                <div className="sponsor-name">
                  <h3>Name</h3>
                </div>

                </div>
            </div>
            
            
          {/* </div> */}

           

          </div>





          <div class="row text-center">
          <div className="sponsor-title">
            <h1>Drinks Sponsor</h1>
          </div>
          <div class='subSponsor'>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="sponsor-division">
                <div class="spons-image" style={{ backgroundImage: `url(${background})` }}>
                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                    <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                    </img></a>
                </div>
                <div className="sponsor-name">
                  <h3>Name</h3>
                </div>

                </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    </>

  )
};

export default Sponsors;

