import "./App.css";
import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Schedule from "./components/Schedule/Schedule";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import Categories from "./components/Categories/Categories";
import Events from "./components/Events/Events";
import Developers from "./components/Developers/Developers";
import NotAuth from "./components/NotAuth/NotAuth";
import Error404 from "./components/Error404/Error404";
// import Navbar from "./components/Footerr/footerr";
import Team from "./components/Team_Confluence/team";
// import Header from "./components/hader";
import Gallery from "./components/Gallery/Gallery";
import "./styles/Events.css";
import "./styles/css/main.css";
// import "./styles/css/bootstrap.min.css";
import "./styles/css/responsive.css";
import Navbar from './components/navbar'
import Download from './components/downloadButton/downloadButton'

function App() {

  useEffect(() => {
    let main_container = document.getElementById("main_container_app");
    main_container.style.background =
      'url("/images/bgMedia/bg.jpg") 50% repeat';
  }, []);

  return (
    <div className="main_container_app1" id="main_container_app">
      <Router>
        {/* <Header></Header> */}
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" key="home" element={<Home />} />
          <Route exact path="/Sponsors" key="Sponsors" element={<Sponsors />} />
          <Route exact path="/Featured" key="Featured" element={<Schedule />} />
          <Route exact path="/Events" key="Events" element={<Categories />} />
          <Route
            exact
            path="/Developers"
            key="Developers"
            element={<Developers />}
          />
          <Route exact path="/gallery" key="gallery" element={<Gallery />} />

          <Route exact path="/AboutUs" key="AboutUs" element={<AboutUs />} />
          <Route exact path="/NotAuth" key="NotAuth" element={<NotAuth />} />
          <Route exact path="/Error404" key="Error404" element={<Error404 />} />
          <Route exact path="/Team" key="Team" element={<Team />} />
          <Route
            exact
            path="/EventView/:id"
            key="EventView"
            element={<Events />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
