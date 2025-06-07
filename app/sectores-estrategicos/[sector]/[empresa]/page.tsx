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
import ParallaxSection from "@/components/parallax-section";
import ProjectCard from "@/components/project-card";
import SectorBreadcrumb from "@/components/sector-breadcrumb";
import { dummy_companies, sectorNames } from "@/constants/dummy/companies";
import ContactSection from "@/components/contact-section";

// Esta función simula la obtención de datos de una empresa específica
// En una implementación real, estos datos vendrían de una API o CMS
function getCompanyData(company: string) {
  return (
    dummy_companies.find((comp) => comp.id === company) || dummy_companies[0]
  );
}

// Función para obtener el nombre del sector en formato legible
function getSectorName(sector: string) {
  return (
    sectorNames[sector] || sector.charAt(0).toUpperCase() + sector.slice(1)
  );
}

export default async function CompanyPage({
  params,
}: {
  params:
    | { sector: string; empresa: string }
    | Promise<{ sector: string; empresa: string }>;
}) {
  const { sector, empresa } = await params;
  const company = getCompanyData(empresa);
  const sectorName = getSectorName(sector);

  return (
    <div className="flex flex-col min-h-screen">
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
                  src="/placeholder.svg?height=800&width=600"
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

        <ContactSection />

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
    </div>
  );
}
