import { Flame } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Waermepumpenberatung = () => {
  return (
    <ServicePageLayout
      title="Wärmepumpenberatung"
      subtitle="Die richtige Wärmepumpe für Ihr Gebäude"
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