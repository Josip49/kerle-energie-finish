import { ArrowRight, Rocket, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 min-h-[90vh] md:min-h-screen flex items-center">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
      <div className="hero-gradient-orb hero-gradient-orb-1" />
      <div className="hero-gradient-orb hero-gradient-orb-2" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[hsl(40,20%,96%)]" />

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium">
              Template von Senovate · Vollständig anpassbar
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            IHR UNTERNEHMEN.<br />
            <span className="text-primary">NUR BESSER.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-3 md:mb-4">
            <span className="block md:inline">Modernes Design.</span>
            <span className="block md:inline md:ml-1">Starke Performance.</span>
            <span className="block md:inline md:ml-1">Wir setzen Ihr Projekt um.</span>
          </p>

          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Dieses Template zeigt, was möglich ist. Passen Sie Farben, Inhalte und Struktur
            nach Ihren Wünschen an – wir kümmern uns um den Rest.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center px-4 sm:px-0">
            <Button size="default" className="hero-cta-primary text-sm" asChild>
              <a href="#kontakt">
                <Rocket className="w-4 h-4 mr-1.5" />
                Projekt starten
              </a>
            </Button>
            <Button size="default" variant="outline" className="border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-foreground text-sm" asChild>
              <a href="#leistungen">
                <Eye className="w-4 h-4 mr-1.5" />
                Leistungen ansehen
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 md:mt-16 animate-bounce">
            <ArrowRight className="w-6 h-6 text-white/70 rotate-90 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
