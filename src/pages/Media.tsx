import { useLanguage } from "@/contexts/LanguageContext";
import { SectionTitle, Reveal } from "@/components/section-primitives";
import { Link } from "react-router-dom";
import { Folder, Film, Image as ImageIcon } from "lucide-react";
import { mediaFolders } from "@/lib/site-data";

export default function Media() {
  const { t } = useLanguage();

  return (
    <section className="py-16 gothic-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle eyebrow="MEDIA LIBRARY">{t("media.title")}</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mediaFolders.map((folder, i) => (
            <Reveal key={folder.slug} delay={i * 120}>
              <Link
                to={`/media/${folder.slug}`}
                className="group block relative ornate-frame gothic-card rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]"
              >
                <span className="corner-tr" /><span className="corner-bl" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={folder.cover}
                    alt={t(folder.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-background/70 backdrop-blur-md border border-primary/30">
                    <Folder size={14} className="text-primary" />
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-primary/90 uppercase">Folder</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl md:text-2xl font-cinzel-decorative tracking-wide text-foreground group-hover:gothic-glow transition-all duration-500">
                    {t(folder.titleKey)}
                  </h3>
                  <p className="font-cormorant italic text-foreground/70 leading-relaxed">{t(folder.descKey)}</p>
                  <div className="flex items-center gap-4 pt-2 text-[11px] font-cinzel tracking-[0.25em] text-primary/70 uppercase">
                    {folder.videos.length > 0 && (
                      <span className="flex items-center gap-1.5"><Film size={12} /> {folder.videos.length} {t("media.videos")}</span>
                    )}
                    {folder.photos.length > 0 && (
                      <span className="flex items-center gap-1.5"><ImageIcon size={12} /> {folder.photos.length} {t("media.photos")}</span>
                    )}
                  </div>
                  <div className="pt-3 flex items-center gap-2 text-[10px] font-cinzel tracking-[0.4em] text-primary/70 uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="h-px w-6 bg-primary/50" />
                    {t("media.open")}
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
