import { Shield, Clock, Euro, Award, HeartHandshake, Leaf } from "lucide-react";
import { KerLeBrand } from "@/components/StyledName";
const benefits = [
  {
    icon: Award,
    title: "BAFA-zertifiziert",
    description: "Offiziell gelistete Energie-Effizienz-Experten (EEE) für maximale Förderfähigkeit."
  },
  {
    icon: Clock,
    title: "Schnelle Bearbeitung",
    description: "Ihr Sanierungsfahrplan oder Gutachten innerhalb von 7 Tagen."
  },
  {
    icon: Euro,
    title: "Kostenlose Erstberatung",
    description: "Telefonische Erstberatung ohne Kosten und ohne Verpflichtung."
  },
  {
    icon: HeartHandshake,
    title: "Ehrliche Beratung",
    description: "Wir sagen auch, wenn sich eine Maßnahme nicht rechnet."
  },
  {
    icon: Shield,
    title: "Fördermittel-Garantie",
    description: "Wir kennen alle BAFA/BEG Programme und holen das Maximum raus."
  },
  {
    icon: Leaf,
    title: "Nachhaltig gedacht",
    description: "Lösungen, die langfristig Energie und Kosten sparen."
  }
];

const Benefits = () => {
  return (
    <section id="vorteile" className="py-16 md:py-20 lg:py-32 section-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum <KerLeBrand />?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klarheit statt Bauchgefühl – das ist unser Versprechen an Sie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;