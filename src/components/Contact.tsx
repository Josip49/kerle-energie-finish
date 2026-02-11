import { Phone, Mail, MapPin, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallDialog from "@/components/CallDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { StefanKerling, KevinLeuschner } from "@/components/StyledName";

const Contact = () => {
  const isMobile = useIsMobile();
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <section id="kontakt" className="py-16 md:py-20 lg:py-32 section-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir freuen uns auf Ihre Anfrage – kostenlos und unverbindlich.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                  <p className="text-muted-foreground mb-1">
                    <StefanKerling />: <a href="tel:015140368889" className="text-primary hover:underline">0151 40368889</a>
                  </p>
                  <p className="text-muted-foreground">
                    <KevinLeuschner />: <a href="tel:01623598287" className="text-primary hover:underline">0162 3598287</a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Kostenlose Erstberatung
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                  <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`} className="text-primary hover:underline">
                    kerle@rothsee-energieberatung.de
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Antwort innerhalb von 24h
                  </p>
                </div>
              </div>

              {/* WhatsApp Hinweis */}
              <div className="flex items-start gap-4">
                <div className="contact-icon" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    Schnell & unkompliziert – schreiben Sie uns einfach per WhatsApp. Anfragen werden in der Regel innerhalb weniger Minuten beantwortet.
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a href="https://wa.me/4915140368889?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Energieberatung." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
                      Stefan →
                    </a>
                    <a href="https://wa.me/491623598287?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Energieberatung." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
                      Kevin →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    Lindenallee 33<br />
                    91161 Hilpoltstein
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Block */}
            <div className="contact-cta-block">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Jetzt Beratung starten
              </h3>
              <p className="text-muted-foreground mb-8">
                Die telefonische Erstberatung ist kostenlos und unverbindlich.
                Wir nehmen uns Zeit für Ihre Fragen.
              </p>

              <div className="space-y-3">
                <CallDialog className="w-full" size="default">
                  <Phone className="w-4 h-4 mr-1.5" />
                  Jetzt kostenlos anrufen
                </CallDialog>

                <Button size="default" variant="outline" className="w-full" asChild>
                  <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`}>
                    <Mail className="w-4 h-4 mr-1.5" />
                    E-Mail schreiben
                  </a>
                </Button>

                {isMobile && (
                  <div className="grid grid-cols-2 gap-3">
                    <Button size="default" className="w-full whatsapp-cta" asChild>
                      <a href="https://wa.me/4915140368889?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Energieberatung." target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-1.5" />
                        Stefan
                      </a>
                    </Button>
                    <Button size="default" className="w-full whatsapp-cta" asChild>
                      <a href="https://wa.me/491623598287?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Energieberatung." target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-1.5" />
                        Kevin
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;