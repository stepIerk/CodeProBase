import React from "react";
import { motion } from "framer-motion";
import { Globe, Layers, Rocket, Zap } from "lucide-react";

import { pageTransition, revealScale, revealUp, staggerContainer } from "../../utils/motion";
import "./Methodology.css";

const cards = [
  {
    icon: Zap,
    title: "Почему Scratch",
    text: "Это способ объяснить алгоритмы и причинно-следственные связи без лишней нагрузки на синтаксис и страх ошибки.",
  },
  {
    icon: Globe,
    title: "Почему Web",
    text: "Web-разработка даёт быстрый видимый результат. Ученик видит, как идея превращается в сайт, интерфейс и сервис.",
  },
  {
    icon: Layers,
    title: "Почему React",
    text: "React учит мыслить компонентами, состоянием и структурой приложения. Это уже очень близко к реальной индустрии.",
  },
  {
    icon: Rocket,
    title: "Почему переход плавный",
    text: "Вместо резкого прыжка в терминалы и скобки мы переносим уже понятные паттерны в JavaScript шаг за шагом.",
  },
];

export default function Methodology() {
  return (
    <motion.main
      className="methodology page-container"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="container methodology-shell">
        <motion.div className="section-head" variants={staggerContainer}>
          <motion.div className="badge" variants={revealUp}>
            <Layers size={16} />
            Метод обучения
          </motion.div>
          <motion.h1 className="section-title methodology-title" variants={revealUp}>
            От визуальной логики к <span>промышленному коду</span>
          </motion.h1>
          <motion.p className="section-subtitle" variants={revealUp}>
            Подход построен на принципе "от простого к сложному". Мы не читаем сухую теорию, а делаем
            проекты и постепенно заменяем визуальные блоки настоящими строками кода.
          </motion.p>
        </motion.div>

        <motion.div
          className="method-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {cards.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} className="method-card elevated-card" variants={revealScale}>
              <div className="method-icon">
                <Icon size={24} />
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="bottom-info panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="bottom-copy" variants={revealUp}>
            <span className="bottom-tag">Результат обучения</span>
            <h2>Инженерное мышление, а не просто знание синтаксиса</h2>
            <p>
              Для старших групп итогом становится Fullstack-проект: работающий сайт с интерфейсом,
              серверной логикой и понятной структурой. Это уже серьёзная работа, которую не стыдно
              показать в портфолио.
            </p>
          </motion.div>

          <motion.div className="method-points" variants={staggerContainer}>
            {[
              "Ребёнок видит причинно-следственную связь между идеей и результатом",
              "Страх перед текстовым кодом снимается ещё до серьёзного входа в JavaScript",
              "Старшие ученики получают проект, максимально похожий на боевую разработку",
            ].map((point, index) => (
              <motion.div key={point} className="method-point" variants={revealUp} custom={index * 0.08}>
                <span>0{index + 1}</span>
                <p>{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
