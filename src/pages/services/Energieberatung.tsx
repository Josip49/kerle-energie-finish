import { FileText } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import FoerderInfoBox from "@/components/FoerderInfoBox";

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
      <FoerderInfoBox
        bafa={{
          label: "BAFA (EBW Energieberatung für Wohngebäude)",
          details: [
            { label: "Zuschuss", value: "50%", highlight: true },
            { label: "Max. Zuschuss", value: "", sub: [
              "650 € (EFH/ZFH)",
              "850 € (MFH)"
            ]},
          ]
        }}
        kfw={null}
      />
    </ServicePageLayout>
  );
};

export default Energieberatung;
