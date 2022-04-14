import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import Categories from './components/Categories/Categories'
import Events from './components/Events/Events'
import Developers from './components/Developers/Developers';
import NotAuth from './components/NotAuth/NotAuth';
import Error404 from './components/Error404/Error404';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
              <Route exact path="/" key="home" element={<Home/>} />
              <Route exact path="/Sponsors" key="Sponsors"  element={<Sponsors/>} />
              <Route exact path="/Categories" key="Categories" element={<Categories/>} />
              <Route  path="/Events" key="Events" element={<Events/>}/>
              <Route  path="/Developers" key="Developers" element={<Developers/>}/>
              <Route  path="/AboutUs" key="AboutUs" element={<AboutUs/>}/>
              <Route  path="/NotAuth" key="NotAuth" element={<NotAuth/>}/>
              <Route  path="/Error404" key="Error404" element={<Error404/>}/>

      </Routes>
          </Router>

  );
}

export default App;
