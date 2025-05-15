import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">{title}</h1>
            {description && (
              <p className="text-white text-lg md:text-xl mb-6 drop-shadow-lg max-w-2xl">{description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
