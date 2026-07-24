import { useLanguage } from "@/contexts/LanguageContext";
import { SectionTitle, Reveal, parseConcertDate } from "@/components/section-primitives";
import { MapPin, Clock } from "lucide-react";
import { useMemo, useState } from "react";
import { performances } from "@/lib/site-data";

export default function Schedule() {
  const { t } = useLanguage();
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");

  const availableCountries = useMemo(() => Array.from(new Set(performances.map((p) => p.country))), []);
  const availableCities = useMemo(
    () => Array.from(new Set(performances.filter((p) => countryFilter === "all" || p.country === countryFilter).map((p) => p.city))),
    [countryFilter]
  );
  const filtered = useMemo(
    () => performances.filter((p) => (countryFilter === "all" || p.country === countryFilter) && (cityFilter === "all" || p.city === cityFilter)),
    [countryFilter, cityFilter]
  );

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@graph": performances.map((p) => ({
      "@type": "Event",
      name: t(p.program),
      startDate: t(p.date),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: t(p.venue) },
      performer: { "@type": "Person", name: "Zijing Zeng" },
    })),
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }} />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="absolute inset-0 gothic-pattern opacity-60" />
      <div className="absolute top-10 left-8 text-primary/5 text-[14rem] font-cinzel-decorative leading-none select-none pointer-events-none">♪</div>
      <div className="absolute bottom-10 right-8 text-primary/5 text-[14rem] font-cinzel-decorative leading-none select-none pointer-events-none">♫</div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle eyebrow="CONCERT PROGRAMME">{t("schedule.title")}</SectionTitle>

        <Reveal>
          <div className="max-w-4xl mx-auto mb-10 gothic-card ornate-frame rounded-sm p-5 md:p-6">
            <span className="corner-tr" /><span className="corner-bl" />
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <div className="text-[10px] font-cinzel tracking-[0.35em] text-primary/70 uppercase mb-3">{t("filter.country")}</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => { setCountryFilter("all"); setCityFilter("all"); }} className={`filter-chip ${countryFilter === "all" ? "filter-chip-active" : ""}`}>{t("filter.all")}</button>
                  {availableCountries.map((c) => (
                    <button key={c} onClick={() => { setCountryFilter(c); setCityFilter("all"); }} className={`filter-chip ${countryFilter === c ? "filter-chip-active" : ""}`}>{t(c)}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-cinzel tracking-[0.35em] text-primary/70 uppercase mb-3">{t("filter.city")}</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setCityFilter("all")} className={`filter-chip ${cityFilter === "all" ? "filter-chip-active" : ""}`}>{t("filter.all")}</button>
                  {availableCities.map((c) => (
                    <button key={c} onClick={() => setCityFilter(c)} className={`filter-chip ${cityFilter === c ? "filter-chip-active" : ""}`}>{t(c)}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-xs font-cormorant italic text-foreground/60">
              {filtered.length} / {performances.length} · {t("filter.results")}
            </div>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {filtered.length === 0 && (
            <Reveal>
              <div className="text-center py-12 gothic-card ornate-frame rounded-sm">
                <span className="corner-tr" /><span className="corner-bl" />
                <p className="font-cormorant italic text-lg text-foreground/70 px-6">{t("filter.empty")}</p>
              </div>
            </Reveal>
          )}
          {filtered.map((p, index) => {
            const { monthLabel, bigDay, time } = parseConcertDate(t(p.date));
            return (
              <Reveal key={index} delay={index * 120}>
                <div className="schedule-card ornate-frame rounded-sm overflow-hidden group">
                  <span className="corner-tr" /><span className="corner-bl" />
                  <div className="grid grid-cols-[auto_1fr] md:grid-cols-[180px_1fr]">
                    <div className="schedule-date-block flex flex-col items-center justify-center py-6 px-4 md:px-6 min-w-[110px] md:min-w-0">
                      <div className="text-[11px] font-cinzel tracking-[0.3em] text-primary/60 uppercase mb-1">{monthLabel}</div>
                      <div className="text-5xl md:text-6xl font-cinzel-decorative gold-shimmer-text leading-none">{bigDay}</div>
                      <div className="mt-2 h-px w-8 bg-primary/40" />
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-cinzel tracking-[0.25em] text-foreground/60"><Clock size={10} className="text-primary/50" />{time}</div>
                    </div>
                    <div className="p-6 md:p-7 flex flex-col justify-center relative">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary/50 text-xs">◆</span>
                        <div className="font-cinzel text-[11px] tracking-[0.3em] text-primary/70 uppercase">{t(p.date)}</div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-cinzel-decorative text-foreground tracking-wide leading-snug mb-3 group-hover:gothic-glow transition-all duration-500">{t(p.program)}</h3>
                      <div className="flex items-start gap-2 text-foreground/70">
                        <MapPin size={14} className="text-primary/60 mt-1 flex-shrink-0" />
                        <p className="font-cormorant italic text-base leading-relaxed">{t(p.venue)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
