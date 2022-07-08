import React from 'react';

import '../../styles/AboutUs.css';
import img from "../../styles/images/magic.png"
const AboutUs = () => {

  return (

	<div className="about-container">
		<div className="aboutus">
			<div className="content">
				<p class="font-head">About Us</p>
			Confluence, the annual cultural Festival of NIT Kurukshetra is a cultural extravaganza beyond
				words, beyond description. Confluence is the coming together of free spirits, like-minded 
	 			zealous youth and a celebration of culture of true artistic genius. 
 				Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.

			</div>
			<div className="about-image">
			<img className='magic-hand' src={img}></img>
            </div>
		</div>

		<div className="aftermovie">
			<div className="aftermovie-heading">
				<p>Checkout Confluence'19 Remastered :</p>
		
			</div>
			<div className="aftermovie-video">
			<iframe class="afterMovie-frame" width="1000" height="500" src="https://www.youtube.com/embed/FXyHDBMVAgA" 
	 			   title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; 
	 			   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			</div>
		</div> 

		


        <div className="socialmedia">
		<p>Connect Us Through</p>
		<div>
					<a href="https://www.facebook.com/Conflu/"><img src="fb.png" alt=""/></a>
	 				<a href="https://www.instagram.com/confluence.nitkkr/?hl=en"><img src="insta.png" alt=""/></a>
		</div>
		


		</div> 



	 
	</div>
    // <div class="bg">
	// <div class="section"> 
	// 	<div class="container2">
	// 		<div class="content-section">

	// 			<div class="title">
	// 				<h1>About Us</h1>
	// 			</div>
	// 			<div class="content">
	// 				<h3>A tryst with magic</h3>
	// 				<p>Confluence, the annual cultural Festival of NIT Kurukshetra is a cultural extravaganza beyond
	// 					words, beyond description. Confluence is the coming together of free spirits, like-minded 
	// 					zealous youth and a celebration of culture of true artistic genius. 
	// 					Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.</p>
					
	// 			</div>
	// 			<div className="afterMovieSection">
	// 				<p class="textAfter">
	// 				Checkout Techspardha 19 Aftermovie :
	// 				</p>
	// 			   <iframe class="afterMovie" width="1000" height="500" src="https://www.youtube.com/embed/FXyHDBMVAgA" 
	// 			   title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; 
	// 			   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	// 			</div>
	// 			<div class="social">
	// 				<p>Made By Photog</p>
	// 				<a href="https://www.facebook.com/Conflu/"><i class="fab fa-facebook-f"></i></a>
	// 				<a href="https://twitter.com/confluencenit"><i class="fab fa-twitter"></i></a>
	// 				<a href="https://www.instagram.com/confluence.nitkkr/?hl=en"><i class="fab fa-instagram"></i></a>
	// 			</div>
				
	// 		</div>
	// 			<div class="image-section">
	// 				<img className='helooo' src={img} />
	// 			</div>

	// 	</div>
	// </div>
	// </div>
  )  
};

export default AboutUs;