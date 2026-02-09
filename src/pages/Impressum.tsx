import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-3xl font-bold text-foreground mb-8">Impressum</h1>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
                <p>
                  KerLe Energieberatung GbR<br />
                  Stefan Kerling & Kevin Leuschner GbR<br />
                  Lindenallee 33<br />
                  91161 Hilpoltstein
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Vertreten durch</h2>
                <p>
                  Stefan Kerling<br />
                  Kevin Leuschner
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
                <p>
                  Telefon: 0162 3598287<br />
                  E-Mail: kerle@rothsee-energieberatung.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>
                  Berufsbezeichnung: Energieberater<br />
                  Eingetragen in der Energieeffizienz-Expertenliste für Förderprogramme des Bundes
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">Verbraucherstreitbeilegung</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
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

export default Impressum;