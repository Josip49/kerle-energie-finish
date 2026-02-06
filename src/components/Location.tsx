import { MapPin } from "lucide-react";
import { KerLeBrand, StefanKerling, KevinLeuschner } from "@/components/StyledName";

const Location = () => {
  return (
    <section id="standort" className="py-16 md:py-20 lg:py-24 section-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wo Sie uns finden
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Besuchen Sie uns vor Ort oder kontaktieren Sie uns für einen Beratungstermin bei Ihnen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.123456789!2d11.1234567!3d49.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA3JzI0LjQiTiAxMcKwMDcnMjQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KerLe Energieberatung Standort"
              className="w-full h-full"
            />
          </div>

          {/* Address Info */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  <KerLeBrand /> Energieberatung
                </h3>
                <p className="text-muted-foreground">
                  Ihre BAFA-zertifizierten Energie-Effizienz-Experten
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-t border-border/50 pt-4">
                <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                <p className="text-muted-foreground">
                  Musterstraße 123<br />
                  91161 Hilpoltstein
                </p>
              </div>

              <div className="border-t border-border/50 pt-4">
                <h4 className="font-semibold text-foreground mb-2">Einsatzgebiet</h4>
                <p className="text-muted-foreground">
                  Landkreis Roth, Nürnberger Land, Landkreis Neumarkt i. d. OPf., 
                  Landkreis Weißenburg-Gunzenhausen und Umgebung
                </p>
              </div>

              <div className="border-t border-border/50 pt-4">
                <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p><StefanKerling />: <a href="tel:015140368889" className="text-primary hover:underline">0151 40368889</a></p>
                  <p><KevinLeuschner />: <a href="tel:01623598287" className="text-primary hover:underline">0162 3598287</a></p>
                  <p>
                    <a 
                      href="mailto:kerle@rothsee-energieberatung.de" 
                      className="text-primary hover:underline"
                    >
                      kerle@rothsee-energieberatung.de
                    </a>
                  </p>
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
