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

  // `showLogin` toggles the login modal.
  // We pass `setShowLogin` into `Navbar` so the header can open the modal.
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}  {/* render login modal when requested */}
      <div className="app">
        {/* Navbar receives setter so it can trigger the login popup */}
        <Navbar setShowLogin={setShowLogin} />
        {/* Routes: add pages under `src/pages` and register them here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
