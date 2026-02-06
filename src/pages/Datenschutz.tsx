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

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-semibold text-foreground mt-4">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Verantwortliche Stelle</h2>
                <p>
                  KerLe Energieberatung<br />
                  Stefan Kerling & Kevin Leuschner GbR<br />
                  Lindenallee 33<br />
                  91161 Hilpoltstein<br /><br />
                  Telefon: 0162 3598287<br />
                  E-Mail: kerle@rothsee-energieberatung.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-semibold text-foreground mt-4">Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                  sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail
                  oder Telefon mitteilen.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                  unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                  Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Ihre Rechte</h2>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
                  die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Kontakt per E-Mail oder Telefon</h2>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                  daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                  Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist.
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