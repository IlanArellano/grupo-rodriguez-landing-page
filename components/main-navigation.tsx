"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { menuItems, SectorMenuItem, SimpleMenuItem } from "@/constants/menu";

export function MainNavigation() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isSectorsMenuOpen, setIsSectorsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectorsMenuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
      if (
        sectorsMenuRef.current &&
        !sectorsMenuRef.current.contains(event.target as Node)
      ) {
        setIsSectorsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuHover = (index: number) => {
    setActiveMenu(index);
  };

  const toggleSectorsMenu = () => {
    setIsSectorsMenuOpen(!isSectorsMenuOpen);
  };

  // Encontrar el índice del menú de sectores
  const sectorsIndex = menuItems.findIndex(
    (item) => item.title === "SECTORES ESTRATÉGICOS"
  );

  return (
    <nav className="hidden lg:block" ref={menuRef}>
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => {
              if (index !== sectorsIndex) {
                handleMenuHover(index);
              }
            }}
            onMouseLeave={() => {
              if (index !== sectorsIndex) {
                setActiveMenu(null);
              }
            }}
          >
            {/* Menú de sectores con nuevo diseño */}
            {index === sectorsIndex ? (
              <div className="relative" ref={sectorsMenuRef}>
                <button
                  onClick={toggleSectorsMenu}
                  className={cn(
                    "text-[#0e2240] font-medium hover:text-[#1a62b3] py-4 flex items-center",
                    isSectorsMenuOpen && "text-[#1a62b3]"
                  )}
                >
                  {item.title}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isSectorsMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Menú desplegable de sectores con animación */}
                {isSectorsMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 py-2"
                  >
                    {(item.submenu as SectorMenuItem[]).map(
                      (sector, sectorIndex) => (
                        <div key={sectorIndex} className="px-2 py-2">
                          <Link
                            href={sector.href}
                            onClick={toggleSectorsMenu}
                            className="block px-2 py-1 text-[#0e2240] font-medium hover:bg-[#1a62b3]/10 hover:text-[#1a62b3] rounded"
                          >
                            {sector.title}
                          </Link>
                          <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                            {sector.companies.map((company, companyIndex) => (
                              <Link
                                key={companyIndex}
                                href={company.href}
                                onClick={toggleSectorsMenu}
                                className="block px-2 py-1 text-sm text-gray-600 hover:text-[#1a62b3] rounded"
                              >
                                {company.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </motion.div>
                )}
              </div>
            ) : (
              /* Otros elementos del menú mantienen su estilo original */
              <Link
                href={item.href}
                className={cn(
                  "text-[#0e2240] font-medium hover:text-[#1a62b3] py-4 flex items-center",
                  activeMenu === index && item.submenu && "text-[#1a62b3]"
                )}
              >
                {item.title}
                {item.submenu && !item.isSectorMenu && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </Link>
            )}

            {/* Menú desplegable simple (no sectores) */}
            {item.submenu && !item.isSectorMenu && activeMenu === index && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[250px] z-50">
                <div className="py-2">
                  {(item.submenu as SimpleMenuItem[]).map(
                    (subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-[#0e2240] hover:bg-gray-100 hover:text-[#1a62b3]"
                      >
                        {subItem.title}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
