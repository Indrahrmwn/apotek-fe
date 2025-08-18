import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPages from "./pages/landingpages";
import LoginPage from "./pages/loginpages";
import FormLogin from "./pages/formlogin";
import FormRegister from "./pages/formregister";    

function AppContent() {
  const location = useLocation();

  // Daftar halaman yang ga butuh Navbar
  const noNavbarPaths = ["/login", "/formlogin", "/register"];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/formlogin" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
