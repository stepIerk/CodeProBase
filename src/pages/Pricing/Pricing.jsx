import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

import { useBooking } from "../../context/BookingContext";
import { pageTransition, revealScale, revealUp, staggerContainer } from "../../utils/motion";
import "./Pricing.css";

const pricing = [
  {
    label: "FAST",
    name: "Scratch Turbo",
    price: "1 200 ₽",
    unit: "/ урок",
    accent: "warm",
    button: "btn btn-outline full",
    cta: "Записаться",
    preset: "fast",
    features: ["Персональный ментор", "Ускоренная программа", "Архитектура игр", "Гибкий график"],
  },
  {
    label: "GROUP",
    name: "Групповые",
    price: "1 000 ₽",
    unit: "/ урок",
    accent: "soft",
    button: "btn btn-outline full",
    cta: "Записаться",
    preset: "group",
    features: ["Группы до 6 детей", "Совместные и личные проекты", "Общий темп и мотивация"],
  },
  {
    label: "EGE",
    name: "Подготовка к ЕГЭ",
    price: "1 500 ₽",
    unit: "/ час",
    accent: "ege",
    button: "btn btn-primary full",
    cta: "Записаться",
    preset: "ege",
    features: ["Разбор всех типов заданий", "Программирование на Python", "Пробные экзамены с разбором", "Индивидуальный план до ЕГЭ"],
  },
  {
    label: "PRO",
    name: "Web & Индивидуально",
    price: "2 000 ₽",
    unit: "/ час",
    accent: "main",
    button: "btn btn-primary full",
    cta: "Записаться",
    preset: "pro",
    features: ["React + Node.js", "Личные проекты в портфолио", "Гибкий график", "Максимум внимания"],
  },
];

export default function Pricing() {
  const { openBooking } = useBooking();

  return (
    <motion.main
      className="pricing page-container"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="container pricing-shell">
        <motion.div className="section-head" variants={staggerContainer}>
          <motion.div className="badge" variants={revealUp}>
            <Sparkles size={16} />
            Форматы обучения
          </motion.div>
          <motion.h1 className="section-title pricing-title" variants={revealUp}>
            Выберите формат с <span>подходящим темпом</span> обучения
          </motion.h1>
          <motion.p className="section-subtitle" variants={revealUp}>
            Есть мягкий групповой старт, ускоренный индивидуальный маршрут, подготовка к ЕГЭ
            и формат для старших, кто уже хочет собирать серьёзные Web-проекты.
          </motion.p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {pricing.map((plan) => (
            <motion.article
              key={plan.name}
              className={`price-card elevated-card ${plan.accent}`}
              variants={revealScale}
            >
              <span className="label">{plan.label}</span>
              <h2>{plan.name}</h2>
              <div className="price">
                {plan.price}
                <span>{plan.unit}</span>
              </div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button type="button" className={plan.button} onClick={() => openBooking(plan.preset)}>
                {plan.cta}
              </button>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
