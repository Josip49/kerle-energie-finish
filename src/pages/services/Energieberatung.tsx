import { FileText, Sun, Flame, ThermometerSun, Home, LayoutGrid, Layers, ArrowDownToLine, Blinds } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const foerderungen = [
  { icon: Sun, name: "Solarthermie", percentage: 35 },
  { icon: Flame, name: "Biomasseheizung", percentage: 20 },
  { icon: ThermometerSun, name: "Wärmepumpe", percentage: 40 },
  { icon: Home, name: "Fassadendämmung", percentage: 20 },
  { icon: LayoutGrid, name: "Fenstertausch", percentage: 20 },
  { icon: Layers, name: "Dachdämmung", percentage: 20 },
  { icon: ArrowDownToLine, name: "Dämmung der Kellerdecke", percentage: 20 },
  { icon: Layers, name: "Dämmung der Geschossdecke", percentage: 20 },
  { icon: Blinds, name: "Sonnenschutz Fenster", percentage: 20 },
];

const FoerdermittelTabelle = () => {
  return (
    <div className="mt-12 md:mt-16">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Aktuelle Fördersätze im Überblick
      </h2>
      <p className="text-muted-foreground mb-8">
        Mit einem individuellen Sanierungsfahrplan (iSFP) erhalten Sie zusätzlich 5% Bonus auf alle Maßnahmen.
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foerderungen.map((item, index) => (
          <div 
            key={index} 
            className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    {item.percentage}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Förderung
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground mt-6 p-4 bg-accent/50 rounded-lg border border-border/50">
        <strong className="text-foreground">Hinweis:</strong> Die Fördersätze können sich ändern. Wir beraten Sie gerne zu den aktuellen Programmen und helfen Ihnen, die maximale Förderung zu erhalten.
      </p>
    </div>
  );
};

const Energieberatung = () => {
  return (
    <ServicePageLayout
      title="Energie- & Fördermittelberatung"
      subtitle="BAFA-Energie-Effizienz-Experten (EEE) | Bearbeitung innerhalb von 7 Tagen"
      description="Wir analysieren Ihr Gebäude ganzheitlich und zeigen Ihnen, welche Maßnahmen sich wirklich lohnen. Dabei behalten wir immer die verfügbaren Fördermittel im Blick – für maximale Wirtschaftlichkeit."
      icon={<FileText className="w-6 h-6" />}
      benefits={[
        "Umfassende Analyse Ihres Gebäudes durch zertifizierte Experten",
        "Übersicht aller verfügbaren Förderprogramme (BAFA, BEG, KfW)",
        "Konkrete Handlungsempfehlungen mit Wirtschaftlichkeitsberechnung",
        "Ehrliche Beratung – auch wenn sich eine Maßnahme nicht rechnet",
        "Unterstützung bei der Antragstellung für Fördermittel",
        "100% kostenlose telefonische Erstberatung"
      ]}
      process={[
        "Kostenlose telefonische Erstberatung",
        "Vor-Ort-Begehung und Datenaufnahme",
        "Analyse und Erstellung der Empfehlungen",
        "Besprechung der Ergebnisse und nächste Schritte",
        "Optional: Begleitung bei der Umsetzung"
      ]}
    >
      <FoerdermittelTabelle />
    </ServicePageLayout>
  );
};

export default Energieberatung;