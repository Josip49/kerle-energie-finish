import { Link } from "react-router-dom";
import {
  Sun, Flame, ThermometerSun, Home, LayoutGrid, Layers,
  ArrowDownToLine, Blinds, ArrowLeft, ExternalLink
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButtons from "@/components/WhatsAppButtons";

const foerderungen = [
  {
    category: "Heizungstausch",
    items: [
      { icon: ThermometerSun, name: "Wärmepumpe", percentage: 40, description: "Luft-, Sole- oder Wasser-Wärmepumpe als neue Heizung", link: "/leistungen/waermepumpenberatung" },
      { icon: Sun, name: "Solarthermie", percentage: 35, description: "Solaranlage zur Warmwasserbereitung und Heizungsunterstützung" },
      { icon: Flame, name: "Biomasseheizung", percentage: 20, description: "Pellet-, Hackschnitzel- oder Scheitholzheizung" },
    ]
  },
  {
    category: "Gebäudehülle",
    items: [
      { icon: Home, name: "Fassadendämmung", percentage: 20, description: "Wärmedämmung der Außenwände (WDVS, Kerndämmung etc.)" },
      { icon: LayoutGrid, name: "Fenstertausch", percentage: 20, description: "Austausch gegen energieeffiziente Fenster mit modernem Glas" },
      { icon: Layers, name: "Dachdämmung", percentage: 20, description: "Dämmung des Daches oder der obersten Geschossdecke" },
      { icon: ArrowDownToLine, name: "Dämmung der Kellerdecke", percentage: 20, description: "Dämmung von unten gegen kalten Keller" },
      { icon: Layers, name: "Dämmung der Geschossdecke", percentage: 20, description: "Oberste Geschossdecke dämmen – oft die günstigste Maßnahme" },
      { icon: Blinds, name: "Sonnenschutz Fenster", percentage: 20, description: "Außenliegender Sonnenschutz zur Reduzierung der Überhitzung" },
    ]
  }
];

const bonusInfo = [
  { label: "iSFP-Bonus", value: "+5%", description: "Zusätzlich bei Umsetzung mit individuellem Sanierungsfahrplan" },
  { label: "Klimageschwindigkeits-Bonus", value: "+20%", description: "Beim Austausch einer funktionstüchtigen Öl-, Kohle- oder Nachtspeicherheizung" },
  { label: "Einkommensbonus", value: "+30%", description: "Für Haushalte mit einem zu versteuernden Einkommen unter 40.000 €" },
];

const Foerderungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link
              to="/#leistungen"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Übersicht
            </Link>

            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Förderungen & Zuschüsse
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                Alle aktuellen Fördersätze auf einen Blick
              </p>
              <p className="text-lg text-muted-foreground">
                Der Staat fördert energetische Sanierungen großzügig. Wir helfen Ihnen, die maximale Förderung für Ihr Vorhaben zu erhalten – von der Beratung bis zur Antragstellung.
              </p>
            </div>
          </div>
        </section>

        {/* Förderungen Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {foerderungen.map((group) => (
              <div key={group.category} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-6">{group.category}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                      style={{ boxShadow: 'var(--shadow-card)' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl font-bold text-primary">
                              {item.percentage}%
                            </span>
                            <span className="text-xs text-muted-foreground">Förderung</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                          {item.link && (
                            <Link to={item.link} className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-2 hover:underline">
                              Mehr erfahren <ExternalLink className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bonus-Informationen */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Zusätzliche Boni</h2>
              <p className="text-muted-foreground mb-8">
                Neben der Grundförderung können Sie unter bestimmten Voraussetzungen zusätzliche Boni erhalten:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {bonusInfo.map((bonus, index) => (
                  <div key={index} className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                    <span className="text-3xl font-bold text-primary">{bonus.value}</span>
                    <h3 className="font-semibold text-foreground mt-2 mb-1">{bonus.label}</h3>
                    <p className="text-sm text-muted-foreground">{bonus.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hinweis */}
            <div className="mt-8 p-4 bg-accent/50 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Hinweis:</strong> Die Fördersätze können sich ändern. Wir beraten Sie gerne zu den aktuellen Programmen und helfen Ihnen, die maximale Förderung zu erhalten. Die Boni sind teilweise kumulierbar – sprechen Sie uns an!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButtons />
    </div>
  );
};

export default Foerderungen;
