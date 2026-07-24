import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { OPEN_CONTACT_EVENT } from "./ContactSidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const openContact = (e: React.MouseEvent) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_EVENT));
};

const linkBase =
  "font-cinzel text-sm tracking-[0.15em] uppercase transition-colors duration-300";
const linkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? "text-primary gothic-glow" : "text-foreground/70 hover:text-primary"}`;

export function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/about", label: t("nav.about") },
    { to: "/schedule", label: t("nav.schedule") },
    { to: "/media", label: t("nav.media") },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-cinzel-decorative tracking-[0.2em] text-primary gothic-glow">
            {t("hero.name")}
          </NavLink>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l, i) => (
              <div key={l.to} className="flex items-center gap-6">
                {i > 0 && <span className="text-primary/30">◆</span>}
                <NavLink to={l.to} end={l.end} className={linkClass}>
                  {l.label}
                </NavLink>
              </div>
            ))}
            <span className="text-primary/30">◆</span>
            <a href="#contact" onClick={openContact} className={`${linkBase} text-foreground/70 hover:text-primary`}>
              {t("nav.contact")}
            </a>
            <div className="pl-4 border-l border-border">
              <LanguageSwitcher />
            </div>
          </div>
          <button
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setMobileOpen(false)} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <a href="#contact" onClick={(e) => { openContact(e); setMobileOpen(false); }} className={`${linkBase} text-foreground/70 hover:text-primary`}>
              {t("nav.contact")}
            </a>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}
