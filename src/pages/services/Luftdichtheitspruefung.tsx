import { Wind } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Luftdichtheitspruefung = () => {
  return (
    <ServicePageLayout
      title="Luftdichtheitsprüfung"
      subtitle="Blower-Door-Test für Ihre Gebäudehülle"
      description="Mit der Luftdichtheitsprüfung (Blower-Door-Test) ermitteln wir, wie dicht Ihre Gebäudehülle ist. Undichte Stellen bedeuten Energieverlust, Zugluft und im schlimmsten Fall Bauschäden durch Feuchtigkeit."
      icon={<Wind className="w-6 h-6" />}
      benefits={[
        "Nachweis der Luftdichtheit nach DIN EN 13829",
        "Lokalisierung von Leckagen und Undichtigkeiten",
        "Voraussetzung für KfW-Effizienzhausstandard",
        "Vermeidung von Energieverlusten und Bauschäden",
        "Qualitätssicherung bei Neubau und Sanierung",
        "Protokoll für Förderanträge und Nachweise"
      ]}
      process={[
        "Terminvereinbarung und Vorbereitung",
        "Installation des Blower-Door-Messgeräts",
        "Durchführung der Druckdifferenzmessung",
        "Leckagesuche mit Thermografie oder Nebel (optional)",
        "Ausführliches Messprotokoll mit Ergebnissen"
      ]}
    />
  );
};

export default Luftdichtheitspruefung;