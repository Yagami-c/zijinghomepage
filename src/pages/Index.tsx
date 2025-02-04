import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Calendar, Mail, Phone, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";

const performances = [
  {
    date: "performance1.date",
    venue: "performance1.venue",
    program: "performance1.title",
  },
  {
    date: "performance2.date",
    venue: "performance2.venue",
    program: "performance2.title",
  },
];

export default function Index() {
  const { t } = useLanguage();
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const heroImages = [
    "/lovable-uploads/f5249637-7b76-4f9f-843a-709c6a7b7555.png",
    "/lovable-uploads/832dfd71-1ed4-4f9e-a5e5-e02a6028c015.png",
    "/lovable-uploads/a716b21b-801b-44f1-8665-bb5dba860461.png",
    "/lovable-uploads/9910e064-049f-46ab-9904-80cebf45ad4e.png"
  ];

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
    "/lovable-uploads/683074c7-a228-4ef4-ad70-98f8c1714f41.png",
    "/lovable-uploads/68f603fe-d849-4139-b866-49f1855e65bb.png",
    "/lovable-uploads/b5917c0d-ba60-41ba-80ea-e27527047d37.png",
    "/lovable-uploads/e1bdb18f-0413-4526-8d79-89df46cf7324.png",
    "/lovable-uploads/edac1f3a-3582-4009-986d-8f2fae0b122b.png",
    "/lovable-uploads/37eaa083-ff23-4f40-a282-12a62b7324c6.png",
    "/lovable-uploads/63e7d9f7-239d-4eca-8d13-c2193a349da1.png",
    "/lovable-uploads/46024a5d-f559-4bdf-9cdb-2cb41a136575.png",
    "/lovable-uploads/95569425-9a71-4642-b604-f990fdd5e3f3.png",
    "/lovable-uploads/c620aa9e-12ff-42c9-a1f3-3af5a9be601f.png",
    "/lovable-uploads/83fc3260-63e3-49e9-b4b9-741748acb556.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <Carousel 
          className="w-full h-screen" 
          opts={{
            loop: true,
            duration: 2000,
            watchDrag: true,
            dragFree: false,
          }}
          plugins={[autoplayRef.current]}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div 
                  className="w-full h-full bg-cover bg-center transition-all duration-2000 ease-in-out transform scale-105 hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${image})`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/30 flex items-center backdrop-blur-[1px]">
          <div className="container mx-auto px-4 text-white text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-playfair mb-4">{t("hero.name")}</h1>
            <p className="text-xl md:text-2xl mb-8">{t("hero.title")}</p>
            <div className="max-w-2xl mx-auto space-y-8">
              <img 
                src="/lovable-uploads/fe2afc67-b522-4a37-9703-501cc2d89804.png" 
                alt="Zijing Zeng Piano Performance"
                className="rounded-lg shadow-2xl animate-fade-up"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/731b0e02-c447-41be-93b8-60251da476d1.png"
                  alt="Historical Statue"
                  className="rounded-lg shadow-xl animate-fade-up w-full h-64 object-cover"
                />
                <img 
                  src="/lovable-uploads/66557b7c-e360-45c5-9fa7-899ee46dde25.png"
                  alt="Classical Architecture"
                  className="rounded-lg shadow-xl animate-fade-up w-full h-64 object-cover"
                />
              </div>
            </div>
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
                  <div className="font-semibold">{t(performance.date)}</div>
                  <div className="text-lg">{t(performance.venue)}</div>
                  <div className="text-gray-600">{t(performance.program)}</div>
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