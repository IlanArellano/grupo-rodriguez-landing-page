"use client";

import Link from "next/link";
import Image from "next/image";
import { MainNavigation } from "@/components/main-navigation";
import { MobileNavigation } from "@/components/mobile-navigation";

export default function SiteHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Grupo JC Rodriguez"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <MainNavigation />

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
