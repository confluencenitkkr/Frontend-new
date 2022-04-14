import React from 'react';

import '../../styles/team.css';
import image1 from "../../styles/images/conflu.png"
import image2 from "../../styles/images/photog.jpg"
import image3 from "../../styles/images/colours.jpg"
import image4 from "../../styles/images/elad.jpg"
import image5 from "../../styles/images/fa.jpg"
import image6 from "../../styles/images/htc.jpg"
import image7 from "../../styles/images/hlad.jpg"
import image8 from "../../styles/images/ava.jpg"
import image9 from "../../styles/images/spic.jpg"
import image10 from "../../styles/images/sponsi.jpg"
import image11 from "../../styles/images/mad.jpg"

const Team = () => {

  return (
    <div class="menu">
  <input type="checkbox" id="toggle" />
  <label id="show-menu" for="toggle">
    <div class="btn">
      <i class=""><img class="conflu_logo" src={image1}/></i>
      
    </div>
    <div class="btn">
      <i class="material-icons md-36"><img src={image2} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image3} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image4} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image5} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image6} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image7} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image8} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image9} class="club_logo"/></i>
    </div>
    <div class="btn">
        <i class="material-icons md-36"><img src={image10} class="club_logo"/></i>
      </div>
      <div class="btn">
        <i class="material-icons md-36"><img src={image11} class="club_logo"/></i>
      </div>
  </label>
</div>
  )  
};

export default Team;