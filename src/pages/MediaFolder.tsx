import { useLanguage } from "@/contexts/LanguageContext";
import { SectionTitle, Reveal } from "@/components/section-primitives";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { mediaFolders } from "@/lib/site-data";

export default function MediaFolder() {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const folder = mediaFolders.find((f) => f.slug === slug);
  const [activeVideo, setActiveVideo] = useState(folder?.videos[0]?.id);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const count = folder?.photos.length ?? 0;

  const prev = useCallback(() => setLightbox((i) => (i === null ? i : (i - 1 + count) % count)), [count]);
  const next = useCallback(() => setLightbox((i) => (i === null ? i : (i + 1) % count)), [count]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  if (!folder) return <Navigate to="/media" replace />;

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto mb-8">
          <Link to="/media" className="inline-flex items-center gap-2 font-cinzel text-[11px] tracking-[0.3em] text-primary/70 hover:text-primary transition-colors uppercase">
            <ChevronLeft size={14} />
            {t("media.back")}
          </Link>
        </div>
        <SectionTitle eyebrow="MEDIA LIBRARY">{t(folder.titleKey)}</SectionTitle>
        <p className="text-center max-w-2xl mx-auto font-cormorant italic text-foreground/70 -mt-8 mb-4">{t(folder.descKey)}</p>
        <p className="text-center font-cinzel text-[10px] tracking-[0.3em] text-primary/70 uppercase mb-14">
          {t("media.source")}: {t(folder.sourceKey)}
        </p>

        {folder.videos.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <Reveal>
                <div className="aspect-video ornate-frame gothic-card rounded-sm overflow-hidden p-1">
                  <span className="corner-tr" /><span className="corner-bl" />
                  <iframe
                    key={activeVideo}
                    className="w-full h-full rounded-sm"
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=0`}
                    title={t(folder.videos.find((v) => v.id === activeVideo)?.title || "")}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="gothic-card ornate-frame rounded-sm p-4 h-full">
                  <span className="corner-tr" /><span className="corner-bl" />
                  <div className="font-cinzel text-[10px] tracking-[0.35em] text-primary/70 uppercase mb-4 px-2">{t("media.playlist")}</div>
                  <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                    {folder.videos.map((v, i) => (
                      <button
                        key={v.id}
                        onClick={() => setActiveVideo(v.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-sm text-left transition-all duration-300 border ${
                          activeVideo === v.id
                            ? "bg-primary/15 border-primary/50 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]"
                            : "bg-background/40 border-transparent hover:border-primary/30 hover:bg-primary/5"
                        }`}
                      >
                        <div className={`relative w-16 h-10 rounded-sm overflow-hidden bg-black flex-shrink-0 flex items-center justify-center ${activeVideo === v.id ? "ring-1 ring-primary/60" : ""}`}>
                          <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt={t(v.title)} loading="lazy" className="w-full h-full object-cover" />
                          <Play size={14} className="absolute text-primary drop-shadow-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-cinzel text-[10px] tracking-[0.25em] text-primary/70 uppercase">#{String(i + 1).padStart(2, "0")}</div>
                          <div className="font-cormorant text-sm text-foreground/90 truncate">{t(v.title)}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        )}

        {folder.photos.length > 0 && (
          <div className="max-w-6xl mx-auto masonry">
            {folder.photos.map((image, index) => (
              <Reveal key={index} delay={(index % 6) * 80}>
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`${t("media.zoom")} — ${t(folder.captionKey)} ${index + 1}`}
                  className="w-full block relative group cursor-zoom-in ornate-frame rounded-sm overflow-hidden"
                >
                  <span className="corner-tr" /><span className="corner-bl" />
                  <img
                    src={image}
                    alt={`${t(folder.captionKey)} — ${t(folder.titleKey)} ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
                    loading="lazy" decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-3 right-3 p-2 rounded-sm bg-background/70 backdrop-blur-md border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ZoomIn size={14} className="text-primary" />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                    <span className="text-primary/70 text-xs">◆</span>
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-foreground/80 uppercase">{t("media.plate")} {String(index + 1).padStart(2, "0")} · {t(folder.captionKey)}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-5xl border-primary/30 bg-background/95 backdrop-blur-xl p-4 sm:p-6">
          <DialogTitle className="sr-only">{t(folder.titleKey)}</DialogTitle>
          {lightbox !== null && (
            <div className="space-y-4">
              <div
                className="relative flex items-center justify-center touch-pan-y select-none"
                onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; touchDelta.current = 0; }}
                onTouchMove={(e) => { if (touchStart.current !== null) touchDelta.current = e.touches[0].clientX - touchStart.current; }}
                onTouchEnd={() => {
                  if (Math.abs(touchDelta.current) > 50) { touchDelta.current < 0 ? next() : prev(); }
                  touchStart.current = null; touchDelta.current = 0;
                }}
              >
                <img
                  src={folder.photos[lightbox]}
                  alt={`${t(folder.captionKey)} — ${t(folder.titleKey)} ${lightbox + 1}`}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm pointer-events-none"
                  draggable={false}
                />

                {folder.photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      aria-label={t("media.prev")}
                      className="absolute left-2 p-3 rounded-sm bg-background/70 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/15 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label={t("media.next")}
                      className="absolute right-2 p-3 rounded-sm bg-background/70 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/15 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 font-cinzel text-[10px] tracking-[0.3em] text-primary/80 uppercase">
                <span>{t("media.plate")} {String(lightbox + 1).padStart(2, "0")} · {t(folder.captionKey)}</span>
                <span>{lightbox + 1} / {folder.photos.length}</span>
                <span>{t("media.source")}: {t(folder.sourceKey)}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
