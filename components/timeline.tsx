import Image from "next/image"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#1a62b3] h-full"></div>

      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            {/* Contenido */}
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-[#1a62b3] mb-2">{event.year}</div>
                <h3 className="text-xl font-bold text-[#0e2240] mb-3">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>

            {/* Punto central */}
            <div className="w-2/12 flex justify-center">
              <div className="w-4 h-4 bg-[#1a62b3] rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>

            {/* Imagen */}
            <div className={`w-5/12 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
