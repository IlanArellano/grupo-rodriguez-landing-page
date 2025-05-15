"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-[#0e2240] mb-4">Contáctanos</h3>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-[#0e2240]">
            Nombre
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-[#0e2240]">
            Correo electrónico
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-[#0e2240]">
            Teléfono
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu teléfono"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-[#0e2240]">
            Mensaje
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            required
            className="mt-1 min-h-[120px]"
          />
        </div>

        <Button type="submit" className="w-full bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : submitSuccess ? "¡Enviado!" : "Enviar mensaje"}
        </Button>
      </div>
    </form>
  )
}
