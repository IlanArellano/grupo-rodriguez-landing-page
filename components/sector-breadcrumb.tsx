import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectorBreadcrumbProps {
  sector: string
  company: string
}

export function SectorBreadcrumb({ sector, company }: SectorBreadcrumbProps) {
  // Generate slugs
  const sectorSlug = sector.toLowerCase().replace(/\s+/g, "-")
  const companySlug = company.toLowerCase().replace(/\s+/g, "-")

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="text-white hover:text-gray-200 text-sm font-medium">
            Inicio
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-white" />
            <Link href="/sectores-estrategicos" className="ml-1 text-white hover:text-gray-200 text-sm font-medium">
              Sectores Estratégicos
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-white" />
            <Link
              href={`/sectores-estrategicos/${sectorSlug}`}
              className="ml-1 text-white hover:text-gray-200 text-sm font-medium"
            >
              {sector}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="ml-1 text-gray-300 text-sm font-medium">{company}</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
