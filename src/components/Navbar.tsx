import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { OPEN_CONTACT_EVENT } from "./ContactSidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const openContact = (e: React.MouseEvent) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_EVENT));
};

export function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-cinzel-decorative tracking-[0.2em] text-primary gothic-glow">
            {t("hero.name")}
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300">{t("nav.about")}</a>
            <span className="text-primary/30">◆</span>
            <a href="#schedule" className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300">{t("nav.schedule")}</a>
            <span className="text-primary/30">◆</span>
            <a href="#gallery" className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300">{t("nav.gallery")}</a>
            <span className="text-primary/30">◆</span>
            <a href="#contact" onClick={openContact} className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300">{t("nav.contact")}</a>
            <div className="pl-4 border-l border-border">
              <LanguageSwitcher />
            </div>
          </div>
          <button 
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileOpen(false)} className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors">{t("nav.about")}</a>
            <a href="#schedule" onClick={() => setMobileOpen(false)} className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors">{t("nav.schedule")}</a>
            <a href="#gallery" onClick={() => setMobileOpen(false)} className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors">{t("nav.gallery")}</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="font-cinzel text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors">{t("nav.contact")}</a>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}
