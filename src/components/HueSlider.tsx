import { useState, useEffect } from "react";
import { Palette, Sun } from "lucide-react";

const HUE_KEY = "senovate-hue";
const BG_KEY = "senovate-bg-warmth";

const getStoredHue = (): number => {
  try {
    const stored = localStorage.getItem(HUE_KEY);
    return stored ? parseInt(stored, 10) : 152;
  } catch {
    return 152;
  }
};

const getStoredBg = (): number => {
  try {
    const stored = localStorage.getItem(BG_KEY);
    return stored ? parseInt(stored, 10) : 40;
  } catch {
    return 40;
  }
};

const applyHue = (hue: number) => {
  const root = document.documentElement;
  root.style.setProperty("--primary", `${hue} 45% 28%`);
  root.style.setProperty("--ring", `${hue} 45% 28%`);
  root.style.setProperty("--accent", `${(hue - 7 + 360) % 360} 35% 90%`);
  root.style.setProperty("--accent-foreground", `${hue} 45% 25%`);
  root.style.setProperty("--primary-glow", `${(hue - 10 + 360) % 360} 60% 45%`);
  root.style.setProperty("--gradient-primary", `linear-gradient(135deg, hsl(${hue} 45% 28%) 0%, hsl(${(hue - 10 + 360) % 360} 50% 35%) 100%)`);
  root.style.setProperty("--shadow-soft", `0 4px 20px -4px hsl(${hue} 45% 28% / 0.12)`);
  root.style.setProperty("--shadow-elevated", `0 12px 40px -12px hsl(${hue} 45% 28% / 0.18)`);
  root.style.setProperty("--sidebar-primary", `${hue} 45% 28%`);
  root.style.setProperty("--sidebar-ring", `${hue} 45% 28%`);
};

const applyBg = (bgHue: number) => {
  const root = document.documentElement;
  root.style.setProperty("--background", `${bgHue} 20% 98%`);
  root.style.setProperty("--card", `${bgHue} 25% 99%`);
  root.style.setProperty("--popover", `${bgHue} 25% 99%`);
  root.style.setProperty("--secondary", `${bgHue} 30% 95%`);
  root.style.setProperty("--muted", `${bgHue} 20% 94%`);
  root.style.setProperty("--border", `${bgHue} 20% 88%`);
  root.style.setProperty("--input", `${bgHue} 20% 88%`);
  root.style.setProperty("--gradient-hero", `linear-gradient(180deg, hsl(${bgHue} 25% 97%) 0%, hsl(${bgHue} 20% 99%) 100%)`);
  root.style.setProperty("--gradient-section", `linear-gradient(180deg, hsl(${bgHue} 20% 96%) 0%, hsl(${bgHue} 25% 98%) 100%)`);
  root.style.setProperty("--sidebar-background", `${bgHue} 20% 97%`);
  root.style.setProperty("--sidebar-accent", `${bgHue} 30% 94%`);
  root.style.setProperty("--sidebar-border", `${bgHue} 20% 88%`);
  root.style.setProperty("--glass-bg", `hsl(${bgHue} 25% 99% / 0.85)`);
  root.style.setProperty("--glass-border", `hsl(${bgHue} 25% 95% / 0.6)`);
};

export const HueSlider = () => {
  const [hue, setHue] = useState(getStoredHue);

  useEffect(() => { applyHue(hue); }, [hue]);

  const handleChange = (value: number) => {
    setHue(value);
    localStorage.setItem(HUE_KEY, String(value));
    applyHue(value);
  };

  return (
    <div className="flex items-center gap-1.5">
      <Palette className="w-3.5 h-3.5 text-primary flex-shrink-0" />
      <input
        type="range"
        min={0}
        max={360}
        value={hue}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-20 md:w-28 h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, 
            hsl(0 70% 50%), hsl(60 70% 50%), hsl(120 70% 50%), 
            hsl(180 70% 50%), hsl(240 70% 50%), hsl(300 70% 50%), hsl(360 70% 50%))`,
        }}
        title="Akzentfarbe"
      />
    </div>
  );
};

export const BgSlider = () => {
  const [bgHue, setBgHue] = useState(getStoredBg);

  useEffect(() => { applyBg(bgHue); }, [bgHue]);

  const handleChange = (value: number) => {
    setBgHue(value);
    localStorage.setItem(BG_KEY, String(value));
    applyBg(value);
  };

  return (
    <div className="flex items-center gap-1.5">
      <Sun className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
      <input
        type="range"
        min={0}
        max={360}
        value={bgHue}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-20 md:w-28 h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, 
            hsl(0 20% 96%), hsl(40 20% 96%), hsl(80 20% 96%),
            hsl(150 20% 96%), hsl(200 20% 96%), hsl(260 20% 96%), hsl(360 20% 96%))`,
        }}
        title="Hintergrund"
      />
    </div>
  );
};

// Default export for backwards compat
export default HueSlider;
