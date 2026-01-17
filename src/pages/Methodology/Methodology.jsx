import { motion } from "framer-motion";
import { Layers, Zap, Globe, Rocket } from "lucide-react";
import "./Methodology.css";

export default function Methodology() {
  return (
    <motion.section 
      className="methodology container page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="badge">📚 Метод обучения</div>
      <h2 className="section-title">От визуальной логики к <span>промышленному коду</span></h2>
      
      <p className="subtitle">
        Мой подход основан на принципе «от простого к сложному». Мы не учим сухую теорию, 
        а создаем проекты, постепенно заменяя визуальные блоки реальными строчками кода.
      </p>

      <div className="method-grid">
        <div className="card">
          <Zap size={32} className="icon-yellow" />
          <h3>Почему Scratch?</h3>
          <p>
            Scratch — это не просто «детские картинки». Это мощный инструмент для освоения логики 
            без борьбы с опечатками. Ребенок учится понимать условия, циклы и алгоритмы, 
            видя результат мгновенно. Это закладывает 90% базы программиста.
          </p>
        </div>

        <div className="card">
          <Globe size={32} className="icon-yellow" />
          <h3>Web-разработка</h3>
          <p>
            Это создание того, чем мы пользуемся каждый день. Мы учим ребенка понимать, 
            как устроен интернет, как работают серверы и как превратить пустую страницу 
            в интерактивное приложение, доступное всему миру.
          </p>
        </div>

        <div className="card">
          <Layers size={32} className="icon-yellow" />
          <h3>Что такое React?</h3>
          <p>
            Это стандарт индустрии. На React написаны Facebook, Instagram и Netflix. 
            Изучая его, ребенок переходит на уровень профессионала: учится создавать 
            переиспользуемые компоненты и управлять данными в сложных системах.
          </p>
        </div>

        <div className="card">
          <Rocket size={32} className="icon-yellow" />
          <h3>Плавный переход</h3>
          <p>
            Самая большая ошибка — резко бросить ребенка в текстовый код. Моя методика 
            обеспечивает «мягкий» вход: мы переносим знакомые по Scratch алгоритмы 
            в JavaScript, что исключает страх перед «черным экраном» с кодом.
          </p>
        </div>
      </div>

      <div className="bottom-info">
        <h3>Результат обучения</h3>
        <p>
          В итоге ученик не просто «знает язык», а обладает **инженерным мышлением**. 
          Для старших групп итогом становится Fullstack-проект: работающий сайт с базой данных 
          и сервером, который станет первым серьезным пунктом в портфолио.
        </p>
      </div>
    </motion.section>
  );
}