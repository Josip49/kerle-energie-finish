import { FileCheck } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Energieausweis = () => {
  return (
    <ServicePageLayout
      title="Energieausweis"
      subtitle="Pflichtdokument für Verkauf und Vermietung"
      description="Der Energieausweis ist bei Verkauf, Vermietung und Verpachtung von Gebäuden gesetzlich vorgeschrieben. Wir erstellen sowohl Bedarfs- als auch Verbrauchsausweise – schnell, rechtssicher und preiswert."
      icon={<FileCheck className="w-6 h-6" />}
      benefits={[
        "Rechtssichere Ausstellung nach GEG",
        "Bedarfsausweis und Verbrauchsausweis verfügbar",
        "Schnelle Bearbeitung innerhalb weniger Tage",
        "Registrierung beim DIBt inklusive",
        "Erfüllung der gesetzlichen Anforderungen",
        "Transparente Darstellung der Energieeffizienz"
      ]}
      process={[
        "Auswahl der passenden Ausweisart",
        "Erfassung der notwendigen Gebäudedaten",
        "Berechnung und Erstellung des Ausweises",
        "Registrierung beim Deutschen Institut für Bautechnik",
        "Übergabe des fertigen Energieausweises"
      ]}
    >
      <div className="mt-12 p-6 bg-muted rounded-xl">
        <h3 className="font-semibold text-foreground mb-4">Bedarfsausweis vs. Verbrauchsausweis</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-2">Bedarfsausweis</p>
            <p>Basiert auf den baulichen Eigenschaften des Gebäudes. Unabhängig vom Nutzerverhalten. Pflicht bei Gebäuden mit weniger als 5 Wohneinheiten (Baujahr vor 1977).</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Verbrauchsausweis</p>
            <p>Basiert auf dem tatsächlichen Energieverbrauch der letzten 3 Jahre. Günstiger, aber abhängig vom Nutzerverhalten.</p>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default Energieausweis;