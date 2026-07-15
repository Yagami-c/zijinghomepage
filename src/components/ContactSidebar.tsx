import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MessageCircle, Instagram, Youtube, Mail } from "lucide-react";

export const OPEN_CONTACT_EVENT = "open-contact-sidebar";

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
          className="group fixed right-5 bottom-6 md:right-8 md:bottom-10 z-40 flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-full border border-primary/60 bg-gradient-to-r from-[hsl(var(--imperial-red-deep))] via-background to-[hsl(var(--imperial-red-deep))] text-primary shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6),0_0_0_1px_hsl(var(--primary)/0.2)_inset] hover:text-primary-foreground hover:shadow-[0_15px_50px_-10px_hsl(var(--primary)/0.9)] transition-all duration-500 hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-60 group-hover:opacity-0" aria-hidden />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 border border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
            <Mail size={16} />
          </span>
          <span className="relative font-cinzel text-[12px] tracking-[0.28em] uppercase gold-shimmer-text group-hover:[-webkit-text-fill-color:hsl(var(--primary-foreground))]">
            {t("nav.contact")}
          </span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-md gothic-pattern border-l border-primary/30 p-0 overflow-y-auto"
      >
        <div className="relative h-full p-8 md:p-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <SheetHeader className="mb-8 text-left">
            <div className="section-ornament mb-3">
              <span>✦</span>
              <span className="text-[0.65rem]">GET IN TOUCH</span>
              <span>✦</span>
            </div>
            <SheetTitle className="text-3xl font-cinzel-decorative tracking-[0.12em] gothic-glow text-foreground">
              {t("contact.title")}
            </SheetTitle>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              <span className="text-primary/40 text-xs">◆</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
            </div>
          </SheetHeader>

          <div className="space-y-6">
            <div className="ornate-frame rounded-sm p-1">
              <span className="corner-tr" /><span className="corner-bl" />
              <div className="gothic-card rounded-sm p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm border border-primary/30 bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-cinzel text-[10px] tracking-[0.25em] text-primary/80 mb-1 uppercase">
                      {t("contact.phone")}
                    </div>
                    <a href="tel:+79267170585" className="story-link text-foreground hover:text-primary transition-colors font-cormorant text-lg">
                      +7 (926)-717-05-85
                    </a>
                    <div className="text-xs text-muted-foreground mt-1 font-cormorant italic">
                      WhatsApp · Telegram
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm border border-primary/30 bg-primary/10 text-primary">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="font-cinzel text-[10px] tracking-[0.25em] text-primary/80 mb-1 uppercase">
                      WeChat
                    </div>
                    <span className="text-foreground font-cormorant text-lg">zzjdoremi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ornate-frame rounded-sm p-1">
              <span className="corner-tr" /><span className="corner-bl" />
              <div className="gothic-card rounded-sm p-6">
                <div className="font-cinzel text-[10px] tracking-[0.25em] text-primary/80 mb-4 uppercase">
                  {t("contact.social")}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/zijing_zeng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://youtube.com/@zijingzeng997"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-3 rounded-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="section-ornament pt-4">
              <span>✦</span><span>✦</span><span>✦</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
