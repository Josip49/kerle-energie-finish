import { Shield, Clock, Euro, Award, HeartHandshake, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Höchste Qualität",
    description: "Wir liefern Ergebnisse, die höchsten Ansprüchen genügen – pixel-perfekt und performant.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description: "Von der Idee zum fertigen Produkt in Rekordzeit – ohne Kompromisse bei der Qualität.",
  },
  {
    icon: Euro,
    title: "Transparente Preise",
    description: "Faire Festpreise ohne versteckte Kosten. Sie wissen von Anfang an, was es kostet.",
  },
  {
    icon: HeartHandshake,
    title: "Ehrliche Beratung",
    description: "Wir empfehlen nur, was wirklich Sinn macht – auch wenn es weniger Aufwand für uns bedeutet.",
  },
  {
    icon: Shield,
    title: "Zukunftssicher",
    description: "Moderne Technologien und sauberer Code, der langfristig wartbar und erweiterbar ist.",
  },
  {
    icon: Leaf,
    title: "Nachhaltig gedacht",
    description: "Performante Lösungen mit minimalem Ressourcenverbrauch – gut für Ihre Nutzer und die Umwelt.",
  },
];

const Benefits = () => {
  return (
    <section id="vorteile" className="py-16 md:py-20 lg:py-32 section-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum mit uns arbeiten?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualität, Transparenz und Verlässlichkeit – darauf können Sie bauen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
