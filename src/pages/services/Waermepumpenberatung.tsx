import { Flame, ExternalLink } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import FoerderInfoBox from "@/components/FoerderInfoBox";

const Waermepumpenberatung = () => {
  return (
    <ServicePageLayout
      title="Wärmepumpenberatung"
      subtitle="Die richtige Wärmepumpe für Ihr Gebäude | Bis zu 70% Förderung"
      description="Wärmepumpen sind die Zukunft des Heizens – aber nicht jede Wärmepumpe passt zu jedem Gebäude. Wir beraten Sie unabhängig und finden die optimale Lösung für Ihre Situation."
      icon={<Flame className="w-6 h-6" />}
      benefits={[
        "Unabhängige Beratung ohne Herstellerbindung",
        "Prüfung der Eignung Ihres Gebäudes",
        "Vergleich verschiedener Wärmepumpentypen",
        "Wirtschaftlichkeitsberechnung mit Amortisation",
        "Beratung zu Fördermöglichkeiten (bis zu 70% Zuschuss)",
        "Unterstützung bei der Heizungsmodernisierung"
      ]}
      process={[
        "Kostenlose Erstberatung zu Ihren Möglichkeiten",
        "Vor-Ort-Begehung und Gebäudeanalyse",
        "Heizlastberechnung für optimale Dimensionierung",
        "Empfehlung des passenden Wärmepumpentyps",
        "Förderberatung und Unterstützung beim Antrag"
      ]}
    >
      <FoerderInfoBox
        bafa={null}
        kfw={{
          label: "KfW (BEG EM 458 Einzelmaßnahme)",
          details: [
            { label: "Basisförderung", value: "30% Zuschuss", highlight: true },
            { label: "Geschwindigkeitsbonus", value: "+20%" },
            { label: "Einkommensbonus", value: "+30%" },
            { label: "Effizienzbonus (nur Wärmepumpe)", value: "+5%" },
            { label: "Max. Investitionskosten", value: "", sub: [
              "30.000 € (1 WE)",
              "15.000 € je WE ab der 2. WE",
              "8.000 € je WE ab der 7. WE"
            ]},
            { label: "Max. Zuschuss gesamt", value: "bis 70%", highlight: true },
            { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
          ]
        }}
      />

      {/* Online Wärmepumpen Check CTA */}
      <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-foreground mb-1">Ist Ihr Gebäude geeignet?</h3>
          <p className="text-sm text-muted-foreground">Machen Sie den kostenlosen Online Wärmepumpen Check und finden Sie es heraus.</p>
        </div>
        <a
          href="https://check.autarc.energy/kerle_energieberatung_gbr/wrmepumpencheck/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all whitespace-nowrap"
        >
          <ExternalLink className="w-4 h-4" />
          Online Wärmepumpen Check
        </a>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-xl">
        <h3 className="font-semibold text-foreground mb-4">Wärmepumpen-Typen im Überblick</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-2">Luft-Wasser-Wärmepumpe</p>
            <p>Nutzt die Außenluft als Wärmequelle. Einfache Installation, geringere Investitionskosten.</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Sole-Wasser-Wärmepumpe</p>
            <p>Nutzt Erdwärme über Sonden oder Kollektoren. Höhere Effizienz, aber aufwendigere Installation.</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Wasser-Wasser-Wärmepumpe</p>
            <p>Nutzt Grundwasser als Wärmequelle. Höchste Effizienz, aber Genehmigung erforderlich.</p>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default Waermepumpenberatung;
