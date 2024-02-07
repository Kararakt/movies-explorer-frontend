import film from '../images/film.jpg';

export const aboutBlocks = [
  {
    id: 1,
    title: 'Дипломный проект включал 5 этапов',
    text: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    id: 2,
    title: 'На выполнение диплома ушло 5 недель',
    text: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  },
];

export const technologies = [
  {
    id: 1,
    title: 'HTML',
  },
  {
    id: 2,
    title: 'CSS',
  },
  {
    id: 3,
    title: 'JS',
  },
  {
    id: 4,
    title: 'React',
  },
  {
    id: 5,
    title: 'Git',
  },
  {
    id: 6,
    title: 'Express.js',
  },
  {
    id: 7,
    title: 'mongoDB',
  },
];

export const projects = [
  {
    id: 1,
    name: 'Статичный сайт',
    link: 'https://kararakt.github.io/GSWT/',
  },
  {
    id: 2,
    name: 'Адаптивный сайт',
    link: 'https://kararakt.github.io/russian-travel/',
  },
  {
    id: 3,
    name: 'Одностраничное приложение',
    link: 'https://kararakt.github.io/react-mesto-auth/',
  },
];

export const headerLinks = [
  {
    id: 1,
    title: 'Главная',
    to: '/',
  },
  {
    id: 2,
    title: 'Фильмы',
    to: '/movies',
  },
  {
    id: 3,
    title: 'Сохранённые фильмы',
    to: '/saved-movies',
  },
];

export const footerLinks = [
  {
    id: 1,
    title: 'Яндекс.Практикум',
    url: 'https://practicum.yandex.ru',
  },
  {
    id: 2,
    title: 'Github',
    url: 'https://github.com/Kararakt',
  },
];

export const moviesCards = [
  {
    id: 1,
    nameRu: '33 слова о дизайне',
    duration: 107,
    image: film,
    trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
