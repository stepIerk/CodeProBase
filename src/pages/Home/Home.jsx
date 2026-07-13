import React from "react";
import { motion } from "framer-motion";
import pimg from "../../assets/p.png";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers3,
  MessageSquareQuote,
  MonitorPlay,
  Sparkles,
  Star,
  Target,
  Trophy,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useBooking } from "../../context/BookingContext";
import { pageTransition, revealScale, revealUp, staggerContainer } from "../../utils/motion";
import "./Home.css";

const metrics = [
  { value: "8+", label: "возраст старта" },
  { value: "4", label: "траектории роста" },
  { value: "React", label: "реальные проекты" },
];

const stages = [
  {
    icon: Sparkles,
    step: "01",
    title: "Scratch",
    text: "Первые алгоритмы, события и визуальная логика без страха перед кодом.",
  },
  {
    icon: Code2,
    step: "02",
    title: "JavaScript",
    text: "Переход к функциям, массивам и реальному синтаксису на уже понятной базе.",
  },
  {
    icon: Globe,
    step: "03",
    title: "React",
    text: "Интерфейсы, компоненты и мышление современными приложениями.",
  },
  {
    icon: Cpu,
    step: "04",
    title: "Node.js",
    text: "Серверная логика, API и понимание того, как работает полноценный продукт.",
  },
];

const pillars = [
  {
    icon: Code2,
    title: "Не просто блоки",
    text: "Показываем, как из визуальной логики вырастает настоящий код, функции и архитектурное мышление.",
  },
  {
    icon: Globe,
    title: "Web как результат",
    text: "Старшие ученики собирают интерфейсы, API и реальные Fullstack-проекты, которые можно положить в портфолио.",
  },
  {
    icon: Cpu,
    title: "Инженерная база",
    text: "Алгоритмы, декомпозиция задач и системное мышление остаются с учеником дольше любого конкретного инструмента.",
  },
];

const highlights = [
  "Scratch → JavaScript",
  "React + Node.js",
  "Онлайн-занятия",
  "Личные проекты",
];

const audience = [
  {
    icon: MonitorPlay,
    title: "Для ребёнка, который любит игры",
    text: "Начинаем с понятных игровых проектов, чтобы интерес сразу превращался в практику и результат.",
  },
  {
    icon: BookOpenCheck,
    title: "Для новичка без опыта",
    text: "Не нужен предварительный уровень. Материал идёт поэтапно и объясняется простым языком.",
  },
  {
    icon: Brain,
    title: "Для тех, кому нужна сильная база",
    text: "Развиваем логику, умение анализировать задачи и структурно мыслить, а не только нажимать кнопки.",
  },
];

const lessonFlow = [
  {
    step: "01",
    title: "Короткое объяснение",
    text: "Новая тема даётся простым языком, с примерами и без перегруза сложными терминами.",
  },
  {
    step: "02",
    title: "Практика на занятии",
    text: "Ребёнок сразу делает свою игру, мини-механику или элемент проекта, чтобы видеть результат вживую.",
  },
  {
    step: "03",
    title: "Разбор и доработка",
    text: "Вместе исправляем ошибки, учимся думать над кодом и доводить работу до аккуратного состояния.",
  },
  {
    step: "04",
    title: "Рост от проекта к проекту",
    text: "Каждое следующее занятие опирается на предыдущее, поэтому прогресс ощущается последовательно и спокойно.",
  },
];

const studentProjects = [
  {
    age: "9 лет",
    title: "Аркада с уровнями",
    result: "Ученик собрал игру в Scratch с бонусами, счётом и несколькими уровнями сложности.",
    stack: ["Scratch", "События", "Переменные"],
  },
  {
    age: "11 лет",
    title: "Платформер с логикой врагов",
    result: "Ребёнок научился работать с условиями, клонами и движением объектов в более сложной игре.",
    stack: ["GameDev", "Логика", "Клонирование"],
  },
  {
    age: "13 лет",
    title: "Сайт-визитка на JavaScript",
    result: "Ученик сделал свой первый живой сайт с интерактивными блоками и понял связь между HTML, CSS и JS.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    age: "15 лет",
    title: "Мини-приложение на React",
    result: "Старший ученик собрал интерфейс с компонентами, состоянием и логикой переключения экранов.",
    stack: ["React", "Компоненты", "UI"],
  },
];

const reviews = [
  {
    name: "Марина, мама ученика 10 лет",
    text: "Ребёнок всегда ждёт занятия. Для меня главное, что это не просто развлечение, а обучение новому, что пригодится в будущем.",
  },
  {
    name: "Алексей, папа ученика 13 лет",
    text: "Отличные объяснения. Сыну стало интересно программирование именно потому, что он быстро увидел связь между кодом и реальными сайтами.",
  },
  {
    name: "Елена, мама ученицы 9 лет",
    text: "После занятий всегда показывает новую игру. Сильно нравится, говорит что увлекательно.",
  },
];

const faq = [
  {
    question: "Подойдёт ли обучение ребёнку, если он раньше не программировал?",
    answer:
      "Да. Программа построена так, чтобы ребёнок мог начать с нуля, постепенно привыкнуть к логике задач и только потом переходить к более серьёзным инструментам.",
  },
  {
    question: "Нужен ли мощный компьютер?",
    answer:
      "Для старта нет. Для Scratch и первых шагов достаточно обычного ноутбука. Для Web-направления также не требуется профессиональная техника.",
  },
  {
    question: "Что получает родитель на выходе?",
    answer:
      "Вы видите не абстрактные уроки, а конкретные результаты: игры, мини-проекты, первый сайт и постепенное развитие логического мышления.",
  },
  {
    question: "Как понять, что ребёнку действительно интересно?",
    answer:
      "На первых занятиях это видно очень быстро: если ребёнок начинает сам дорабатывать проект, задаёт вопросы и хочет показать результат, значит интерес уже появился.",
  },
];

const teacherQuote = [
  "Меня зовут Степан, я занимаюсь программированием более 3 лет и обучаю детей основам Scratch и JavaScript.",
  "На занятиях мы не просто изучаем теорию — ребёнок сразу создаёт свои игры и проекты, чтобы видеть результат с первых уроков.",
  "Я выстраиваю обучение так, чтобы после простых игр в Scratch ребёнок постепенно переходил на более серьёзный уровень — к созданию настоящих сайтов на JavaScript. Это помогает не просто поиграться, а понять, как программирование используется в реальной жизни.",
  "Во время обучения также развивается логическое мышление и математические навыки: ребёнок учится анализировать задачи, находить решения и мыслить структурно.",
  "Я объясняю сложные темы простым языком и подбираю задания под уровень ученика, чтобы ему было интересно и понятно.",
  "Моя цель — не просто научить коду, а заинтересовать ребёнка программированием и дать ему прочную базу для дальнейшего развития.",
];

export default function Home() {
  const { openBooking } = useBooking();

  return (
    <motion.main
      className="home page-container"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <section className="container home-section">
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
              Подготовка к ЕГЭ по информатике
            </div>
            <h2 className="section-title" style={{textAlign: 'left'}}>Готовлю к ЕГЭ на <span>высокий балл</span></h2>
            <p>
              Индивидуальная подготовка к ЕГЭ по информатике: разбор всех типов заданий,
              программирование на Python, пробные варианты и стратегия на экзамене.
            </p>
            <Link to="/ege" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
              Подробнее о подготовке
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div className="spotlight-list" variants={staggerContainer}>
            {[
              "Разбор всех заданий от 1 до 27 с упором на сложные номера",
              "Программирование на Python: эффективные и безошибочные решения",
              "Пробные экзамены с замером времени и детальным разбором",
              "Индивидуальный план под текущий уровень и нужный балл",
            ].map((item, index) => (
              <motion.div key={item} className="spotlight-item" variants={revealUp} custom={index * 0.08}>
                <span className="spotlight-index">0{index + 1}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="container home-hero">
        <motion.div className="home-copy" variants={staggerContainer}>
          <motion.div className="badge" variants={revealUp} custom={0.05}>
            <Sparkles size={16} />
            От первых блоков до React-приложений
          </motion.div>

          <motion.h1 className="section-title home-title" variants={revealUp} custom={0.12}>
            Программирование как <span>сильная база</span>, а не набор уроков
          </motion.h1>

          <motion.p className="subtitle home-subtitle" variants={revealUp} custom={0.2}>
            Обучение для детей и подростков, где Scratch становится не игрушкой, а входом в алгоритмы,
            JavaScript и промышленную Web-разработку.
          </motion.p>

          <motion.div className="home-cta" variants={revealUp} custom={0.28}>
            <Link to="/programs" className="btn btn-primary">
              Программы обучения
              <ArrowRight size={18} />
            </Link>
            <button type="button" className="btn btn-outline" onClick={() => openBooking("general")}>
              Записаться на урок
            </button>
          </motion.div>

          <motion.div className="pill-row" variants={revealUp} custom={0.34}>
            {highlights.map((item) => (
              <span key={item} className="metric-pill">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>


        <motion.div className="hero-stage" variants={revealScale} custom={0.18}>
          <div className="hero-stage-glow" />
          <div className="hero-stage-grid" />

          <div className="hero-stage-head">
            <span className="hero-board-label">Траектория роста</span>
            <h2>Scratch → JS → React → Node.js</h2>
            <p>
              Вместо разрозненных тем ученик проходит ясный маршрут, где каждый следующий этап выглядит
              логичным продолжением предыдущего.
            </p>
          </div>

          <div className="hero-trajectory">
            <div className="hero-trajectory-line" />
            {stages.map(({ icon: Icon, step, title, text }, index) => (
              <article key={title} className={`trajectory-stop trajectory-stop-${index + 1}`}>
                <div className="trajectory-marker">
                  <span>{step}</span>
                  <div className="trajectory-icon">
                    <Icon size={18} />
                  </div>
                </div>
                <div className="trajectory-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="hero-stage-footer">
            <div className="hero-stage-note">
              <span className="hero-board-label">Формат</span>
              <strong>Живые занятия с разбором проектов и понятной практикой</strong>
            </div>

            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="hero-metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      

      <section className="container home-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <Workflow size={16} />
            Кому подойдёт обучение
          </motion.div>
          <motion.h2 className="section-title home-section-title" variants={revealUp}>
            Подходит и для <span>первого старта</span>, и для серьёзного роста
          </motion.h2>
          <motion.p className="section-subtitle" variants={revealUp}>
            Программа выстроена так, чтобы ребёнок не потерял интерес в начале и при этом мог вырасти
            до сильного проектного уровня.
          </motion.p>
        </motion.div>

        <motion.div
          className="home-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {audience.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} className="pillar-card elevated-card" variants={revealScale}>
              <div className="pillar-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="container home-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <Workflow size={16} />
            Почему этот формат работает
          </motion.div>
          <motion.h2 className="section-title home-section-title" variants={revealUp}>
            Сильная база строится из <span>маленьких шагов</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={revealUp}>
            Когда темы идут в правильной последовательности, ребёнок не теряет интерес и быстрее понимает,
            как связаны алгоритмы, код и реальные цифровые продукты.
          </motion.p>
        </motion.div>

        <motion.div
          className="home-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {pillars.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} className="pillar-card elevated-card" variants={revealScale}>
              <div className="pillar-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="container home-section">
        <motion.div
          className="spotlight panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div className="spotlight-copy" variants={revealUp}>
            <div className="badge">
              <Layers3 size={16} />
              Что получит ученик через 2-3 месяца
            </div>
            <h2>Не просто интерес к теме, а реальные результаты и уверенность</h2>
            <p>
              На выходе ученик не просто знаком с синтаксисом. Он понимает логику интерфейса,
              умеет собирать проект из модулей и видит связь между фронтендом, сервером и данными.
            </p>
          </motion.div>

          <motion.div className="spotlight-list" variants={staggerContainer}>
            {[
              "Понимание алгоритмов, циклов и событийной модели",
              "Переход от визуальной среды к текстовому коду без резкого стресса",
              "Первый законченный проект, который можно показать как результат обучения",
            ].map((item, index) => (
              <motion.div key={item} className="spotlight-item" variants={revealUp} custom={index * 0.08}>
                <span className="spotlight-index">0{index + 1}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="container home-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <BookOpenCheck size={16} />
            Как проходит занятие
          </motion.div>
          <motion.h2 className="section-title home-section-title" variants={revealUp}>
            От объяснения к <span>своему проекту</span> уже на уроке
          </motion.h2>
        </motion.div>

        <motion.div
          className="lesson-flow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {lessonFlow.map((item) => (
            <motion.article key={item.step} className="flow-card elevated-card" variants={revealScale}>
              <span className="flow-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="container home-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <Trophy size={16} />
            Результаты учеников
          </motion.div>
          <motion.h2 className="section-title home-section-title" variants={revealUp}>
            Проекты, которые показывают <span>реальный прогресс</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={revealUp}>
            Даже на ранних этапах ребёнок видит конкретный результат: игру, механику, сайт или интерфейс.
            Это помогает не терять мотивацию и ощущать рост.
          </motion.p>
        </motion.div>

        <motion.div
          className="project-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {studentProjects.map((project) => (
            <motion.article key={project.title} className="project-card elevated-card" variants={revealScale}>
              <div className="project-top">
                <span className="project-age">{project.age}</span>
                <span className="project-status">Готовый результат</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.result}</p>
              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="container home-section">
        <motion.div
          className="teacher-quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="teacher-quote-head" variants={revealUp}>
            <div className="badge">
              <MessageSquareQuote size={16} />
              От преподавателя
            </div>
            <h2 className="section-title">Подход, в котором теория сразу <span>превращается в действие</span></h2>
          </motion.div>

          <motion.div className="teacher-quote-grid" variants={staggerContainer}>
            <motion.div className="teacher-photo" variants={revealScale}>
              <div className="teacher-photo-ring" />
              <img src={pimg} alt="Степан — преподаватель" className="teacher-img" />
            </motion.div>

            <motion.div className="teacher-text panel" variants={staggerContainer}>
              {teacherQuote.map((paragraph, index) => (
                <motion.p key={paragraph} variants={revealUp} custom={index * 0.06}>
                  {paragraph}
                </motion.p>
              ))}
              <div className="teacher-text-line"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* <section className="container home-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <Star size={16} />
            Отзывы
          </motion.div>
          <motion.h2 className="section-title home-section-title" variants={revealUp}>
            Что отмечают <span>родители учеников</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="review-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {reviews.map((review) => (
            <motion.article key={review.name} className="review-card elevated-card" variants={revealScale}>
              <CheckCircle2 size={18} className="review-icon" />
              <p>{review.text}</p>
              <strong>{review.name}</strong>
            </motion.article>
          ))}
        </motion.div>
      </section> */}

      {/* ———— EGE Section ———— */}
      

      <section className="container home-section">
        <motion.div
          className="section-head centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={revealUp}>
            <BookOpenCheck size={16} />
            FAQ
          </motion.div>
          <motion.h2 className="section-title home-section-title" variants={revealUp}>
            Коротко о том, что чаще всего <span>спрашивают родители</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {faq.map((item) => (
            <motion.article key={item.question} className="faq-card elevated-card" variants={revealScale}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="container home-section">
        <motion.div
          className="final-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div variants={revealUp}>
            <div className="badge">
              <Sparkles size={16} />
              Начните с первого шага
            </div>
          </motion.div>
          <motion.h2 className="section-title" variants={revealUp}>
            Если хотите, чтобы ребёнок не просто <span>смотрел</span>, а действительно создавал
          </motion.h2>
          <motion.p className="section-subtitle" variants={revealUp}>
            Запишитесь на урок и посмотрите, как обучение может превратиться в понятный и интересный путь
            от первых игр до настоящих Web-проектов.
          </motion.p>
          <motion.div className="final-cta-actions" variants={revealUp}>
            <button type="button" className="btn btn-primary" onClick={() => openBooking("general")}>
              Записаться на урок
            </button>
            <Link to="/pricing" className="btn btn-outline">
              Посмотреть форматы
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
