import { motion } from "framer-motion";
import { Code2, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <motion.section
      className="home container page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="badge">🚀 От первых блоков до React-приложений</div>

      <h1>
        Программирование как <span>фундамент</span>
      </h1>

      <p className="subtitle">
        Готовим к промышленной разработке с 8 лет. 
        Начинаем с визуальной логики Scratch и доходим до создания реальных серверов и сайтов.
      </p>

      <div className="cta">
        <Link to="/programs" className="btn btn-primary">
          Программы обучения
        </Link>
        <Link to="/pricing" className="btn btn-outline">
          Пробный урок
        </Link>
      </div>

      <div className="features">
        <div className="card">
          <Code2 size={32} />
          <h3>Правильный код</h3>
          <p>Чистый код и архитектура проектов с самых первых занятий.</p>
        </div>

        <div className="card">
          <Globe size={32} />
          <h3>Web-разработка</h3>
          <p>Создание живых сайтов на React и Node.js для старших учеников.</p>
        </div>

        <div className="card">
          <Cpu size={32} />
          <h3>Инженерные навыки</h3>
          <p>Алгоритмы, структуры данных и логика, применимые в любом языке.</p>
        </div>
      </div>
    </motion.section>
  );
}