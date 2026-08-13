import { useEffect, useState, useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle, X } from "lucide-react";


export const OPEN_CONTACT_EVENT = "open-contact-sidebar";

const PhoneIcon = () => <Phone size={18} />;
const WeChatIcon = () => <MessageCircle size={18} />;

const ContactChannel = ({
  label,
  href,
  children,
  external,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
  external?: boolean;
}) => {
  const wrapperClass =
    "group flex items-center gap-4 py-3.5 px-4 rounded-xl border border-border/60 bg-card/40 hover:bg-muted/60 hover:border-primary/40 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.15)] active:scale-[0.99]";

  const content = (
    <>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 font-cinzel block">
        {label}
      </span>
      <div className={wrapperClass}>{children}</div>
    </>
  );


  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return <div className="block">{content}</div>;
};
const InstagramGlyph = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeGlyph = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.2 9.2l4.8 2.8-4.8 2.8V9.2z" fill="currentColor" />
  </svg>
);

const SocialCard = ({
  href,
  glyph: Glyph,
  ariaLabel,
}: {
  href: string;
  glyph: () => JSX.Element;
  ariaLabel: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 600);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={handleClick}
      className={cn(
        "social-card group flex items-center justify-center py-4 rounded-xl border border-border/60 bg-card/40 transition-all duration-300 select-none [touch-action:manipulation]",
        "hover:bg-muted/70 hover:border-primary/70 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5",
        "active:scale-[0.97] active:translate-y-px",
        loading && "loading"
      )}
    >
      <span className="social-card__glow" aria-hidden />
      <span className="social-card__spinner" aria-hidden />
      <span className="social-card__content relative z-10 flex items-center justify-center">
        <span className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-primary border border-border shadow-inner group-hover:scale-110 transition-all duration-300">
          <Glyph />
        </span>
      </span>
    </a>
  );
};

export function ContactSidebar() {

  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_EVENT, handler);
    return () => window.removeEventListener(OPEN_CONTACT_EVENT, handler);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label={t("contact.title")}
          className="group fixed right-5 bottom-6 md:right-8 md:bottom-10 z-40 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full border border-primary/40 bg-background/75 backdrop-blur-md shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-primary/80 hover:bg-background/90 hover:shadow-[0_20px_40px_-5px_hsl(var(--primary)/0.25)] transition-all duration-500 hover:-translate-y-0.5 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative flex h-2 w-2 items-center justify-center rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] animate-pulse" />
          <span className="relative font-cinzel text-[11px] tracking-[0.22em] uppercase text-foreground/90 group-hover:text-primary transition-colors duration-300">
            {t("nav.contact")}
          </span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-l border-border shadow-[-20px_0_60px_rgba(0,0,0,0.5)] p-0 overflow-hidden [&>button:last-child]:hidden duration-300 data-[state=open]:duration-300 data-[state=closed]:duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-6 pt-8 pb-6 md:px-10 md:pt-10">
          <SheetHeader className="mb-10 text-left space-y-0">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-cinzel">
                  {t("contact.concierge")}
                </span>
                <SheetTitle className="text-3xl md:text-4xl font-cinzel-decorative text-foreground gothic-glow italic tracking-tight">
                  {t("contact.title")}
                </SheetTitle>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 w-9 h-9 rounded-full border border-border/70 bg-card/40 flex items-center justify-center hover:bg-muted hover:border-primary/40 hover:text-primary transition-all duration-300 active:scale-95"
                aria-label={t("ui.close")}
              >
                <X size={15} />
              </button>

            </div>
            <div className="w-16 h-px bg-gradient-to-r from-primary/70 to-transparent mt-4" />
          </SheetHeader>

          <div className="space-y-6 flex-1">
            <ContactChannel label={t("contact.direct_line")} href="tel:+79267170585">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-primary border border-border shadow-inner group-hover:scale-105 group-hover:text-primary transition-all duration-300">
                <PhoneIcon />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-lg font-cormorant text-foreground group-hover:text-primary transition-colors block truncate">
                  +7 (926)-717-05-85
                </span>
                <span className="text-xs text-muted-foreground font-cormorant italic">
                  WhatsApp · Telegram
                </span>
              </div>
            </ContactChannel>

            <ContactChannel label={t("contact.wechat")}>
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-primary border border-border shadow-inner group-hover:scale-105 transition-transform duration-300">
                <WeChatIcon />
              </div>
              <span className="text-lg font-cormorant text-foreground">zzjdoremi</span>
            </ContactChannel>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-cinzel block">
                {t("contact.social")}
              </span>
              <div className="grid grid-cols-2 gap-3">
                <SocialCard href="https://www.instagram.com/zijing_zeng" glyph={InstagramGlyph} ariaLabel="Instagram" />
                <SocialCard href="https://youtube.com/@zijingzeng997" glyph={YoutubeGlyph} ariaLabel="YouTube" />
              </div>
            </div>

          </div>

          </div>

          <a
            href="tel:+79267170585"
            className="block w-full px-6 py-5 bg-gradient-to-tr from-[hsl(var(--gold-dark))] via-primary to-[hsl(var(--gold-light))] text-primary-foreground font-cinzel text-[0.8rem] uppercase tracking-[0.28em] text-center border-t border-[hsl(var(--gold-light))]/50 shadow-[0_-12px_30px_-12px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:brightness-110 active:brightness-95 [touch-action:manipulation]"
          >
            {t("contact.cta")}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
