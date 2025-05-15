import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Globe,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ParallaxSection } from "@/components/parallax-section";
import { ProjectCard } from "@/components/project-card";
import { SectorBreadcrumb } from "@/components/sector-breadcrumb";

// Esta función simula la obtención de datos de una empresa específica
// En una implementación real, estos datos vendrían de una API o CMS
function getCompanyData(sector: string, company: string) {
  // Datos de ejemplo para Copachisa en el sector construcción
  if (sector === "construccion" && company === "copachisa") {
    return {
      name: "Copachisa",
      logo: "/images/copachisa_logo.png",
      heroImage:
        "https://mx.ternium.com/media/ad0pavqu/acero-para-construccion.jpg",
      description:
        "Copachisa es una empresa líder en el sector de la construcción con más de 50 años de experiencia, especializada en el desarrollo de proyectos industriales, comerciales y residenciales de alta calidad.",
      longDescription:
        "Fundada en 1970, Copachisa se ha consolidado como una de las empresas constructoras más importantes de México. Con presencia en todo el país, la empresa ha desarrollado proyectos emblemáticos que han contribuido al crecimiento y desarrollo de diversas comunidades. Su compromiso con la excelencia, la innovación y la sostenibilidad la han posicionado como un referente en la industria de la construcción.",
      services: [
        {
          title: "Construcción Industrial",
          description:
            "Desarrollo de plantas industriales, naves, centros de distribución y complejos logísticos con los más altos estándares de calidad y seguridad.",
          icon: "https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0",
        },
        {
          title: "Edificación Comercial",
          description:
            "Construcción de centros comerciales, oficinas, hoteles y espacios de uso mixto, optimizando espacios y recursos para maximizar el retorno de inversión.",
          icon: "https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0",
        },
        {
          title: "Proyectos Residenciales",
          description:
            "Desarrollo de complejos residenciales, condominios y viviendas de lujo, con enfoque en la calidad, el confort y la sostenibilidad.",
          icon: "https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0",
        },
        {
          title: "Infraestructura",
          description:
            "Construcción de obras de infraestructura como carreteras, puentes, sistemas hidráulicos y proyectos de urbanización.",
          icon: "https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0",
        },
      ],
      features: [
        "Certificación ISO 9001:2015",
        "Más de 500 proyectos completados",
        "Presencia en 15 estados de la República",
        "Equipo de más de 1,000 profesionales",
        "Tecnología BIM para diseño y construcción",
        "Compromiso con la sostenibilidad y el medio ambiente",
      ],
      projects: [
        {
          title: "Centro Comercial Paseo Central",
          location: "Chihuahua, Chihuahua",
          image: "/images/11-1.jpg",
          description:
            "Desarrollo de centro comercial de 45,000 m² con más de 100 locales comerciales, áreas de entretenimiento y estacionamiento para 1,200 vehículos.",
          year: "2023",
        },
        {
          title: "Planta Industrial Automotriz",
          location: "Ramos Arizpe, Coahuila",
          image: "/images/11-1.jpg",
          description:
            "Construcción de planta industrial de 80,000 m² para la fabricación de componentes automotrices, incluyendo áreas de producción, almacenes y oficinas administrativas.",
          year: "2022",
        },
        {
          title: "Torres Residenciales Horizonte",
          location: "Monterrey, Nuevo León",
          image: "/images/11-1.jpg",
          description:
            "Desarrollo de complejo residencial de lujo con 3 torres de 25 pisos cada una, 300 departamentos, áreas comunes y amenidades de primer nivel.",
          year: "2021",
        },
        {
          title: "Hospital Regional",
          location: "Ciudad Juárez, Chihuahua",
          image: "/images/11-1.jpg",
          description:
            "Construcción de hospital de especialidades con 250 camas, 10 quirófanos, áreas de diagnóstico, consultorios y estacionamiento subterráneo.",
          year: "2020",
        },
      ],
      contact: {
        address: "Av. Tecnológico #1234, Col. Centro, Chihuahua, Chih.",
        phone: "+52 (614) 123.45.67",
        email: "contacto@copachisa.com",
        website: "www.copachisa.com",
      },
    };
  }

  // Datos genéricos para cualquier otra combinación
  return {
    name: company.charAt(0).toUpperCase() + company.slice(1),
    logo: "/placeholder.svg?height=200&width=400",
    heroImage: "/placeholder.svg?height=1200&width=1920",
    description: `Empresa líder en el sector ${sector} con amplia experiencia y trayectoria.`,
    longDescription: `Descripción detallada de la empresa en el sector ${sector}.`,
    services: [
      {
        title: "Servicio 1",
        description: "Descripción del servicio 1.",
        icon: "https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0",
      },
      {
        title: "Servicio 2",
        description: "Descripción del servicio 2.",
        icon: "/placeholder.svg?height=80&width=80",
      },
    ],
    features: ["Característica 1", "Característica 2", "Característica 3"],
    projects: [
      {
        title: "Proyecto 1",
        location: "Ubicación",
        image: "/placeholder.svg?height=600&width=800",
        description: "Descripción del proyecto 1.",
        year: "2023",
      },
      {
        title: "Proyecto 2",
        location: "Ubicación",
        image: "/placeholder.svg?height=600&width=800",
        description: "Descripción del proyecto 2.",
        year: "2022",
      },
    ],
    contact: {
      address: "Dirección de la empresa",
      phone: "+52 (000) 000.00.00",
      email: "contacto@empresa.com",
      website: "www.empresa.com",
    },
  };
}

// Función para obtener el nombre del sector en formato legible
function getSectorName(sector: string) {
  const sectorNames: { [key: string]: string } = {
    construccion: "Construcción",
    inmobiliario: "Inmobiliario",
    metalmecanico: "Metalmecánico",
    aeronautico: "Aeronáutico",
    servicios: "Servicios",
  };

  return (
    sectorNames[sector] || sector.charAt(0).toUpperCase() + sector.slice(1)
  );
}

export default function CompanyPage({
  params,
}: {
  params: { sector: string; empresa: string };
}) {
  const { sector, empresa } = params;
  const company = getCompanyData(sector, empresa);
  const sectorName = getSectorName(sector);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header y navegación se heredarían del layout principal */}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={company.heroImage || "/placeholder.svg"}
            alt={company.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 md:px-6">
              <SectorBreadcrumb sector={sectorName} company={company.name} />
              <div className="mt-8 max-w-3xl">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block mb-6">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={240}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {company.name}
                </h1>
                <p className="text-white text-lg md:text-xl mb-6 drop-shadow-lg max-w-2xl">
                  {company.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                    Contactar <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                  >
                    Ver Sitio Web <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0e2240] mb-6">
                  Sobre {company.name}
                </h2>
                <p className="text-gray-700 mb-6">{company.longDescription}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {company.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                  Conocer más <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/13.jpg"
                  alt={`Oficinas de ${company.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <ParallaxSection
          imageUrl="https://mx.ternium.com/media/knhjsh4b/construccio-n-edificios-meta-licos.jpg"
          title={`Excelencia en ${sectorName}`}
          description={`En ${
            company.name
          }, nos comprometemos a ofrecer soluciones de la más alta calidad en el sector ${sectorName.toLowerCase()}, combinando experiencia, tecnología e innovación para superar las expectativas de nuestros clientes.`}
          ctaText="Conoce nuestros servicios"
          ctaLink={`/sectores-estrategicos/${sector}/${empresa}/servicios`}
          colorBox="blue"
        />

        {/* Services Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Ofrecemos una amplia gama de servicios especializados para
                satisfacer las necesidades de nuestros clientes en el sector{" "}
                {sectorName.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {company.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#0e2240]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">
                Proyectos Destacados
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Conoce algunos de nuestros proyectos más emblemáticos que
                demuestran nuestra experiencia y capacidad en el sector{" "}
                {sectorName.toLowerCase()}.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="recent">Recientes</TabsTrigger>
                  <TabsTrigger value="featured">Destacados</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {company.projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      location={project.location}
                      year={project.year}
                      description={project.description}
                      image={project.image}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {company.projects.slice(0, 2).map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      location={project.location}
                      year={project.year}
                      description={project.description}
                      image={project.image}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="featured" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {company.projects.slice(2, 4).map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      location={project.location}
                      year={project.year}
                      description={project.description}
                      image={project.image}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <Button className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                Ver todos los proyectos{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 md:px-6 bg-[#0e2240] text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contacto</h2>
                <p className="mb-8">
                  ¿Tienes un proyecto en mente? Contáctanos para conocer cómo
                  podemos ayudarte a hacerlo realidad.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#1a62b3] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Dirección</h3>
                      <p className="text-gray-300">{company.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#1a62b3] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Teléfono</h3>
                      <p className="text-gray-300">{company.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#1a62b3] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Correo Electrónico</h3>
                      <p className="text-gray-300">{company.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-[#1a62b3] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Sitio Web</h3>
                      <p className="text-gray-300">{company.contact.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#0e2240] mb-4">
                  Envíanos un mensaje
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a62b3]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a62b3]"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a62b3]"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a62b3]"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Sector */}
        <section className="py-8 px-4 md:px-6 bg-gray-100">
          <div className="container mx-auto">
            <Link
              href={`/sectores-estrategicos/${sector}`}
              className="inline-flex items-center text-[#1a62b3] hover:underline font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Sector{" "}
              {sectorName}
            </Link>
          </div>
        </section>
      </main>

      {/* Footer se heredaría del layout principal */}
    </div>
  );
}
