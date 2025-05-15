import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Calendar } from "lucide-react"

interface ProjectCardProps {
  title: string
  location: string
  year: string
  description: string
  image: string
}

export function ProjectCard({ title, location, year, description, image }: ProjectCardProps) {
  // Generate a slug from the title
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0e2240] mb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {year}
          </div>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <Link
          href={`/proyectos/${slug}`}
          className="text-[#1a62b3] hover:underline inline-flex items-center font-medium"
        >
          Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
