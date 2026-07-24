import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ContactSidebar } from "@/components/ContactSidebar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppLayout() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <ContactSidebar />
      <footer className="py-10 border-t border-border relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-primary/50 text-xs tracking-[0.5em]">
          ✦ ✦ ✦
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="font-cinzel-decorative text-primary/60 text-lg tracking-[0.3em] mb-2">
            {t("hero.name")}
          </div>
          <span className="text-muted-foreground font-cormorant text-sm tracking-[0.2em]">
            © {new Date().getFullYear()} · Classical Pianist
          </span>
        </div>
      </footer>
    </div>
  );
}
