import { useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { thumb } from "@/lib/site-data";
import type { Work } from "@/lib/works";
import { cn } from "@/lib/utils";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-cinzel text-xs uppercase tracking-[0.28em] text-primary">{children}</p>
);

export function VideoFacade({ videoId, title, cover }: { videoId: string; title: string; cover: string }) {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-card">
      {playing ? (
        <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`} title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group relative h-full w-full text-left" aria-label={`${t("works.play")}: ${title}`}>
          <img src={thumb(cover)} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" loading="lazy" decoding="async" />
          <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
          <span className="absolute bottom-5 left-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-primary px-5 font-cinzel text-xs uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
            <Play size={15} fill="currentColor" /> {t("works.play")}
          </span>
        </button>
      )}
    </div>
  );
}

export function WorkCard({ work }: { work: Work }) {
  const { t } = useLanguage();
  return (
    <Link to={`/works/${work.slug}`} className="group block rounded-sm border border-border bg-card/60 transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <div className="aspect-[4/3] overflow-hidden"><img src={thumb(work.cover)} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" loading="lazy" decoding="async" /></div>
      <div className="space-y-2 p-5">
        <p className="font-cinzel text-xs uppercase tracking-[0.18em] text-primary">{t(work.composerKey ?? "unknown")}</p>
        <h3 className="font-cormorant text-2xl leading-tight text-foreground">{t(work.titleKey)}</h3>
        <p className="text-base text-muted-foreground">{t(work.periodKey ?? "unknown")} · {t(work.formKey ?? "unknown")}</p>
        <span className="inline-block pt-2 font-cinzel text-xs uppercase tracking-[0.16em] text-primary">{t("works.open")} →</span>
      </div>
    </Link>
  );
}

export function FilterGroup({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const { t } = useLanguage();
  return (
    <fieldset className="space-y-3"><legend className="font-cinzel text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</legend>
      <div className="flex flex-wrap gap-2">{["all", ...options].map((o) => (
        <button key={o} type="button" aria-pressed={value === o} onClick={() => onChange(o)}
          className={cn("min-h-11 rounded-full border px-4 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            value === o ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:border-primary/60")}>
          {o === "all" ? t("filter.all") : t(o)}
        </button>))}</div>
    </fieldset>
  );
}