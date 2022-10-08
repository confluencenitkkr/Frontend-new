import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import Header from "./components/hader";
import Gallery from "./components/Gallery/Gallery";
import "./styles/Events.css";
import "./styles/css/main.css";
// import "./styles/css/bootstrap.min.css";
import "./styles/css/responsive.css";
import Footerr from "./components/Footerr/footerr";

function App() {
  return (
    <div style={{
      cursor:"default"
    }}>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" key="home" element={<Home />} />
          <Route exact path="/Sponsors" key="Sponsors" element={<Sponsors />} />
          <Route exact path="/Schedule" key="Schedule" element={<Schedule />} />
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
