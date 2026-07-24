import { useReveal } from "@/hooks/use-reveal";

export const GothicDivider = () => (
  <div className="flex items-center justify-center gap-4 py-2">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <span className="text-primary/40 text-xs tracking-[0.5em]">✦ ✦ ✦</span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  </div>
);

export const SectionTitle = ({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`text-center mb-14 reveal ${visible ? "is-visible" : ""}`}>
      {eyebrow && (
        <div className="section-ornament mb-4">
          <span>✦</span>
          <span className="text-[0.65rem]">{eyebrow}</span>
          <span>✦</span>
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-cinzel tracking-[0.12em] text-foreground gothic-glow mb-4">{children}</h1>
      <GothicDivider />
    </div>
  );
};

export const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const parseConcertDate = (dateStr: string) => {
  const timeMatch = dateStr.match(/(\d{1,2}[:.]\d{2})/);
  const time = timeMatch ? timeMatch[1].replace(".", ":") : "";
  const datePart = timeMatch ? dateStr.replace(timeMatch[0], "").trim() : dateStr;

  const enMatch = datePart.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (enMatch) return { monthLabel: enMatch[1], bigDay: enMatch[2], time };

  const ruMatch = datePart.match(/^(\d{1,2})\s+([а-яА-ЯёЁ]+)\s+(\d{4})$/);
  if (ruMatch) return { monthLabel: ruMatch[2], bigDay: ruMatch[1], time };

  const zhMatch = datePart.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);
  if (zhMatch) return { monthLabel: zhMatch[2], bigDay: zhMatch[3], time };

  const dayMatch = datePart.match(/\d{1,2}/g);
  const bigDay = dayMatch ? dayMatch[dayMatch.length - 1] : "";
  return { monthLabel: "", bigDay, time };
};
