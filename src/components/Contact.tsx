import { Mail, MapPin, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="kontakt" className="py-16 md:py-20 lg:py-32 section-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-lg text-muted-foreground">
              Bereit für Ihr nächstes Projekt? Lassen Sie uns sprechen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                  <a href="mailto:hello@ihre-agentur.de" className="text-primary hover:underline">
                    hello@ihre-agentur.de
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Antwort innerhalb von 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                  <p className="text-muted-foreground">
                    Musterstraße 42<br />
                    80331 München
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Block */}
            <div className="contact-cta-block">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Projekt starten
              </h3>
              <p className="text-muted-foreground mb-8">
                Das Erstgespräch ist kostenlos und unverbindlich.
                Wir nehmen uns Zeit für Ihre Ideen.
              </p>

              <div className="space-y-3">
                <Button size="default" className="w-full" asChild>
                  <a href="mailto:hello@ihre-agentur.de">
                    <Rocket className="w-4 h-4 mr-1.5" />
                    Projekt anfragen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
