import { CheckCircle } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const BzABestaetigung = () => {
  return (
    <ServicePageLayout
      title="BzA – Bestätigung zum Antrag"
      subtitle="Ihr offizielles Dokument für die BAFA-Förderung"
      description="Die Bestätigung zum Antrag (BzA) ist ein Pflichtdokument für Ihren BAFA-Förderantrag. Wir erstellen die BzA schnell und zuverlässig, damit Ihr Förderantrag vollständig ist."
      icon={<CheckCircle className="w-6 h-6" />}
      benefits={[
        "Pflichtdokument für BAFA-Förderanträge",
        "Schnelle Bearbeitung für Ihre Fristen",
        "Rechtssichere Bestätigung durch EEE-Experten",
        "Alle technischen Angaben korrekt dokumentiert",
        "Voraussetzung für die Auszahlung der Fördermittel",
        "Kombinierbar mit unserer Beratung und Baubegleitung"
      ]}
      process={[
        "Abstimmung der geplanten Maßnahmen",
        "Prüfung der Förderfähigkeit",
        "Erstellung der Bestätigung zum Antrag",
        "Übermittlung der BzA an Sie",
        "Unterstützung bei Rückfragen der BAFA"
      ]}
    >
      <div className="mt-12 p-6 bg-muted rounded-xl">
        <h3 className="font-semibold text-foreground mb-4">Was ist die BzA?</h3>
        <p className="text-sm text-muted-foreground">
          Die Bestätigung zum Antrag (BzA) ist ein Dokument, das ein Energie-Effizienz-Experte
          ausstellt. Es bestätigt, dass die geplante Maßnahme die technischen Mindestanforderungen
          für die Förderung erfüllt. Ohne BzA kann kein BAFA-Förderantrag gestellt werden.
          Nach Abschluss der Maßnahme erstellen wir außerdem die Bestätigung nach Durchführung (BnD).
        </p>
      </div>
    </ServicePageLayout>
  );
};

export default BzABestaetigung;