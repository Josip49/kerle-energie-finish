import { ReactNode } from "react";

interface StyledNameProps {
  children?: ReactNode;
  className?: string;
}

// Renders "KerLe" with K and Le in primary color
export const KerLeBrand = ({ className = "" }: StyledNameProps) => (
  <span className={className}>
    <span className="text-primary">K</span>er<span className="text-primary">Le</span>
  </span>
);

// Renders "Stefan Kerling" with K in primary color
export const StefanKerling = ({ className = "" }: StyledNameProps) => (
  <span className={className}>
    Stefan <span className="text-primary">K</span>erling
  </span>
);

// Renders "Kevin Leuschner" with Le in primary color
export const KevinLeuschner = ({ className = "" }: StyledNameProps) => (
  <span className={className}>
    Kevin <span className="text-primary">Le</span>uschner
  </span>
);

// Short versions for compact displays
export const StefanShort = ({ className = "" }: StyledNameProps) => (
  <span className={className}>
    Stefan <span className="text-primary">K</span>.
  </span>
);

export const KevinShort = ({ className = "" }: StyledNameProps) => (
  <span className={className}>
    Kevin <span className="text-primary">Le</span>.
  </span>
);
