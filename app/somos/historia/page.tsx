import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"
import { PageHeader } from "@/components/page-header"
import { ParallaxSection } from "@/components/parallax-section"

export default function HistoriaPage() {
  // Datos para la línea de tiempo
  const timelineEvents = [
    {
      year: "1990",
      title: "Fundación",
      description:
        "Grupo Punto Alto nace como una pequeña empresa constructora en Chihuahua, con la visión de convertirse en un referente en el sector de la construcción.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "1995",
      title: "Expansión Regional",
      description:
        "Tras el éxito de sus primeros proyectos, la empresa comienza su expansión a otros estados del norte de México, consolidando su presencia en la región.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "2000",
      title: "Diversificación",
      description:
        "Se inicia el proceso de diversificación con la creación de nuevas empresas en los sectores inmobiliario y metalmecánico, ampliando la oferta de servicios del grupo.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "2005",
      title: "Internacionalización",
      description:
        "Grupo Punto Alto comienza a participar en proyectos internacionales, estableciendo alianzas estratégicas con empresas líderes en diferentes países.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "2010",
      title: "Innovación Tecnológica",
      description:
        "Se implementan nuevas tecnologías y procesos innovadores en todas las empresas del grupo, mejorando la eficiencia y calidad de los servicios ofrecidos.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "2015",
      title: "Responsabilidad Social",
      description:
        "Se establece la Fundación Punto Alto, enfocada en proyectos de desarrollo social y comunitario en las regiones donde opera el grupo empresarial.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "2020",
      title: "Transformación Digital",
      description:
        "El grupo implementa una estrategia integral de transformación digital, adaptándose a las nuevas tendencias y necesidades del mercado global.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "Hoy",
      title: "Liderazgo Consolidado",
      description:
        "Actualmente, Grupo Punto Alto es un conglomerado empresarial líder con presencia en múltiples sectores y un compromiso inquebrantable con la excelencia y la innovación.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <PageHeader
          title="Nuestra Historia"
          description="Conoce la trayectoria de Grupo Punto Alto, desde sus inicios hasta convertirse en un grupo empresarial líder en múltiples sectores."
          backgroundImage="/placeholder.svg?height=1200&width=1920"
        />

        {/* Introducción */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0e2240] mb-6">Más de tres décadas de excelencia</h2>
                <p className="text-gray-700 mb-6">
                  Desde su fundación en 1990, Grupo Punto Alto ha recorrido un camino de crecimiento constante,
                  superando desafíos y aprovechando oportunidades para convertirse en un referente empresarial en
                  México.
                </p>
                <p className="text-gray-700 mb-6">
                  Lo que comenzó como una pequeña empresa constructora en Chihuahua, hoy es un grupo empresarial
                  diversificado con presencia en los sectores de la construcción, inmobiliario, metalmecánico,
                  aeronáutico y de servicios.
                </p>
                <p className="text-gray-700">
                  Nuestra historia es un testimonio de perseverancia, visión estratégica y compromiso con la excelencia,
                  valores que siguen guiando nuestro camino hacia el futuro.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Fundadores de Grupo Punto Alto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección Parallax */}
        <ParallaxSection
          imageUrl="/placeholder.svg?height=1200&width=1920"
          title="Construyendo el futuro desde 1990"
          description="A lo largo de nuestra historia, hemos participado en proyectos emblemáticos que han transformado el paisaje urbano y contribuido al desarrollo económico y social de las comunidades donde operamos."
          ctaText="Conoce nuestros proyectos"
          ctaLink="/proyectos"
          colorBox="blue"
        />

        {/* Línea de Tiempo */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">Nuestra Trayectoria</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Explora los momentos clave que han definido la historia de Grupo Punto Alto y su evolución hasta
                convertirse en un grupo empresarial líder.
              </p>
            </div>

            <Timeline events={timelineEvents} />
          </div>
        </section>

        {/* Valores y Filosofía */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">Valores que nos Definen</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Desde nuestros inicios, hemos mantenido un conjunto de valores fundamentales que guían nuestras
                decisiones y acciones en todos los niveles de la organización.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1a62b3"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e2240] mb-2">Excelencia</h3>
                <p className="text-gray-700">
                  Buscamos la excelencia en todo lo que hacemos, superando expectativas y estableciendo nuevos
                  estándares de calidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1a62b3"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e2240] mb-2">Innovación</h3>
                <p className="text-gray-700">
                  Fomentamos la innovación y la creatividad para encontrar soluciones únicas a los desafíos más
                  complejos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1a62b3"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e2240] mb-2">Colaboración</h3>
                <p className="text-gray-700">
                  Creemos en el poder del trabajo en equipo y la colaboración para lograr resultados extraordinarios.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1a62b3"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e2240] mb-2">Integridad</h3>
                <p className="text-gray-700">
                  Actuamos con honestidad, transparencia y ética en todas nuestras relaciones comerciales y personales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fundadores */}
        <section className="py-16 px-4 md:px-6 bg-[#0e2240] text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Fundadores</h2>
              <p className="max-w-3xl mx-auto text-gray-300">
                Conoce a las personas visionarias que sentaron las bases de lo que hoy es Grupo Punto Alto, con su
                liderazgo, determinación y visión de futuro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a3152] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Fundador 1" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Carlos Rodríguez</h3>
                  <p className="text-gray-300 mb-4">
                    Fundador y Presidente del Consejo de Administración. Su visión y liderazgo han sido fundamentales
                    para el crecimiento y éxito del grupo.
                  </p>
                </div>
              </div>

              <div className="bg-[#1a3152] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Fundador 2" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ana Martínez</h3>
                  <p className="text-gray-300 mb-4">
                    Co-fundadora y Directora de Innovación. Su enfoque en la innovación y la excelencia ha impulsado la
                    transformación continua del grupo.
                  </p>
                </div>
              </div>

              <div className="bg-[#1a3152] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Fundador 3" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Roberto Sánchez</h3>
                  <p className="text-gray-300 mb-4">
                    Co-fundador y Director de Operaciones. Su experiencia y conocimiento técnico han sido clave para el
                    desarrollo de proyectos exitosos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-[#1a62b3]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Sé parte de nuestra historia</h2>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto">
              En Grupo Punto Alto, estamos construyendo el futuro día a día. Te invitamos a conocer más sobre nuestras
              empresas y a explorar las oportunidades de colaboración y crecimiento que ofrecemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#1a62b3] hover:bg-gray-100">
                Conoce nuestras empresas <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Oportunidades de carrera <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
