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
    "hero.name": "Zijing Zeng",
    "hero.title": "Classical Pianist",
    "about.title": "Biography",
    "about.text": `Zijing Zeng was born in Wuhan in 1997. She started music training at the age of 5. In 2006, Zijing entered the The Attached Primary School of Wuhan Conservatory of Music with Prof. Jian Wang. In 2009, Zijing continued her studies at The Middle School Attached of Wuhan Conservatory of Music with Assoc. Prof. Xian Wang. Since 2013 she also took lessons with Prof. Chun Pan of the Central Conservatory of Music. From 2016, Zijing studied at the Moscow State Tchaikovsky Conservatory in the studio of Prof. Olga Zhukov(Assistant Elenora Karpukhova),and graduated with distinction in 2021. Then she has been an assistant-trainee at Moscow State Tchaikovsky Conservatory in class of Assoc. Prof. Dmitry Kaprin. In 2024 she completed degree Aspirantura with Prof. Alexey Yudin. Now she is studying with pianist Stanislav Korchagin. Zijing currently serves on the Faculty of Arts at Moscow State University.\n\nFrom the age of ten, Zijing has been participating in numerous concerts, competitions, festivals and master classes. Her competition debut was the Second Wuhan Lux Cup Television Piano Competition in 2008. Two years later, she became a laureate at The Third KAWAI Piano Competition in Wuhan. Zijing has won prizes in many competitions, including The Third F. Liszt Piano Competition in Wuhan (2011), second prize at the First Piano Competition at the Wuhan School of Music (2012), first prize at the K. Imola International Competition (Beijing, 2012), the Changjiang Youth Piano Competition (Wuhan, 2014), a Grand Prix winner at the Moscow Open Interregional Music Competition "Islamey" (Moscow, 2019), diploma winner of the 19.Münchner Klavierpodium der Jugend (Munich, 2019), and so on. In July 2013, Zijing was honored to represent China at the International Festival in Italy (r .Imola). In 2022, she was invited to the Glocal Piano Project, and she's also a participant of the 64th Ferruccio Busoni International Piano Competition. In 2023 she participanted in the XVII International Tchaikovsky Competition.\n\nZijing has performed in many prestigious concert halls in Russia, including Great Hall of Moscow Conservatory, House of music. Zeng Zijing is not limited to solo repertoire, but also has a good cooperative relationship with Kirill Rodin, a famous Russian cellist and educator and the gold medal winner of the Tchaikovsky International Competition. As an active participant of the masterclasses, Zijing has worked with such renowned artists such as Vovka Ashkenazi, Vladimir Tropp, Natalia Trull, Alexsander Kobrin, Boris Slutsky, Pavel Nersessian, Stefano Fiuzzi, Stanislav Igolinsky, Philip Kopachevsky. She has been highly praised by masters. The world-renowned pianists Eliso Virsaladze, Vovka Ashkenazi, Vladimir Ovchinnikova, and piano masters Liu Shikun and Li Mingqiang have all given high praise and recognition.\n\nEliso Virsaladze, a master of the Russian school, once commented that "Zijing is a talented pianist who is extremely passionate about classical music and has a serious attitude. In addition to strong emotions and superb skills, this young musician also has the qualities required of a mature master, which is the key to whether a person can become a true musician."`,
    "schedule.title": "Performance Schedule",
    "gallery.title": "Photo Gallery",
    "performance1.date": "January 17, 2025 19:00",
    "performance1.venue": "Music salon \"Classics near home\", Chistyy Pereulok.6, building 1, Moscow",
    "performance1.title": "Recital \"January Fantasy\"",
    "performance2.date": "January 18, 2025 19:00",
    "performance2.venue": "Small Hall of the Conservatory, Sredniy Kislovsky Pereulok, 4, Moscow",
    "performance2.title": "To the 100th anniversary of the birth of Honored Artist of Russia, Professor Olga Mikhailovna Zhukova",
    "performance3.date": "March 8, 2025 14:00",
    "performance3.venue": "Small Hall of the Conservatory, Sredniy Kislovsky Pereulok, 4, Moscow",
    "performance3.title": "Beethoven Piano Concerto No.4",
    "contact.title": "Contact",
    "video.title": "Performance Videos"
  },
  ru: {
    "nav.about": "О себе",
    "nav.schedule": "Расписание",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",
    "hero.name": "Цзыцзин Цзэн",
    "hero.title": "Пианист-классик",
    "about.title": "Биография",
    "about.text": `Цзыцзин Цзэн родилась в 1997 году в Китае. С пяти лет начала играть на фортепиано, с десяти— участвовать в концертах, конкурсах, фестивалях и мастер-классах. Обучалась в музыкальной школе при Уханьской консерватории в классе доцента Ван Сьяна. С 2013 года началась заниматься с профессором Пан Чун. В 2021 году с отличием закончила Московскую консерваторию по классу фортепиано профессора О.М.Жуковой( ассистент Э.А.Карпуховая), а затем поступила в аспирантуру в класс доцента Д.А. Каприна. В настоящее время подготовкой диссертационного исследования руководит доктор педагогических наук, профессор А.П.Юдин и занимается с известным пианистом Станиславом Корчагином. С 2022 года Цзыцзин работает преподавателем по фортепиано на факультете искусств МГУ имени М. В. Ломоносова.\n\nВ 2012 году победила на Международном конкурсе имени К. Имола (Китай), и представляла КНРна Международном фестивале в Имоле (Италия). В 2019 году завоевала «Гран-при» на конкурсе «Исламей» (Россия), в том же году победила на конкурсе 19-го Münchner Klavierpodium der Jugend в Мюнхене (Германия). В 2021 году получила I премию на конкурсе-фестивале VII «Allegretto Grazioso» (Россия). В 2022 году пианистку пригласили в программу Glocal Piano Project, также является участницей 64-го Международного конкурса пианистов Ф. Бузони (Италия). В 2023 году стала участницей XVI Международного конкурса имени П. И. Чайковского в Москве.\n\nВыступления пианистки проходили во многих залах мира, среди которых — Большой зал Московской консерватории, Концертный зал в Хайнане и другие. Не ограничиваясь сольными программами, пианистка имеет большой опыт работы в камерном ансамбле — в партнерстве с мастером — виолончелистом Кириллом Родиным. Вместе с ним гастролировала по Китаю в 2024 году.\n\nПринимала участие в мастер-классах таких педагогов, как Вовка Ашкенази, Владимир Тропп, Наталья Трулль, Александр Кобрин, Борис Слуцкий, Павел Нерсесьян, Стефано Фьюцци, Ста��ислав Иголинский и Филипп Копачевский. Она получила высокую оценку мастеров. Всемирно известные пианисты как Элисо Вирсаладзе, Владимир Овчинникова, Лю Шикунь и Ли Минцян дали ей высокую оценку и признание.\n\nЭлисо Вирсаладзе, корифей русской школы, однажды заметила, что «Цзыцзин — талантливая пианистка, которая чрезвычайно увлечена классической музыкой и имеет серьезное отношение к музыке. Помимо сильных эмоций и великолепных навыков, этот молодой музыкант также обладает качествами, требуемыми от зрелого мастера, что является ключом к тому, может ли человек стать настоящим музыкантом».`,
    "schedule.title": "Расписание выступлений",
    "gallery.title": "Фотогалерея",
    "performance1.date": "17 января 2025 19:00",
    "performance1.venue": "Музыкальный салон «Классика рядом с домом», Чистом пер.6, стр.1., Москва",
    "performance1.title": "Сольный концерт «Январская фантазия»",
    "performance2.date": "18 января 2025 19:00",
    "performance2.venue": "Малый зал консерватории, Средний Кисловский пер., 4, Москва",
    "performance2.title": "К 100-летию со дня рождения Заслуженной артистки России, профессора Ольги Михайловны Жуковой",
    "performance3.date": "8 марта 2025 14:00",
    "performance3.venue": "Малый зал консерватории, Средний Кисловский пер., 4, Москва",
    "performance3.title": "Концерт №4 для фортепиано с оркестром Бетховена",
    "contact.title": "Контакты",
    "video.title": "Видео выступлений"
  },
  zh: {
    "nav.about": "关于我",
    "nav.schedule": "演出日程",
    "nav.gallery": "演出记录",
    "nav.contact": "联系方式",
    "hero.name": "曾子荆",
    "hero.title": "古典钢琴家",
    "about.title": "个人简介",
    "about.text": `曾子荆，五岁开始学习钢琴，九岁以第二名的成绩考入武汉音乐学院附小师从王健教授，随后进入武汉音乐学院附中师从王暹副教授。自2013年起跟随中央音乐学院钢琴系教授潘淳学习。十八岁同时以优异的成绩考取了上海音乐学院钢琴系和世界顶尖音乐学府莫斯科国立柴科夫斯基音乐学院，2015年曾子荆选择赴俄深造，于2021年以全优成绩毕业，取得钢琴表演、室内乐、声乐艺术指导和教育学四个专业的硕士学位文凭，同时也是Alexander Goldenweiser学派传人Olga Zhukova教授的关门弟子。二十三岁前往莫斯科国立师范大学师从Alexey Yudin教授研修博士学位，同时以第一名的成绩考入莫斯科国立柴可夫斯基音乐学院成为俄罗斯钢琴大师、苏联功勋艺术家Eliso Virsaladze助教Dmitry Kaprin的第一位演奏博士。2024 年她在 Alexey Yudin 教授的指导下完成了副博士学位。2022年11月，正式入职莫斯科国立大学艺术系任教，担任钢琴主科老师。\n\n获奖记录：\n\n2013年在第二届意大利伊莫拉卡索尼国际钢琴比赛中，作为青年A组年龄最小的选手，荣获中国区选拔赛北京总决赛第一名。同年受邀赴意大利参加伊莫拉夏季国际钢琴音乐节，在当地成功举行演出。2014年在纪念中国钢琴作品��年展"大音"杯全国邀请赛中荣获青年B组（专业）一等奖。同年在第七届上海青少年钢琴大赛中获专业青年组一等奖。2015年在"长江钢琴杯"青少年钢琴比赛中获奖。2019年参加德国慕尼黑"Münchner Klavierpodium"钢琴比赛，荣获肖邦奖，并受邀在颁奖典礼上演出。同年12月摘得莫斯科"伊斯拉美"音乐家大奖赛特等奖，并受邀在颁奖典礼上演出。2020年在"Best Composers"最佳舒曼作品比赛中荣获第一名。同年在莫斯科国际弗拉基米尔·克雷涅夫钢琴比赛中获优秀演奏奖。2021年获莫斯科国际艺术音乐节第一名。同年成为第三届The Weatherford College International Piano Competition决赛选手。2022年入围布索尼国际钢琴比赛，成为全球100名Glocal Piano Project钢琴家之一。2023年入围SIPC新加坡国际钢琴比赛。同年入围第十七届柴可夫斯基国际钢琴比赛。\n\n曾子荆足迹遍及欧洲，俄罗斯，中国等地，并多次在柴可夫斯基音乐学院大厅，小厅等地举办独奏音乐会，均获好评。曾子荆不仅限于独奏曲目，与俄罗斯著名大提琴家、教育家柴可夫斯基国际比赛金奖得主Kirill Rodin也有着良好的合作关系。\n\n近年来，曾子荆也积极参加国内外的大师班学习，如Vovka Ashkenazi, Vladimir Tropp, Natalia Trull, Alexsander Kobrin, Boris Slutsky, Pavel Nersessian, Stefano Fiuzzi, Stanislav Igolinsky, Philip Kopachevsky等，并受到大师们的一致高度赞赏。享誉世界国际乐坛上著名钢琴家Eliso Virsaladze、Vovka Ashkenazi，Vladimir Ovchinnikova以及钢琴泰斗刘诗昆、李名强先生都曾给予了高度评价与认可。\n\n俄罗斯学派巨匠艾利索·维萨拉兹曾评价"曾子荆是一位对古典音乐极度热爱并有着认真态度的才华横溢的钢琴家，这位年轻的音乐家除了拥有强烈的情感和精湛的技巧外，还具备了一个成熟大师所需要的品质，这是一个人能否成为真正的音乐家的关键。"`,
    "schedule.title": "演出安排",
    "gallery.title": "演出记录",
    "performance1.date": "2025年1月17日 19:00",
    "performance1.venue": "音乐沙龙\"古典在附近\"，奇斯托伊 6 号街1号楼，莫斯科",
    "performance1.title": "独奏音乐会《一月幻想》",
    "performance2.date": "2025年1月18日 19:00",
    "performance2.venue": "音乐学院小厅，基斯洛夫斯基巷., 4, 莫斯科",
    "performance2.title": "纪念俄罗斯功勋艺术家教授诞辰100周年 奥尔加·米哈伊洛芙娜·朱科娃",
    "performance3.date": "2025年3月8日 14:00",
    "performance3.venue": "音乐学院小厅，基斯洛夫斯基巷., 4, 莫斯科",
    "performance3.title": "贝多芬第四钢琴协奏曲",
    "contact.title": "联系方式",
    "video.title": "演出视频"
  }
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
