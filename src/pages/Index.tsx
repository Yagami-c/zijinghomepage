import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Calendar, Mail, Phone, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const performances = [
  {
    date: "2024-04-15",
    venue: "Carnegie Hall, New York",
    program: "Tchaikovsky Piano Concerto No. 1",
  },
  {
    date: "2024-05-20",
    venue: "Royal Albert Hall, London",
    program: "Rachmaninoff Piano Concerto No. 2",
  },
  {
    date: "2024-06-10",
    venue: "Mariinsky Theatre, St. Petersburg",
    program: "Solo Recital - Chopin & Liszt",
  },
];

export default function Index() {
  const { t } = useLanguage();

  const videos = [
    {
      id: "ZfT6xoLs7QY",
      title: "Performance 1"
    },
    {
      id: "ySZBNtqPF0I",
      title: "Performance 2"
    },
    {
      id: "DjIpBxAQ13U",
      title: "Performance 3"
    },
    {
      id: "Yji4EdOKNQY",
      title: "Performance 4"
    },
    {
      id: "9DxPdf38Ji4",
      title: "Performance 5"
    }
  ];

  const galleryImages = [
    "/lovable-uploads/7b9f11af-1a88-4363-826e-048aeedd0bfd.png",
    "/lovable-uploads/0f827793-85bd-4294-95df-4f03307ba764.png",
    "/lovable-uploads/27422a9a-d49d-4dc4-af56-0d861e09ce73.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/7b9f11af-1a88-4363-826e-048aeedd0bfd.png')] bg-cover bg-center">
        <div className="bg-black/50 w-full min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-white text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-playfair mb-4">{t("hero.name")}</h1>
            <p className="text-xl md:text-2xl">{t("hero.title")}</p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair mb-8 text-center">{t("about.title")}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-4 whitespace-pre-wrap">
              {t("about.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair mb-8 text-center">{t("schedule.title")}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {performances.map((performance, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <Calendar className="text-gold" />
                <div>
                  <div className="font-semibold">{new Date(performance.date).toLocaleDateString()}</div>
                  <div className="text-lg">{performance.venue}</div>
                  <div className="text-gray-600">{performance.program}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair mb-8 text-center">{t("gallery.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={image}
                  alt={`Performance ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair mb-8 text-center">{t("video.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video) => (
              <div key={video.id} className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair mb-8 text-center">{t("contact.title")}</h2>
          <div className="max-w-xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-gold" />
                <div>
                  <div className="font-semibold">{t("contact.phone")}</div>
                  <a href="tel:+79267170585" className="text-gold hover:underline">
                    +7 (926)-717-05-85
                  </a>
                  <div className="text-sm text-gray-600 mt-1">WhatsApp, Telegram</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-gold" />
                <div>
                  <div className="font-semibold">WeChat</div>
                  <span className="text-gold">zzjdoremi</span>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">{t("contact.social")}</div>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/zijing_zeng" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://youtube.com/@zijingzeng997" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 transition-colors">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}