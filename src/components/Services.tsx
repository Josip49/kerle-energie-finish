import {
  Globe,
  Smartphone,
  Search,
  Palette,
  ShoppingCart,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webdesign & Entwicklung",
    description: "Moderne, responsive Websites die Ihre Marke perfekt repräsentieren.",
  },
  {
    icon: Smartphone,
    title: "Web-Apps & Portale",
    description: "Maßgeschneiderte Web-Applikationen für Ihre Geschäftsprozesse.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Sichtbarkeit bei Google und blitzschnelle Ladezeiten.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Nutzerzentriertes Design, das begeistert und konvertiert.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online-Shops die verkaufen – von der Idee bis zum Launch.",
  },
  {
    icon: BarChart3,
    title: "Digitale Strategie",
    description: "Ganzheitliche Beratung für Ihre digitale Transformation.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-16 md:py-20 lg:py-32 section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der Idee bis zur fertigen Lösung – alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group cursor-pointer">
              <div className="service-icon">
                <service.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
