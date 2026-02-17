import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import HueSlider from "./HueSlider";
import senovateLogo from "@/assets/senovate-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#ablauf", label: "Ablauf" },
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#vorteile", label: "Vorteile" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="header-section">
      {/* Hue Slider Bar */}
      <div className="border-b border-border/30 bg-muted/30">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <span className="text-[11px] text-muted-foreground">Farbschema anpassen:</span>
          <HueSlider />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-10" onClick={() => setIsMenuOpen(false)}>
            <img src={senovateLogo} alt="Senovate" className="h-8 lg:h-10 w-auto" />
            <span className="text-lg lg:text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}>
              Senovate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <Rocket className="w-4 h-4" />
              Projekt starten
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="#kontakt"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Rocket className="w-4 h-4" />
                Projekt starten
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Farbschema:</span>
                <HueSlider />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
