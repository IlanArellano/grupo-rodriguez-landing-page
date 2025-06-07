import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectorBreadcrumbProps {
  sector: string
  company: string
}

export default function SectorBreadcrumb({ sector, company }: SectorBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-white/80 text-sm">
      <Link href="/" className="hover:text-white">
        Inicio
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/sectores-estrategicos" className="hover:text-white">
        Sectores Estratégicos
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href={`/sectores-estrategicos/${sector.toLowerCase()}`} className="hover:text-white">
        {sector}
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-white font-medium">{company}</span>
    </nav>
  )
}
