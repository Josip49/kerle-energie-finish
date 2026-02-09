import { Fan } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import FoerderInfoBox from "@/components/FoerderInfoBox";

const Lueftungskonzept = () => {
  return (
    <ServicePageLayout
      title="Lüftungskonzept"
      subtitle="Gesundes Raumklima und Schimmelprävention"
      description="Nach einer energetischen Sanierung wird die Gebäudehülle dichter – gut für die Energiebilanz, aber eine Herausforderung für den Luftaustausch. Wir erstellen ein Lüftungskonzept nach DIN 1946-6, das beides vereint."
      icon={<Fan className="w-6 h-6" />}
      benefits={[
        "Normgerechtes Konzept nach DIN 1946-6",
        "Vermeidung von Schimmelbildung durch kontrollierte Lüftung",
        "Gesundes Raumklima für Ihre Familie",
        "Voraussetzung für viele Förderprogramme",
        "Berücksichtigung Ihrer Nutzungsgewohnheiten",
        "Empfehlungen für passende Lüftungssysteme"
      ]}
      process={[
        "Analyse der Gebäudesituation und geplanten Maßnahmen",
        "Berechnung des notwendigen Luftwechsels",
        "Entwicklung eines passenden Lüftungskonzepts",
        "Empfehlung geeigneter Lüftungssysteme",
        "Dokumentation für Förderanträge"
      ]}
    >
      <FoerderInfoBox
        bafa={{
          label: "BAFA (BEG EM Einzelmaßnahme – Anlagentechnik)",
          details: [
            { label: "Zuschuss", value: "15%", highlight: true },
            { label: "Max. Invest", value: "30.000 € pro WE und Jahr" },
            { label: "Mit iSFP-Bonus", value: "+5% → dann max. 60.000 € pro WE und Jahr" },
          ]
        }}
        kfw={{
          label: "KfW (BEG EM 358/359 Einzelmaßnahme)",
          details: [
            { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
          ]
        }}
      />
    </ServicePageLayout>
  );
};

export default Lueftungskonzept;
