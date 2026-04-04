import React from "react";
import { motion } from "framer-motion";
import { MoveUpRight, Blocks, Braces, Gamepad2, Rocket } from "lucide-react";

import { pageTransition, revealScale, revealUp, staggerContainer } from "../../utils/motion";
import "./Programs.css";

const programs = [
  {
    age: "8–10 лет",
    title: "Логика и анимация",
    desc: "База инженерного мышления на Scratch: циклы, условия, события и понимание того, как задача раскладывается на шаги.",
    tags: ["Алгоритмы", "События", "Координаты"],
    icon: Blocks,
  },
  {
    age: "10–12 лет",
    title: "GameDev",
    desc: "Игровые механики, переменные, счётчики, столкновения и более сложные системы взаимодействия объектов.",
    tags: ["Математика", "Клонирование", "Логика"],
    icon: Gamepad2,
  },
  {
    age: "12–14 лет",
    title: "Текстовый код",
    desc: "Переход к JavaScript: функции, массивы, декомпозиция, работа с данными и подготовка к реальной разработке.",
    tags: ["Массивы", "Функции", "Архитектура"],
    icon: Braces,
  },
  {
    age: "14+ лет",
    title: "Web Industrial",
    desc: "React, Node.js, API и проектная работа. Здесь обучение начинает выглядеть как старт в профессию.",
    tags: ["React.js", "Backend", "API"],
    icon: Rocket,
  },
];

export default function Programs() {
  return (
    <motion.main
      className="programs page-container"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="container programs-shell">
        <motion.div className="section-head" variants={staggerContainer}>
          <motion.div className="badge" variants={revealUp}>
            <MoveUpRight size={16} />
            Поэтапная траектория роста
          </motion.div>
          <motion.h1 className="section-title programs-title" variants={revealUp}>
            Путь ученика от <span>визуальной логики</span> к реальной разработке
          </motion.h1>
          <motion.p className="section-subtitle" variants={revealUp}>
            Каждая ступень закрывает свой уровень зрелости. Материал не выглядит случайным набором тем,
            а складывается в последовательный маршрут.
          </motion.p>
        </motion.div>

        <motion.div
          className="program-rail"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="program-rail-line" />
          {programs.map(({ age, title }, index) => (
            <motion.div key={title} className="program-rail-step" variants={revealUp} custom={index * 0.08}>
              <span>{age}</span>
              <strong>{title}</strong>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="program-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {programs.map(({ age, title, desc, tags, icon: Icon }) => (
            <motion.article key={title} className="program-card elevated-card" variants={revealScale}>
              <div className="program-card-top">
                <div className="program-icon">
                  <Icon size={22} />
                </div>
                <span className="age">{age}</span>
              </div>

              <h2>{title}</h2>
              <p>{desc}</p>

              <div className="tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
