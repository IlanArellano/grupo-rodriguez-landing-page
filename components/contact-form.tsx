"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-white text-[#1a62b3] hover:bg-gray-100">
            Enviar mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
