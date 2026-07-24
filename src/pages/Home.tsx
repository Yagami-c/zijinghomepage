import { useLanguage } from "@/contexts/LanguageContext";
import { Reveal } from "@/components/section-primitives";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Music } from "lucide-react";
import { heroImages } from "@/lib/site-data";
import pianoHandsImg from "@/assets/piano-hands.jpg";
import concertHallImg from "@/assets/concert-hall.jpg";
import pianistSilhouetteImg from "@/assets/pianist-silhouette.jpg";

export default function Home() {
  const { t } = useLanguage();
  const autoplayRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-5rem)] relative overflow-hidden vignette grain -mt-20 pt-20">
        <Carousel
          className="w-full h-screen"
          opts={{ loop: true, duration: 2000, watchDrag: true, dragFree: false }}
          plugins={[autoplayRef.current]}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-2000 ease-in-out transform scale-105"
                  style={{ backgroundImage: `url(${image})`, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/35 to-background flex items-center justify-center">
          <div className="hidden md:block absolute top-24 right-8 lg:right-16 max-w-xs z-20 animate-quote-reveal">
            <div className="relative ornate-frame gothic-card rounded-sm p-5 backdrop-blur-md bg-background/50">
              <span className="corner-tr" /><span className="corner-bl" />
              <span className="absolute -top-3 -left-2 text-primary/50 text-4xl font-cinzel-decorative leading-none">"</span>
              <p className="text-sm md:text-base font-cormorant italic text-foreground/85 leading-relaxed pl-3">{t("quote.text")}</p>
              <p className="text-right text-xs font-cinzel tracking-[0.2em] text-primary/70 mt-3">{t("quote.author")}</p>
              <span className="absolute -bottom-3 -right-2 text-primary/50 text-4xl font-cinzel-decorative leading-none rotate-180">"</span>
            </div>
          </div>

          <div className="container mx-auto px-4 text-center">
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              <div className="flex justify-center mb-6"><span className="text-primary/50 text-2xl tracking-[1em]">— ✦ —</span></div>
              <h1 className="text-5xl md:text-8xl font-cinzel-decorative tracking-[0.15em] text-foreground gothic-glow mb-4 drop-shadow-2xl">
                {t("hero.name")}
              </h1>
              <p className="text-xl md:text-2xl font-cormorant italic tracking-[0.3em] text-primary/80 drop-shadow-lg">{t("hero.title")}</p>
              <div className="flex justify-center mt-6"><span className="text-primary/50 text-2xl tracking-[1em]">— ✦ —</span></div>

              <div className="mt-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-4 md:gap-8 items-center">
                  {[
                    { src: pianoHandsImg, alt: "Piano hands in concert", cls: "md:-rotate-3 md:translate-y-6 hover:rotate-0 hover:translate-y-0", ken: "animate-kenburns-1", d: "0s" },
                    { src: concertHallImg, alt: "Grand piano in ornate concert hall", cls: "md:scale-110 md:-translate-y-4 hover:scale-[1.15]", ken: "animate-kenburns-2", d: "1s" },
                    { src: pianistSilhouetteImg, alt: "Pianist silhouette on stage", cls: "md:rotate-3 md:translate-y-6 hover:rotate-0 hover:translate-y-0", ken: "animate-kenburns-3", d: "2s" },
                  ].map((im, i) => (
                    <div key={i} className={`relative ornate-frame gothic-card overflow-hidden rounded-sm p-1 transform ${im.cls} transition-transform duration-700 shadow-2xl animate-gothic-float`} style={{ animationDelay: im.d }}>
                      <span className="corner-tr" /><span className="corner-bl" />
                      <div className="aspect-[3/4] overflow-hidden rounded-sm">
                        <img src={im.src} alt={im.alt} className={`w-full h-full object-cover ${im.ken}`} loading="lazy" width={896} height={1200} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Invitation */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute inset-0 gothic-pattern opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="ornate-frame rounded-sm p-1">
                <span className="corner-tr" /><span className="corner-bl" />
                <div className="gothic-card rounded-sm p-8 md:p-16 text-center space-y-8">
                  <div className="section-ornament"><span>✦</span><span>✦</span><span>✦</span></div>
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full border border-primary/30 bg-primary/5 animate-gothic-float">
                      <Music className="w-8 h-8 text-primary/70" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-cinzel-decorative tracking-[0.12em] text-foreground gothic-glow">{t("invitation.greeting")}</h2>
                  <p className="text-lg md:text-xl font-cinzel tracking-[0.2em] text-primary/70 uppercase">{t("invitation.subtitle")}</p>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/75 font-cormorant italic max-w-2xl mx-auto">{t("invitation.text")}</p>
                  <p className="text-xl md:text-2xl font-cinzel-decorative gold-shimmer-text tracking-[0.1em]">{t("invitation.signature")}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
