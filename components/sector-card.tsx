import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface SectorCardProps {
  title: string
  description: string
  icon: string
}

export default function SectorCard({ title, description, icon }: SectorCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-bold text-[#0e2240] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
