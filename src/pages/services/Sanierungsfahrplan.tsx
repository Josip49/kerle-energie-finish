import { ClipboardList } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Sanierungsfahrplan = () => {
  return (
    <ServicePageLayout
      title="Individueller Sanierungsfahrplan (iSFP)"
      subtitle="Ihr persönlicher Fahrplan zur energetischen Sanierung"
      description="Der individuelle Sanierungsfahrplan zeigt Ihnen Schritt für Schritt, wie Sie Ihr Gebäude energetisch optimieren können. Mit einem iSFP erhalten Sie zusätzlich 5% Bonus auf alle Einzelmaßnahmen."
      icon={<ClipboardList className="w-6 h-6" />}
      benefits={[
        "5% zusätzlicher Förderbonus auf alle Maßnahmen (iSFP-Bonus)",
        "Langfristige Planung über mehrere Jahre möglich",
        "Priorisierung der Maßnahmen nach Wirtschaftlichkeit",
        "Visualisierung des Ist- und Zielzustands",
        "Förderfähig mit bis zu 80% Zuschuss durch BAFA",
        "Bearbeitung innerhalb von 7 Tagen nach Begehung"
      ]}
      process={[
        "Kostenlose Erstberatung per Telefon",
        "Vor-Ort-Begehung und detaillierte Datenaufnahme",
        "Energetische Analyse des Ist-Zustands",
        "Entwicklung Ihres individuellen Sanierungsfahrplans",
        "Persönliche Erläuterung der Empfehlungen"
      ]}
    />
  );
};

export default Sanierungsfahrplan;