import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Phone, UserRound, X } from "lucide-react";

import { useBooking } from "../../context/BookingContext";
import "./BookingModal.css";

const overlayTransition = { duration: 0.24, ease: "easeOut" };
const panelTransition = { duration: 0.32, ease: [0.22, 1, 0.36, 1] };

function formatRussianPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  let normalized = digits;

  if (normalized[0] === "8") {
    normalized = `7${normalized.slice(1)}`;
  }

  if (normalized[0] !== "7") {
    normalized = `7${normalized.slice(0, 10)}`;
  }

  const country = normalized[0];
  const area = normalized.slice(1, 4);
  const first = normalized.slice(4, 7);
  const second = normalized.slice(7, 9);
  const third = normalized.slice(9, 11);

  let result = `+${country}`;

  if (area) {
    result += ` (${area}`;
  }

  if (area.length === 3) {
    result += ")";
  }

  if (first) {
    result += ` ${first}`;
  }

  if (second) {
    result += `-${second}`;
  }

  if (third) {
    result += `-${third}`;
  }

  return result;
}

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!isOpen) {
      const timeout = window.setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", phone: "" });
      }, 260);

      return () => window.clearTimeout(timeout);
    }

    return undefined;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (status !== "success") {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      closeBooking();
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, [closeBooking, status]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: name === "phone" ? formatRussianPhone(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          onClick={closeBooking}
        >
          <motion.div
            className="booking-modal"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={panelTransition}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="booking-close"
              aria-label="Закрыть окно записи"
              onClick={closeBooking}
            >
              <X size={18} />
            </button>

            <div className="booking-head">
              <span className="booking-badge">Запись на урок</span>
              <h2>Оставьте контакты, и мы свяжемся с вами</h2>
              <p>Заполните форму, чтобы получить звонок и подобрать удобный формат занятий.</p>
            </div>

            <AnimatePresence mode="wait">
              {status === "idle" ? (
                <motion.form
                  key="form"
                  className="booking-form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={panelTransition}
                  onSubmit={handleSubmit}
                >
                  <label className="booking-field">
                    <span>
                      <UserRound size={16} />
                      Имя
                    </span>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Как к вам обращаться"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="booking-field">
                    <span>
                      <Phone size={16} />
                      Телефон
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 123-45-67"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <button type="submit" className="btn btn-primary full">
                    Заказать звонок
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="booking-success"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={panelTransition}
                >
                  <div className="booking-success-icon">
                    <CheckCircle2 size={34} />
                  </div>
                  <h3>Вы записаны на урок</h3>
                  <p>Мы перезвоним в ближайшее время и подберём удобное время занятия.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
