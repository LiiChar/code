import { useLocal } from "../context/LocalsContext";
import { LOCALES } from "../i18n/locales";

interface IPathHeader {
  path: string;
  namePath: string;
}

export default function (): IPathHeader[] {
  const { local } = useLocal();

  let linkPath = [
    { path: "/", namePath: "Главная" },
    { path: "/video", namePath: "Видео" },
    { path: "/design", namePath: "Дизайн" },
    { path: "/studio", namePath: "Студия" },
    { path: "/contact", namePath: "Контакт" },
  ];
  (() => {
    if (local === LOCALES.ENGLISH) {
      linkPath = [
        { path: "/", namePath: "Welcome" },
        { path: "/video", namePath: "Video" },
        { path: "/design", namePath: "Design" },
        { path: "/studio", namePath: "Studio" },
        { path: "/contact", namePath: "Contact" },
      ];
    }
    if (local === LOCALES.FRENCH) {
      linkPath = [
        { path: "/", namePath: "Accuell" },
        { path: "/video", namePath: "Video" },
        { path: "/design", namePath: "Design" },
        { path: "/studio", namePath: "Studio" },
        { path: "/contact", namePath: "Contact" },
      ];
    }
    if (local === LOCALES.RUSSIAN) {
      linkPath = [
        { path: "/", namePath: "Главная" },
        { path: "/video", namePath: "Видео" },
        { path: "/design", namePath: "Дизайн" },
        { path: "/studio", namePath: "Студия" },
        { path: "/contact", namePath: "Контакт" },
      ];
    }
  })();
  return linkPath;
}
