import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Cookie, ChevronDown, ChevronUp, Shield } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  statistics: false,
  marketing: false,
};

const STORAGE_KEY = "cookie-consent";

const getStoredConsent = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const storeConsent = (preferences: CookiePreferences) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const all: CookiePreferences = { necessary: true, statistics: true, marketing: true };
    storeConsent(all);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const minimal: CookiePreferences = { necessary: true, statistics: false, marketing: false };
    storeConsent(minimal);
    setVisible(false);
  }, []);

  const handleSaveSelection = useCallback(() => {
    storeConsent(preferences);
    setVisible(false);
  }, [preferences]);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998] bg-foreground/30 backdrop-blur-sm" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-3 md:p-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-lg">
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Cookie-Einstellungen</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
                  Sie können Ihre Einstellungen jederzeit anpassen.{" "}
                  <Link to="/datenschutz" className="text-primary hover:underline">
                    Mehr erfahren
                  </Link>
                </p>
              </div>
            </div>

            {/* Toggle Details */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-4"
            >
              {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showDetails ? "Weniger anzeigen" : "Einstellungen anpassen"}
            </button>

            {/* Cookie Categories */}
            {showDetails && (
              <div className="space-y-3 mb-5 border border-border rounded-xl p-4 bg-muted/30">
                {/* Necessary */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Notwendig</p>
                      <p className="text-xs text-muted-foreground">
                        Essenziell für die Grundfunktionen der Website. Immer aktiv.
                      </p>
                    </div>
                  </div>
                  <Switch checked disabled className="opacity-70" />
                </div>

                {/* Statistics */}
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/50">
                  <div className="flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Statistik</p>
                      <p className="text-xs text-muted-foreground">
                        Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.statistics}
                    onCheckedChange={(checked) =>
                      setPreferences((p) => ({ ...p, statistics: checked }))
                    }
                  />
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/50">
                  <div className="flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Marketing</p>
                      <p className="text-xs text-muted-foreground">
                        Ermöglichen personalisierte Werbung und Analyse über Drittanbieter.
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences((p) => ({ ...p, marketing: checked }))
                    }
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button onClick={handleAcceptAll} className="flex-1 hero-cta-primary">
                Alle akzeptieren
              </Button>
              {showDetails ? (
                <Button onClick={handleSaveSelection} variant="outline" className="flex-1">
                  Auswahl speichern
                </Button>
              ) : (
                <Button onClick={handleRejectAll} variant="outline" className="flex-1">
                  Nur notwendige
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
