import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectorCardProps {
  title: string
  description: string
  icon: string
}

export function SectorCard({ title, description, icon }: SectorCardProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <Image src={icon || "/placeholder.svg"} alt={title} width={50} height={50} className="object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#0e2240]">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          href={`/sectores/${slug}`}
          className="text-[#1a62b3] hover:underline inline-flex items-center font-medium"
        >
          Conocer más <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
