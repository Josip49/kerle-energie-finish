import { MapPin, FileText } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

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

        <div className="flex justify-center mt-8">
          <ContactFormDialog
            trigger={
              <button className="hero-cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                <FileText className="w-5 h-5" />
                Angebot sichern
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
