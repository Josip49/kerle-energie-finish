import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallDialog from "@/components/CallDialog";

const Hero = () => {
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium">
              BAFA-Energie-Effizienz-Experten (EEE) | Bearbeitung innerhalb von 7 Tagen
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            ENERGIEBERATUNG.<br />
            <span className="text-primary">NUR BESSER</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Förderchaos? Technik-Frust? Wir bringen Ordnung rein.
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            KerLe steht für Klarheit statt Bauchgefühl. Wir beraten ehrlich –
            auch wenn sich eine Maßnahme nicht rechnet. Willkommen bei KerLe.
          </p>

          {/* Free Consultation Badge */}
          <div className="inline-block px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold mb-10">
            ✓ 100% Kostenlose Telefonische Erstberatung
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallDialog className="hero-cta-primary">
              <Phone className="w-5 h-5 mr-2" />
              Jetzt kostenlos anrufen
            </CallDialog>
            <Button size="lg" variant="outline" className="hero-cta-secondary" asChild>
              <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`}>
                <Mail className="w-5 h-5 mr-2" />
                E-Mail schreiben
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-gradient-orb hero-gradient-orb-1"></div>
      <div className="hero-gradient-orb hero-gradient-orb-2"></div>
    </section>
  );
};

export default Hero;