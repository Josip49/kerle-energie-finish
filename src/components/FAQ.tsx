import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Was kostet eine Energieberatung?",
    answer: "Die Kosten hängen vom Gebäude (Größe, Zustand, Baujahr) und vom gewünschten Umfang ab (z. B. iSFP, Einzelmaßnahmen, Förderanträge). Nach einem kurzen Erstgespräch nennen wir dir einen transparenten Festpreis – und zeigen dir, welche Teile davon förderfähig sind."
  },
  {
    question: "Welche Förderungen gibt es?",
    answer: "Das hängt vom Vorhaben ab (z. B. Heizungstausch, Dämmung, Fenster, Lüftung, ganzheitliche Sanierung). Wir prüfen, welche Förderprogramme in deinem Fall passen, welche Voraussetzungen gelten und welche Kombination sinnvoll ist."
  },
  {
    question: "Wie läuft die Energieberatung bei Ihnen ab?",
    answer: "Typischer Ablauf: 1) Kostenloses Erstgespräch (Ziele & Rahmen klären), 2) Unterlagen-Check (was vorhanden ist, was wir noch brauchen), 3) Vor-Ort-Termin zur Gebäudeaufnahme, 4) Auswertung & Maßnahmenplan (inkl. Prioritäten), 5) Ergebnisgespräch + nächste Schritte. Auf Wunsch: Förderantragstellung + Begleitung bis zur Umsetzung."
  },
  {
    question: "Wie lange dauert die Bearbeitung?",
    answer: "Das hängt von Umfang und Auslastung ab. In der Regel dauert es von Erstgespräch bis fertigem Ergebnis einige Wochen. Den realistischen Zeitplan bekommst du direkt nach dem Erstgespräch."
  },
  {
    question: "Was ist ein iSFP (individueller Sanierungsfahrplan)?",
    answer: "Der iSFP ist ein strukturierter Sanierungsplan, der dein Gebäude Schritt für Schritt betrachtet: Welche Maßnahmen sind sinnvoll, in welcher Reihenfolge und mit welchen Effekten. Er hilft dir, Entscheidungen sauber zu treffen – und kann je nach Programm zusätzliche Fördervorteile bringen."
  },
  {
    question: "Bieten Sie iSFP an?",
    answer: "Ja. Wir erstellen den iSFP inklusive Vor-Ort-Aufnahme, Auswertung und verständlicher Ergebnisbesprechung."
  },
  {
    question: "Was bedeutet EEE/BAFA-zertifiziert?",
    answer: 'EEE steht für „Energieeffizienz-Experte" (gelistet in der offiziellen Expertenliste). BAFA-zertifiziert bedeutet, dass wir für bestimmte Förderprogramme zugelassen sind und die notwendigen Nachweise fachlich korrekt erstellen dürfen.'
  },
  {
    question: "Übernehmen Sie die Förderanträge?",
    answer: "Ja. Wir begleiten die Förderthemen aktiv – von der Auswahl des passenden Programms über die Antragstellung bis zu den erforderlichen Nachweisen im Verlauf. Wichtig: Viele Förderungen müssen vor Auftragserteilung bzw. Maßnahmenbeginn beantragt werden – deshalb ist das Timing entscheidend."
  },
  {
    question: "Muss ich mich direkt für eine Maßnahme entscheiden?",
    answer: "Nein. Du bekommst zuerst Klarheit und eine sinnvolle Priorisierung. Du entscheidest danach in Ruhe, ob du Schritt für Schritt umsetzt oder ein größeres Paket planst."
  },
  {
    question: "Vor Ort oder geht das auch online?",
    answer: "Eine seriöse Energieberatung basiert in den meisten Fällen auf einer Vor-Ort-Aufnahme. Bestimmte Vorabklärungen können digital erfolgen – die finale Bewertung machen wir aber sauber am Objekt."
  },
  {
    question: "Welche Unterlagen brauche ich?",
    answer: "Wenn vorhanden: Grundrisse, Baujahr, Angaben zur Heizung, Energie-/Heizkostenabrechnungen, ggf. Fotos und Rechnungen früherer Sanierungen. Wenn du nichts davon hast: kein Problem – wir sagen dir genau, was wirklich nötig ist und wie du es bekommst."
  },
  {
    question: "Was bekomme ich am Ende konkret?",
    answer: "Du erhältst eine klare Auswertung mit: konkreten Empfehlungen, sinnvoller Reihenfolge der Maßnahmen, grober Kosten-/Nutzen-Einschätzung, Förder-Hinweisen und nächsten Schritten. Je nach Auftrag zusätzlich den iSFP und/oder Unterlagen für die Förderung."
  },
  {
    question: "Was ist der Unterschied zwischen Energieberatung und Energieausweis?",
    answer: "Ein Energieausweis ist eine standardisierte Einstufung (z. B. für Verkauf/Vermietung). Eine Energieberatung ist individuell und zeigt dir konkret, wie du Energie sparst, Komfort steigerst und Fördermittel sinnvoll nutzt."
  },
  {
    question: "Beraten Sie auch zu Wärmepumpe, PV und Dämmung?",
    answer: "Ja. Wir prüfen, was bei deinem Gebäude technisch und wirtschaftlich Sinn ergibt – und welche Reihenfolge (z. B. erst Gebäudehülle, dann Heizung) am besten passt."
  },
  {
    question: "Arbeiten Sie mit Handwerkern zusammen?",
    answer: "Ja. Auf Wunsch koordinieren wir die Abstimmung mit Handwerksbetrieben oder arbeiten mit deinem bestehenden Team zusammen. Wir bleiben dabei unabhängig und beraten in deinem Interesse."
  },
  {
    question: "Was ist, wenn sich währenddessen etwas ändert?",
    answer: "Kein Problem – wir passen den Plan an. Wichtig ist, dass die Maßnahmen weiterhin technisch sinnvoll bleiben und die Förderlogik eingehalten wird."
  },
  {
    question: "Kann ich den Termin verschieben oder stornieren?",
    answer: "Ja. Die Details (Fristen/Regelung) bekommst du transparent bei der Terminvereinbarung."
  }
];

const INITIAL_COUNT = 3;

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-32 section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die wichtigsten Antworten auf einen Blick.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-content">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showAll && faqs.length > INITIAL_COUNT && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="default"
                onClick={() => setShowAll(true)}
                className="gap-2"
              >
                <ChevronDown className="w-4 h-4" />
                Alle {faqs.length} Fragen anzeigen
              </Button>
            </div>
          )}

          {showAll && (
            <div className="text-center mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAll(false)}
                className="text-muted-foreground"
              >
                Weniger anzeigen
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
