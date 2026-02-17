import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DemoButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "ghost";
}

const DemoButton = ({ children, className, size = "default", variant = "default" }: DemoButtonProps) => {
  const [showRipple, setShowRipple] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 800);
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-sm",
  };

  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-input bg-background text-foreground",
    ghost: "text-muted-foreground",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 cursor-pointer overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        "hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
      {showRipple && (
        <span className="absolute inset-0 flex items-center justify-center bg-primary/20 animate-fade-in">
          <Sparkles className="w-5 h-5 text-primary animate-scale-in" />
        </span>
      )}
    </button>
  );
};

export default DemoButton;
