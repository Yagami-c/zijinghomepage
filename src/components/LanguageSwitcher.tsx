import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'ru' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('ru')}
      >
        RU
      </Button>
    </div>
  );
}