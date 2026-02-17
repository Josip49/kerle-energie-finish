import { Mail } from "lucide-react";
import DemoButton from "./DemoButton";

const WhatsAppButtons = () => {
  return (
    <div className="whatsapp-buttons-container">
      <DemoButton className="floating-button-inner email-inner !rounded-full !p-0 !w-9 !h-9 md:!w-11 md:!h-11">
        <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
      </DemoButton>
    </div>
  );
};

export default WhatsAppButtons;
