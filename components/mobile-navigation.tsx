"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { menuItems, SectorMenuItem, SimpleMenuItem } from "@/constants/menu";

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

  // Encontrar el índice del menú de sectores
  const sectorsIndex = menuItems.findIndex(
    (item) => item.title === "SECTORES ESTRATÉGICOS"
  );

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
              src="/placeholder.svg?height=40&width=120"
              alt="Grupo JC Rodríguez"
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
                {/* Menú de sectores con nuevo diseño */}
                {index === sectorsIndex ? (
                  <div className="py-2">
                    <div
                      className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                      onClick={() => toggleMenu(index)}
                    >
                      <span className="text-[#0e2240]">{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          openMenus.includes(index) && "rotate-180"
                        )}
                      />
                    </div>

                    {openMenus.includes(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-4 mt-2"
                      >
                        {(item.submenu as SectorMenuItem[]).map(
                          (sector, sectorIndex) => (
                            <div key={sectorIndex} className="space-y-2">
                              <Link
                                href={sector.href}
                                className="block text-[#0e2240] font-medium hover:text-[#1a62b3]"
                                onClick={() => setIsOpen(false)}
                              >
                                {sector.title}
                              </Link>
                              <div className="pl-3 space-y-1 border-l border-gray-200">
                                {sector.companies.map(
                                  (company, companyIndex) => (
                                    <Link
                                      key={companyIndex}
                                      href={company.href}
                                      className="block text-sm text-gray-600 hover:text-[#1a62b3]"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {company.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </motion.div>
                    )}
                  </div>
                ) : /* Otros elementos del menú mantienen su estilo original */
                item.submenu ? (
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
