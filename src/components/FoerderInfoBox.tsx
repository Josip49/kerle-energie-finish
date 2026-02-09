import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FoerderDetail {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string[];
}

interface FoerderSource {
  label: string;
  details: FoerderDetail[];
}

interface FoerderInfoBoxProps {
  bafa?: FoerderSource | null;
  kfw?: FoerderSource | null;
}

const SourceCard = ({ source }: { source: FoerderSource }) => (
  <div className="bg-card rounded-xl p-5 border border-border/50" style={{ boxShadow: 'var(--shadow-card)' }}>
    <h4 className="text-sm font-bold text-primary mb-3">{source.label}</h4>
    <div className="space-y-2">
      {source.details.map((d, i) => (
        <div key={i}>
          <div className="flex justify-between items-start gap-2">
            <span className="text-sm text-muted-foreground">{d.label}</span>
            {d.value && (
              <span className={`text-sm font-semibold text-right whitespace-nowrap ${d.highlight ? 'text-primary' : 'text-foreground'}`}>
                {d.value}
              </span>
            )}
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

const FoerderInfoBox = ({ bafa, kfw }: FoerderInfoBoxProps) => {
  if (!bafa && !kfw) return null;

  return (
    <div className="mt-12 md:mt-16">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Förderung & Zuschüsse
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {bafa ? (
          <SourceCard source={bafa} />
        ) : (
          <div className="bg-muted/30 rounded-xl p-5 border border-border/30 flex items-center justify-center">
            <span className="text-sm text-muted-foreground">BAFA: keine Förderung</span>
          </div>
        )}
        {kfw ? (
          <SourceCard source={kfw} />
        ) : (
          <div className="bg-muted/30 rounded-xl p-5 border border-border/30 flex items-center justify-center">
            <span className="text-sm text-muted-foreground">KfW: keine Förderung</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <Link
          to="/foerderungen"
          className="inline-flex items-center text-sm text-primary font-medium hover:underline"
        >
          Alle Förderungen im Überblick
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default FoerderInfoBox;
