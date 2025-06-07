"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

const stats = [
  {
    id: 1,
    value: 14,
    label: "EMPRESAS",
    suffix: "",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    value: 2000,
    label: "COLABORADORES",
    suffix: "+",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 3,
    value: 7,
    label: "PLANTAS INDUSTRIALES",
    suffix: "",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 4,
    value: 30,
    label: "AÑOS DE EXPERIENCIA",
    suffix: "+",
    color: "from-blue-600 to-blue-400",
  },
]

export default function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="bg-gradient-to-r from-blue-900 to-blue-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ stat, inView }: { stat: any; inView: boolean }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (inView) {
      const duration = 2000 // ms
      const startTime = Date.now()
      const endValue = stat.value

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        const currentValue = Math.floor(progress * endValue)

        if (countRef.current !== currentValue) {
          countRef.current = currentValue
          setCount(currentValue)
        }

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(updateCount)
        }
      }

      frameRef.current = requestAnimationFrame(updateCount)

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    }
  }, [inView, stat.value])

  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-bold text-4xl md:text-5xl text-white mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-white/80 text-sm tracking-wider">{stat.label}</div>
    </div>
  )
}
