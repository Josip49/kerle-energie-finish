import { Link } from "react-router-dom";
import {
  ThermometerSun, Home, LayoutGrid, Layers, ArrowLeft,
  ArrowDownToLine, Blinds, Fan, Sun, Flame, Zap, Building2,
  Wrench, ClipboardList, FileText, PiggyBank, BatteryCharging,
  Accessibility, DoorOpen, Landmark
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButtons from "@/components/WhatsAppButtons";

interface FoerderDetail {
  label: string;
  value: string;
  sub?: string[];
}

interface FoerderSection {
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  bafa?: { label: string; details: FoerderDetail[] } | null;
  kfw?: { label: string; details: FoerderDetail[] } | null;
}

const sections: FoerderSection[] = [
  {
    title: "Heizungstechnik",
    subtitle: "Wärmepumpe, Biomasseheizung, Solarthermie, Brennstoffzelle, wasserstofffähige Heizung, Wärmenetz-/Gebäudenetz-Anschluss",
    icon: ThermometerSun,
    bafa: null,
    kfw: {
      label: "KfW (BEG EM 458 Einzelmaßnahme)",
      details: [
        { label: "Basisförderung", value: "30% Zuschuss" },
        { label: "Geschwindigkeitsbonus", value: "+20%" },
        { label: "Einkommensbonus", value: "+30%" },
        { label: "Effizienzbonus (nur Wärmepumpe)", value: "+5%" },
        { label: "Max. Investitionskosten", value: "", sub: [
          "30.000 € (1 WE)",
          "15.000 € je WE ab der 2. WE",
          "8.000 € je WE ab der 7. WE"
        ]},
        { label: "Max. Zuschuss gesamt", value: "bis 70% (inkl. Boni)" },
        { label: "Pauschaler Zuschlag Biomasse", value: "2.500 €" },
        { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
      ]
    }
  },
  {
    title: "Gebäudenetz – Errichtung / Umbau / Erweiterung",
    subtitle: "Errichtung, Umbau oder Erweiterung eines Gebäudenetzes",
    icon: Building2,
    bafa: {
      label: "BAFA (BEG EM Einzelmaßnahme)",
      details: [
        { label: "Basisförderung", value: "30% Zuschuss" },
        { label: "Geschwindigkeitsbonus", value: "+20%" },
        { label: "Einkommensbonus", value: "+30%" },
        { label: "Max. Investitionskosten", value: "", sub: [
          "30.000 € (1 WE)",
          "15.000 € je WE ab der 2. WE",
          "8.000 € je WE ab der 7. WE"
        ]},
        { label: "Max. Zuschuss gesamt", value: "bis 70% (inkl. Boni)" },
        { label: "Pauschaler Zuschlag Biomasse", value: "2.500 €" },
      ]
    },
    kfw: {
      label: "KfW (BEG EM 358/359 Einzelmaßnahme)",
      details: [
        { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
      ]
    }
  },
  {
    title: "Heizungsoptimierung – Effizienzverbesserung",
    subtitle: "Bestehende Heizungsanlage optimieren und effizienter machen",
    icon: Wrench,
    bafa: {
      label: "BAFA (BEG EM Einzelmaßnahme)",
      details: [
        { label: "Zuschuss", value: "15%" },
        { label: "Max. Invest", value: "30.000 € pro WE und Jahr" },
        { label: "Mit iSFP-Bonus", value: "+5% → dann max. 60.000 € pro WE und Jahr" },
      ]
    },
    kfw: {
      label: "KfW (BEG EM 358/359 Einzelmaßnahme)",
      details: [
        { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
      ]
    }
  },
  {
    title: "Heizungsoptimierung – Emissionsminderung",
    subtitle: "Maßnahmen zur Reduzierung von Emissionen bestehender Heizungsanlagen",
    icon: Flame,
    bafa: {
      label: "BAFA (BEG EM Einzelmaßnahme)",
      details: [
        { label: "Zuschuss", value: "50%" },
      ]
    },
    kfw: null,
  },
  {
    title: "Gebäudehülle",
    subtitle: "Dämmung Dach/Fassade/Keller, Fenster, Haustür, sommerlicher Wärmeschutz",
    icon: Home,
    bafa: {
      label: "BAFA (BEG EM Einzelmaßnahme)",
      details: [
        { label: "Zuschuss", value: "15%" },
        { label: "Max. Invest", value: "30.000 € pro WE und Jahr" },
        { label: "Mit iSFP-Bonus", value: "+5% → dann max. 60.000 € pro WE und Jahr" },
      ]
    },
    kfw: {
      label: "KfW (BEG EM 358/359 Einzelmaßnahme)",
      details: [
        { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
      ]
    }
  },
  {
    title: "Anlagentechnik",
    subtitle: "Lüftung / Smart Home",
    icon: Fan,
    bafa: {
      label: "BAFA (BEG EM Einzelmaßnahme)",
      details: [
        { label: "Zuschuss", value: "15%" },
        { label: "Max. Invest", value: "30.000 € pro WE und Jahr" },
        { label: "Mit iSFP-Bonus", value: "+5% → dann max. 60.000 € pro WE und Jahr" },
      ]
    },
    kfw: {
      label: "KfW (BEG EM 358/359 Einzelmaßnahme)",
      details: [
        { label: "Ergänzungskredit", value: "max. 120.000 € pro WE" },
      ]
    }
  },
  {
    title: "Komplettsanierung zum Effizienzhaus",
    subtitle: "Umfassende Sanierung zum KfW-Effizienzhaus",
    icon: Landmark,
    bafa: null,
    kfw: {
      label: "KfW (BEG WG 261 Wohngebäude)",
      details: [
        { label: "Förderkredit", value: "max. 120.000 bis 150.000 € pro WE" },
        { label: "Tilgungszuschuss", value: "5% bis max. 20%", sub: [
          "Je nach Effizienzhaus/Denkmal: 85/70/55/40"
        ]},
        { label: "EE-/NH-Klasse Bonus", value: "+5%" },
        { label: "Worst Performing Buildings Bonus", value: "+10%" },
        { label: "Serielle Sanierung Bonus", value: "+15%" },
      ]
    }
  },
  {
    title: "Fachplanung & Baubegleitung",
    subtitle: "Professionelle Planung und Begleitung Ihrer Sanierungsmaßnahmen",
    icon: ClipboardList,
    bafa: {
      label: "BAFA (BEG EM Einzelmaßnahme)",
      details: [
        { label: "Zuschuss", value: "50%" },
        { label: "Max. Invest", value: "", sub: [
          "5.000 € (EFH/ZFH)",
          "20.000 € (MFH) = 2.000 € pro WE"
        ]},
      ]
    },
    kfw: {
      label: "KfW (BEG WG 261 Wohngebäude)",
      details: [
        { label: "Tilgungszuschuss", value: "50%" },
        { label: "Max. Invest", value: "", sub: [
          "10.000 € (EFH/ZFH)",
          "40.000 € (MFH) = 4.000 € pro WE"
        ]},
      ]
    }
  },
  {
    title: "Energieberatung / Sanierungsfahrplan",
    subtitle: "Energieberatung für Wohngebäude (iSFP)",
    icon: FileText,
    bafa: {
      label: "BAFA (EBW Energieberatung für Wohngebäude)",
      details: [
        { label: "Zuschuss", value: "50%" },
        { label: "Max. Zuschuss", value: "", sub: [
          "650 € (EFH/ZFH)",
          "850 € (MFH)"
        ]},
      ]
    },
    kfw: null,
  },
  {
    title: "Kauf Altbau als Familien-Wohneigentum",
    subtitle: "Jung kauft Alt – zinsgünstiger Kredit für Familien",
    icon: PiggyBank,
    bafa: null,
    kfw: {
      label: "KfW (Jung kauft Alt 308)",
      details: [
        { label: "Zinsgünstiger Kredit", value: "max. 100.000 bis 150.000 €" },
      ]
    }
  },
  {
    title: "Kauf/Bau von selbstgenutztem Wohneigentum",
    subtitle: "KfW-Wohneigentumsprogramm",
    icon: DoorOpen,
    bafa: null,
    kfw: {
      label: "KfW (Wohneigentumsprogramm 124)",
      details: [
        { label: "Zinsgünstiger Kredit", value: "max. 100.000 €" },
      ]
    }
  },
  {
    title: "Stromerzeugung (PV / Wasser / Wind)",
    subtitle: "Erneuerbare Energien zur Stromerzeugung",
    icon: BatteryCharging,
    bafa: null,
    kfw: {
      label: "KfW (Erneuerbare Energien – Standard 270)",
      details: [
        { label: "Förderung", value: "Zinsgünstiger Kredit" },
      ]
    }
  },
  {
    title: "Altersgerechter Umbau",
    subtitle: "Barriereabbau / Einbruchschutz",
    icon: Accessibility,
    bafa: null,
    kfw: {
      label: "KfW (Altersgerecht Umbauen 159 / 455-B)",
      details: [
        { label: "Zinsgünstiger Kredit (159)", value: "Altersgerecht Umbauen" },
        { label: "Zuschuss Barrierereduzierung (455-B)", value: "10% bis 12,5%", sub: [
          "Hinweis: Zuschuss ab Frühjahr 2026 wieder möglich"
        ]},
      ]
    }
  },
];

const FoerderCard = ({ source, details, variant }: { source: string; details: FoerderDetail[]; variant: 'bafa' | 'kfw' }) => {
  const styles = variant === 'bafa'
    ? 'bg-amber-50/60 border-amber-200/50 dark:bg-amber-950/20 dark:border-amber-800/30'
    : 'bg-blue-50/60 border-blue-200/50 dark:bg-blue-950/20 dark:border-blue-800/30';
  const labelColor = variant === 'bafa'
    ? 'text-amber-700 dark:text-amber-400'
    : 'text-blue-700 dark:text-blue-400';

  return (
    <div className={`rounded-xl p-5 border ${styles}`} style={{ boxShadow: 'var(--shadow-card)' }}>
      <h4 className={`text-sm font-bold mb-3 ${labelColor}`}>{source}</h4>
      <div className="space-y-2">
        {details.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between items-start gap-2">
              <span className="text-sm text-muted-foreground">{d.label}</span>
              {d.value && <span className="text-sm font-semibold text-foreground text-right whitespace-nowrap">{d.value}</span>}
            </div>
            {d.sub && (
              <ul className="mt-1 ml-4 space-y-0.5">
                {d.sub.map((s, j) => (
                  <li key={j} className="text-xs text-muted-foreground list-disc">{s}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Foerderungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <a
              href="/#leistungen"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Übersicht
            </a>

            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Förderungen & Zuschüsse
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                Alle aktuellen Fördersätze auf einen Blick
              </p>
              <p className="text-lg text-muted-foreground">
                Der Staat fördert energetische Sanierungen großzügig über BAFA und KfW. Wir helfen Ihnen, die maximale Förderung für Ihr Vorhaben zu erhalten – von der Beratung bis zur Antragstellung.
              </p>
            </div>
          </div>
        </section>

        {/* Förderungen */}
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-10">
            {sections.map((section, idx) => (
              <div key={idx} className="border border-border/50 rounded-2xl p-6 md:p-8 bg-background">
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{section.title}</h2>
                    {section.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">{section.subtitle}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {section.bafa ? (
                    <FoerderCard source={section.bafa.label} details={section.bafa.details} variant="bafa" />
                  ) : (
                    <div className="bg-amber-50/30 dark:bg-amber-950/10 rounded-xl p-5 border border-amber-200/30 dark:border-amber-800/20 flex items-center justify-center">
                      <span className="text-sm text-amber-600/60 dark:text-amber-500/40">BAFA: keine Förderung</span>
                    </div>
                  )}
                  {section.kfw ? (
                    <FoerderCard source={section.kfw.label} details={section.kfw.details} variant="kfw" />
                  ) : (
                    <div className="bg-blue-50/30 dark:bg-blue-950/10 rounded-xl p-5 border border-blue-200/30 dark:border-blue-800/20 flex items-center justify-center">
                      <span className="text-sm text-blue-600/60 dark:text-blue-500/40">KfW: keine Förderung</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Hinweis */}
            <div className="p-4 bg-accent/50 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Hinweis:</strong> Die Fördersätze können sich ändern. Wir beraten Sie gerne zu den aktuellen Programmen und helfen Ihnen, die maximale Förderung zu erhalten. Boni sind teilweise kumulierbar – sprechen Sie uns an!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButtons />
    </div>
  );
};

export default Foerderungen;
