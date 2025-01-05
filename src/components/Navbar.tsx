import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-playfair">{t("hero.name")}</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-gold transition-colors">{t("nav.about")}</a>
            <a href="#schedule" className="hover:text-gold transition-colors">{t("nav.schedule")}</a>
            <a href="#gallery" className="hover:text-gold transition-colors">{t("nav.gallery")}</a>
            <a href="#contact" className="hover:text-gold transition-colors">{t("nav.contact")}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}