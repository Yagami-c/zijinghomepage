import { useLanguage } from "@/contexts/LanguageContext";
import { SectionTitle, GothicDivider, Reveal } from "@/components/section-primitives";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, GraduationCap, Trophy, Landmark, Users } from "lucide-react";
import { useState } from "react";

export default function About() {
  const { t } = useLanguage();
  const [openBioKey, setOpenBioKey] = useState<string | null>(null);

  const bioCards = [
    { icon: Sparkles,      key: "card1", variant: "bio-card--chapel",    iconVariant: "bio-icon--halo",      pos: "bio-pos-1", slide: "bio-slide-l", z: 30 },
    { icon: GraduationCap, key: "card2", variant: "bio-card--midnight",  iconVariant: "bio-icon--seal",      pos: "bio-pos-2", slide: "bio-slide-r", z: 40 },
    { icon: Trophy,        key: "card3", variant: "bio-card--laurel",    iconVariant: "bio-icon--medallion", pos: "bio-pos-3", slide: "bio-slide-l", z: 20 },
    { icon: Landmark,      key: "card4", variant: "bio-card--parchment", iconVariant: "bio-icon--arch",      pos: "bio-pos-4", slide: "bio-slide-r", z: 35 },
    { icon: Users,         key: "card5", variant: "bio-card--scroll",    iconVariant: "bio-icon--diamond",   pos: "bio-pos-5", slide: "bio-slide-up", z: 25 },
  ];

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--mx", "0");
    e.currentTarget.style.setProperty("--my", "0");
  };

  return (
    <section className="py-16 gothic-pattern relative overflow-hidden">
      <div className="absolute top-12 right-12 text-primary/[0.04] text-[20rem] font-cinzel-decorative leading-none select-none pointer-events-none hidden lg:block">Z</div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle eyebrow="VITA">{t("about.title")}</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="bio-stage relative">
            {bioCards.map(({ icon: Icon, key, variant, iconVariant, pos, slide, z }, i) => (
              <Reveal key={key} delay={i * 120} className={`bio-slot ${pos} ${slide}`}>
                <article
                  className={`bio-card ${variant} group relative h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60`}
                  style={{ zIndex: z }}
                  onMouseMove={onMove}
                  onMouseLeave={onLeave}
                  onClick={() => setOpenBioKey(key)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenBioKey(key); } }}
                  role="button" tabIndex={0}
                  aria-label={t(`bio.${key}.title`)}
                >
                  <div className="bio-card__inner h-full p-7 md:p-8 flex flex-col relative z-10">
                    <div className="flex items-center gap-4 mb-5 bio-parallax-strong">
                      <span className={`bio-icon ${iconVariant}`}><Icon className="w-5 h-5" strokeWidth={1.5} /></span>
                      <span className="font-cinzel text-[10px] tracking-[0.4em] text-primary/70 uppercase">{t(`bio.${key}.eyebrow`)}</span>
                    </div>
                    <h3 className="text-xl md:text-[1.5rem] font-cinzel-decorative text-foreground tracking-wide leading-snug mb-4 bio-parallax group-hover:gothic-glow transition-all duration-500">
                      {t(`bio.${key}.title`)}
                    </h3>
                    <div className="h-px w-12 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent mb-5" />
                    <p className="font-cormorant text-[0.98rem] md:text-lg leading-relaxed text-foreground/85 flex-1 bio-parallax-soft">
                      {t(`bio.${key}.text`)}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-[10px] font-cinzel tracking-[0.35em] text-primary/70 uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="h-px w-6 bg-primary/50" />
                      {t("bio.dialog.hint")}
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                  <span className="bio-sheen" aria-hidden="true" />
                  <span className="bio-index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                </article>
              </Reveal>
            ))}
          </div>

          <Dialog open={openBioKey !== null} onOpenChange={(o) => !o && setOpenBioKey(null)}>
            <DialogContent className="max-w-2xl gothic-card ornate-frame border-primary/30 max-h-[85vh] overflow-y-auto">
              <span className="corner-tr" /><span className="corner-bl" />
              {openBioKey && (
                <>
                  <DialogHeader className="text-left">
                    <div className="font-cinzel text-[10px] tracking-[0.4em] text-primary/70 uppercase mb-2">{t(`bio.${openBioKey}.eyebrow`)}</div>
                    <DialogTitle className="text-2xl md:text-3xl font-cinzel-decorative tracking-wide text-foreground gothic-glow">{t(`bio.${openBioKey}.title`)}</DialogTitle>
                    <DialogDescription className="sr-only">{t(`bio.${openBioKey}.title`)}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-6">
                    <div>
                      <div className="text-[10px] font-cinzel tracking-[0.35em] text-primary/70 uppercase mb-2">{t("bio.dialog.summary_label")}</div>
                      <p className="font-cormorant text-base md:text-lg leading-relaxed text-foreground/90">{t(`bio.${openBioKey}.text`)}</p>
                    </div>
                    <GothicDivider />
                    <div>
                      <div className="text-[10px] font-cinzel tracking-[0.35em] text-primary/70 uppercase mb-2">{t("bio.dialog.full_label")}</div>
                      <p className="font-cormorant text-[0.95rem] md:text-base leading-relaxed text-foreground/80 whitespace-pre-wrap">{t("about.text")}</p>
                    </div>
                    <div className="border-t border-primary/20 pt-4">
                      <div className="text-[10px] font-cinzel tracking-[0.35em] text-primary/70 uppercase mb-2">{t("bio.dialog.source_label")}</div>
                      <p className="font-cormorant italic text-sm md:text-base text-foreground/70">{t("bio.dialog.source_text")}</p>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <Reveal delay={700} className="mt-14 bio-slide-up">
            <div className="bio-card bio-card--cartouche relative" onMouseMove={onMove} onMouseLeave={onLeave}>
              <div className="bio-card__inner p-10 md:p-14 text-center relative z-10 bio-parallax">
                <span className="absolute top-4 left-6 text-primary/50 text-7xl font-cinzel-decorative leading-none">“</span>
                <span className="absolute bottom-2 right-6 text-primary/50 text-7xl font-cinzel-decorative leading-none">”</span>
                <p className="font-cormorant italic text-lg md:text-2xl leading-relaxed text-foreground/90 max-w-3xl mx-auto">{t("bio.quote.text")}</p>
                <div className="flex items-center justify-center gap-3 mt-7">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/70" />
                  <footer className="font-cinzel tracking-[0.35em] text-sm text-primary/85 uppercase">{t("bio.quote.author")}</footer>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/70" />
                </div>
              </div>
              <span className="bio-sheen" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
