import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallDialog from "@/components/CallDialog";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <section className="relative overflow-hidden pt-20 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium">
              BAFA-Energie-Effizienz-Experten (EEE) | Bearbeitung innerhalb von 7 Tagen
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ENERGIEBERATUNG.<br />
            <span className="text-primary">NUR BESSER</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Förderchaos? Technik-Frust? Wir bringen Ordnung rein.
          </p>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            KerLe steht für Klarheit statt Bauchgefühl. Wir beraten ehrlich –
            auch wenn sich eine Maßnahme nicht rechnet. Willkommen bei KerLe.
          </p>

          {/* Free Consultation Badge */}
          <div className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold mb-10">
            ✓ 100% Kostenlose Telefonische Erstberatung
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallDialog className="hero-cta-primary">
              <Phone className="w-5 h-5 mr-2" />
              Jetzt kostenlos anrufen
            </CallDialog>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
              <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`}>
                <Mail className="w-5 h-5 mr-2" />
                E-Mail schreiben
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowRight className="w-6 h-6 text-white/70 rotate-90 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;