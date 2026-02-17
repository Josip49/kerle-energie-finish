import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const HUE_KEY = "senovate-hue";

const getStoredHue = (): number => {
  try {
    const stored = localStorage.getItem(HUE_KEY);
    return stored ? parseInt(stored, 10) : 152;
  } catch {
    return 152;
  }
};

const applyHue = (hue: number) => {
  const root = document.documentElement;
  // Primary
  root.style.setProperty("--primary", `${hue} 45% 28%`);
  root.style.setProperty("--ring", `${hue} 45% 28%`);
  // Accent
  root.style.setProperty("--accent", `${(hue - 7 + 360) % 360} 35% 90%`);
  root.style.setProperty("--accent-foreground", `${hue} 45% 25%`);
  // Glow
  root.style.setProperty("--primary-glow", `${(hue - 10 + 360) % 360} 60% 45%`);
  // Gradients
  root.style.setProperty("--gradient-primary", `linear-gradient(135deg, hsl(${hue} 45% 28%) 0%, hsl(${(hue - 10 + 360) % 360} 50% 35%) 100%)`);
  root.style.setProperty("--gradient-section-alt", `linear-gradient(180deg, hsl(${(hue - 7 + 360) % 360} 25% 96%) 0%, hsl(40 20% 98%) 100%)`);
  // Shadows
  root.style.setProperty("--shadow-soft", `0 4px 20px -4px hsl(${hue} 45% 28% / 0.12)`);
  root.style.setProperty("--shadow-elevated", `0 12px 40px -12px hsl(${hue} 45% 28% / 0.18)`);
  // Sidebar
  root.style.setProperty("--sidebar-primary", `${hue} 45% 28%`);
  root.style.setProperty("--sidebar-ring", `${hue} 45% 28%`);
};

const HueSlider = () => {
  const [hue, setHue] = useState(getStoredHue);

  useEffect(() => {
    applyHue(hue);
  }, [hue]);

  const handleChange = (value: number) => {
    setHue(value);
    localStorage.setItem(HUE_KEY, String(value));
    applyHue(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Palette className="w-4 h-4 text-primary flex-shrink-0" />
      <input
        type="range"
        min={0}
        max={360}
        value={hue}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-24 md:w-32 h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, 
            hsl(0 70% 50%), hsl(60 70% 50%), hsl(120 70% 50%), 
            hsl(180 70% 50%), hsl(240 70% 50%), hsl(300 70% 50%), hsl(360 70% 50%))`,
        }}
        title="Farbton ändern"
      />
    </div>
  );
};

export default HueSlider;
