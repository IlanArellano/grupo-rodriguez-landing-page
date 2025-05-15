import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  image: string
}

export function NewsCard({ title, date, excerpt, image }: NewsCardProps) {
  // Generate a slug from the title
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold text-[#0e2240] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/noticias/${slug}`}
          className="text-[#1a62b3] hover:underline inline-flex items-center font-medium"
        >
          Leer más <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
