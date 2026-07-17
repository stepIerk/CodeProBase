import React from "react";
import { useBooking } from "../../context/BookingContext";
import "./Footer.css";

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p className="footer-cta">
        Нужен похожий сайт?{" "}
          <button
            type="button"
            className="footer-link"
            onClick={() => openBooking("site")}
          >
            Напишите мне
          </button>
        </p>

        <p className="footer-copy">
          &copy; SteplerCode 2026
        </p>
      </div>
    </footer>
  );
}