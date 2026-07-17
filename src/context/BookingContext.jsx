import React, { createContext, useContext, useMemo } from "react";

const TG_USERNAME = "Stepanidzek";
const TG_BASE = `https://t.me/${TG_USERNAME}?text=`;

/**
 * URL-encoded сообщения для разных сценариев.
 * Меняй текст здесь — он сразу подставится во все кнопки.
 */
const MESSAGES = {
  /** Общая запись на курсы программирования */
  general: encodeURIComponent(
    "Здравствуйте, хочу записаться на курс по программированию"
  ),
  /** Запись на ЕГЭ */
  ege: encodeURIComponent(
    "Здравствуйте, хочу записаться на курс по ЕГЭ по информатике"
  ),
  /** Тариф FAST — Scratch Turbo */
  fast: encodeURIComponent(
    "Здравствуйте, хочу записаться на тариф FAST — Scratch Turbo"
  ),
  /** Тариф GROUP — Групповые */
  group: encodeURIComponent(
    "Здравствуйте, хочу записаться на групповые занятия"
  ),
  /** Тариф PRO — Web & Индивидуально */
  pro: encodeURIComponent(
    "Здравствуйте, хочу записаться на индивидуальные занятия по Web-разработке"
  ),
  /** Заказ сайта */
  site: encodeURIComponent(
    "Здравствуйте, хотел бы заказать сайт!"
  ),
};

const BookingContext = createContext(null);

function redirectToTelegram(preset) {
  const text = MESSAGES[preset] || MESSAGES.general;
  window.open(TG_BASE + text, "_blank");
}

export function BookingProvider({ children }) {
  const value = useMemo(
    () => ({
      /** Перенаправляет в Telegram с заданным preset-сообщением */
      openBooking: (preset = "general") => redirectToTelegram(preset),
    }),
    [],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }

  return context;
}