import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/timeline";
import PageHeader from "@/components/page-header";
import ParallaxSection from "@/components/parallax-section";

export default function HistoriaPage() {
  // Datos para la línea de tiempo
  const timelineEvents = [
    {
      year: "1990",
      title: "Fundación",
      description:
        "Grupo JC Rodríguez nace como una pequeña empresa constructora en Chihuahua, con la visión de convertirse en un referente en el sector de la construcción.",
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
        "Grupo JC Rodríguez comienza a participar en proyectos internacionales, estableciendo alianzas estratégicas con empresas líderes en diferentes países.",
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
        "Actualmente, Grupo JC Rodríguez es un conglomerado empresarial líder con presencia en múltiples sectores y un compromiso inquebrantable con la excelencia y la innovación.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <PageHeader
          title="Nuestra Historia"
          description="Conoce la trayectoria de Grupo JC Rodríguez, desde sus inicios hasta convertirse en un grupo empresarial líder en múltiples sectores."
          backgroundImage="/placeholder.svg?height=1200&width=1920"
        />

        {/* Introducción */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0e2240] mb-6">
                  Más de tres décadas de excelencia
                </h2>
                <p className="text-gray-700 mb-6">
                  Grupo Jc Rodriguez es una empresa perteneciente al Grupo
                  Industrial Rodriguez asi como Grupo Jc Roes, Grupo J&c
                  Rodriguez y Consorcio Empresarial Rodriguez todas ellas
                  fundadas por el Ing. Isidro Javier Rodriguez Lopez en 2018,
                  Grupo Jc Rodriguez ha sido pionero en desarrollar
                  oportunidades de inversión nacional y extranjera, su
                  compromiso ha sido contribuir al crecimiento de mexico y al
                  desarrollo de sus comunidades compromiso que mantiene hasta la
                  fecha. Grupo Jc Rodriguez se compone de15 solidas unidades de
                  negocios con las cuales ofrece servicios y productos, dando
                  paso asi una presencia nacional y extrajera
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Fundadores de Grupo JC Rodríguez"
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
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">
                Nuestra Trayectoria
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Explora los momentos clave que han definido la historia de Grupo
                Punto Alto y su evolución hasta convertirse en un grupo
                empresarial líder.
              </p>
            </div>

            <Timeline events={timelineEvents} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-[#1a62b3]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sé parte de nuestra historia
            </h2>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto">
              En Grupo JC Rodríguez, estamos construyendo el futuro día a día.
              Te invitamos a conocer más sobre nuestras empresas y a explorar
              las oportunidades de colaboración y crecimiento que ofrecemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#1a62b3] hover:bg-gray-100">
                Conoce nuestras empresas{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Oportunidades de carrera{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
