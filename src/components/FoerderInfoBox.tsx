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

const SourceCard = ({ source, variant }: { source: FoerderSource; variant: 'bafa' | 'kfw' }) => {
  const styles = variant === 'bafa'
    ? 'bg-amber-50/60 border-amber-200/50 dark:bg-amber-950/20 dark:border-amber-800/30'
    : 'bg-blue-50/60 border-blue-200/50 dark:bg-blue-950/20 dark:border-blue-800/30';
  const labelColor = variant === 'bafa'
    ? 'text-amber-700 dark:text-amber-400'
    : 'text-blue-700 dark:text-blue-400';

  return (
    <div className={`rounded-xl p-5 border ${styles}`} style={{ boxShadow: 'var(--shadow-card)' }}>
      <h4 className={`text-sm font-bold mb-3 ${labelColor}`}>{source.label}</h4>
      <div className="space-y-2">
        {source.details.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between items-start gap-2">
              <span className="text-sm text-muted-foreground">{d.label}</span>
              {d.value && (
                <span className={`text-sm font-semibold text-right whitespace-nowrap ${d.highlight ? (variant === 'bafa' ? 'text-amber-700 dark:text-amber-400' : 'text-blue-700 dark:text-blue-400') : 'text-foreground'}`}>
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
};

const FoerderInfoBox = ({ bafa, kfw }: FoerderInfoBoxProps) => {
  if (!bafa && !kfw) return null;

  return (
    <div className="mt-12 md:mt-16">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Förderung & Zuschüsse
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {bafa ? (
          <SourceCard source={bafa} variant="bafa" />
        ) : (
          <div className="bg-amber-50/30 dark:bg-amber-950/10 rounded-xl p-5 border border-amber-200/30 dark:border-amber-800/20 flex items-center justify-center">
            <span className="text-sm text-amber-600/60 dark:text-amber-500/40">BAFA: keine Förderung</span>
          </div>
        )}
        {kfw ? (
          <SourceCard source={kfw} variant="kfw" />
        ) : (
          <div className="bg-blue-50/30 dark:bg-blue-950/10 rounded-xl p-5 border border-blue-200/30 dark:border-blue-800/20 flex items-center justify-center">
            <span className="text-sm text-blue-600/60 dark:text-blue-500/40">KfW: keine Förderung</span>
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
