import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { HueSlider, BgSlider } from "./HueSlider";
import senovateLogo from "@/assets/senovate-logo.png";
import DemoButton from "./DemoButton";

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
      {/* Slider Bar */}
      <div className="border-b border-border/30 bg-muted/30">
        <div className="container mx-auto px-4 flex items-center justify-between h-9 gap-2">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground whitespace-nowrap">Akzent:</span>
              <HueSlider />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground whitespace-nowrap">Hintergrund:</span>
              <BgSlider />
            </div>
          </div>
          <span className="md:hidden text-[10px] text-muted-foreground">Farben im Menü anpassen ↗</span>
          <span className="text-[10px] text-muted-foreground/60 hidden md:block">Template-Demo</span>
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
            <DemoButton className="bg-primary text-primary-foreground gap-2">
              <FileText className="w-4 h-4" />
              Angebot sichern
            </DemoButton>
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
              <DemoButton className="w-full bg-primary text-primary-foreground justify-center gap-2 h-12">
                <FileText className="w-4 h-4" />
                Angebot sichern
              </DemoButton>
            </div>
            {/* Sliders in mobile menu */}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Akzentfarbe:</span>
                <HueSlider />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Hintergrund:</span>
                <BgSlider />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
