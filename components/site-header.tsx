import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Phone, Mail } from "lucide-react";
import { MainNavigation } from "@/components/main-navigation";
import { MobileNavigation } from "@/components/mobile-navigation";

export function SiteHeader() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0e2240] text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center mb-2 md:mb-0">
            <Link
              href="/careers"
              className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 px-3 py-1 rounded text-white text-xs font-medium"
            >
              ¿QUIERES TRABAJAR CON NOSOTROS? ¡ENVÍA TU CURRÍCULUM AQUÍ!
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+52 (614) 439.39.55</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>contacto@gpa.mx</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook className="h-4 w-4 text-white hover:text-[#1a62b3]" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-white hover:text-[#1a62b3]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-4 px-4 md:px-6 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Grupo Punto Alto"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Navegación principal (escritorio) */}
          <MainNavigation />

          {/* Navegación móvil */}
          <MobileNavigation />
        </div>
      </header>
    </>
  );
}
