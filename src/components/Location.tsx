import { MapPin, Rocket } from "lucide-react";

const Location = () => {
  return (
    <section id="standort" className="py-16 md:py-20 lg:py-24 section-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wo Sie uns finden
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Besuchen Sie uns vor Ort oder arbeiten Sie remote mit uns zusammen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[400px] bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-primary/30" />
              <p className="text-sm">Google Maps Einbettung</p>
              <p className="text-xs mt-1">Hier erscheint Ihre Karte</p>
            </div>
          </div>

          {/* Address Info */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ihre Agentur</h3>
                <p className="text-muted-foreground">Ihr Slogan oder Tagline hier</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-t border-border/50 pt-4">
                <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                <p className="text-muted-foreground">
                  Musterstraße 42<br />
                  80331 München
                </p>
              </div>

              <div className="border-t border-border/50 pt-4">
                <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>Telefon: <a href="tel:+4989123456" className="text-primary hover:underline">+49 89 123 456</a></p>
                  <p>E-Mail: <a href="mailto:hello@ihre-agentur.de" className="text-primary hover:underline">hello@ihre-agentur.de</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
