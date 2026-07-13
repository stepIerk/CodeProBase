import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, ClipboardCheck, Code2, Cpu, PenTool, Target, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

import { useBooking } from "../../context/BookingContext";
import { pageTransition, revealScale, revealUp, staggerContainer } from "../../utils/motion";
import "./EGE.css";

const topics = [
  {
    icon: Code2,
    title: "Программирование на Python",
    text: "Задания 16–17, 19–21, 23–27: решаем только на Python. Рекурсивные функции, обработка последовательностей и строк, теория игр, подсчёт маршрутов в графах, сложные задачи на сортировки и анализ данных. Учимся писать чистый и понятный код, а ответы при необходимости проверяем по критериям ЕГЭ.",
  },
  {
    icon: Brain,
    title: "Логика и теория — тоже с Python",
    text: "Задания 2, 8, 11, 13, 14: логические выражения, таблицы истинности, объём информации, системы счисления, компьютерные сети. Показываю два подхода: аналитический и программный — решаем эти задачи скриптами на Python для ускорения и надёжной проверки.",
  },
  {
    icon: Cpu,
    title: "Алгоритмизация и исполнители с кодом",
    text: "Задания 5, 16, 23–24: анализ алгоритмов, исполнители, рекурсия и маршрутные задачи. Разбираю логику на схеме, а затем пишем Python‑скрипты, которые моделируют исполнителей и проверяют гипотезы.",
  },
  {
    icon: ClipboardCheck,
    title: "Поиск, таблицы",
    text: "Задания 9, 13, 27: поиск и фильтрация данных, электронные таблицы, работа с реляционными моделями. Переносим идеи из Excel в Python: читаем данные, фильтруем и проверяем ответы программно.",
  },
];


const features = [
  {
    icon: Target,
    title: "Разбор всех типов заданий",
    text: "Проходим каждую тему от простых задач до сложных номеров 24–27. Я учу выбирать оптимальный способ решения.",
  },
  {
    icon: Trophy,
    title: "Реальные пробники",
    text: "Регулярные пробные экзамены с замером времени и разбором ошибок. Привыкаем к формату и распределяем время.",
  },
  {
    icon: PenTool,
    title: "Акцент на программирование",
    text: "Большая часть баллов — за задачи с кодом. Я учу писать эффективные, читаемые и безошибочные решения на Python.",
  },
  {
    icon: BookOpen,
    title: "Индивидуальный план",
    text: "Для каждого ученика составляю маршрут: закрываем пробелы, закрепляем сильные темы, выходим на уверенный результат.",
  },
];

// Заглушка — замени на свои баллы
const results = [
  {
    score: "98",
    text: "Мой балл на ЕГЭ по информатике",
  },
  {
    score: "100",
    text: "Мой балл на ЕГЭ по профильной математике",
  },
];

export default function EGE() {
  const { openBooking } = useBooking();

  return (
    <motion.main
      className="ege page-container"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero (без боковой статистики) */}
      <section className="container ege-hero">
        <motion.div className="ege-copy" variants={staggerContainer}>
          <motion.div className="badge" variants={revealUp} custom={0.05}>
            <Target size={16} />
            Подготовка к ЕГЭ по информатике
          </motion.div>

          <motion.h1 className="section-title ege-title" variants={revealUp} custom={0.12}>
            Подготовка к ЕГЭ по информатике — <span>максимум баллов</span> без лишнего
          </motion.h1>

          <motion.p className="subtitle ege-subtitle" variants={revealUp} custom={0.2}>
            Индивидуальная подготовка к ЕГЭ по информатике с упором на программирование, разбор
            всех типов заданий, пробные варианты и стратегию на экзамене.
          </motion.p>

          <motion.div className="ege-cta" variants={revealUp} custom={0.28}>
            <button type="button" className="btn btn-primary" onClick={() => openBooking("ege")}>
              Записаться на подготовку
            </button>
            <Link to="/pricing" className="btn btn-outline">
              Стоимость занятий
            </Link>
          </motion.div>

          <motion.div className="pill-row" variants={revealUp} custom={0.34}>
            {["Python", "Алгоритмы", "Разбор 27 задач", "Пробники"].map((item) => (
              <span key={item} className="metric-pill">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="ege-results-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {results.map((item, index) => (
            <motion.div key={item.score} className="ege-result-stat" variants={revealUp} custom={index * 0.08}>
              <span className="ege-result-score">{item.score}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* Topics — Разбор заданий */}
      <section className="container ege-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <Code2 size={16} />
            Все типы заданий
          </motion.div>
          <motion.h2 className="section-title" variants={revealUp}>
            Разбираем каждую тему от первой задачи <span>до самого сложного номера</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={revealUp}>
            ЕГЭ по информатике — это не только теория. Большая часть баллов приходится на
            программирование и алгоритмы. Я учу не просто решать, а выбирать самый эффективный путь.
          </motion.p>
        </motion.div>

        <motion.div
          className="ege-topics-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {topics.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} className="ege-topic-card elevated-card" variants={revealScale}>
              <div className="ege-topic-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="container ege-section">
        <motion.div
          className="spotlight panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div className="spotlight-copy" variants={revealUp}>
            <div className="badge">
              <Target size={16} />
              Как я готовлю
            </div>
            <h2>Системная подготовка без стресса и хаоса</h2>
            <p>
              Я не просто прорешиваю варианты. Я выстраиваю стратегию: определяем слабые места,
              учимся правильно распределять время на экзамене и доводим решение до автоматизма.
            </p>
          </motion.div>

          <motion.div className="spotlight-list" variants={staggerContainer}>
            {features.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                className="ege-feature-item"
                variants={revealUp}
                custom={index * 0.08}
              >
                <div className="ege-feature-head">
                  <Icon size={18} />
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="container ege-section">
        <motion.div
          className="final-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div variants={revealUp}>
            <div className="badge">
              <Trophy size={16} />
              Начните подготовку сейчас
            </div>
          </motion.div>
          <motion.h2 className="section-title" variants={revealUp}>
            Хотите, чтобы ребёнок сдал ЕГЭ по информатике <span>на высокий балл</span> и поступил
            в вуз мечты?
          </motion.h2>
          <motion.p className="section-subtitle" variants={revealUp}>
            Запишитесь на пробное занятие — познакомимся, оценим текущий уровень и составим план
            подготовки до экзамена.
          </motion.p>
          <motion.div className="final-cta-actions" variants={revealUp}>
            <button type="button" className="btn btn-primary" onClick={() => openBooking("ege")}>
              Записаться на пробное
            </button>
            <Link to="/pricing" className="btn btn-outline">
              Посмотреть тарифы
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}