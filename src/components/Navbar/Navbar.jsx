import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useBooking } from "../../context/BookingContext";
import "./Navbar.css";

const links = [
  { path: "/", label: "Главная" },
  { path: "/programs", label: "Программы" },
  { path: "/methodology", label: "Методология" },
  { path: "/pricing", label: "Цены" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link to="/" className="logo">
          CODEPROBASE
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" className="btn btn-primary nav-cta" onClick={openBooking}>
            Записаться на урок
            <ArrowUpRight size={18} />
          </button>
          <button
            className="mobile-btn"
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-shell"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mobile-menu container">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 18 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={link.path} className="mobile-link">
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mobile-actions">
                <button
                  type="button"
                  className="btn btn-primary full"
                  onClick={() => {
                    setOpen(false);
                    openBooking();
                  }}
                >
                  Записаться на урок
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
