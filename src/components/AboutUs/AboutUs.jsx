import React from 'react';
import classes from "../../styles/AboutUs1.module.css"

import bg2 from "./bg2.mp4"
import bg2_1 from "./bg2_1.webm"
const AboutUs = () => {

	return (

		<div className={classes.about_main}>
			{/* <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" className={classes.vid} playsinline autoplay muted loop> */}
			<video id="bgvid" className={classes.vid} playsinline autoPlay muted loop>

				<source src={bg2} type="video/mp4" className={classes.sourcee}/>
				<source src={bg2_1} type="video/webm" className={classes.sourcee}/>
			</video>

			<div id="polina" className={classes.pol}>
				<h1 className={classes.h1_text}>About Us</h1>
					<p className={classes.p_text}>Confluence, the annual cultural Festival of NIT Kurukshetra is a cultural extravaganza beyond words, beyond description. Confluence is the coming together of free spirits, like-minded zealous youth and a celebration of culture of true artistic genius. Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.</p>
				
			</div>
		</div>

		// <div className={classes.about_container}>
		// 	<div className={classes.aboutus}>
		// 		<div className={classes.container}>
		// 			<p class={classes.font_head}>About Us</p>
		// 		Confluence, the annual cultural Festival of NIT Kurukshetra is a cultural extravaganza beyond
		// 			words, beyond description. Confluence is the coming together of free spirits, like-minded
		//  			zealous youth and a celebration of culture of true artistic genius.
		// 			Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.

		// 		</div>
		// 		<div className={classes.about_image}>
		// 		<img className={classes.magic_hand} src={img}></img>
		//         </div>
		// 	</div>

		// 	<div className={classes.aftermovie}>
		// 		<div className={classes.aftermovie_heading}>
		// 			<p>Checkout Confluence'19 Remastered :</p>

		// 		</div>
		// 		<div className={classes.aftermovie - video}>
		// 		<iframe class={classes.afterMovie - frame} width="1000" height="500" src="https://www.youtube.com/embed/FXyHDBMVAgA"
		//  			   title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write;
		//  			   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		// 		</div>
		// 	</div>




		//     <div className={classes.socialmedia}>
		// 	<p>Connect Us Through</p>
		// 	<div>
		// 				<a href="https://www.facebook.com/Conflu/"><img src="fb.png" alt="" /></a>
		//  				<a href="https://www.instagram.com/confluence.nitkkr/?hl=en"><img src="insta.png" alt="" /></a>
		// 	</div>



		// 	</div>
		// </div>



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