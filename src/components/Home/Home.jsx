import React, { useEffect, useState } from "react";

import '../../styles/Home.css';
import bg from "../../styles/images/photo.jpg"
import "../../styles/templatemo-leadership-event.css"



const Home = () => {




    return (
        <>

            <main>

                <section class="hero" >
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-5 col-12 m-auto">
                                <div class="hero-text">

                                    {/* <h1 class="text-white mb-4"><u class="text-info">Confluence</u> 2022</h1> */}

                                    {/* <div class="d-flex justify-content-center align-items-center">
                        <span class="date-text">July 12 to 18, 2022</span>

                        <span class="location-text">Times Square, NY</span>
                    </div> */}

                                    {/* <a href="#section_2" class="custom-link bi-arrow-down arrow-icon"></a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="video-wrap">
                        <video autoPlay={true} loop={true} muted={true} class="custom-video" >
                            <source src="images/avatar/confluewebsite.mp4" type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>


                <section class="highlight">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="highlight-thumb">
                                    <img src="images/highlight/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg" class="highlight-image img-fluid" alt="" />

                                    <div class="highlight-info">
                                        <h3 class="highlight-title">2018 Highlights</h3>

                                        <a href="https://www.youtube.com/watch?v=UwAkTLY9-r0&ab_channel=ConfluenceNITKurukshetra" class="bi-youtube highlight-icon"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="highlight-thumb">
                                    <img src="images/highlight/miguel-henriques--8atMWER8bI-unsplash.jpg" class="highlight-image img-fluid" alt="" />

                                    <div class="highlight-info">
                                        <h3 class="highlight-title">2019 Highlights</h3>

                                        <a href="https://www.youtube.com/watch?v=FXyHDBMVAgA" class="bi-youtube highlight-icon"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="highlight-thumb">
                                    <img src="images/highlight/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg" class="highlight-image img-fluid" alt="" />

                                    <div class="highlight-info">
                                        <h3 class="highlight-title">2022 Highlights</h3>

                                        <a href="https://www.youtube.com/watch?v=IZ3SLDNCauQ&t=56s&ab_channel=ConfluenceNITKurukshetra" class="bi-youtube highlight-icon"></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="about section-padding" >
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-10 col-12">
                                <h2 class="mb-4">Our <u class="text-info">Events</u></h2>
                            </div>

                            <div class="col-lg-6 col-12">
                                <h3 class="mb-3">The importance of Leadership Conference in 2022</h3>

                                <p>Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your website. Thank you for choosing TemplateMo website where you can instantly download free CSS templates at no cost.</p>

                                <a class="custom-btn custom-border-btn btn custom-link mt-3 me-3" href="#section_3">Meet Speakers</a>

                                <a class="custom-btn btn custom-link mt-3" href="#section_4">Check out Schedule</a>
                            </div>

                            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</h4>

                                <div class="avatar-group border-top py-5 mt-5">
                                    <img src="images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg" class="img-fluid avatar-image" alt="" />

                                    <img src="images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg" class="img-fluid avatar-image avatar-image-left" alt="" />

                                    <img src="images/avatar/senior-man-white-sweater-eyeglasses.jpg" class="img-fluid avatar-image avatar-image-left" alt="" />

                                    <img src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg" class="img-fluid avatar-image avatar-image-left" alt="" />

                                    <p class="d-inline">20K+ People are attending with us</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="speakers section-padding" >
                    <div class="container">
                        <div class="row">

            <div class="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="speakers-text-info">
                    <h2 class="mb-4" style={{color: "black"}}>Our <u class="text-info">Events</u></h2>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="speakers-thumb">
                                    <img src="images/avatar/startnight.jpg" class="img-fluid speakers-image" alt="" />

                                    <small class="speakers-featured-text">Featured</small>

                                    <div class="speakers-info">

                                        <h5 class="speakers-title mb-0">Star Night </h5>

                                        <p class="speakers-text mb-0"></p>

                                        {/* <ul class="social-icon">
                            <li><a href="#" class="social-icon-link bi-facebook"></a></li>

                            <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                            <li><a href="#" class="social-icon-link bi-google"></a></li>
                        </ul> */}
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-12">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/kavjli.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Kavyanjali</h5>

                                                {/* <p class="speakers-text mb-0">Event Planner</p>

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-facebook"></a></li>

                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>
                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/folkdance.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Folk Dance</h5>

                                                {/* <p class="speakers-text mb-0">Startup Coach</p>

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/chore.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Choreo Night</h5>

                                                {/* <p class="speakers-text mb-0">Event Manager</p>

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-facebook"></a></li>

                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/dance.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Groove Armada</h5>

                                                {/* <p class="speakers-text mb-0">Top Level Speaker</p>

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="schedule section-padding" id="section_4">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 col-12">
                                <h2 class="mb-5 text-center">Next <u class="text-info">Schedules</u></h2>

                                <nav>
                                    <div class="nav nav-tabs align-items-baseline" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="nav-DayOne-tab" data-bs-toggle="tab" data-bs-target="#nav-DayOne" type="button" role="tab" aria-controls="nav-DayOne" aria-selected="true">
                                            <h3>
                                                <span>Day One</span>
                                                <small>July 12, 2022</small>
                                            </h3>
                                        </button>

                                        <button class="nav-link" id="nav-DayTwo-tab" data-bs-toggle="tab" data-bs-target="#nav-DayTwo" type="button" role="tab" aria-controls="nav-DayTwo" aria-selected="false">
                                            <h3>
                                                <span>Day Two</span>
                                                <small>July 14, 2022</small>
                                            </h3>
                                        </button>

                                        <button class="nav-link" id="nav-DayThree-tab" data-bs-toggle="tab" data-bs-target="#nav-DayThree" type="button" role="tab" aria-controls="nav-DayThree" aria-selected="false">
                                            <h3>
                                                <span>Day Three</span>
                                                <small>July 16, 2022</small>
                                            </h3>
                                        </button>

                                        <button class="nav-link" id="nav-DayFour-tab" data-bs-toggle="tab" data-bs-target="#nav-DayFour" type="button" role="tab" aria-controls="nav-DayFour" aria-selected="false">
                                            <h3>
                                                <span>Day Four</span>
                                                <small>July 18, 2022</small>
                                            </h3>
                                        </button>
                                    </div>
                                </nav>

                                <div class="tab-content mt-5" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-DayOne" role="tabpanel" aria-labelledby="nav-DayOne-tab">
                                        <div class="row border-bottom pb-5 mb-5">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/fabian-friedrich-JDUVM9_VaZE-unsplash.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">

                                                <h4 class="mb-2">Startup Development Ideas</h4>

                                                <p>You are free to download any HTML CSS template from TemplateMo website. You can use any template for business purposes. You are not allowed to redistribute the downloadable ZIP file on any other template website. Thank you.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Logan Wilson
                                                            <p class="speakers-text mb-0">CEO / Founder</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        9:00 - 9:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        Conference Hall 3
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row border-bottom pb-5 mb-5">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/clayton-cardinalli-JMoFpdqL3XM-unsplash.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">
                                                <h4 class="mb-2">Introduction to Online Businesses</h4>

                                                <p>Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Natalie
                                                            <p class="speakers-text mb-0">Event Planner</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        10:00 - 10:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        100-D Room
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/business-woman-making-presentation-office.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">
                                                <h4 class="mb-2">Bootstrapping Startup</h4>

                                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut consequat purus posuere tortor efficitur, sit amet dignissim libero aliquam.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/senior-man-white-sweater-eyeglasses.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Thomas
                                                            <p class="speakers-text mb-0">Startup Coach</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        11:00 - 11:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        100-B Room
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="nav-DayTwo" role="tabpanel" aria-labelledby="nav-DayTwo-tab">
                                        <div class="row border-bottom pb-5 mb-5">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/people-smiling-while-conference-room.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">

                                                <h4 class="mb-2">Building a famous company</h4>

                                                <p>Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora torquent per conubia.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Isabella
                                                            <p class="speakers-text mb-0">Event Manager</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        9:00 - 9:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        Conference Hall 2
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/jason-goodman-bzqU01v-G54-unsplash.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">
                                                <h4 class="mb-2">Dev Ops life in corporate</h4>

                                                <p>Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Samantha
                                                            <p class="speakers-text mb-0">Top Level Speaker</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        10:00 - 10:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        100-A Room
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="nav-DayThree" role="tabpanel" aria-labelledby="nav-DayThree-tab">
                                        <div class="row border-bottom pb-5 mb-5">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/people-smiling-while-conference-room.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">

                                                <h4 class="mb-2">Maintaining a successful business</h4>

                                                <p>Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Isabella
                                                            <p class="speakers-text mb-0">Event Manager</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        9:00 - 9:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        Conference Hall 1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/jason-goodman-bzqU01v-G54-unsplash.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">
                                                <h4 class="mb-2">Working Life in Corporate Environment</h4>

                                                <p>Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna.</p>

                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="avatar-group d-flex">
                                                        <img src="images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg" class="img-fluid avatar-image" alt="" />

                                                        <div class="ms-3">
                                                            Samantha
                                                            <p class="speakers-text mb-0">Top Level Speaker</p>
                                                        </div>
                                                    </div>

                                                    <span class="mx-3 mx-lg-5">
                                                        <i class="bi-clock me-2"></i>
                                                        10:00 - 10:45 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        100-C Room
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="nav-DayFour" role="tabpanel" aria-labelledby="nav-DayFour-tab">
                                        <div class="row">
                                            <div class="col-lg-4 col-12">
                                                <img src="images/schedule/jeshoots-com-TWRCH-GaKr4-unsplash.jpg" class="schedule-image img-fluid" alt="" />
                                            </div>

                                            <div class="col-lg-8 col-12 mt-3 mt-lg-0">
                                                <h4 class="mb-2">After Party at the fullest</h4>

                                                <p>There is a plenty of great HTML CSS templates available at TemplateMo.com website for your businesses. You can download, edit and use any template for any purpose. Please let us know <a rel="nofollow" href="https://templatemo.com/contact" target="_parent"><u>your feedback via Email</u></a>. Thank you.</p>

                                                <div class="d-flex align-items-center mt-4">

                                                    <span>
                                                        <i class="bi-clock me-2"></i>
                                                        8:00 - 9:00 AM
                                                    </span>

                                                    <span class="mx-1 mx-lg-5">
                                                        <i class="bi-layout-sidebar me-2"></i>
                                                        Conference Hall 2
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="faculties section-padding">
                    <div className="container">
                        <div class="row align-items-center justify-content-center">
                              <div class="col-lg-12 col-12">
                                <h2 class="mb-5 text-center">Our <u class="text-info">FIC Students' Clubs</u></h2>

                            </div> 
                       
                            <div class="col-lg-12 col-12">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/kavjli.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Dr. Paratibha Agarwal</h5>
                                                  <p class="speakers-text mb-0">Professor in Charge Students' Clubs </p>


                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-facebook"></a></li>

                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>
                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/folkdance.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Folk Dance</h5>

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/chore.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Choreography</h5>

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-facebook"></a></li>

                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="speakers-thumb speakers-thumb-small">
                                            <img src="images/avatar/dance.jpg" class="img-fluid speakers-image" alt="" />

                                            <div class="speakers-info">
                                                <h5 class="speakers-title mb-0">Groove Armada</h5>

                                              

                                <ul class="social-icon">
                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </section>

                <section class="call-to-action section-padding">
                    <div class="container">
                        <div class="row align-items-center">

                            <div class="col-lg-7 col-12">
                                <h2 class="text-white mb-4">Become an <u class="text-info">event speaker?</u></h2>

                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</p>
                            </div>

                            <div class="col-lg-3 col-12 ms-lg-auto mt-4 mt-lg-0">
                                <a href="#section_5" class="custom-btn btn">Register Today</a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <section class="pricing section-padding" >
    <div class="container">
        <div class="row">

            <div class="col-lg-10 col-12 text-center mx-auto mb-5">
                <h2>Get Your <u class="text-info">Tickets</u></h2>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-5 mb-lg-0">
                <div class="pricing-thumb bg-white shadow-lg">                                
                    <div class="pricing-title-wrap d-flex align-items-center">

                        <h4 class="pricing-title text-white mb-0">Early Bird</h4>

                        <h5 class="pricing-small-title text-white mb-0 ms-auto">$640</h5>
                    </div>

                    <div class="pricing-body">
                        <p>
                            <i class="bi-cup me-2"></i> All-Day Coffee + Snacks
                        </p>

                        <p>
                            <i class="bi-controller me-2"></i> After Party
                        </p>

                        <p>
                            <i class="bi-chat-square me-2"></i> 24/7 Support
                        </p>

                        <div class="border-bottom pb-3 mb-4"></div>

                        <p>Quick group meetings for multiple teams</p>

                        <a class="custom-btn btn mt-3" href="#">Buy Tickets</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-5 mb-lg-0">
                <div class="pricing-thumb bg-white shadow-lg">                                
                    <div class="pricing-title-wrap d-flex align-items-center">

                        <h4 class="pricing-title text-white mb-0">Gold</h4>

                        <h5 class="pricing-small-title text-white mb-0 ms-auto">$840</h5>
                    </div>

                    <div class="pricing-body">
                        <p>
                            <i class="bi-cup me-2"></i> All-Day Coffee + Snacks
                        </p>

                        <p>
                            <i class="bi-boombox me-2"></i> Group Meetings + After Party
                        </p>

                        <p>
                            <i class="bi-chat-square me-2"></i> 24/7 Support + Instant Chats
                        </p>

                        <div class="border-bottom pb-3 mb-4"></div>

                        <p>Quick group meetings for multiple teams</p>

                        <a class="custom-btn btn mt-3" href="#">Buy Tickets</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="pricing-thumb bg-white shadow-lg">                                
                    <div class="pricing-title-wrap d-flex align-items-center">

                        <h4 class="pricing-title text-white mb-0">Platinum</h4>

                        <h5 class="pricing-small-title text-white mb-0 ms-auto">$1,240</h5>
                    </div>

                    <div class="pricing-body">
                        <p>
                            <i class="bi-cash me-2"></i> Cashback $200
                        </p>

                        <p>
                            <i class="bi-boombox me-2"></i> Private Meetings + After Party
                        </p>

                        <p>
                            <i class="bi-chat-square me-2"></i> 24/7 Support + Instant Chats
                        </p>

                        <div class="border-bottom pb-3 mb-4"></div>

                        <p>group talks and private chats for multiple teams</p>

                        <a class="custom-btn btn mt-3" href="#">Buy Tickets</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section> */}

                <section class="venue section-padding" >
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 col-12">
                                <h2 class="mb-5">Here you go <u class="text-info">Venue</u></h2>
                            </div>

                            <div class="col-lg-6 col-12">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.659149332004!2d76.81532307825445!3d29.946852386264155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f51801954b5%3A0x14d79f026b1ae4ec!2sNational%20Institute%20of%20Technology%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1657652808076!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.659149332004!2d76.81532307825445!3d29.946852386264155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f51801954b5%3A0x14d79f026b1ae4ec!2sNational%20Institute%20of%20Technology%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1657652808076!5m2!1sen!2sin" width="100%" height="371.59" allowfullscreen="" loading="lazy"></iframe>
                            </div>

                            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                                <div class="venue-thumb bg-white shadow-lg">

                                    <div class="venue-info-title">
                                        <h2 class="text-white mb-0">NIT KKR</h2>
                                    </div>

                                    <div class="venue-info-body">
                                        <h4 class="d-flex">
                                            <i class="bi-geo-alt me-2"></i>
                                            <h style={{ color: "black" }}>WRX8+355, NIT, Mirzapur Part, Haryana 136119</h>
                                        </h4>

                                        <h5 class="mt-4 mb-3">
                                            <a href="mailto:studentsclubs@nitkkr.ac.in">
                                                <i class="bi-envelope me-2"></i>
                                                studentsclubs@nitkkr.ac.in
                                            </a>
                                        </h5>

                                        <h5 class="mb-0">
                                            <a href="tel: 305-240-9671">
                                                <i class="bi-telephone me-2"></i>
                                                9462850766
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </main>
        </>
    )
};

export default Home;