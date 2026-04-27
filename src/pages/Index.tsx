import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import pianoHandsImg from "@/assets/piano-hands.jpg";
import concertHallImg from "@/assets/concert-hall.jpg";
import pianistSilhouetteImg from "@/assets/pianist-silhouette.jpg";
import { Calendar, Phone, Instagram, Youtube, MessageCircle, Music } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const performances = [
  {
    date: "performance6.date",
    venue: "performance6.venue",
    program: "performance6.title",
  },
  {
    date: "performance7.date",
    venue: "performance7.venue",
    program: "performance7.title",
  },
  {
    date: "performance8.date",
    venue: "performance8.venue",
    program: "performance8.title",
  },
];

const GothicDivider = () => (
  <div className="flex items-center justify-center gap-4 py-2">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <span className="text-primary/40 text-xs tracking-[0.5em]">✦ ✦ ✦</span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-cinzel tracking-[0.1em] text-foreground gothic-glow mb-4">{children}</h2>
    <GothicDivider />
  </div>
);

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
    { id: "ZfT6xoLs7QY", title: "Performance 1" },
    { id: "ySZBNtqPF0I", title: "Performance 2" },
    { id: "DjIpBxAQ13U", title: "Performance 3" },
    { id: "Yji4EdOKNQY", title: "Performance 4" },
    { id: "9DxPdf38Ji4", title: "Performance 5" },
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
          opts={{ loop: true, duration: 2000, watchDrag: true, dragFree: false }}
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
                    top: 0, left: 0, right: 0, bottom: 0,
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background flex items-center justify-center">
          {/* Top-right personal quote */}
          <div className="hidden md:block absolute top-24 right-8 lg:right-16 max-w-xs z-20 animate-quote-reveal">
            <div className="relative gothic-card rounded-sm p-5 backdrop-blur-sm bg-background/40">
              <span className="absolute -top-3 -left-2 text-primary/50 text-4xl font-cinzel-decorative leading-none">"</span>
              <p className="text-sm md:text-base font-cormorant italic text-foreground/85 leading-relaxed pl-3">
                {t("quote.text")}
              </p>
              <p className="text-right text-xs font-cinzel tracking-[0.2em] text-primary/70 mt-3">
                {t("quote.author")}
              </p>
              <span className="absolute -bottom-3 -right-2 text-primary/50 text-4xl font-cinzel-decorative leading-none rotate-180">"</span>
            </div>
          </div>

          <div className="container mx-auto px-4 text-center">
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              {/* Ornamental top */}
              <div className="flex justify-center mb-6">
                <span className="text-primary/50 text-2xl tracking-[1em]">— ✦ —</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-cinzel-decorative tracking-[0.15em] text-foreground gothic-glow mb-4 drop-shadow-2xl">
                {t("hero.name")}
              </h1>
              <p className="text-xl md:text-2xl font-cormorant italic tracking-[0.3em] text-primary/80 drop-shadow-lg">
                {t("hero.title")}
              </p>
              {/* Ornamental bottom */}
              <div className="flex justify-center mt-6">
                <span className="text-primary/50 text-2xl tracking-[1em]">— ✦ —</span>
              </div>

              {/* Aspirational piano images — staggered, animated, non-flat */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-4 md:gap-8 items-center">
                  {/* Left — tilted down, smaller */}
                  <div className="relative gothic-card overflow-hidden rounded-sm p-1 transform md:-rotate-3 md:translate-y-6 hover:rotate-0 hover:translate-y-0 transition-transform duration-700 shadow-2xl animate-gothic-float" style={{ animationDelay: '0s' }}>
                    <div className="aspect-[3/4] overflow-hidden rounded-sm">
                      <img src={pianoHandsImg} alt="Piano hands in concert" className="w-full h-full object-cover animate-kenburns-1" loading="lazy" width={896} height={1200} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20 pointer-events-none" />
                    <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Center — tallest, prominent */}
                  <div className="relative gothic-card overflow-hidden rounded-sm p-1 transform md:scale-110 md:-translate-y-4 hover:scale-[1.15] transition-transform duration-700 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] animate-gothic-float" style={{ animationDelay: '1s' }}>
                    <div className="aspect-[3/4] overflow-hidden rounded-sm">
                      <img src={concertHallImg} alt="Grand piano in ornate concert hall" className="w-full h-full object-cover animate-kenburns-2" loading="lazy" width={896} height={1200} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/10 pointer-events-none" />
                    {/* Center gold corner ornaments */}
                    <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-primary/60" />
                    <div className="absolute top-1 right-1 w-4 h-4 border-t border-r border-primary/60" />
                    <div className="absolute bottom-1 left-1 w-4 h-4 border-b border-l border-primary/60" />
                    <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-primary/60" />
                  </div>

                  {/* Right — tilted up, smaller */}
                  <div className="relative gothic-card overflow-hidden rounded-sm p-1 transform md:rotate-3 md:translate-y-6 hover:rotate-0 hover:translate-y-0 transition-transform duration-700 shadow-2xl animate-gothic-float" style={{ animationDelay: '2s' }}>
                    <div className="aspect-[3/4] overflow-hidden rounded-sm">
                      <img src={pianistSilhouetteImg} alt="Pianist silhouette on stage" className="w-full h-full object-cover animate-kenburns-3" loading="lazy" width={896} height={1200} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Invitation Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background ornamental patterns */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute inset-0 gothic-pattern opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Ornamental frame */}
            <div className="relative border border-primary/20 rounded-sm p-1">
              {/* Corner ornaments */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40" />
              
              <div className="gothic-card rounded-sm p-8 md:p-16 text-center space-y-8">
                {/* Top ornament */}
                <div className="flex justify-center">
                  <span className="text-primary/40 text-sm tracking-[1em] font-cinzel">✦ ✦ ✦</span>
                </div>

                {/* Musical note icon */}
                <div className="flex justify-center">
                  <div className="p-4 rounded-full border border-primary/20 bg-primary/5">
                    <Music className="w-8 h-8 text-primary/60" />
                  </div>
                </div>

                {/* Greeting */}
                <h2 className="text-3xl md:text-5xl font-cinzel-decorative tracking-[0.12em] text-foreground gothic-glow">
                  {t("invitation.greeting")}
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl font-cinzel tracking-[0.2em] text-primary/70 uppercase">
                  {t("invitation.subtitle")}
                </p>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                  <span className="text-primary/30 text-xs">◆</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>

                {/* Invitation text */}
                <p className="text-lg md:text-xl leading-relaxed text-foreground/75 font-cormorant italic max-w-2xl mx-auto">
                  {t("invitation.text")}
                </p>

                {/* Signature */}
                <div className="pt-4">
                  <p className="text-xl md:text-2xl font-cinzel-decorative text-primary/80 tracking-[0.1em]">
                    {t("invitation.signature")}
                  </p>
                </div>

                {/* Bottom ornament */}
                <div className="flex justify-center pt-2">
                  <span className="text-primary/40 text-sm tracking-[1em] font-cinzel">✦ ✦ ✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="about" className="py-24 gothic-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle>{t("about.title")}</SectionTitle>
          <div className="max-w-3xl mx-auto">
            <div className="gothic-card rounded-sm p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-foreground/85 font-cormorant">
                {t("about.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle>{t("schedule.title")}</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-6">
            {performances.map((performance, index) => (
              <div key={index} className="gothic-card rounded-sm p-6 flex items-start gap-5 group hover:border-primary/30 transition-all duration-500">
                <div className="mt-1 p-2 rounded-sm bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <Calendar size={20} />
                </div>
                <div className="space-y-1.5">
                  <div className="font-cinzel text-sm tracking-[0.1em] text-primary">{t(performance.date)}</div>
                  <div className="text-lg font-cormorant text-foreground">{t(performance.venue)}</div>
                  <div className="text-muted-foreground font-cormorant italic">{t(performance.program)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 gothic-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle>{t("gallery.title")}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] rounded-sm overflow-hidden relative group cursor-pointer">
                <img 
                  src={image}
                  alt={`Performance ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle>{t("video.title")}</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {videos.map((video) => (
              <div key={video.id} className="aspect-video gothic-card rounded-sm overflow-hidden p-1">
                <iframe
                  className="w-full h-full rounded-sm"
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
      <section id="contact" className="py-24 gothic-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle>{t("contact.title")}</SectionTitle>
          <div className="max-w-xl mx-auto">
            <div className="gothic-card rounded-sm p-8 md:p-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="p-2 rounded-sm bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-cinzel text-sm tracking-[0.1em] text-primary mb-1">{t("contact.phone")}</div>
                  <a href="tel:+79267170585" className="text-foreground hover:text-primary transition-colors font-cormorant text-lg">
                    +7 (926)-717-05-85
                  </a>
                  <div className="text-sm text-muted-foreground mt-1 font-cormorant italic">WhatsApp, Telegram</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="flex items-center gap-5">
                <div className="p-2 rounded-sm bg-primary/10 text-primary">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-cinzel text-sm tracking-[0.1em] text-primary mb-1">WeChat</div>
                  <span className="text-foreground font-cormorant text-lg">zzjdoremi</span>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div>
                <div className="font-cinzel text-sm tracking-[0.1em] text-primary mb-4">{t("contact.social")}</div>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/zijing_zeng" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="https://youtube.com/@zijingzeng997" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="text-muted-foreground font-cormorant text-sm tracking-[0.2em]">
            © {new Date().getFullYear()} Zijing Zeng · Classical Pianist
          </span>
        </div>
      </footer>
    </div>
  );
}
