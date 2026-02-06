import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-kerle.jpeg";
import certGih from "@/assets/cert-gih-bayern.jpeg";
import certEee from "@/assets/cert-energieeffizienz.jpeg";
import senovateLogo from "@/assets/senovate-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="KerLe Energieberatung"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Energieberatung. Nur besser.<br />
              BAFA-zertifizierte Energie-Effizienz-Experten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#ablauf" className="text-muted-foreground hover:text-primary transition-colors">Ablauf</a></li>
              <li><a href="/#leistungen" className="text-muted-foreground hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="/#vorteile" className="text-muted-foreground hover:text-primary transition-colors">Vorteile</a></li>
              <li><a href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Stefan: <a href="tel:015140368889" className="hover:text-primary transition-colors">0151 40368889</a></span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Kevin: <a href="tel:01623598287" className="hover:text-primary transition-colors">0162 3598287</a></span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`} className="hover:text-primary transition-colors">kerle@rothsee-energieberatung.de</a>
              </li>
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Zertifizierungen</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.energie-effizienz-experten.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={certEee}
                  alt="Energieeffizienz Experten für Förderprogramme des Bundes"
                  className="h-12 w-auto object-contain object-left"
                />
              </a>
              <img
                src={certGih}
                alt="GIH Bayern - Interessenvertretung für Energieberatende"
                className="h-12 w-auto object-contain object-left"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            <p className="text-muted-foreground">
              © {currentYear} KerLe Energieberatung. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
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
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Erstellt von</span>
            <img src={senovateLogo} alt="Senovate" className="h-8 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;