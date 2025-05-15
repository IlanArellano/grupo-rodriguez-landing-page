import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ParallaxSection } from "@/components/parallax-section"
import { Card, CardContent } from "@/components/ui/card"

export default function FilosofiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <PageHeader
          title="Filosofía GPA"
          description="Conoce los principios y valores que guían nuestras acciones y decisiones en Grupo Punto Alto."
          backgroundImage="/placeholder.svg?height=1200&width=1920"
        />

        {/* Misión y Visión */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0e2240] mb-6">Nuestra Filosofía</h2>
                <p className="text-gray-700 mb-6">
                  En Grupo Punto Alto, nuestra filosofía empresarial se basa en un conjunto de principios y valores que
                  guían nuestras acciones y decisiones en todos los niveles de la organización. Creemos firmemente que
                  el éxito sostenible se construye sobre una base sólida de ética, excelencia e innovación.
                </p>
                <p className="text-gray-700">
                  Nuestro enfoque integral nos permite ofrecer soluciones de alta calidad que satisfacen las necesidades
                  de nuestros clientes, mientras contribuimos positivamente al desarrollo de las comunidades donde
                  operamos y al bienestar de nuestros colaboradores.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Equipo de Grupo Punto Alto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión Cards */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mb-6">
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
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0e2240] mb-4">Misión</h3>
                  <p className="text-gray-700 mb-4">
                    Proporcionar soluciones integrales de alta calidad en los sectores de la construcción, inmobiliario,
                    metalmecánico, aeronáutico y de servicios, superando las expectativas de nuestros clientes y
                    generando valor para nuestros accionistas, colaboradores y la sociedad.
                  </p>
                  <p className="text-gray-700">
                    Nos comprometemos a operar con los más altos estándares de calidad, seguridad y responsabilidad
                    social, contribuyendo al desarrollo sostenible de las comunidades donde tenemos presencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg border-0">
                <div className="h-2 bg-[#0e2240]"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#0e2240]/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#0e2240"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0e2240] mb-4">Visión</h3>
                  <p className="text-gray-700 mb-4">
                    Ser un grupo empresarial líder y referente en los sectores donde operamos, reconocido por nuestra
                    excelencia, innovación y compromiso con el desarrollo sostenible.
                  </p>
                  <p className="text-gray-700">
                    Aspiramos a expandir nuestra presencia nacional e internacional, diversificar nuestras operaciones y
                    consolidarnos como una organización que transforma positivamente la industria y la sociedad a través
                    de soluciones innovadoras y prácticas empresariales responsables.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">Nuestros Valores</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Los valores de Grupo Punto Alto son los pilares fundamentales que definen nuestra cultura organizacional
                y guían nuestro comportamiento en todas las actividades que realizamos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2240] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#1a62b3"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </span>
                    Excelencia
                  </h3>
                  <p className="text-gray-700">
                    Buscamos la excelencia en todo lo que hacemos, superando expectativas y estableciendo nuevos
                    estándares de calidad en nuestros productos, servicios y procesos.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2240] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#1a62b3"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        />
                      </svg>
                    </span>
                    Innovación
                  </h3>
                  <p className="text-gray-700">
                    Fomentamos la innovación y la creatividad para encontrar soluciones únicas a los desafíos más
                    complejos, adaptándonos constantemente a un entorno empresarial en evolución.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2240] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#1a62b3"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </span>
                    Colaboración
                  </h3>
                  <p className="text-gray-700">
                    Creemos en el poder del trabajo en equipo y la colaboración para lograr resultados extraordinarios,
                    valorando la diversidad de perspectivas y experiencias.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2240] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#1a62b3"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                        />
                      </svg>
                    </span>
                    Integridad
                  </h3>
                  <p className="text-gray-700">
                    Actuamos con honestidad, transparencia y ética en todas nuestras relaciones comerciales y
                    personales, manteniendo los más altos estándares de conducta empresarial.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2240] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#1a62b3"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                        />
                      </svg>
                    </span>
                    Compromiso
                  </h3>
                  <p className="text-gray-700">
                    Nos comprometemos plenamente con nuestros clientes, colaboradores, accionistas y comunidades,
                    asumiendo la responsabilidad de nuestras acciones y cumpliendo nuestras promesas.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="h-2 bg-[#1a62b3]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0e2240] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#1a62b3]/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#1a62b3"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                        />
                      </svg>
                    </span>
                    Sostenibilidad
                  </h3>
                  <p className="text-gray-700">
                    Promovemos el desarrollo sostenible en todas nuestras operaciones, buscando el equilibrio entre el
                    crecimiento económico, el bienestar social y la protección del medio ambiente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sección Parallax */}
        <ParallaxSection
          imageUrl="/placeholder.svg?height=1200&width=1920"
          title="Nuestra cultura organizacional"
          description="En Grupo Punto Alto, fomentamos una cultura organizacional basada en el respeto, la colaboración y el desarrollo continuo, creando un ambiente de trabajo positivo donde cada colaborador puede alcanzar su máximo potencial."
          ctaText="Conoce nuestro equipo"
          ctaLink="/somos/equipo"
          colorBox="blue"
        />

        {/* Principios Estratégicos */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">Principios Estratégicos</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Nuestros principios estratégicos definen el enfoque que adoptamos para alcanzar nuestros objetivos y
                crear valor a largo plazo para todos nuestros grupos de interés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0e2240] mb-4">Enfoque en el Cliente</h3>
                <p className="text-gray-700 mb-4">
                  Colocamos a nuestros clientes en el centro de todo lo que hacemos, comprendiendo sus necesidades y
                  superando sus expectativas con soluciones innovadoras y de alta calidad.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Relaciones a largo plazo basadas en la confianza</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Soluciones personalizadas para cada cliente</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Mejora continua de nuestros productos y servicios</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0e2240] mb-4">Excelencia Operativa</h3>
                <p className="text-gray-700 mb-4">
                  Buscamos la excelencia en todos nuestros procesos y operaciones, optimizando recursos y maximizando la
                  eficiencia para ofrecer el mejor valor a nuestros clientes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Procesos estandarizados y eficientes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Adopción de tecnologías avanzadas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión basada en datos y resultados medibles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0e2240] mb-4">Desarrollo del Talento</h3>
                <p className="text-gray-700 mb-4">
                  Invertimos en el desarrollo profesional y personal de nuestros colaboradores, creando un ambiente de
                  trabajo que fomenta el crecimiento, la innovación y el bienestar.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Programas de capacitación y desarrollo continuo</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cultura de reconocimiento y valoración del talento</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Promoción del equilibrio entre vida laboral y personal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0e2240] mb-4">Responsabilidad Social</h3>
                <p className="text-gray-700 mb-4">
                  Asumimos nuestra responsabilidad con la sociedad y el medio ambiente, contribuyendo activamente al
                  desarrollo sostenible de las comunidades donde operamos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Programas de impacto social en nuestras comunidades</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Prácticas empresariales sostenibles y respetuosas con el medio ambiente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1a62b3] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Alianzas estratégicas para maximizar nuestro impacto positivo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-[#1a62b3]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Únete a nuestra filosofía</h2>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto">
              En Grupo Punto Alto, buscamos personas que compartan nuestra filosofía y valores, y que quieran contribuir
              a nuestra misión de proporcionar soluciones integrales de alta calidad que transformen positivamente la
              industria y la sociedad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#1a62b3] hover:bg-gray-100">
                Oportunidades de carrera <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Conoce nuestro código de ética <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
