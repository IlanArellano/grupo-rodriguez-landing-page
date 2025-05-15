"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ParallaxSection2Props {
  imageUrl: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  alignment?: "left" | "right"
  colorBox?: "blue" | "orange"
}

export function ParallaxSection2({
  imageUrl,
  title,
  description,
  ctaText,
  ctaLink,
  alignment = "left",
  colorBox = "blue",
}: ParallaxSection2Props) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY

      // Calculate how far we've scrolled into the section
      const scrollPercentage = Math.max(
        0,
        Math.min(1, (window.innerHeight - sectionRect.top) / (window.innerHeight + sectionRect.height)),
      )

      // Apply a translate effect based on scroll position
      // This creates a subtle movement as you scroll
      const translateY = scrollPercentage * 50 // 50px maximum movement

      imageRef.current.style.transform = `translateY(${-translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Parallax Image with translate effect */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      {/* Content Box */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`max-w-lg p-8 md:p-12 ${
              colorBox === "blue" ? "bg-[#1a62b3]" : "bg-[#ff5800]"
            } text-white ${alignment === "right" ? "ml-auto" : ""}`}
          >
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
