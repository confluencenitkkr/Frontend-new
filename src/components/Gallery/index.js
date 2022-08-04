import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState, Component, useEffect } from "react";
import action from "../../actions/events.Actions";
import "./gallery.css"
const Gallery = (props) => {
    const [images,setimages]=useState([]);
    const [flag,setFlag]=useState(false);

  const getImage=async ()=>{
    action.getImage((err,res)=>{
        if(err){

        }else{
            setimages(res.data);
        }
    })
  }
  const loadMOre=()=>{
    if(flag){
        setimages([]);
        setFlag(false);
    }else{
        setFlag(true);
        getImage();
    }
   
  }
  return (
   <>    
   {/* <div id="video-container">
   <div class="video-overlay"></div>
   <div class="video-content">
       <div class="inner">
         <h1>Welcome to <em>Highway</em></h1>
         <p>FREE CSS TEMPLATE by templatemo</p>
         <p>Homepage with small-width image gallery</p>
           <div class="scroll-icon">
               <a class="scrollTo" data-scrollTo="portfolio" href="#"><img src="images/avatar/scroll-icon.png" alt=""/></a>
           </div>    
       </div>
   </div>
   <video autoPlay={true} loop={true} muted={true}>
       <source src="videos/5Daystogo.mp4" type="video/mp4" />
   </video>
</div> */}

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
            <source src="videos/5Daystogo.mp4" type="video/mp4" />

            Your browser does not support the video tag.
        </video>
    </div>
</section>
<div className="blue_bg">
<div class="row headingGallery">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light font-head">Gallery</h2>
        </div>
      </div>

<div class="grid-portfolio" id="portfolio">
   <div class="container">
       <div class="row">
       <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/kavjli.jpg"  data-lightbox="image-1">
                       <div class="image">
                           <img src="images/avatar/kavjli.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/startnight.jpg" data-lightbox="image-1">
                        
                       <div class="image">
                           <img src="images/avatar/startnight.jpg"   alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/start.jpg" data-lightbox="image-1">
                      
                       <div class="image">
                           <img src="images/avatar/start.jpg" alt="pic"/>
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/chore.jpg"  data-lightbox="image-1">
                        
                       <div class="image">
                           <img src="images/avatar/chore.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/dance.jpg" data-lightbox="image-1">
                       <div class="image">
                           <img src="images/avatar/dance.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/folkdance.jpg"  data-lightbox="image-1">
                       <div class="image">
                           <img src="images/avatar/folkdance.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/groovearmadanitkkr.jpg"  data-lightbox="image-1">
                       <div class="image">
                           <img src="images/avatar/groovearmadanitkkr.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/IMG_0407.jpg"  data-lightbox="image-1">
                       
                       <div class="image">
                           <img src="images/avatar/IMG_0407.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
           <div class="col-md-4 col-sm-6">
               <div class="portfolio-item">
                   <div class="thumb">
                       <a href="images/avatar/soloacting.jpg"  data-lightbox="image-1">
                       <div class="image">
                           <img src="images/avatar/soloacting.jpg" alt="pic" />
                       </div>
                       </a>
                   </div>
               </div>
           </div>
       
           {images.length>0?images.map(e=>{
            return(
                <>
                    
                    <div class="col-md-4 col-sm-6">
                    <a href={e.imageUrl} data-lightbox="image-1">
            <div class="portfolio-item">
                <div class="thumb">
                    
                      
                    <div class="image">
                        <img src={e.imageUrl} alt="pic"/>
                    </div>
                </div>
            </div>
            </a>
        </div>
                </>
            )
           }):""}
       </div>
       <div class="row">
           <div class="col-md-12">
               <div class="load-more-button">
                   <a  onClick={(e)=>{
                    e.preventDefault();
                    loadMOre();
                   }}>{flag?"Hide":"Load More"}</a>
               </div>
           </div>
       </div>
       
   </div>
</div>

       <div className="aftermovie1">
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


   </>
  );
};

export default Gallery;
