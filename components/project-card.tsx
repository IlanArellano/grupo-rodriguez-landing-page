import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  location: string
  year: string
  description: string
  image: string
}

export default function ProjectCard({ title, location, year, description, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-[#1a62b3] text-white px-3 py-1 rounded-full text-sm font-medium">
          {year}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#0e2240] mb-2">{title}</h3>
        <p className="text-[#1a62b3] font-medium mb-3">{location}</p>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}
