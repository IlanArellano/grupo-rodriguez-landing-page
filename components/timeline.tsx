"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  const [activeEvent, setActiveEvent] = useState(0)

  const handlePrevious = () => {
    setActiveEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveEvent((prev) => (prev === events.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      {/* Timeline Bar */}
      <div className="hidden md:block h-1 bg-gray-200 absolute top-8 left-0 right-0 z-0">
        <div
          className="h-full bg-[#1a62b3] transition-all duration-500"
          style={{ width: `${((activeEvent + 1) / events.length) * 100}%` }}
        ></div>
      </div>

      {/* Timeline Points */}
      <div className="hidden md:flex justify-between mb-16 relative z-10">
        {events.map((event, index) => (
          <button
            key={index}
            className={cn(
              "w-16 flex flex-col items-center focus:outline-none",
              index <= activeEvent ? "text-[#1a62b3]" : "text-gray-400",
            )}
            onClick={() => setActiveEvent(index)}
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full mb-2 transition-all duration-300",
                index <= activeEvent ? "bg-[#1a62b3] scale-125" : "bg-gray-300",
              )}
            ></div>
            <span className="font-bold text-sm">{event.year}</span>
          </button>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden flex justify-between items-center mb-8">
        <Button variant="outline" size="icon" onClick={handlePrevious} className="flex-shrink-0">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="text-center">
          <span className="text-[#1a62b3] font-bold text-xl">{events[activeEvent].year}</span>
          <div className="flex justify-center mt-2">
            {events.map((_, index) => (
              <div
                key={index}
                className={cn("w-2 h-2 rounded-full mx-1", index === activeEvent ? "bg-[#1a62b3]" : "bg-gray-300")}
              ></div>
            ))}
          </div>
        </div>
        <Button variant="outline" size="icon" onClick={handleNext} className="flex-shrink-0">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Event Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-[#0e2240] mb-3">{events[activeEvent].title}</h3>
          <p className="text-gray-700 mb-6">{events[activeEvent].description}</p>
          <div className="flex items-center justify-between md:hidden">
            <Button variant="outline" size="sm" onClick={handlePrevious} className="flex-shrink-0">
              <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
            </Button>
            <Button variant="outline" size="sm" onClick={handleNext} className="flex-shrink-0">
              Siguiente <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={events[activeEvent].image || "/placeholder.svg"}
            alt={events[activeEvent].title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center mt-12">
        <Button variant="outline" onClick={handlePrevious} className="mr-4">
          <ChevronLeft className="h-4 w-4 mr-2" /> Anterior
        </Button>
        <Button variant="outline" onClick={handleNext}>
          Siguiente <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
