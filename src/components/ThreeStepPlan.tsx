import { Phone, Lightbulb, Rocket, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstgespräch",
    subtitle: "Kostenlos & unverbindlich",
    outcomes: [
      "Ihre Wünsche und Ziele verstehen",
      "Erste Einschätzung zu Möglichkeiten",
      "Klärung von Zeitrahmen & Budget",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Konzept & Design",
    subtitle: "Individuell auf Sie zugeschnitten",
    outcomes: [
      "Wireframes und Designentwürfe",
      "Technische Planung & Architektur",
      "Feedbackrunden bis zur Freigabe",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Umsetzung & Launch",
    subtitle: "Wir liefern Ergebnisse",
    outcomes: [
      "Entwicklung mit modernsten Technologien",
      "Qualitätssicherung und Testing",
      "Go-Live und fortlaufender Support",
    ],
  },
];

const ThreeStepPlan = () => {
  return (
    <section id="ablauf" className="py-16 md:py-20 lg:py-32 section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            In 3 Schritten zu Ihrem Projekt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unkompliziert, transparent und immer mit Blick auf Ihr Ergebnis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="step-card group">
              <div className="step-card-inner">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{step.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {step.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FileCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block step-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepPlan;
