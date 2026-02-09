import { Sun } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import FoerderInfoBox from "@/components/FoerderInfoBox";

const PhotovoltaikBeratung = () => {
  return (
    <ServicePageLayout
      title="Photovoltaik-Beratung"
      subtitle="Solarstrom vom eigenen Dach"
      description="Mit einer Photovoltaikanlage produzieren Sie Ihren eigenen Strom und machen sich unabhängiger von steigenden Strompreisen. Wir beraten Sie zur optimalen Anlagengröße, Wirtschaftlichkeit und Fördermöglichkeiten."
      icon={<Sun className="w-6 h-6" />}
      benefits={[
        "Unabhängige Beratung ohne Verkaufsinteresse",
        "Analyse der Dacheignung und Ausrichtung",
        "Wirtschaftlichkeitsberechnung mit realistischen Erträgen",
        "Beratung zu Speicherlösungen und Eigenverbrauch",
        "Kombination mit Wärmepumpe für maximale Effizienz",
        "Übersicht aktueller Förderprogramme"
      ]}
      process={[
        "Erstberatung zu Ihren Möglichkeiten",
        "Prüfung der Dachfläche und Verschattung",
        "Berechnung der optimalen Anlagengröße",
        "Wirtschaftlichkeitsanalyse mit Amortisation",
        "Empfehlung zum weiteren Vorgehen"
      ]}
    >
      <FoerderInfoBox
        bafa={null}
        kfw={{
          label: "KfW (Erneuerbare Energien – Standard 270)",
          details: [
            { label: "Förderung", value: "Zinsgünstiger Kredit", highlight: true },
          ]
        }}
      />

      <div className="mt-12 p-6 bg-muted rounded-xl">
        <h3 className="font-semibold text-foreground mb-4">Warum Photovoltaik?</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-2">Unabhängigkeit</p>
            <p>Je mehr Strom Sie selbst verbrauchen, desto unabhängiger werden Sie von steigenden Strompreisen. Mit Speicher erreichen Sie bis zu 80% Autarkie.</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Wertsteigerung</p>
            <p>Eine PV-Anlage steigert den Wert Ihrer Immobilie und ist ein wichtiger Baustein für die Klimaneutralität.</p>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default PhotovoltaikBeratung;
