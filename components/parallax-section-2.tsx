"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ParallaxSection2Props {
  imageUrl: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  alignment: "left" | "right"
  colorBox: "blue" | "orange"
}

export default function ParallaxSection2({
  imageUrl,
  title,
  description,
  ctaText,
  ctaLink,
  alignment,
  colorBox,
}: ParallaxSection2Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY
        const parallax = scrolled * 0.3
        containerRef.current.style.transform = `translateX(${alignment === "right" ? parallax : -parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [alignment])

  const boxColor = colorBox === "blue" ? "bg-[#1a62b3]" : "bg-orange-600"
  const justifyContent = alignment === "right" ? "justify-end" : "justify-start"

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex ${justifyContent}`}>
            <div ref={containerRef} className="max-w-2xl">
              <div className={`${boxColor} p-8 rounded-lg`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
                <Button asChild className="bg-white text-[#0e2240] hover:bg-gray-100">
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
