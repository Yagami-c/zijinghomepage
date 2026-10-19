import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Eyebrow, VideoFacade, WorkCard } from "@/components/portfolio";
import { OPEN_CONTACT_EVENT } from "@/components/ContactSidebar";
import { featuredWork, performanceGroups, selectedWorks } from "@/lib/works";

const heroPhoto = "/lovable-uploads/63e7d9f7-239d-4eca-8d13-c2193a349da1.webp";
const openContact = () => window.dispatchEvent(new CustomEvent(OPEN_CONTACT_EVENT));

export default function Home() {
  const { t } = useLanguage();
  const { upcoming, past } = performanceGroups();
  const records = (upcoming.length ? upcoming : past).slice(0, 3);

  return (
    <div className="portfolio">
      <section className="stage-light border-b border-border">
        <div className="container mx-auto grid min-h-[calc(100svh-5rem)] items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:py-16">
          <div className="space-y-6 lg:col-span-5">
            <Eyebrow>{t("home.eyebrow")}</Eyebrow>
            <h1 className="font-cormorant text-5xl leading-none text-foreground md:text-7xl">{t("hero.name")}</h1>
            <p className="max-w-xl font-cormorant text-2xl leading-snug text-foreground md:text-3xl">{t("brand.positioning")}</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild size="lg" className="min-h-12 rounded-full"><a href="#featured"><Play /> {t("home.listen")}</a></Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full border-primary/50 bg-transparent"><Link to="/schedule">{t("home.records")}</Link></Button>
              <Button size="lg" variant="ghost" className="min-h-12 rounded-full" onClick={openContact}><MessageCircle /> {t("home.contact")}</Button>
            </div>
          </div>
          <figure className="lg:col-span-7">
            <img src={heroPhoto} alt={`${t("hero.name")} — ${t("media.photo.stage")}`} className="aspect-[3/2] w-full rounded-sm object-cover shadow-2xl" fetchPriority="high" decoding="async" width={1600} height={1067} />
          </figure>
        </div>
      </section>

      <section id="featured" className="container mx-auto scroll-mt-24 px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-4"><Eyebrow>{t("home.featured.eyebrow")}</Eyebrow>
            <h2 className="font-cormorant text-4xl md:text-5xl">{t(featuredWork.titleKey)}</h2>
            <p className="text-lg text-primary">{t(featuredWork.composerKey ?? "unknown")}</p>
            <p className="text-base text-muted-foreground">{t("home.featured.note")}</p>
            <Link to={`/works/${featuredWork.slug}`} className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline">{t("works.open")} <ArrowRight size={16} /></Link></div>
          <div className="lg:col-span-8"><VideoFacade videoId={featuredWork.videoId!} title={t(featuredWork.titleKey)} cover={featuredWork.cover} /></div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-16 md:py-24"><div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div className="space-y-3"><h2 className="font-cormorant text-4xl md:text-5xl">{t("home.works.title")}</h2><p className="text-lg text-muted-foreground">{t("home.works.intro")}</p></div>
          <Link to="/works" className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline">{t("home.works.all")} <ArrowRight size={16} /></Link></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{selectedWorks.map((w) => <WorkCard key={w.slug} work={w} />)}</div>
      </div></section>

      <section className="container mx-auto grid gap-12 px-4 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7"><h2 className="mb-8 font-cormorant text-4xl md:text-5xl">{t("home.records.title")}</h2>
          <ul className="divide-y divide-border border-y border-border">{records.map((p) => (
            <li key={p.isoDate} className="grid gap-2 py-5 sm:grid-cols-[150px_1fr]">
              <div><p className="text-sm uppercase tracking-[0.14em] text-primary">{upcoming.length ? t("home.records.upcoming") : t("home.records.past")}</p><p className="text-base text-muted-foreground">{t(p.date)}</p></div>
              <div><p className="font-cormorant text-2xl">{t(p.program)}</p><p className="text-base text-muted-foreground">{t(p.city)} · {t(p.venue)}</p></div>
            </li>))}</ul>
          {!upcoming.length && <p className="mt-4 text-base text-muted-foreground">{t("home.records.empty")}</p>}
          <Link to="/schedule" className="mt-4 inline-flex min-h-11 items-center gap-2 text-primary hover:underline">{t("home.records.all")} <ArrowRight size={16} /></Link></div>
        <div className="space-y-8 lg:col-span-5"><h2 className="font-cormorant text-4xl md:text-5xl">{t("home.recognition.title")}</h2>
          <ul className="space-y-3 text-lg">{[1, 2, 3, 4].map((n) => <li key={n} className="border-l-2 border-primary/60 pl-4">{t(`home.cred.${n}`)}</li>)}</ul>
          <blockquote className="rounded-sm border border-border bg-card/60 p-6"><p className="font-cormorant text-xl italic leading-relaxed">“{t("bio.quote.text")}”</p><footer className="mt-4 text-primary">{t("bio.quote.author")}</footer></blockquote></div>
      </section>

      <section className="border-t border-border py-16"><div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <div><h2 className="font-cormorant text-4xl">{t("home.contact.title")}</h2><p className="mt-2 text-lg text-muted-foreground">{t("home.contact.text")}</p></div>
        <Button size="lg" className="min-h-12 rounded-full" onClick={openContact}>{t("home.contact.cta")}</Button>
      </div></section>
    </div>
  );
}