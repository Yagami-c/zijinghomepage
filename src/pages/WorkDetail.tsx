import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eyebrow, VideoFacade } from "@/components/portfolio";
import { findWork } from "@/lib/works";

export default function WorkDetail() {
  const { t } = useLanguage();
  const work = findWork(useParams().slug);
  if (!work) return <Navigate to="/works" replace />;
  const rows = [
    ["works.composer", work.composerKey], ["works.period", work.periodKey], ["works.form", work.formKey], ["works.instrumentation", work.instrumentationKey],
  ] as const;
  return (
    <article className="portfolio container mx-auto px-4 py-12 md:py-20">
      <Link to="/works" className="inline-flex min-h-11 items-center gap-2 text-base text-primary hover:underline"><ChevronLeft size={18} />{t("works.back")}</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-6"><Eyebrow>{t(work.composerKey ?? "unknown")}</Eyebrow><h1 className="font-cormorant text-4xl leading-tight md:text-6xl">{t(work.titleKey)}</h1>
          {work.videoId && <VideoFacade videoId={work.videoId} title={t(work.titleKey)} cover={work.cover} />}
          <p className="text-lg text-muted-foreground">{t("works.note")}</p></div>
        <aside className="space-y-8 rounded-sm border border-border bg-card/60 p-6">
          <dl className="space-y-4">{rows.map(([label, value]) => <div key={label} className="border-b border-border pb-3"><dt className="text-sm text-muted-foreground">{t(label)}</dt><dd className="text-lg">{t(value ?? "unknown")}</dd></div>)}
            {work.durationSeconds && <div><dt className="text-sm text-muted-foreground">{t("works.duration")}</dt><dd>{Math.floor(work.durationSeconds / 60)}:{String(work.durationSeconds % 60).padStart(2, "0")}</dd></div>}
            <div><dt className="text-sm text-muted-foreground">{t("works.originalTitle")}</dt><dd className="text-lg">{work.sourceTitle}</dd></div>
            <div><dt className="text-sm text-muted-foreground">{t("works.source")}</dt><dd className="text-lg">{t("media.source.youtube")}</dd></div></dl>
          <div><h2 className="font-cormorant text-2xl">{t("works.history")}</h2><p className="mt-2 text-base text-muted-foreground">{t("works.historyEmpty")}</p></div>
        </aside>
      </div>
    </article>
  );
}