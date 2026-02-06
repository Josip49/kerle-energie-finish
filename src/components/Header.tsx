import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-kerle.jpeg";
import certGih from "@/assets/cert-gih-bayern.jpeg";
import certEee from "@/assets/cert-energieeffizienz.jpeg";

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="KerLe Energieberatung"
              className="h-10 lg:h-12 w-auto"
            />
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

          {/* Certificates - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <img
              src={certEee}
              alt="Energieeffizienz Experten"
              className="h-8 w-auto"
            />
            <img
              src={certGih}
              alt="GIH Bayern"
              className="h-8 w-auto"
            />
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
            {/* Certificates - Mobile */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <img
                src={certEee}
                alt="Energieeffizienz Experten"
                className="h-6 w-auto"
              />
              <img
                src={certGih}
                alt="GIH Bayern"
                className="h-6 w-auto"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;