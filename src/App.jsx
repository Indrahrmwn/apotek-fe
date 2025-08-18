import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPages from "./pages/landingpages";
import LoginPage from "./pages/loginpages";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Navbar hanya muncul kalau bukan di /login */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<LoginPage />} />
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
