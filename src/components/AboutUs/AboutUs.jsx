import React from 'react';

import '../../styles/AboutUs.css';
import img from "../../styles/images/Aboutusmagic.png"
const AboutUs = () => {

  return (
    <div class="bg">
	<div class="section"> 
		<div class="container2">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>A tryst with magic</h3>
					<p>Confluence, the annual cultural Festival of NIT Kurukshetra is a cultural extravaganza beyond
						words, beyond description. Confluence is the coming together of free spirits, like-minded 
						zealous youth and a celebration of culture of true artistic genius. 
						Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.
						Started in 1991 by a bunch of enthusiastic NITians, now in its 21st edition,
						 has snowballed to become the largest festival of its kind in North India
						</p>
					
				</div>
				<div class="social">
					<a href="https://www.facebook.com/Conflu/"><i class="fab fa-facebook-f"></i></a>
					<a href="https://twitter.com/confluencenit"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/confluence.nitkkr/?hl=en"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img className='helooo' src={img} />
			</div>
		</div>
	</div>
	</div>
  )  
};

export default AboutUs;