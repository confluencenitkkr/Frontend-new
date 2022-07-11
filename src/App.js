import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import ClubInfo from "./components/ClubInfo/ClubInfo";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import Categories from "./components/Categories/Categories";
import Events from "./components/Events/Events";
import Developers from "./components/Developers/Developers";
import NotAuth from "./components/NotAuth/NotAuth";
import Error404 from "./components/Error404/Error404";
import Navbar from "./components/Navbar/navbar";
import Team from "./components/Team_Confluence/team";
import Header from "./components/hader";
import "./styles/Events.css";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" key="home" element={<Home />} />
        <Route exact path="/Sponsors" key="Sponsors" element={<Sponsors />} />
        <Route exact path="/ClubInfo" key="ClubInfo" element={<ClubInfo />} />
        <Route exact path="/Events" key="Events" element={<Categories />} />
        <Route
          exact
          path="/Developers"
          key="Developers"
          element={<Developers />}
        />
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
  );
}

export default App;
