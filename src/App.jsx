import React from "react";
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./components/Menu/MenuPage";
import NavBar from "./components/Navbar/NavBar";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
// import HFooter from "./components/Footer/Footer";
import Tc from "./components/Legal/Tc";
import Privacypolicy from "./components/Legal/Privacypolicy";
import Refundpolicy from "./components/Legal/Refundpolicy";
import OnlineOrderPage from "./components/Onlineorder/Onlineorderpage";
import Signuppage from "./components/Authentication/Signuppage";
import Loginpage from "./components/Authentication/Loginpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/orderonline" element={<OnlineOrderPage />} />
            <Route path="/termsandconditions" element={<Tc />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/refundpolicy" element={<Refundpolicy />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </Router>
      </Provider>
      {/* <Home /> */}
    </>
  );
}

export default App;
