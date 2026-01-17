import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "./Pricing.css";

export default function Pricing() {
  return (
    <motion.section
      className="pricing container page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
    <div className="badge">⚙️ Выбирайте удобный формат</div>
      <h2 className="section-title">Форматы обучения</h2>

      <div className="pricing-grid">
        <div className="price-card fast">
          <span className="label">FAST 🚀</span>
          <h3>Scratch Turbo</h3>
          <div className="price">8 000 ₽ <span>/ месяц</span></div>
          <ul>
            <li><CheckCircle /> Персональный ментор</li>
            <li><CheckCircle /> Ускоренная программа</li>
            <li><CheckCircle /> Архитектура игр</li>
          </ul>
          <a className="btn btn-outline" href="https://t.me/your_bot">Погнали</a>
        </div>

        <div className="price-card">
          <h3>Групповые (Scratch)</h3>
          <div className="price">4 800 ₽ <span>/ месяц</span></div>
          <ul>
            <li><CheckCircle /> Группы до 6 детей</li>
            <li><CheckCircle /> 4 занятия по 90 минут</li>
            <li><CheckCircle /> Совместные проекты</li>
          </ul>
          <a className="btn btn-outline" href="https://t.me/your_bot">Записаться</a>
        </div>

        <div className="price-card top">
          <span className="label">PRO 🔥</span>
          <h3>Web & Индивидуально</h3>
          <div className="price">1 500 ₽ <span>/ урок</span></div>
          <ul>
            <li><CheckCircle /> React + Node.js</li>
            <li><CheckCircle /> Личные проекты в портфолио</li>
            <li><CheckCircle /> Гибкий график</li>
          </ul>
          <a className="btn btn-primary" href="https://t.me/your_bot">Начать</a>
        </div>
      </div>
    </motion.section>
  );
}