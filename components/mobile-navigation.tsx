"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Definición de tipos para los menús (igual que en main-navigation.tsx)
type SimpleMenuItem = {
  title: string;
  href: string;
};

type CompanyItem = {
  name: string;
  logo: string;
  href: string;
};

type SectorMenuItem = {
  title: string;
  href: string;
  companies: CompanyItem[];
};

type MenuItem = {
  title: string;
  href: string;
  submenu?: SimpleMenuItem[] | SectorMenuItem[];
  isSectorMenu?: boolean;
};

// Datos de ejemplo para el menú (importaríamos los mismos que en main-navigation.tsx en una implementación real)
const menuItems: MenuItem[] = [
  {
    title: "INICIO",
    href: "/",
  },
  {
    title: "SOMOS",
    href: "/somos",
    submenu: [
      { title: "Historia", href: "/somos/historia" },
      { title: "Filosofía GPA", href: "/somos/filosofia" },
      { title: "Código de Ética", href: "/somos/codigo-de-etica" },
      { title: "Cronología", href: "/somos/cronologia" },
      {
        title: "Responsabilidad Social Empresarial",
        href: "/somos/responsabilidad-social",
      },
    ],
  },
  {
    title: "SECTORES ESTRATÉGICOS",
    href: "/sectores-estrategicos",
    isSectorMenu: true,
    submenu: [
      {
        title: "Sector Construcción",
        href: "/sectores-estrategicos/construccion",
        companies: [
          {
            name: "COPACHISA",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/construccion/copachisa",
          },
          {
            name: "EMYCSA",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/construccion/emycsa",
          },
          {
            name: "DEMEK",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/construccion/demek",
          },
        ],
      },
      {
        title: "Sector Inmobiliario",
        href: "/sectores-estrategicos/inmobiliario",
        companies: [
          {
            name: "Inmobiliaria Punto Alto",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/inmobiliario/inmobiliaria-punto-alto",
          },
          {
            name: "Desarrollos Inmobiliarios",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/inmobiliario/desarrollos-inmobiliarios",
          },
        ],
      },
      {
        title: "Sector Aeronáutico",
        href: "/sectores-estrategicos/aeronautico",
        companies: [
          {
            name: "Aero Services",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/aeronautico/aero-services",
          },
        ],
      },
      {
        title: "Sector Metalmecánico",
        href: "/sectores-estrategicos/metalmecanico",
        companies: [
          {
            name: "Metal Solutions",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/metalmecanico/metal-solutions",
          },
        ],
      },
      {
        title: "Sector Servicios",
        href: "/sectores-estrategicos/servicios",
        companies: [
          {
            name: "Servicios Integrales",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/servicios-integrales",
          },
        ],
      },
    ],
  },
  {
    title: "CAPITAL HUMANO",
    href: "/capital-humano",
  },
  {
    title: "NOTICIAS",
    href: "/noticias",
  },
  {
    title: "CONTACTO",
    href: "/contacto",
  },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [openSectors, setOpenSectors] = useState<number[]>([]);

  const toggleMenu = (index: number) => {
    setOpenMenus((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const toggleSector = (index: number) => {
    setOpenSectors((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menú móvil */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white z-50 shadow-xl transform transition-transform duration-300 overflow-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.jpeg"
              alt="Grupo Punto Alto"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-2">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(index)}
                      className="flex items-center justify-between w-full p-3 text-left text-[#0e2240] hover:bg-gray-50 rounded-md"
                    >
                      <span className="font-medium">{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          openMenus.includes(index) && "rotate-180"
                        )}
                      />
                    </button>

                    {openMenus.includes(index) && (
                      <div className="pl-4 pb-2">
                        {!item.isSectorMenu ? (
                          // Menú simple
                          <ul className="space-y-1">
                            {(item.submenu as SimpleMenuItem[]).map(
                              (subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.href}
                                    className="block p-2 text-[#0e2240] hover:text-[#1a62b3] hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        ) : (
                          // Menú de sectores
                          <ul className="space-y-1">
                            {(item.submenu as SectorMenuItem[]).map(
                              (sector, sectorIndex) => (
                                <li
                                  key={sectorIndex}
                                  className="border-b border-gray-100 last:border-b-0 py-1"
                                >
                                  <button
                                    onClick={() => toggleSector(sectorIndex)}
                                    className="flex items-center justify-between w-full p-2 text-left text-[#0e2240] hover:bg-gray-50 rounded-md"
                                  >
                                    <span>{sector.title}</span>
                                    <ChevronRight
                                      className={cn(
                                        "h-4 w-4 transition-transform",
                                        openSectors.includes(sectorIndex) &&
                                          "rotate-90"
                                      )}
                                    />
                                  </button>

                                  {openSectors.includes(sectorIndex) && (
                                    <div className="pl-4 pt-2 pb-1">
                                      <div className="grid grid-cols-2 gap-2">
                                        {sector.companies.map(
                                          (company, companyIndex) => (
                                            <Link
                                              key={companyIndex}
                                              href={company.href}
                                              className="flex flex-col items-center p-2 border border-gray-200 rounded-md hover:shadow-sm"
                                              onClick={() => setIsOpen(false)}
                                            >
                                              <Image
                                                src={
                                                  company.logo ||
                                                  "/placeholder.svg"
                                                }
                                                alt={company.name}
                                                width={80}
                                                height={40}
                                                className="object-contain h-8 mb-1"
                                              />
                                              <span className="text-xs text-center text-gray-600">
                                                {company.name}
                                              </span>
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block p-3 text-[#0e2240] hover:bg-gray-50 hover:text-[#1a62b3] font-medium rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
