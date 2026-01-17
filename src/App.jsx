/* import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, Users, Zap, CheckCircle, Code2 } from 'lucide-react';

const styles = `
  :root {
    --bg-dark: #0f0c29;
    --bg-gradient: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    --primary: #8b5cf6;
    --primary-glow: #a78bfa;
    --accent: #d8b4fe;
    --text-main: #ffffff;
    --text-dim: #cbd5e1;
    --glass: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --nav-height: 80px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: var(--bg-dark);
    background-image: var(--bg-gradient);
    background-attachment: fixed;
    color: var(--text-main);
    min-height: 100vh;
    line-height: 1.5;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    z-index: 1000;
    background: rgba(15, 12, 41, 0.4);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: 800;
    text-decoration: none;
    background: linear-gradient(to right, #fff, var(--primary-glow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .jsprobase-logo {
    font-weight: 800;
    text-decoration: none;
    background: linear-gradient(to right, #fff, var(--primary-glow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  .nav-link {
    color: var(--text-dim);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1rem;
  }

  .nav-link:hover, .nav-link.active {
    color: var(--primary-glow);
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    transition: 0.3s easy;
    border-radius: 40%
  }

  .mobile-nav-overlay {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--nav-height));
    background: rgba(15, 12, 41, 0.98);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }

  .hero {
    padding-top: calc(var(--nav-height) + 60px);
    padding-bottom: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .badge {
    background: rgba(139, 92, 246, 0.2);
    border: 1px solid var(--primary);
    padding: 8px 20px;
    border-radius: 100px;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-weight: 900;
  }

  .hero h1 span { color: var(--primary-glow); }

  .hero p {
    font-size: clamp(1rem, 4vw, 1.25rem);
    color: var(--text-dim);
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .cta-group {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .btn {
    padding: 14px 28px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .btn-primary {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
  }

  .btn-outline {
    border: 1px solid var(--primary);
    color: white;
    background: transparent;
  }

  .btn-outline:hover { background: rgba(139, 92, 246, 0.1); }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
  }

  .glass-card {
    background: var(--glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 2.5rem;
    transition: all 0.3s ease;
    text-align: left;
  }

  .glass-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .program-tag {
    color: var(--primary-glow);
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    display: block;
  }

  .tech-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  .tag {
    background: rgba(255, 255, 255, 0.08);
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 0.8rem;
    color: var(--accent);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 450px));
    justify-content: center;
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .price-value {
    font-size: 3rem;
    font-weight: 800;
    margin: 1.5rem 0;
    color: white;
  }

  .price-value span { font-size: 1rem; color: var(--text-dim); }

  .features-list { list-style: none; margin-bottom: 2.5rem; }

  .features-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
    color: var(--text-dim);
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .mobile-menu-btn { display: block; }
    .hero { padding-top: calc(var(--nav-height) + 40px); }
    .cta-group { flex-direction: column; width: 100%; }
    .btn { width: 100%; }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Главная' },
    { path: '/programs', label: 'Программы' },
    { path: '/pricing', label: 'Цены и Запись' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">SCRATCH<span>PRO</span>BASE</Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://t.me/your_bot" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 20px' }}>
            Бот записи
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="jsprobase-logo" style={{ fontSize: '1.2rem' }}>
            JSPROBASE
          </a>
        </div>
          

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="nav-link" style={{ fontSize: '1.5rem' }}>
                {link.label}
              </Link>
            ))}
            <a href="https://t.me/your_bot" className="btn btn-primary">Записаться в Telegram</a>
            <a href="" target="_blank" rel="noopener noreferrer" className="jsprobase-logo" style={{ fontSize: '1.2rem' }}>
              JSPROBASE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Home = () => (
  <motion.div 
    className="container hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="badge">🚀 Старт в IT через инженерный Scratch</div>
    <h1>Программирование как <span>фундамент</span></h1>
    <p>
      Готовим к промышленной разработке с 8 лет. Изучаем алгоритмы, 
      архитектуру и чистый код, а не просто перетаскиваем блоки.
    </p>
    
    <div className="cta-group">
      <Link to="/programs" className="btn btn-primary">Программы обучения</Link>
      <Link to="/pricing" className="btn btn-outline">Пробный онлайн-урок</Link>
    </div>

    <div className="grid">
      <div className="glass-card">
        <Code2 size={32} color="#a78bfa" />
        <h3 style={{ margin: '1rem 0' }}>Industrial Quality</h3>
        <p style={{ color: '#cbd5e1' }}>Учим писать код, который легко читать и масштабировать.</p>
      </div>
      <div className="glass-card">
        <Cpu size={32} color="#a78bfa" />
        <h3 style={{ margin: '1rem 0' }}>CS Fundamentals</h3>
        <p style={{ color: '#cbd5e1' }}>Базовые структуры данных и алгоритмы на примере визуальной среды.</p>
      </div>
      <div className="glass-card">
        <Users size={32} color="#a78bfa" />
        <h3 style={{ margin: '1rem 0' }}>Live Classes</h3>
        <p style={{ color: '#cbd5e1' }}>Живые уроки с менторами из индустрии, а не сухие записи.</p>
      </div>
    </div>
  </motion.div>
);

const Programs = () => {
  const data = [
    {
      age: "8-10 лет",
      title: "Логика и анимация",
      desc: "Основы координатных систем и циклов. Создаем первые интерактивные истории.",
      tags: ["События", "Циклы", "Координаты"]
    },
    {
      age: "10-12 лет",
      title: "Профессиональный GameDev",
      desc: "Физические движки, гравитация и искусственный интеллект ботов.",
      tags: ["Переменные", "Клонирование", "Математика"]
    },
    {
      age: "12+ лет",
      title: "Bridge to Python",
      desc: "Сложные структуры данных, списки и подготовка к текстовому программированию.",
      tags: ["Массивы", "Облака", "Архитектура"]
    }
  ];

  return (
    <motion.div 
      className="container" 
      style={{ paddingTop: '140px', paddingBottom: '80px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">Программы обучения</h2>
      <div className="grid">
        {data.map((item, i) => (
          <motion.div 
            key={i} 
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="program-tag">{item.age}</span>
            <h3>{item.title}</h3>
            <p style={{ color: '#cbd5e1', marginTop: '1rem' }}>{item.desc}</p>
            <div className="tech-tags">
              {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Pricing = () => (
  <motion.div 
    className="container" 
    style={{ paddingTop: '140px', paddingBottom: '80px' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h2 className="section-title">Форматы и Стоимость</h2>
    <div className="pricing-grid">

      <div className="glass-card" style={{ border: '2px solid #d14848' }}>
        <h3>Scratch Turbo</h3>
        <div className="price-value">8 000 ₽ <span>/ месяц</span></div>
        <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#d14848', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem' }}>FAST 🚀</div>
        <ul className="features-list">
          <li><CheckCircle size={18} color="#a78bfa" /> Персональный ментор</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Полный курс за месяц</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Глубокий разбор архитектуры</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Гибкий график обучения</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Ускоренное прохождение программы</li>
          
        </ul>
        <a href="https://t.me/your_bot" className="btn btn-outline" style={{ width: '100%', border: '2px solid #d14848' }}>Погнали</a>
      </div>

      <div className="glass-card">
        <h3>Групповые занятия</h3>
        <div className="price-value">4 800 ₽ <span>/ месяц</span></div>
        <ul className="features-list">
          <li><CheckCircle size={18} color="#a78bfa" /> Онлайн группы до 6 детей</li>
          <li><CheckCircle size={18} color="#a78bfa" /> 4 занятия по 90 минут</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Общие хакатоны и проекты</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Доступ в общий чат</li>
        </ul>
        <a href="https://t.me/your_bot" className="btn btn-outline" style={{ width: '100%' }}>Записаться в группу</a>
      </div>

      <div className="glass-card" style={{ border: '2px solid var(--primary)' }}>
        <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--primary)', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem' }}>TOP 🔥</div>
        <h3>Индивидуально</h3>
        <div className="price-value">1 500 ₽ <span>/ урок</span></div>
        <ul className="features-list">
          <li><CheckCircle size={18} color="#a78bfa" /> Персональный ментор</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Гибкий график обучения</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Глубокий разбор архитектуры</li>
          <li><CheckCircle size={18} color="#a78bfa" /> Помощь с личным проектом</li>
        </ul>
        <a href="https://t.me/your_bot" className="btn btn-primary" style={{ width: '100%' }}>Начать 1-на-1</a>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
} */



import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Programs from "./pages/Programs/Programs";
import Pricing from "./pages/Pricing/Pricing";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/buttons.css";
import Methodology from "./pages/Methodology/Methodology";

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Home />} />
          <Route path="/methodology" element={<Methodology />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
