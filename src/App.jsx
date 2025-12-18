import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Card from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
   {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}  {/* if show login is true, it returns the popup else it returns the fragment */}
      <div className="app">
       <Navbar setShowLogin = {setShowLogin} /> {/* add in the nav, then go to the nav component to distructure it */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
