import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-3xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Verantwortliche Stelle</h2>
                <p>
                  Ihre Firma GmbH<br />
                  Musterstraße 42<br />
                  80331 München<br /><br />
                  Telefon: +49 89 123 456<br />
                  E-Mail: hello@ihre-agentur.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
                <p>
                  Diese Website verwendet Cookies. Beim ersten Besuch werden Sie über ein Cookie-Banner
                  um Ihre Einwilligung gebeten. Sie können zwischen folgenden Kategorien wählen:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li><strong>Notwendige Cookies:</strong> Essenzielle Cookies für die Grundfunktionen der Website.</li>
                  <li><strong>Statistik-Cookies:</strong> Helfen uns zu verstehen, wie Besucher unsere Website nutzen.</li>
                  <li><strong>Marketing-Cookies:</strong> Ermöglichen personalisierte Werbung über Drittanbieter.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Ihre Rechte</h2>
                <p>
                  Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                  der Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
