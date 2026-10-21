import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { OPEN_CONTACT_EVENT } from "./ContactSidebar";
import { NavLink } from "react-router-dom";

const openContact = (e: React.MouseEvent) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_EVENT));
};

const linkBase =
  "inline-flex min-h-11 items-center justify-center font-cinzel text-sm uppercase transition-colors duration-300";
const linkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? "text-primary gothic-glow" : "text-foreground/70 hover:text-primary"}`;

export function Navbar() {
  const { t } = useLanguage();

  const links = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/about", label: t("nav.about") },
    { to: "/works", label: t("nav.works") },
    { to: "/schedule", label: t("nav.schedule") },
    { to: "/media", label: t("nav.media") },
  ];

  return (
    <nav className="sticky top-0 w-full bg-background/95 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-2 xl:flex xl:items-center xl:justify-between xl:gap-6">
        <div className="flex min-h-12 items-center justify-between gap-3">
          <NavLink to="/" className="min-w-0 text-lg sm:text-2xl font-cinzel-decorative text-primary gothic-glow">
            {t("hero.name")}
          </NavLink>
          <div className="shrink-0 xl:hidden"><LanguageSwitcher /></div>
        </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-3 border-t border-border xl:border-0 xl:flex xl:items-center xl:gap-5">
            {links.map((l, i) => (
              <div key={l.to} className="flex min-w-0 items-center justify-center gap-5">
                {i > 0 && <span aria-hidden="true" className="hidden xl:inline text-primary/30">◆</span>}
                <NavLink to={l.to} end={l.end} className={linkClass}>
                {l.label}
                </NavLink>
              </div>
            ))}
            <a href="#contact" onClick={openContact} className={`${linkBase} text-foreground/70 hover:text-primary`}>
              {t("nav.contact")}
            </a>
            <div className="hidden xl:block border-l border-border pl-4"><LanguageSwitcher /></div>
          </div>
      </div>
    </nav>
  );
}
