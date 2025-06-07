import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  image: string
}

export default function NewsCard({ title, date, excerpt, image }: NewsCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-lg font-bold text-[#0e2240] mb-3 group-hover:text-[#1a62b3] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{excerpt}</p>
          <Link href="#" className="text-[#1a62b3] hover:underline text-sm font-medium">
            Leer más →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
