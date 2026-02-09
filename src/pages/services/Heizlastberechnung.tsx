import { Thermometer } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import FoerderInfoBox from "@/components/FoerderInfoBox";

const Heizlastberechnung = () => {
  return (
    <ServicePageLayout
      title="Heizlastberechnung"
      subtitle="Präzise Grundlage für Ihre neue Heizung"
      description="Eine korrekte Heizlastberechnung nach DIN EN 12831 ist die Basis für jede Heizungsmodernisierung. Wir berechnen exakt, wie viel Wärme Ihr Gebäude benötigt – für eine optimal dimensionierte Heizung."
      icon={<Thermometer className="w-6 h-6" />}
      benefits={[
        "Normgerechte Berechnung nach DIN EN 12831",
        "Raumweise Ermittlung des Wärmebedarfs",
        "Optimale Grundlage für die Heizungsauslegung",
        "Vermeidung von Über- oder Unterdimensionierung",
        "Voraussetzung für viele Förderprogramme",
        "Schnelle Bearbeitung innerhalb von 7 Tagen"
      ]}
      process={[
        "Erfassung der Gebäudedaten und Bausubstanz",
        "Aufnahme aller relevanten Räume",
        "Berechnung nach aktueller Norm",
        "Dokumentation mit raumweiser Aufschlüsselung",
        "Übergabe der Unterlagen an Ihren Heizungsbauer"
      ]}
    >
      <FoerderInfoBox
        bafa={{
          label: "BAFA (BEG EM Einzelmaßnahme – Fachplanung & Baubegleitung)",
          details: [
            { label: "Zuschuss", value: "50%", highlight: true },
            { label: "Max. Invest", value: "", sub: [
              "5.000 € (Ein-/Zweifamilienhaus)",
              "20.000 € (Mehrfamilienhaus) = 2.000 € pro Wohneinheit"
            ]},
          ]
        }}
        kfw={{
          label: "KfW (BEG WG 261 Wohngebäude)",
          details: [
            { label: "Tilgungszuschuss", value: "50%", highlight: true },
            { label: "Max. Invest", value: "", sub: [
              "10.000 € (Ein-/Zweifamilienhaus)",
              "40.000 € (Mehrfamilienhaus) = 4.000 € pro Wohneinheit"
            ]},
          ]
        }}
      />
    </ServicePageLayout>
  );
};

export default Heizlastberechnung;
