import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import senovateLogo from "@/assets/senovate-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src={senovateLogo} alt="Senovate" className="h-8 w-auto" />
              <span className="text-base font-bold tracking-tight text-foreground" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}>
                Senovate
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Webdesign & Entwicklung.<br />
              Modern, schnell, zuverlässig.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Navigation</h4>
            <ul className="space-y-1.5 md:space-y-2 text-sm">
              <li><a href="/#ablauf" className="text-muted-foreground hover:text-primary transition-colors">Ablauf</a></li>
              <li><a href="/#leistungen" className="text-muted-foreground hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="/#vorteile" className="text-muted-foreground hover:text-primary transition-colors">Vorteile</a></li>
              <li><a href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Kontakt</h4>
            <ul className="space-y-1.5 md:space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@ihre-agentur.de" className="hover:text-primary transition-colors">hello@ihre-agentur.de</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-border/50 flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-xs md:text-sm">
            <p className="text-muted-foreground text-center">
              © {currentYear} Ihre Agentur. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>

          {/* Senovate Credit - Centered */}
          <a
            href="https://senovate.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-xs text-muted-foreground transition-colors"
          >
            <span className="group-hover:text-[#1a8fd1]">Erstellt von</span>
            <span className="text-base font-bold tracking-tight group-hover:text-[#1a8fd1] transition-colors" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}>Senovate</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
