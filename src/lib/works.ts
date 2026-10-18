import { performances, type Performance } from "./site-data";

export type WorkForm = "form.solo";
export type Work = {
  slug: string;
  titleKey: string;
  composerKey: string | null;
  periodKey: string | null;
  formKey: WorkForm | null;
  instrumentationKey: string | null;
  durationSeconds: number | null;
  cover: string;
  videoId: string | null;
  audioUrl: string | null;
  programmeUrl: string | null;
  sourceTitle: string;
  performanceHistory: string[];
};

export const UNKNOWN = "unknown";
const covers = {
  stage: "/lovable-uploads/63e7d9f7-239d-4eca-8d13-c2193a349da1.webp",
  keys: "/lovable-uploads/c620aa9e-12ff-42c9-a1f3-3af5a9be601f.webp",
  close: "/lovable-uploads/bf4c28a4-9c86-42a4-9c0d-6daa25d965f7.webp",
  portrait: "/lovable-uploads/46024a5d-f559-4bdf-9cdb-2cb41a136575.webp",
  wide: "/lovable-uploads/68f603fe-d849-4139-b866-49f1855e65bb.webp",
};

const base = { instrumentationKey: "instrument.piano", durationSeconds: null, audioUrl: null, programmeUrl: null, performanceHistory: [] };

export const works: Work[] = [
  { ...base, slug: "chopin-etude-op10-no12", titleKey: "work.chopin.title", composerKey: "composer.chopin", periodKey: "period.romantic", formKey: "form.solo", cover: covers.stage, videoId: "ySZBNtqPF0I", sourceTitle: "Шопен- Революционный этюд op.10 no.12" },
  { ...base, slug: "schumann-fantasy-op17-i", titleKey: "work.schumann.title", composerKey: "composer.schumann", periodKey: "period.romantic", formKey: "form.solo", cover: covers.keys, videoId: "9DxPdf38Ji4", sourceTitle: "R.Schumann-Fantasy op.17, 1 movement" },
  { ...base, slug: "rachmaninoff-moment-musical-op16-no1", titleKey: "work.rachmaninoff.title", composerKey: "composer.rachmaninoff", periodKey: "period.lateRomantic", formKey: "form.solo", cover: covers.close, videoId: "DjIpBxAQ13U", sourceTitle: "Rachmaninoff- Musical moment op.16 No.1" },
  { ...base, slug: "tchaikovsky-seasons-october", titleKey: "work.tchaikovsky.title", composerKey: "composer.tchaikovsky", periodKey: "period.romantic", formKey: "form.solo", cover: covers.portrait, videoId: "Yji4EdOKNQY", sourceTitle: "Чайковский: «Времена года»- Октябрь" },
  { ...base, slug: "moscow-conservatory-state-exam", titleKey: "work.exam.title", composerKey: null, periodKey: null, formKey: null, instrumentationKey: null, cover: covers.wide, videoId: "ZfT6xoLs7QY", sourceTitle: "МЗК Госэкзамен" },
];

export const featuredWork = works[0];
export const selectedWorks = works.slice(0, 3);

export type WorkFilters = { composer: string; period: string; form: string };
export const metadataValue = (value: string | null) => value ?? UNKNOWN;
export const filterWorks = (items: Work[], f: WorkFilters) =>
  items.filter((w) =>
    (f.composer === "all" || metadataValue(w.composerKey) === f.composer) &&
    (f.period === "all" || metadataValue(w.periodKey) === f.period) &&
    (f.form === "all" || metadataValue(w.formKey) === f.form)
  );
export const filterOptions = (items: Work[], key: "composerKey" | "periodKey" | "formKey") =>
  Array.from(new Set(items.map((w) => metadataValue(w[key]))));
export const findWork = (slug?: string) => works.find((w) => w.slug === slug);

export const splitPerformances = (items: Performance[], now: Date) => {
  const time = now.getTime();
  const sorted = [...items].sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate));
  return {
    upcoming: sorted.filter((p) => Date.parse(p.isoDate) >= time).reverse(),
    past: sorted.filter((p) => Date.parse(p.isoDate) < time),
  };
};
export const performanceGroups = (now = new Date()) => splitPerformances(performances, now);