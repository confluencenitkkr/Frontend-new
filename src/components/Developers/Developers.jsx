import React from 'react';
import img from "../../styles/images/ayuhh.jpg"
import '../../styles/Developers.css';

const Developers = () => {
  const developers=[
    {
      "name":"Aayush Gupta",
      "image" :"https://i.ibb.co/Qv2jjXw/dcf19c08-1406-4ad7-8047-d8e310884ecc-1-11zon.jpg",
      "role": "Full STACK DEVELOPER",
      "insta": "https://www.instagram.com/ashu_2305_/?hl=en",
      "linkedin": "https://www.linkedin.com/in/ashu2305/",
      "github":"https://github.com/ashu2305",
    },
    {
      "name":"Ayush Meena",
      "image" :"https://i.ibb.co/D5zp66d/IMG-20211104-152222-575-01.jpg",
      "role": "Full STACK DEVELOPER",
      "insta": "https://www.instagram.com/ayush_mina/",
      "linkedin": "linkedin.com/in/aayush-meena-729298135/",
      "github":"https://github.com/ayushmina/",
    },
    {
      "name":"Lakshay",
      "image" : "https://i.ibb.co/9nzJrWR/4dfabe32-2ea6-4246-b807-623a370f97bc-1.jpg",
      "role": "Full Stack Developer",
      "insta": "https://www.instagram.com/lakshay_._rose/",
      "linkedin": "https://www.linkedin.com/in/lakshay-rose-514518206/",
      "github":"https://github.com/Daemon25",
    },
    {
      "name":"Inzamam",
      "image" : "https://i.ibb.co/X72VN1x/Screenshot-20220420-183930-01-compressed.jpg",
      "role": "Front-end Developer",
      "insta": "https://www.instagram.com/inzamam_chowdhury/",
      "linkedin": "https://www.linkedin.com/in/inzamam-chowdhury/",
      "github":"https://github.com/inzamam2021",
    },
    {
      "name":"Meenakshi",
      "image" : "https://i.ibb.co/hgDMcgQ/IMG-20220421-WA0019-1.jpg",
      "role": "Front-end Developer",
      "insta": "https://www.instagram.com/meenakshi_suthar_08/",
      "linkedin": "https://www.linkedin.com/in/meenakshi-suthar-921967229/",
      "github":"https://github.com/meenakshisuthar/meenakshisuthar",
    },
    
    {
      "name":"Dev Bansal",
      "image" : "https://i.ibb.co/jvffFhZ/IMG20210116210210-00-01-1-compressed.jpg",
      "role": "UI/UX Designer",
      "insta": "https://instagram.com/devbansal76?igshid=YmMyMTA2M2Y=",
      "linkedin": "https://www.linkedin.com/in/dev-bansal-753061209",
      "github":"",
    },
    {
      "name":"Pransu",
      "image" : "https://i.ibb.co/D8TNqvw/IMG-20220420-WA0130-2-1.jpg",
      "role": "UI/UX Designer",
      "insta": "https://instagram.com/pransu65?igshid=YmMyMTA2M2Y=",
      "linkedin": "https://www.linkedin.com/in/pransu-yadav-a082891b8",
      "github":"https://github.com/Pransu-code",
    },
    {
      "name":"Karan",
      "image" : "https://i.ibb.co/yQbv0fB/IMG-20220420-WA0129.jpg",
      "role": "Front-end Developer",
      "insta": "https://instagram.com/karan_gupta_17?igshid=YmMyMTA2M2Y=",
      "linkedin": "https://www.linkedin.com/in/karan-gupta-97571b202/",
      "github":"https://github.com/guptakaran9896",
    },
    {
      "name":"Ankit",
      "image" : "https://i.ibb.co/rdWtMK2/4154ba60-d0ee-4cd2-b97d-1d1b5d58c650.jpg",
      "role": "Front-end Developer",
      "insta": "https://www.instagram.com/invites/contact/?i=16refs6ma8cl8&utm_content=4dd2fq7",
      "linkedin": "https://www.linkedin.com/in/ankit-k-1aa4521bb",
      "github":"https://github.com/ankitk84",
    },
    {
      "name":"Raghav Garg",
      "image" : "https://i.ibb.co/jMBdMPp/2440ba39-56fe-414c-a24d-096a0f5df586-11zon-1.jpg",
      "role": "Front-end Developer",
      "insta": "https://www.instagram.com/raghav_garg04",
      "linkedin": "https://www.linkedin.com/in/raghav-garg-66356a220",
      "github":"https://github.com/raghav0407",
    },
    
  
  ]

  return (
    <div class="bg-drak py-5 ">
    <div class="container py-5 downsection">
      <div class="row mb-4">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light font-head">Developers</h2>
        </div>
      </div>
  
      <div class="row text-center" style={{justifyContent: "center"}}>
       {developers.length>0?developers.map((e,index)=>{
         return(
          <div class="col-xl-3 col-sm-6 mb-5 dev-card">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={e.image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0  text-dark">{e.name}</h5><span class="small text-uppercase text-muted">{e.role}</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href={e.github} class="social-link"><i class='bi bi-github'></i></a></li>
              <li class="list-inline-item"><a href={e.insta} class="social-link"><i class="bi bi-instagram"></i></a></li>
              <li class="list-inline-item"><a href={e.linkedin} class="social-link"><i class="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
         )
       }):""

       }
        
      </div>
    </div>
  </div>
  )  
};

export default Developers;