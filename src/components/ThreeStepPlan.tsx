import { Phone, Mail, FileCheck, Calculator, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallDialog from "@/components/CallDialog";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstgespräch",
    subtitle: "Kostenlos & unverbindlich",
    outcomes: [
      "Ihre Situation verstehen wir gemeinsam",
      "Erste Einschätzung zu Fördermöglichkeiten",
      "Klärung Ihrer Ziele und Wünsche"
    ]
  },
  {
    number: "02",
    icon: Calculator,
    title: "Analyse & Planung",
    subtitle: "Bearbeitung innerhalb von 7 Tagen",
    outcomes: [
      "Vor-Ort-Begehung Ihres Gebäudes",
      "Detaillierte Wirtschaftlichkeitsberechnung",
      "Individueller Sanierungsfahrplan (iSFP)"
    ]
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Umsetzung & Förderung",
    subtitle: "Wir begleiten Sie",
    outcomes: [
      "BAFA/BEG Förderanträge vollständig betreut",
      "Koordination mit Handwerkern",
      "Baubegleitung auf Wunsch"
    ]
  }
];

const ThreeStepPlan = () => {
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <section id="ablauf" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            In 3 Schritten zu Ihrer Energieberatung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unkompliziert, transparent und immer mit Blick auf Ihren Vorteil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="step-card group">
              <div className="step-card-inner">
                {/* Step Number */}
                <div className="step-number">{step.number}</div>

                {/* Icon */}
                <div className="step-icon">
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {step.subtitle}
                </p>

                {/* Outcomes */}
                <ul className="space-y-2 mb-6">
                  {step.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FileCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col gap-2 mt-auto">
                  <CallDialog size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Anrufen
                  </CallDialog>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      E-Mail
                    </a>
                  </Button>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepPlan;