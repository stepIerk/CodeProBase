import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  const links = [
    { path: "/", label: "Главная" },
    { path: "/programs", label: "Программы" },
    { path: "/pricing", label: "Цены" },
    {path: "/methodology", label:"Методология"}
  ];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">CODEPROBASE</Link>

        <div className="nav-links">
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link ${location.pathname === l.path ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <a className="btn btn-primary small" href="https://t.me/your_bot">
            Бот записи
          </a>
          {/* <a className="js-logo" href="https://t.me/your_bot">
              WEBPROBASE
            </a> */}
        </div>

        <button className="mobile-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            {links.map(l => (
              <Link key={l.path} to={l.path} className="nav-link big">
                {l.label}
              </Link>
            ))}
            <a className="btn btn-primary small" href="https://t.me/your_bot">
            Бот записи
            </a>
            {/* <a className="js-logo" href="https://t.me/your_bot">
              WEBPROBASE
            </a> */}
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
