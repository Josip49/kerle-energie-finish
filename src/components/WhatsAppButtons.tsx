import { Mail } from "lucide-react";

const WhatsAppButtons = () => {
  return (
    <div className="whatsapp-buttons-container">
      <a
        href="mailto:hello@ihre-agentur.de"
        className="floating-button email-button group"
        aria-label="E-Mail senden"
      >
        <div className="floating-button-inner email-inner">
          <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </div>
        <span className="floating-tooltip">E-Mail schreiben</span>
      </a>
    </div>
  );
};

export default WhatsAppButtons;
