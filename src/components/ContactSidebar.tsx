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
import { Phone, MessageCircle, Send, Copy, Check, X } from "lucide-react";

export const OPEN_CONTACT_EVENT = "open-contact-sidebar";

const PHONE = "+7 (926)-717-05-85";
const PHONE_RAW = "+79267170585";
const WECHAT = "zzjdoremi";

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

const WhatsappGlyph = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2.5a9.44 9.44 0 0 0-8.1 14.28L2.5 21.5l4.86-1.38A9.44 9.44 0 1 0 12.04 2.5zm0 1.8a7.64 7.64 0 1 1-3.9 14.2l-.3-.18-2.86.81.82-2.78-.19-.3A7.64 7.64 0 0 1 12.04 4.3zm4.3 9.62c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.11-.52.12-.15.23-.6.74-.73.9-.13.14-.27.16-.5.05a6.26 6.26 0 0 1-3.13-2.73c-.24-.4.23-.38.67-1.26.08-.15.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.45c-.15 0-.4.06-.6.29-.21.23-.79.77-.79 1.88s.81 2.18.93 2.33c.11.15 1.6 2.44 3.87 3.42 1.44.62 2 .67 2.73.56.44-.06 1.36-.55 1.55-1.09.19-.54.19-1 .14-1.1-.06-.1-.21-.16-.44-.28z" />
  </svg>
);

/** Small pill button used for quick actions */
const QuickAction = ({
  label,
  href,
  onClick,
  icon,
  active,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  active?: boolean;
}) => {
  const className = cn(
    "group flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 select-none [touch-action:manipulation]",
    "border-border/60 bg-card/40 hover:bg-muted/70 hover:border-primary/70 hover:-translate-y-0.5",
    "hover:shadow-[0_0_34px_-10px_hsl(var(--primary)/0.45)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
    active && "border-primary/80 bg-primary/10"
  );

  const inner = (
    <>
      <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-primary border border-border shadow-inner group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="font-cinzel text-[10px] uppercase tracking-[0.16em] text-muted-foreground group-hover:text-primary transition-colors">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className={className}>
      {inner}
    </button>
  );
};

/** Value row with inline copy */
const ChannelRow = ({
  label,
  value,
  sub,
  icon,
  href,
  onCopy,
  copied,
  copyLabel,
  copiedLabel,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  href?: string;
  onCopy: () => void;
  copied: boolean;
  copyLabel: string;
  copiedLabel: string;
}) => (
  <div className="group relative flex items-center gap-4 py-3.5 px-4 rounded-xl border border-border/60 bg-card/40 hover:bg-muted/60 hover:border-primary/40 transition-all duration-300">
    <span className="w-11 h-11 shrink-0 rounded-lg bg-muted flex items-center justify-center text-primary border border-border shadow-inner group-hover:scale-105 transition-transform duration-300">
      {icon}
    </span>
    <div className="flex-1 min-w-0">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-cinzel block">
        {label}
      </span>
      {href ? (
        <a href={href} className="text-lg font-cormorant text-foreground hover:text-primary transition-colors block truncate">
          {value}
        </a>
      ) : (
        <span className="text-lg font-cormorant text-foreground block truncate">{value}</span>
      )}
      {sub && <span className="text-xs text-muted-foreground font-cormorant italic">{sub}</span>}
    </div>
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? copiedLabel : copyLabel}
      title={copied ? copiedLabel : copyLabel}
      className={cn(
        "shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 active:scale-90 [touch-action:manipulation]",
        copied
          ? "border-primary/80 text-primary bg-primary/15 shadow-[0_0_20px_-6px_hsl(var(--primary)/0.7)]"
          : "border-border/70 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-muted"
      )}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  </div>
);

const SocialCard = ({
  href,
  glyph: Glyph,
  ariaLabel,
}: {
  href: string;
  glyph: () => JSX.Element;
  ariaLabel: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    title={ariaLabel}
    className={cn(
      "group flex items-center justify-center gap-3 py-3.5 rounded-xl border border-border/60 bg-card/40 transition-all duration-300 select-none [touch-action:manipulation]",
      "hover:bg-muted/70 hover:border-primary/70 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5 active:scale-[0.97]"
    )}
  >
    <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary border border-border shadow-inner group-hover:scale-110 transition-transform duration-300">
      <Glyph />
    </span>
    <span className="font-cinzel text-[10px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary transition-colors">
      {ariaLabel}
    </span>
  </a>
);

export function ContactSidebar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_EVENT, handler);
    return () => window.removeEventListener(OPEN_CONTACT_EVENT, handler);
  }, []);

  const copy = useCallback(async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1600);
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

        <div className="flex flex-col h-full overflow-y-auto px-6 pt-8 pb-10 md:px-10 md:pt-10">
          <SheetHeader className="mb-8 text-left space-y-0">
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

          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-cinzel block">
            {t("contact.quick")}
          </span>
          <div className="grid grid-cols-3 gap-3 mb-8">
            <QuickAction label={t("contact.call")} href={`tel:${PHONE_RAW}`} icon={<Phone size={18} />} />
            <QuickAction label={t("contact.whatsapp")} href={`https://wa.me/${PHONE_RAW.replace("+", "")}`} icon={<WhatsappGlyph />} />
            <QuickAction label={t("contact.telegram")} href={`https://t.me/${PHONE_RAW}`} icon={<Send size={18} />} />
          </div>

          <div className="space-y-4">
            <ChannelRow
              label={t("contact.direct_line")}
              value={PHONE}
              sub="WhatsApp · Telegram"
              icon={<Phone size={18} />}
              href={`tel:${PHONE_RAW}`}
              onCopy={() => copy("phone", PHONE_RAW)}
              copied={copiedKey === "phone"}
              copyLabel={t("contact.copy")}
              copiedLabel={t("contact.copied")}
            />
            <ChannelRow
              label={t("contact.wechat")}
              value={WECHAT}
              icon={<MessageCircle size={18} />}
              onCopy={() => copy("wechat", WECHAT)}
              copied={copiedKey === "wechat"}
              copyLabel={t("contact.copy")}
              copiedLabel={t("contact.copied")}
            />
          </div>

          <div className="mt-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-cinzel block">
              {t("contact.social")}
            </span>
            <div className="grid grid-cols-2 gap-3">
              <SocialCard href="https://www.instagram.com/zijing_zeng" glyph={InstagramGlyph} ariaLabel="Instagram" />
              <SocialCard href="https://youtube.com/@zijingzeng997" glyph={YoutubeGlyph} ariaLabel="YouTube" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
