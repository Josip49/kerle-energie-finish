import { Mail, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const WhatsAppButtons = () => {
  const isMobile = useIsMobile();
  const stefanNumber = "4915140368889";
  const kevinNumber = "491623598287";
  const message = encodeURIComponent("Hallo, ich interessiere mich für eine Energieberatung.");
  const emailSubject = encodeURIComponent("Kundenanfrage (Grund)");

  return (
    <div className="whatsapp-buttons-container">
      {/* Email Button - visible on all devices */}
      <a
        href={`mailto:kerle@rothsee-energieberatung.de?subject=${emailSubject}`}
        className="floating-button email-button group"
        aria-label="E-Mail senden"
      >
        <div className="floating-button-inner email-inner">
          <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <span className="floating-tooltip">
          E-Mail schreiben
        </span>
      </a>

      {/* WhatsApp Buttons - only visible on mobile */}
      {isMobile && (
        <>
          <a
            href={`https://wa.me/${stefanNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-button whatsapp-button group"
            aria-label="WhatsApp an Stefan"
          >
            <div className="floating-button-inner whatsapp-inner">
              <span className="text-white font-bold text-xs md:text-sm">SK</span>
            </div>
            <span className="floating-tooltip">
              Stefan per WhatsApp
            </span>
          </a>

          <a
            href={`https://wa.me/${kevinNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-button whatsapp-button group"
            aria-label="WhatsApp an Kevin"
          >
            <div className="floating-button-inner whatsapp-inner">
              <span className="text-white font-bold text-xs md:text-sm">KL</span>
            </div>
            <span className="floating-tooltip">
              Kevin per WhatsApp
            </span>
          </a>
        </>
      )}
    </div>
  );
};

export default WhatsAppButtons;