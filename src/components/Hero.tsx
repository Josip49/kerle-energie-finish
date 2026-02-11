import { Phone, Mail, ArrowRight, FileText, BadgeEuro } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CallDialog from "@/components/CallDialog";
import ContactFormDialog from "@/components/ContactFormDialog";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <section className="relative overflow-hidden pt-20 min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <img
        src={heroBg}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium">
              BAFA-Energie-Effizienz-Experten (EEE) | Bearbeitung innerhalb von 7 Tagen
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            ENERGIEBERATUNG.<br />
            <span className="text-primary">NUR BESSER</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-3 md:mb-4">
            <span className="block md:inline">Förderchaos?</span>
            <span className="block md:inline md:ml-1">Technik-Frust?</span>
            <span className="block md:inline md:ml-1">Wir bringen Ordnung rein.</span>
          </p>

          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            KerLe steht für Klarheit statt Bauchgefühl. Wir beraten ehrlich –
            auch wenn sich eine Maßnahme nicht rechnet. Willkommen bei KerLe.
          </p>

          {/* Free Consultation Badge */}
          <div className="inline-block px-3 md:px-5 py-1.5 md:py-2 rounded-lg bg-primary text-primary-foreground font-semibold mb-6 md:mb-8 text-xs md:text-sm">
            ✓ 100% Kostenlose Telefonische Erstberatung
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center px-4 sm:px-0">
            <ContactFormDialog className="hero-cta-primary text-sm">
              <FileText className="w-4 h-4 mr-1.5" />
              Angebot sichern
            </ContactFormDialog>
            <CallDialog className="border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-foreground text-sm" variant="outline" size="default">
              <Phone className="w-4 h-4 mr-1.5" />
              Jetzt kostenlos anrufen
            </CallDialog>
          </div>

          {/* Förderungen Button */}
          <div className="mt-3 flex justify-center px-4 sm:px-0">
            <Button size="default" variant="outline" className="border-primary/60 bg-primary/10 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary text-sm" asChild>
              <Link to="/foerderungen">
                <BadgeEuro className="w-4 h-4 mr-1.5" />
                Förderungen im Überblick
              </Link>
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