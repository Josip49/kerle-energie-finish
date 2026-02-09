import { Link } from "react-router-dom";
import {
  FileText,
  Thermometer,
  ClipboardList,
  Wind,
  Fan,
  FileCheck,
  Flame,
  Sun,
  CheckCircle,
  ArrowRight
} from "lucide-react";

// Service background images
import imgEnergieberatung from "@/assets/service-energieberatung.jpg";
import imgHeizlast from "@/assets/service-heizlast.jpg";
import imgSanierung from "@/assets/service-sanierung.jpg";
import imgLuftdichtheit from "@/assets/service-luftdichtheit.jpg";
import imgLueftung from "@/assets/service-lueftung.jpg";
import imgEnergieausweis from "@/assets/service-energieausweis.jpg";
import imgWaermepumpe from "@/assets/service-waermepumpe.jpg";
import imgPhotovoltaik from "@/assets/service-photovoltaik.jpg";
import imgBza from "@/assets/service-bza.jpg";

const services = [
  {
    icon: FileText,
    title: "Energie- & Fördermittelberatung",
    description: "Umfassende Beratung zu Energieeffizienz und allen verfügbaren Förderprogrammen.",
    slug: "energieberatung",
    image: imgEnergieberatung,
    foerderung: "Alle Programme"
  },
  {
    icon: Thermometer,
    title: "Heizlastberechnung",
    description: "Präzise Berechnung des Wärmebedarfs für optimale Heizungsauslegung.",
    slug: "heizlastberechnung",
    image: imgHeizlast
  },
  {
    icon: ClipboardList,
    title: "Sanierungsfahrplan",
    description: "Ihr individueller Schritt-für-Schritt-Plan zur energetischen Sanierung.",
    slug: "sanierungsfahrplan",
    image: imgSanierung,
    foerderung: "+5% iSFP-Bonus"
  },
  {
    icon: Wind,
    title: "Luftdichtheitsprüfung",
    description: "Blower-Door-Test zur Überprüfung der Gebäudehülle.",
    slug: "luftdichtheitspruefung",
    image: imgLuftdichtheit
  },
  {
    icon: Fan,
    title: "Lüftungskonzept",
    description: "Professionelle Planung für gesundes Raumklima und Schimmelprävention.",
    slug: "lueftungskonzept",
    image: imgLueftung
  },
  {
    icon: FileCheck,
    title: "Energieausweis",
    description: "Bedarfs- und Verbrauchsausweise für Verkauf, Vermietung und Neubau.",
    slug: "energieausweis",
    image: imgEnergieausweis
  },
  {
    icon: Flame,
    title: "Wärmepumpenberatung",
    description: "Individuelle Beratung zur optimalen Wärmepumpenlösung für Ihr Gebäude.",
    slug: "waermepumpenberatung",
    image: imgWaermepumpe,
    foerderung: "Bis zu 40%",
    externalLink: {
      label: "Online Wärmepumpen Check",
      url: "https://check.autarc.energy/kerle_energieberatung_gbr/wrmepumpencheck/"
    }
  },
  {
    icon: Sun,
    title: "Photovoltaik-Beratung",
    description: "Planung und Wirtschaftlichkeitsberechnung für Ihre Solaranlage.",
    slug: "photovoltaik-beratung",
    image: imgPhotovoltaik,
    foerderung: "EEG-Vergütung"
  },
  {
    icon: CheckCircle,
    title: "BzA – Bestätigung zum Antrag",
    description: "Offizielle Bestätigung für Ihren BAFA-Förderantrag.",
    slug: "bza-bestaetigung",
    image: imgBza,
    foerderung: "BAFA-Pflicht"
  }
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
            Von der ersten Beratung bis zur fertigen Umsetzung – alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <Link
                to={`/leistungen/${service.slug}`}
                className="service-card-with-image group relative overflow-hidden rounded-xl min-h-[280px] block"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/85 group-hover:via-black/60 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="service-icon-light">
                      <service.icon className="w-6 h-6" />
                    </div>
                    {service.foerderung && (
                      <span className="px-2.5 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full">
                        {service.foerderung}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-white font-medium group-hover:text-primary-foreground">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
              
              {/* External Link Button */}
              {service.externalLink && (
                <a
                  href={service.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-20 px-3 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:scale-105"
                >
                  {service.externalLink.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;