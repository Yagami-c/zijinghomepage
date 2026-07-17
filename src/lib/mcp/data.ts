// Static content mirrored from the site for MCP tool responses.
// Import-safe: no env reads, no I/O at module top-level.

export type Language = "en" | "ru" | "zh";

export const profile = {
  name: {
    en: "Zijing Zeng",
    ru: "Цзыцзин Цзэн",
    zh: "曾子荆",
  },
  title: {
    en: "Classical Pianist",
    ru: "Пианист-классик",
    zh: "古典钢琴家",
  },
  website: "https://zijinghomepage.lovable.app/",
};

export const biography: Record<Language, string> = {
  en: "Zijing Zeng, born in Wuhan in 1997, is a classical pianist based in Moscow. She graduated with distinction from the Moscow State Tchaikovsky Conservatory (class of Prof. Olga Zhukova) in 2021, completed her Aspirantura with Prof. Alexey Yudin in 2024, and currently studies with pianist Stanislav Korchagin. She serves on the Faculty of Arts at Moscow State University. She has won prizes at competitions including the K. Imola International Competition (Beijing, 2012), the 'Islamey' Grand Prix (Moscow, 2019), and the 19. Münchner Klavierpodium der Jugend (Munich, 2019), and has performed at the Great Hall of the Moscow Conservatory and other prestigious venues. She has been praised by masters including Eliso Virsaladze, Vovka Ashkenazy, Vladimir Ovchinnikov, Liu Shikun and Li Mingqiang.",
  ru: "Цзыцзин Цзэн родилась в 1997 году в Ухане (КНР). В 2021 году с отличием окончила Московскую государственную консерваторию имени П. И. Чайковского (класс проф. О. М. Жуковой), в 2024 году завершила аспирантуру у проф. А. П. Юдина; в настоящее время занимается с пианистом Станиславом Корчагиным. С 2022 года преподаёт фортепиано на факультете искусств МГУ имени М. В. Ломоносова. Лауреат международных конкурсов, в том числе Гран-при конкурса «Исламей» (Москва, 2019) и Münchner Klavierpodium der Jugend (Мюнхен, 2019). Выступала в Большом зале Московской консерватории и других престижных залах. Получила высокую оценку от Элисо Вирсаладзе, Вовки Ашкенази, Владимира Овчинникова, Лю Шикуня и Ли Минцяна.",
  zh: "曾子荆，1997 年出生于武汉，现居莫斯科的古典钢琴家。2021 年以全优成绩毕业于莫斯科国立柴科夫斯基音乐学院（Olga Zhukova 教授门下），2024 年在 Alexey Yudin 教授指导下完成副博士学位，目前跟随钢琴家 Stanislav Korchagin 学习。自 2022 年起任教于莫斯科国立大学艺术系钢琴主科。曾获多项国际比赛奖项，包括 2019 年莫斯科「Islamey」国际钢琴比赛大奖以及慕尼黑 Münchner Klavierpodium der Jugend 奖项，并在莫斯科音乐学院大厅等重要场所演出。曾获 Eliso Virsaladze、Vovka Ashkenazy、Vladimir Ovchinnikov、刘诗昆、李名强等大师的高度评价。",
};

export const performances: Array<{
  isoDate: string;
  date: Record<Language, string>;
  venue: Record<Language, string>;
  program: Record<Language, string>;
}> = [
  {
    isoDate: "2026-01-31T14:00:00+03:00",
    date: {
      en: "January 31, 2026 14:00",
      ru: "31 января 2026 14:00",
      zh: "2026年1月31日 14:00",
    },
    venue: {
      en: "A.P. Chekhov Museum-Reserve, Melikhovo Village, Chekhov District, Moscow Region, Building 1",
      ru: "Музей-заповедник А. П. Чехова, село Мелихово, Чеховский район, Московская область, строение 1",
      zh: "俄罗斯莫斯科州契诃夫区梅利霍沃村，契诃夫博物馆保护区，1 号楼",
    },
    program: {
      en: "S. Rachmaninoff, F. Liszt, A. Scriabin",
      ru: "С. Рахманинов, Ф. Лист, А. Скрябин",
      zh: "拉赫玛尼诺夫、李斯特、斯克里亚宾作品",
    },
  },
  {
    isoDate: "2026-02-14T17:00:00+03:00",
    date: {
      en: "February 14, 2026 17:00",
      ru: "14 февраля 2026 17:00",
      zh: "2026年2月14日 17:00",
    },
    venue: {
      en: "Nikolo-Yamskaya St., 1, Moscow",
      ru: "Николо-Ямская ул., 1, Москва",
      zh: "莫斯科尼古洛-亚姆斯卡娅街 1 号",
    },
    program: {
      en: "Jianzhong Wang — Silver Clouds Chasing the Moon",
      ru: "Ван Цзяньчжун — «Серебряные облака, преследующие луну»",
      zh: "王建中 —《彩云追月》",
    },
  },
  {
    isoDate: "2026-03-28T14:00:00+03:00",
    date: {
      en: "March 28, 2026 14:00",
      ru: "28 марта 2026 14:00",
      zh: "2026年3月28日 14:00",
    },
    venue: {
      en: "A.P. Chekhov Museum-Reserve, Melikhovo Village, Chekhov District, Moscow Region, Building 1",
      ru: "Музей-заповедник А. П. Чехова, село Мелихово, Чеховский район, Московская область, строение 1",
      zh: "俄罗斯莫斯科州契诃夫区梅利霍沃村，契诃夫博物馆保护区，1 号楼",
    },
    program: {
      en: "S. Rachmaninoff, F. Liszt",
      ru: "С. Рахманинов, Ф. Лист",
      zh: "拉赫玛尼诺夫、李斯特作品",
    },
  },
  {
    isoDate: "2025-07-20T17:30:00+10:00",
    date: {
      en: "July 20, 2025 17:30",
      ru: "20 июля 2025 17:30",
      zh: "2025年7月20日 17:30",
    },
    venue: {
      en: "Verbrugghen Hall, Sydney Conservatorium of Music, 1 Conservatorium Rd, NSW 2000, Sydney, Australia",
      ru: "Зал Вербрюггена, Консерватория Сиднея, 1 Conservatorium Rd, NSW 2000, Сидней, Австралия",
      zh: "悉尼音乐学院维布鲁根音乐厅，悉尼音乐学院路1号，新南威尔士州2000，悉尼，澳大利亚",
    },
    program: {
      en: "Piano Recital",
      ru: "Фортепианный рецитал",
      zh: "钢琴独奏音乐会",
    },
  },
  {
    isoDate: "2025-07-28T19:00:00+03:00",
    date: {
      en: "July 28, 2025 19:00",
      ru: "28 июля 2025 19:00",
      zh: "2025年7月28日 19:00",
    },
    venue: {
      en: "Concert hall Maltese Chapel, Sadovaya Street, 26, Saint Petersburg, Russia",
      ru: "Концертный зал Мальтийская часовня, Садовая улица, 26, Санкт-Петербург, Россия",
      zh: "圣彼得堡马尔他礼拜堂音乐厅，花园街26号，圣彼得堡，俄罗斯",
    },
    program: {
      en: "Piano Recital",
      ru: "Фортепианный рецитал",
      zh: "钢琴独奏音乐会",
    },
  },
  {
    isoDate: "2025-07-30T19:00:00+03:00",
    date: {
      en: "July 30, 2025 19:00",
      ru: "30 июля 2025 19:00",
      zh: "2025年7月30日 19:00",
    },
    venue: {
      en: "Rachmaninoff Hall of the Moscow Conservatory, Bol'shaya Nikitskaya Ulitsa, 11, Moscow, Russia",
      ru: "Рахманиновский зал Московской консерватории, Большая Никитская улица, 11, Москва, Россия",
      zh: "莫斯科音乐学院拉赫马尼诺夫音乐厅，大尼基茨卡娅街11号，莫斯科，俄罗斯",
    },
    program: {
      en: "Piano Recital",
      ru: "Фортепианный рецитал",
      zh: "钢琴独奏音乐会",
    },
  },
];

export const contact = {
  website: "https://zijinghomepage.lovable.app/",
  location: {
    en: "Moscow, Russia",
    ru: "Москва, Россия",
    zh: "俄罗斯莫斯科",
  } as Record<Language, string>,
};
