import React from 'react';
import { Modal, ModalBody } from "reactstrap";

import '../../styles/Sponsors.css';
import image1 from "../../styles/images/conflu.png";

const Sponsors = () => {
let background="https://raw.githubusercontent.com/ankitk84/confluence-2022/main/sponsor-bursh-1.png"
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
       
        <div class="col-xl-3 col-sm-6 mb-5">
         <div class="sponsor-division">
                                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                          <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                                          <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                                           </img></a>
                                         </div></div>
        </div>
        
        <div class="col-xl-3 col-sm-6 mb-5">
        <div class="sponsor-division">
                      <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                              <a href="http://saisonnumerique.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                              <span class="u-visually-hidden">Saisons des cultures numériques</span>
                              <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/7_Saisons-numeriques_logo.jpg" alt="Saisons des cultures numériques">
                          </img>  </a></div>
                  </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="sponsor-division">
                                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                          <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                                          <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                                           </img></a>
                                         </div></div>
        </div>
        
        <div class="col-xl-3 col-sm-6 mb-5">
        <div class="sponsor-division">
                                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                          <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                                          <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                                           </img></a>
                                         </div></div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
        <div class="sponsor-division">
                            
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                <a href="www.bep.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                <span class="u-visually-hidden">BEP</span>
                                <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/17_BEP_logo.png" alt="BEP">
                            </img>  </a></div>
                                </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-5">
        <div class="sponsor-division">
                      <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>      
                                <a href="http://www.trakk.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                  <span class="u-visually-hidden">Trakk</span>
                                  <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/2_Trakk-(noir)_logo.jpg" alt="Trakk">
                              </img>  </a></div></div>
        </div>
  
      </div>
    </div>
    </div>
  {/* </div>
  {/* <section type="sponsors">
                <div class="center">
                    <div class="sponsors-group in-view" in-view="fade-up">
                      <p class="sponsors-title">Partners</p>
                         <div class="sponsors-list" back>
                         
                            <div class="sponsor-division">
                                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                  <a href="http://europe.wallonie.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                      <span class="u-visually-hidden">Europe Wallonia</span>
                                      <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/1_FEDER-Wallonie_logo.jpg" alt="Europe Wallonia">
                                       </img>  </a>
                            </div></div> 
                                
                            <div class="sponsor-division">
                                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                  <a href="http://www.federation-wallonie-bruxelles.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                          <span class="u-visually-hidden">Federation Wallonie Bruxelles</span>
                                          <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/FWB.jpg" alt="Federation Wallonie Bruxelles">
                                           </img></a>
                                         </div></div>
                                         
                            <div class="sponsor-division"> <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                <a href="http://www.wallonie.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                    <span class="u-visually-hidden">Wallonie</span>
                                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/4_Wallonie_logo.jpg" alt="Wallonie">
                                </img> </a>
                            </div></div>

                          <div class="sponsor-division"> <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                          <a href="http://walliforniamusictech.com/fr/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                              <span class="u-visually-hidden">Wallifornia Music Tech</span>
                              <img src="https://www.kikk.be/2017/files/library/Autres/WMT-FULL-10-NB.jpg" alt="Wallifornia Music Tech">
                          </img> </a></div></div>
                
                      <div class="sponsor-division">
                      <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>      
                                <a href="http://www.trakk.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                  <span class="u-visually-hidden">Trakk</span>
                                  <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/2_Trakk-(noir)_logo.jpg" alt="Trakk">
                              </img>  </a></div></div>
                       <div class="sponsor-division"><div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                   <a href="https://www.digitalwallonia.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                                    <span class="u-visually-hidden">ADN</span>
                                    <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/3_ADN_logo.png" alt="ADN">
                                </img></a></div></div>
                        
                        <div class="sponsor-division"><div class="spons-image"style={{ backgroundImage: `url(${background})` }}> <a href="www.wbi.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">WBI</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/5_WBI_logo.png" alt="WBI">
                        </img>  </a></div></div>
                
                  <div class="sponsor-division">
                      <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                              <a href="http://saisonnumerique.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                              <span class="u-visually-hidden">Saisons des cultures numériques</span>
                              <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/7_Saisons-numeriques_logo.jpg" alt="Saisons des cultures numériques">
                          </img>  </a></div>
                  </div>
                
            <div class="sponsor-division">
            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://www.theatredenamur.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Théâtre de Namur</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/8_The-a-tre-de-Namur_logo.png" alt="Théâtre de Namur">
                        </img> </a></div></div>
            
                    <div class="sponsor-division"><div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="http://www.ville.namur.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Ville de Namur </span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/9_Ville-de-Namur-(bleu)_logo.jpg" alt="Ville de Namur ">
                        </img>  </a></div></div>  
                        
                        
                        <div class="sponsor-division">  
                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://formation-cepegra.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Cepegra</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/Cepegra-(square)_logo.jpg" alt="Cepegra">
                        </img>  </a></div></div>
                        
                        
                <div class="sponsor-division">
                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="http://www.confluent.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Confluent culture</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/10_Confluent-culture_logo.jpg" alt="Confluent culture">
                        </img> </a></div></div>
                        
                        
                <div class="sponsor-division">
                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://new.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Namur capitale</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/11_Namur-capitale_logo.jpg" alt="Namur capitale">
                        </img>  </a></div>
                </div>
                
                <div class="sponsor-division">
                <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://www.namurtourisme.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Visit Namur</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/12_Visit-Namur_logo.jpg" alt="Visit Namur">
                        </img>  </a></div>
                </div>
                
                        <div class="sponsor-division">
                        <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://www.province.namur.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Province de Namur</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/13_Province-de-Namur_logo.jpg" alt="Province de Namur">
                        </img>  </a></div>
                        </div>
                        
                        
                        <div class="sponsor-division">
            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="http://www.smartgastronomy.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">SGL</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/15_SGL_logo.jpg" alt="SGL">
                        </img>  </a></div>
                        
                        
                        </div> <div class="sponsor-division">
                        <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="https://www.vedett.com/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Vedett</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/16_Vedett-Blond_logo.jpg" alt="Vedett">
                        </img>  </a></div>
                            </div>


                            <div class="sponsor-division">
                            
                        <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="www.bep.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">BEP</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/17_BEP_logo.png" alt="BEP">
                        </img>  </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="http://spw.wallonie.be/" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">SPW</span>
                            <img src="https://www.kikk.be/2017/files/library/Sponsors/02_Founding-partners/04_Media-partners/03_Partners/05_Friends/03_Partners/19_SPW_logo.jpg" alt="SPW">
                        </img> </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="http://trobon.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Trôbon!</span>
                            <img src="https://www.kikk.be/2017/files/library/LOGO_TROBON.jpg" alt="Trôbon!">
                        </img> </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="http://www.freecaster.lu" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Freecaster</span>
                            <img src="https://www.kikk.be/2017/files/library/14633635_10154876466367262_8281735043266449370_o-Inverse.png" alt="Freecaster">
                        </img>  </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="http://www.fortyeight.tv" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Forty Eight</span>
                            <img src="https://www.kikk.be/2017/files/library/LOGO-48.jpg" alt="Forty Eight">
                        </img>  </a></div>
                            </div>
                        
                        
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://partner.volvocars.be/fr/sonama" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Volvo Sonama</span>
                            <img src="https://www.kikk.be/2017/files/library/Volvo.png" alt="Volvo Sonama">
                        </img>  </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                                        <a href="https://www.kickstarter.com" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Kickstarter</span>
                            <img src="https://www.kikk.be/2017/files/library/Kicksarter.png" alt="Kickstarter">
                        </img>  </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="https://www.stanleystella.com" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Stanley &amp; Stella</span>
                            <img src="https://www.kikk.be/2017/files/library/Logo_STST_2K17-OK.png" alt="Stanley &amp; Stella">
                        </img>  </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="http://www.jetimport.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Jet Import</span>
                            <img src="https://www.kikk.be/2017/files/library/1280px-Red_Bull.svg.png" alt="Jet Import">
                        </img>  </a></div>
                            </div>
                            
                            
                            <div class="sponsor-division">
                            <div class="spons-image"style={{ backgroundImage: `url(${background})` }}>
                            <a href="http://www.jetimport.be" type="button" layout="sponsor" target="_blank" rel="noreferrer noopener">
                            <span class="u-visually-hidden">Jet Import</span>
                            <img src="https://www.kikk.be/2017/files/library/Bionade_Logo.png" alt="Jet Import">
                        </img> </a></div>
                            </div>                 
                          </div>
          </div> 
  </div></section> */}


      </> 

  )
};

export default Sponsors;

            
  //   <Modal
  //   isOpen={true}
  //   toggle={() => {
      
  //   }}
  //   className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
  // >
  //   <div className="auth-modal-wrp">
  //     <div className="row">
  //     <div className="col-lg-6 p-0">
  //             <div className="auth-modal-content">
  //               <div className="w-100">
  //                 <div className="auth-profile-pic-wrp">
  //                 <div className="profile-pic-chooose">
                                
  //                                 <img
  //                                   src={`${getProfilePic==""? "./assets/img/profile-picture-icon.png": getProfilePic}`}
  //                                   className="img img-fluid"
  //                                   alt=""
  //                                 />
  //                                 <h6>Profile Picture</h6>
  //                                 <input
  //                                   name="profilePic"
  //                                   className="hide-input"
  //                                   type="file"
  //                                   onChange={(e) => {
  //                                     // uploadFilesUsingMulter(e, 1);
  //                                   }}
  //                                 />
  //                                 </div>
  //                 </div>
  //                 <div className="auth-input-wrp">
  //                   <div className="row">
  //                     <div className="col-lg-6">
  //                       <label for="">First Name</label>
  //                       <input
  //                         type="text"
  //                         // onChange={onChangeUser}
  //                         className="form-control"
  //                         name="firstName"
  //                         placeholder=""
  //                       />
  //                     </div>
  //                     <div className="col-lg-6">
  //                       <label for="">Last Name</label>
  //                       <input
  //                         type="text"
  //                         // onChange={onChangeUser}
  //                         className="form-control"
  //                         name="lastName"
  //                         placeholder=""
  //                       />
  //                     </div>
  //                     <div className="col-lg-12">
  //                       <label for="">Email ID</label>
  //                       <input
  //                         type="email"
  //                         className="form-control"
  //                         onChange={onChangeUser}
  //                         name="email"
  //                         placeholder=""
  //                       />
  //                     </div>
  //                     <div className="col-lg-12">
  //                       <label for="">Mobile No.</label>
  //                       <input
  //                         type="string"
  //                         className="form-control"
  //                         name="mobileNo"
  //                         // onChange={onChangeUser}
  //                         placeholder=""
  //                       />
  //                     </div>
  //                   </div>
  //                   <button
  //                     type="submit"
  //                     className="btn auth-main-btn"
  //                     onClick={() => {
  //                       // setmodalstateno(7);
  //                       // generateOtpUser();
  //                     }}
  //                   >
  //                     Create Account
  //                   </button>
  //                 </div>
  //                 <h5>
  //                   By signing up , you agree to{" "}
  //                   <a href="javascript:;">terms and condition</a>{" "}
  //                   and Borhan <a href="javascript:;">policy</a>
  //                 </h5>
  //               </div>
  //             </div>
  //           </div>
     
  //     </div>
  //   </div></Modal>