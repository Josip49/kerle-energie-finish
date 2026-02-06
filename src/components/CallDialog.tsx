import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface CallDialogProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const CallDialog = ({ children, className, size = "lg", variant = "default" }: CallDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} variant={variant} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Wen möchten Sie anrufen?</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Button size="lg" className="w-full" asChild>
            <a href="tel:015140368889">
              <Phone className="w-5 h-5 mr-2" />
              Stefan Kerling anrufen
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full" asChild>
            <a href="tel:01623598287">
              <Phone className="w-5 h-5 mr-2" />
              Kevin Leuschner anrufen
            </a>
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Kostenlose Erstberatung – wir freuen uns auf Ihren Anruf!
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default CallDialog;