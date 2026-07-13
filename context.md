# CodeProBase — Сайт обучения программированию для детей

**CodeProBase** — лендинг / SPA для онлайн-школы программирования для детей и подростков (8–17 лет). Построен на React + Vite с анимациями на Framer Motion.

## Технологии
- **React 19** + React Router (HashRouter)
- **Vite** (сборка)
- **Framer Motion** (анимации переходов, появления блоков)
- **Lucide React** (иконки)
- **gh-pages** (деплой на GitHub Pages)

## Маршруты (/ — HashRouter)
| Путь | Страница | Описание |
|------|----------|----------|
| `/` | Home | Главная с описанием подхода, этапов обучения, кейсов учеников, ЕГЭ-секцией, FAQ и CTA |
| `/programs` | Programs | Программы обучения — 4 ступени (Scratch → GameDev → JS → Web) |
| `/pricing` | Pricing | Тарифы: FAST (индивидуальный), GROUP (групповой), EGE (подготовка к ЕГЭ), PRO (Web/индивидуально) |
| `/methodology` | Methodology | Методология — как устроен подход "от Scratch к React" |
| `/ege` | EGE | Подготовка к ЕГЭ по информатике — разбор всех заданий, Python, пробники |

## Архитектура проекта
- **src/context/BookingContext.jsx** — контекст модалки записи на урок (open/close)
- **src/components/Navbar/Navbar.jsx** — навигация с мобильным меню
- **src/components/BookingModal/BookingModal.jsx** — модальное окно записи
- **src/pages/Home/Home.jsx** — главная страница (hero, этапы, проекты, преподаватель, FAQ, CTA)
- **src/pages/Programs/Programs.jsx** — 4 программы с возрастными группами
- **src/pages/Pricing/Pricing.jsx** — 3 тарифных плана
- **src/pages/Methodology/Methodology.jsx** — методология обучения
- **src/styles/** — CSS переменные, глобальные стили, кнопки
- **src/utils/motion.js** — варианты анимаций Framer Motion (pageTransition, revealUp, revealScale, staggerContainer)

## Особенности
- Анимации появления секций при скролле (revealUp, revealScale)
- Анимация смены страниц через AnimatePresence
- Мобильное адаптивное меню
- Модальное окно записи через контекст (BookingContext)
- CTA-кнопки на всех страницах ведут к открытию модалки