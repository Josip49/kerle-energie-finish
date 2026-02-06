import { MapPin, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    name: "Landkreis Roth",
    description: "Hilpoltstein, Roth, Schwanstetten, Georgensgmünd und Umgebung"
  },
  {
    name: "Nürnberger Land",
    description: "Lauf, Hersbruck, Altdorf, Röthenbach und Umgebung"
  },
  {
    name: "Landkreis Neumarkt i. d. OPf.",
    description: "Neumarkt, Freystadt, Berching, Parsberg und Umgebung"
  },
  {
    name: "Landkreis Weißenburg-Gunzenhausen",
    description: "Weißenburg, Gunzenhausen, Treuchtlingen, Ellingen und Umgebung"
  }
];

const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Energieberatung in Ihrer Nähe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir sind für Sie in der gesamten Region aktiv – persönlich vor Ort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="service-area-card group"
            >
              <div className="service-area-icon">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Auch außerhalb dieser Gebiete? Sprechen Sie uns gerne an!
        </p>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button size="lg" className="hero-cta-primary" asChild>
            <a 
              href="https://check.autarc.energy/kerle_energieberatung_gbr/wrmepumpencheck/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ThermometerSun className="w-5 h-5 mr-2" />
              Online Wärmepumpen Check
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
