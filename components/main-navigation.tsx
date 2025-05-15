"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Definición de tipos para los menús
type SimpleMenuItem = {
  title: string
  href: string
}

type CompanyItem = {
  name: string
  logo: string
  href: string
}

type SectorMenuItem = {
  title: string
  href: string
  companies: CompanyItem[]
}

type MenuItem = {
  title: string
  href: string
  submenu?: SimpleMenuItem[] | SectorMenuItem[]
  isSectorMenu?: boolean
}

// Datos de ejemplo para el menú
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
      { title: "Responsabilidad Social Empresarial", href: "/somos/responsabilidad-social" },
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
]

export function MainNavigation() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const [activeSector, setActiveSector] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setActiveSector(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMenuHover = (index: number) => {
    setActiveMenu(index)
    setActiveSector(null)
  }

  const handleSectorHover = (index: number) => {
    setActiveSector(index)
  }

  return (
    <nav className="hidden lg:block" ref={menuRef}>
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => handleMenuHover(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className={cn(
                "text-[#0e2240] font-medium hover:text-[#1a62b3] py-4 flex items-center",
                activeMenu === index && item.submenu && "text-[#1a62b3]",
              )}
            >
              {item.title}
              {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
            </Link>

            {/* Menú desplegable simple */}
            {item.submenu && !item.isSectorMenu && activeMenu === index && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[250px] z-50">
                <div className="py-2">
                  {(item.submenu as SimpleMenuItem[]).map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-[#0e2240] hover:bg-gray-100 hover:text-[#1a62b3]"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Menú desplegable de sectores (dos niveles) */}
            {item.submenu && item.isSectorMenu && activeMenu === index && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg z-50 flex">
                {/* Columna izquierda - Sectores */}
                <div className="w-[250px] border-r border-gray-200">
                  {(item.submenu as SectorMenuItem[]).map((sector, sectorIndex) => (
                    <div
                      key={sectorIndex}
                      className={cn(
                        "px-4 py-3 flex items-center justify-between cursor-pointer",
                        activeSector === sectorIndex ? "bg-[#1a62b3] text-white" : "text-[#0e2240] hover:bg-gray-100",
                      )}
                      onMouseEnter={() => handleSectorHover(sectorIndex)}
                    >
                      <span>{sector.title}</span>
                      <ChevronDown className="h-4 w-4 transform rotate-[-90deg]" />
                    </div>
                  ))}
                </div>

                {/* Columna derecha - Empresas del sector seleccionado */}
                {activeSector !== null && (
                  <div className="p-6 min-w-[350px]">
                    <div className="grid grid-cols-1 gap-6">
                      {((item.submenu as SectorMenuItem[])[activeSector]?.companies || []).map(
                        (company, companyIndex) => (
                          <Link
                            key={companyIndex}
                            href={company.href}
                            className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                          >
                            <Image
                              src={company.logo || "/placeholder.svg"}
                              alt={company.name}
                              width={160}
                              height={80}
                              className="object-contain h-16"
                            />
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
