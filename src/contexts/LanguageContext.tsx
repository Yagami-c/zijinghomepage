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
    "about.text": "Zijing Zeng was born in Wuhan in 1997. She started music training at the age of 5. In 2006, Zijing entered the The Attached Primary School of Wuhan Conservatory of Music with Prof. Jian Wang. In 2009, Zijing continued her studies at The Middle School Attached of Wuhan Conservatory of Music with Assoc. Prof. Xian Wang. Since 2013 she also took lessons with Prof. Chun Pan of the Central Conservatory of Music. From 2016, Zijing studied at the Moscow State Tchaikovsky Conservatory in the studio of Prof. Olga Zhukov(Assistant Elenora Karpukhova),and graduated with distinction in 2021. Then she has been an assistant-trainee at Moscow State Tchaikovsky Conservatory in class of Assoc. Prof. Dmitry Kaprin. In 2024 she completed degree Aspirantura with Prof. Alexey Yudin. Zijing currently serves on the Faculty of Arts at Moscow State University.\n\nFrom the age of ten, Zijing has been participating in numerous concerts, competitions, festivals and master classes. Her competition debut was the Second Wuhan Lux Cup Television Piano Competition in 2008. Two years later, she became a laureate at The Third KAWAI Piano Competition in Wuhan. Zijing has won prizes in many competitions, including The Third F. Liszt Piano Competition in Wuhan (2011), second prize at the First Piano Competition at the Wuhan School of Music (2012), first prize at the K. Imola International Competition (Beijing, 2012), the Changjiang Youth Piano Competition (Wuhan, 2014), a Grand Prix winner at the Moscow Open Interregional Music Competition \"Islamey\" (Moscow, 2019), diploma winner of the 19.Münchner Klavierpodium der Jugend (Munich, 2019), and so on.",
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
    "about.text": "Цзыцзин Цзэн родилась в 1997 году в Китае. С пяти лет начала играть на фортепиано, с десяти— участвовать в концертах, конкурсах, фестивалях и мастер-классах. Обучалась в музыкальной школе при Уханьской консерватории в классе доцента Ван Сьяна. В 2021 году с отличием закончила Московскую консерваторию по классу фортепиано профессора О.М.Жуковой( ассистент Э.А.Карпуховая), а затем поступила в аспирантуру в класс доцента Д.А. Каприна. В настоящее время учится у известного пианиста Станислава Корчагина и подготовкой диссертационного исследования руководит доктор педагогических наук, профессор А.П.Юдин. С 2022 года Цзыцзин работает преподавателем по фортепиано на факультете искусств МГУ имени М. В. Ломоносова.\n\nВ 2012 году победила на Международном конкурсе имени К. Имола (Китай), и представляла КНРна Международном фестивале в Имоле (Италия). В 2019 году завоевала «Гран-при» на конкурсе «Исламей» (Россия), в том же году победила на конкурсе 19-го Münchner Klavierpodium der Jugend в Мюнхене (Германия). В 2021 году получила I премию на конкурсе-фестивале VII «Allegretto Grazioso» (Россия). В 2022 году пианистку пригласили в программу Glocal Piano Project, также является участницей 64-го Международного конкурса пианистов Ф. Бузони (Италия). В 2023 году стала участницей XVI Международного конкурса имени П. И. Чайковского в Москве.",
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
    "about.text": "曾子荆，五岁开始学习钢琴，九岁以第二名的成绩考入武汉音乐学院附小师从王健教授，随后进入武汉音乐学院附中师从王暹副教授。十八岁同时以优异的成绩考取了上海音乐学院钢琴系和世界顶尖音乐学府莫斯科国立柴科夫斯基音乐学院，2015年曾子荆选择赴俄深造，于2021年以全优成绩毕业，取得钢琴表演、室内乐、声乐艺术指导和教育学四个专业的硕士学位文凭，同时也是Alexander Goldenweiser学派传人Olga Zhukova教授的关门弟子。二十三岁前往莫斯科国立师范大学师从Alexey Yudin教授研修博士学位，同时以第一名的成绩考入莫斯科国立柴可夫斯基音乐学院成为俄罗斯钢琴大师、苏联功勋艺术家Eliso Virsaladze助教Dmitry Kaprin的第一位演奏博士。2022年11月，正式入职莫斯科国立大学艺术系任教，担任钢琴主科老师。\n\n获奖记录：\n\n2013年在第二届意大利伊莫拉卡索尼国际钢琴比赛中，作为青年A组年龄最小的选手，荣获中国区选拔赛北京总决赛第一名。同年受邀赴意大利参加伊莫拉夏季国际钢琴音乐节，在当地成功举行演出。2014年在纪念中国钢琴作品百年展"大音"杯全国邀请赛中荣获青年B组（专业）一等奖。同年在第七届上海青少年钢琴大赛中获专业青年组一等奖。2015年在"长江钢琴杯"青少年钢琴比赛中获奖。2019年参加德国慕尼黑"Münchner Klavierpodium"钢琴比赛，荣获肖邦奖，并受邀在颁奖典礼上演出。",
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