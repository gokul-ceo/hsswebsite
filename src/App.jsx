import React from "react";
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MenuPage from "./components/Menu/MenuPage";
import NavBar from "./components/Navbar/NavBar";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import HFooter from "./components/Footer/Footer";
import Tc from "./components/Legal/Tc";
import Privacypolicy from "./components/Legal/Privacypolicy";
import Refundpolicy from "./components/Legal/Refundpolicy";
import OnlineOrderPage from "./components/Onlineorder/Onlineorderpage";
function App(props) {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/orderonline" element={<OnlineOrderPage />} />
            <Route path="/termsandconditions" element={<Tc />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/refundpolicy" element={<Refundpolicy />} />
          </Routes>
        </Router>
      </Provider>
      {/* <Home /> */}
    </>
  );
}

export default App;
