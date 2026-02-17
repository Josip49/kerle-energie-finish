import { Globe, Building2, Users, TrendingUp } from "lucide-react";

const areas = [
  {
    icon: Globe,
    name: "Startups",
    description: "MVP, Prototypen und schnelle Marktvalidierung für junge Unternehmen.",
  },
  {
    icon: Building2,
    name: "Mittelstand",
    description: "Digitale Lösungen für etablierte Unternehmen mit Wachstumsambitionen.",
  },
  {
    icon: Users,
    name: "Agenturen",
    description: "White-Label-Entwicklung und technische Umsetzung für Partneragenturen.",
  },
  {
    icon: TrendingUp,
    name: "Enterprise",
    description: "Skalierbare Plattformen und komplexe Web-Applikationen für Konzerne.",
  },
];

const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Für wen wir arbeiten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Egal ob Startup oder Konzern – wir finden die richtige Lösung.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="service-area-card group">
              <div className="service-area-icon">
                <area.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
