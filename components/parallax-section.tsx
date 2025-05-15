"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ParallaxSectionProps {
  imageUrl: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  colorBox?: "blue" | "orange"
}

export function ParallaxSection({
  imageUrl,
  title,
  description,
  ctaText,
  ctaLink,
  colorBox = "blue",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Calculate how far the section is from being centered in the viewport
      const distanceFromCenter = sectionTop - windowHeight / 2 + sectionRef.current.offsetHeight / 2

      // Calculate a scale factor based on scroll position
      // When the section is at the center of the viewport, scale will be 1.1
      // As it moves away, scale decreases to 1.0
      const scale = Math.max(1.0, 1.1 - Math.abs(distanceFromCenter) / (windowHeight * 0.8))

      // Apply the scale transform
      imageRef.current.style.transform = `scale(${scale})`
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Parallax Image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      {/* Content Box */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`max-w-lg p-8 md:p-12 ${colorBox === "blue" ? "bg-[#1a62b3]" : "bg-[#ff5800]"} text-white`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-white/90 mb-8">{description}</p>
            <Button
              asChild
              className={`${
                colorBox === "blue" ? "bg-white text-[#1a62b3]" : "bg-white text-[#ff5800]"
              } hover:bg-white/90`}
            >
              <a href={ctaLink}>
                {ctaText} <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
