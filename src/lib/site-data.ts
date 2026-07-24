export type Performance = {
  date: string;
  venue: string;
  program: string;
  country: string;
  city: string;
};

export const performances: Performance[] = [
  { date: "performance9.date",  venue: "performance9.venue",  program: "performance9.title",  country: "country.australia", city: "city.sydney" },
  { date: "performance10.date", venue: "performance10.venue", program: "performance10.title", country: "country.russia",    city: "city.saint_petersburg" },
  { date: "performance11.date", venue: "performance11.venue", program: "performance11.title", country: "country.russia",    city: "city.moscow" },
  { date: "performance6.date",  venue: "performance6.venue",  program: "performance6.title",  country: "country.russia",    city: "city.moscow_region" },
  { date: "performance7.date",  venue: "performance7.venue",  program: "performance7.title",  country: "country.russia",    city: "city.moscow" },
  { date: "performance8.date",  venue: "performance8.venue",  program: "performance8.title",  country: "country.russia",    city: "city.moscow_region" },
];

export const heroImages = [
  "/lovable-uploads/f5249637-7b76-4f9f-843a-709c6a7b7555.png",
  "/lovable-uploads/832dfd71-1ed4-4f9e-a5e5-e02a6028c015.png",
  "/lovable-uploads/a716b21b-801b-44f1-8665-bb5dba860461.png",
  "/lovable-uploads/9910e064-049f-46ab-9904-80cebf45ad4e.png",
];

export const videos = [
  { id: "ZfT6xoLs7QY", title: "Performance 1" },
  { id: "ySZBNtqPF0I", title: "Performance 2" },
  { id: "DjIpBxAQ13U", title: "Performance 3" },
  { id: "Yji4EdOKNQY", title: "Performance 4" },
  { id: "9DxPdf38Ji4", title: "Performance 5" },
];

const galleryAll = [
  "/lovable-uploads/683074c7-a228-4ef4-ad70-98f8c1714f41.png",
  "/lovable-uploads/68f603fe-d849-4139-b866-49f1855e65bb.png",
  "/lovable-uploads/b5917c0d-ba60-41ba-80ea-e27527047d37.png",
  "/lovable-uploads/e1bdb18f-0413-4526-8d79-89df46cf7324.png",
  "/lovable-uploads/edac1f3a-3582-4009-986d-8f2fae0b122b.png",
  "/lovable-uploads/37eaa083-ff23-4f40-a282-12a62b7324c6.png",
  "/lovable-uploads/63e7d9f7-239d-4eca-8d13-c2193a349da1.png",
  "/lovable-uploads/46024a5d-f559-4bdf-9cdb-2cb41a136575.png",
  "/lovable-uploads/95569425-9a71-4642-b604-f990fdd5e3f3.png",
  "/lovable-uploads/c620aa9e-12ff-42c9-a1f3-3af5a9be601f.png",
  "/lovable-uploads/83fc3260-63e3-49e9-b4b9-741748acb556.png",
];

export type MediaFolder = {
  slug: string;
  titleKey: string;
  descKey: string;
  cover: string;
  videos: typeof videos;
  photos: string[];
};

export const mediaFolders: MediaFolder[] = [
  {
    slug: "recordings",
    titleKey: "media.folder.recordings.title",
    descKey: "media.folder.recordings.desc",
    cover: galleryAll[0],
    videos: videos,
    photos: [],
  },
  {
    slug: "stage",
    titleKey: "media.folder.stage.title",
    descKey: "media.folder.stage.desc",
    cover: galleryAll[2],
    videos: [],
    photos: galleryAll.slice(0, 6),
  },
  {
    slug: "studio",
    titleKey: "media.folder.studio.title",
    descKey: "media.folder.studio.desc",
    cover: galleryAll[7],
    videos: [],
    photos: galleryAll.slice(6),
  },
];

export const galleryImages = galleryAll;
