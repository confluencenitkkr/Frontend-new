import React from 'react';

import '../../styles/Home.css';
import bg from "../../styles/images/Witch Home Page.png"

const Home = () => {

  return (
    <>
    <div className="home-page">
      <div className="home-bg">
        <img src={bg} className="bg-img"></img>
      </div>
      </div>
    </>
  )  
};

export default Home;