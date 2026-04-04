import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import BookingModal from "./components/BookingModal/BookingModal";
import { BookingProvider } from "./context/BookingContext";
import Home from "./pages/Home/Home";
import Programs from "./pages/Programs/Programs";
import Pricing from "./pages/Pricing/Pricing";
import Methodology from "./pages/Methodology/Methodology";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/buttons.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <BookingProvider>
        <div className="app-shell">
          <Navbar />
          <AnimatedRoutes />
          <BookingModal />
        </div>
      </BookingProvider>
    </Router>
  );
}
