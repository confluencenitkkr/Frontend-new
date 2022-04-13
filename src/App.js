import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import Categories from './components/Categories/Categories'
import Events from './components/Events/Events'
import Developers from './components/Developers/Developers';
import NotAuth from './components/NotAuth/NotAuth';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutus" element={AboutUs}></Route>
        <Route path="/home" element={Home}></Route>
        <Route path="/categories" element={Categories}></Route>
        <Route path="/categories/events" element={Events}></Route>
        <Route path="/sponsors" element={Sponsors}></Route>
        <Route path="/developers" element={Developers}></Route>
        <Route path="/notauthorized" element={NotAuth}></Route>
        <Route element={Error404}></Route>
      </Routes>
    </Router>
  );
}

export default App;
