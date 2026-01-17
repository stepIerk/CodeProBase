import { motion } from "framer-motion";
import "./Programs.css";

const programs = [
  {
    age: "8–10 лет",
    title: "Логика и анимация",
    desc: "База инженерного мышления на Scratch: циклы, условия и событийная модель.",
    tags: ["Алгоритмы", "События", "Координаты"]
  },
  {
    age: "10–12 лет",
    title: "GameDev",
    desc: "Игровые механики на Scratch: переменные, списки и физика объектов.",
    tags: ["Математика", "Клонирование", "Логика"]
  },
  {
    age: "12–14 лет",
    title: "Алгоритмика (Текстовый код)",
    desc: "Переход от блоков к настоящему языку JavaScript, структурам данных и подготовке к промышленному синтаксису.",
    tags: ["Массивы", "Архитектура", "Функции"]
  },
  {
    age: "14+ лет",
    title: "Web Industrial",
    desc: "Настоящая разработка: создание сайтов на React и серверной логики на Node.js.",
    tags: ["React.js", "Backend", "API"]
  }
];

export default function Programs() {
  return (
    <motion.section
      className="programs container page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
        <div className="badge">📈 Поэтапная прокачка</div>
      <h2 className="section-title">Путь развития программиста</h2>

      <div className="program-grid">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            className="program-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="age">{p.age}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="tags">
              {p.tags.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}