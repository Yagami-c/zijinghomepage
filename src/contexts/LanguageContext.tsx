import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ru' | 'zh';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "nav.about": "About",
    "nav.schedule": "Schedule",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "hero.title": "Classical Pianist",
    "about.title": "Biography",
    "schedule.title": "Performance Schedule",
    "gallery.title": "Photo Gallery",
    "video.title": "Performance Videos",
    "contact.title": "Get in Touch",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.social": "Social Media",
  },
  ru: {
    "nav.about": "О себе",
    "nav.schedule": "Расписание",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",
    "hero.title": "Пианист-классик",
    "about.title": "Биография",
    "schedule.title": "Расписание выступлений",
    "gallery.title": "Фотогалерея",
    "video.title": "Видео выступлений",
    "contact.title": "Связаться",
    "contact.email": "Эл. почта",
    "contact.phone": "Телефон",
    "contact.social": "Социальные сети",
  },
  zh: {
    "nav.about": "关于我",
    "nav.schedule": "演出日程",
    "nav.gallery": "图片集",
    "nav.contact": "联系方式",
    "hero.title": "古典钢琴家",
    "about.title": "个人简介",
    "schedule.title": "演出安排",
    "gallery.title": "演出照片",
    "video.title": "演出视频",
    "contact.title": "联系我",
    "contact.email": "电子邮箱",
    "contact.phone": "电话",
    "contact.social": "社交媒体",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}