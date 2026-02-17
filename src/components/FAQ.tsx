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
    question: "Was kostet eine Website?",
    answer: "Die Kosten richten sich nach Umfang und Funktionalität. Nach einem Erstgespräch erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert ein Projekt?",
    answer: "Eine einfache Website ist in 2–4 Wochen fertig, komplexere Projekte wie Web-Apps oder Shops dauern 6–12 Wochen. Den genauen Zeitplan besprechen wir gemeinsam.",
  },
  {
    question: "Welche Technologien nutzen Sie?",
    answer: "Wir setzen auf moderne Frameworks wie React, TypeScript und Tailwind CSS. Für Backends nutzen wir Supabase, Node.js oder andere bewährte Technologien.",
  },
  {
    question: "Bieten Sie auch laufenden Support an?",
    answer: "Ja, wir bieten verschiedene Wartungspakete an – von einfachen Updates bis hin zur kompletten Betreuung Ihrer digitalen Infrastruktur.",
  },
  {
    question: "Kann ich meine bestehende Website redesignen lassen?",
    answer: "Absolut. Wir analysieren Ihre aktuelle Seite und erarbeiten ein modernes Redesign, das Ihre Zielgruppe besser anspricht und besser performt.",
  },
  {
    question: "Kümmern Sie sich auch um Hosting und Domain?",
    answer: "Ja. Wir beraten Sie bei der Wahl des richtigen Hostings und können Ihre Domain sowie SSL-Zertifikate für Sie einrichten und verwalten.",
  },
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
                <AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger>
                <AccordionContent className="faq-content">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showAll && faqs.length > INITIAL_COUNT && (
            <div className="text-center mt-8">
              <Button variant="outline" size="default" onClick={() => setShowAll(true)} className="gap-2">
                <ChevronDown className="w-4 h-4" />
                Alle {faqs.length} Fragen anzeigen
              </Button>
            </div>
          )}

          {showAll && (
            <div className="text-center mt-8">
              <Button variant="ghost" size="sm" onClick={() => setShowAll(false)} className="text-muted-foreground">
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
