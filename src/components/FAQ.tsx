import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was kostet eine Energieberatung?",
    answer: "Die Kosten hängen vom Umfang ab. Wichtig: Die telefonische Erstberatung ist 100% kostenlos. Für geförderte Beratungen (iSFP, Baubegleitung) übernimmt die BAFA bis zu 80% der Kosten. Genaue Preise nennen wir Ihnen gerne im persönlichen Gespräch."
  },
  {
    question: "Wie lange dauert die Bearbeitung?",
    answer: "Bei KerLe erhalten Sie Ihren Sanierungsfahrplan oder Ihr Gutachten innerhalb von 7 Tagen nach der Vor-Ort-Begehung. So können Sie schnell mit der Planung starten."
  },
  {
    question: "Was bedeutet EEE/BAFA-zertifiziert?",
    answer: "Als Energie-Effizienz-Experten (EEE) sind wir offiziell bei der Deutschen Energie-Agentur (dena) gelistet. Nur mit einem zertifizierten Experten erhalten Sie BAFA- und BEG-Fördermittel."
  },
  {
    question: "Welche Förderungen gibt es?",
    answer: "Die wichtigsten Programme sind BAFA (Bundesförderung für effiziente Gebäude – Einzelmaßnahmen) und KfW (Kredite und Zuschüsse). Mit einem iSFP erhalten Sie zusätzlich 5% Bonus auf alle Maßnahmen. Wir beraten Sie, welches Programm für Sie optimal ist."
  },
  {
    question: "Muss ich mich für eine Maßnahme entscheiden?",
    answer: "Nein. Wir beraten ergebnisoffen und sagen ehrlich, wenn eine Maßnahme sich wirtschaftlich nicht rechnet. Klarheit statt Bauchgefühl – das ist unser Anspruch."
  },
  {
    question: "Arbeiten Sie auch mit Handwerkern zusammen?",
    answer: "Ja, auf Wunsch koordinieren wir die Umsetzung und begleiten den Bau. So stellen wir sicher, dass die Maßnahmen förderfähig bleiben und fachgerecht ausgeführt werden."
  }
];

const FAQ = () => {
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
            {faqs.map((faq, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;