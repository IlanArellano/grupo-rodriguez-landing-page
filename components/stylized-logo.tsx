import Image from "next/image";
import { cn } from "@/lib/utils";

interface StylizedLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function StylizedLogo({
  size = "md",
  showText = true,
  className,
}: StylizedLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.jpg"
        alt="Grupo JC Rodríguez"
        width={150}
        height={50}
        className={cn("w-auto", sizeClasses[size])}
      />
      {showText && (
        <div className="ml-3">
          <div className="text-white font-bold text-lg">Grupo JC Rodríguez</div>
          <div className="text-gray-400 text-sm">Soluciones Integrales</div>
        </div>
      )}
    </div>
  );
}
