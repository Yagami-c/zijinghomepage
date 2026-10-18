import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eyebrow, FilterGroup, WorkCard } from "@/components/portfolio";
import { filterOptions, filterWorks, works, type WorkFilters } from "@/lib/works";

export default function Works() {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<WorkFilters>({ composer: "all", period: "all", form: "all" });
  const shown = useMemo(() => filterWorks(works, filters), [filters]);
  const set = (k: keyof WorkFilters) => (v: string) => setFilters((f) => ({ ...f, [k]: v }));
  return (
    <section className="portfolio container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl space-y-4"><Eyebrow>{t("hero.name")}</Eyebrow><h1 className="font-cormorant text-5xl md:text-6xl">{t("works.title")}</h1><p className="text-lg text-muted-foreground">{t("works.intro")}</p></div>
      <div className="mt-12 grid gap-6 border-y border-border py-8 md:grid-cols-3">
        <FilterGroup label={t("works.composer")} value={filters.composer} options={filterOptions(works, "composerKey")} onChange={set("composer")} />
        <FilterGroup label={t("works.period")} value={filters.period} options={filterOptions(works, "periodKey")} onChange={set("period")} />
        <FilterGroup label={t("works.form")} value={filters.form} options={filterOptions(works, "formKey")} onChange={set("form")} />
      </div>
      <p className="mt-6 text-base text-muted-foreground" aria-live="polite">{shown.length} {t("works.count")}</p>
      {shown.length ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((w) => <WorkCard key={w.slug} work={w} />)}</div>
        : <p className="mt-10 text-lg">{t("works.empty")}</p>}
    </section>
  );
}