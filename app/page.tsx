import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectorCard from "@/components/sector-card";
import NewsCard from "@/components/news-card";
import HeroSlider from "@/components/hero-slider";
import ParallaxSection from "@/components/parallax-section";
import ParallaxSection2 from "@/components/parallax-section-2";
import CounterSection from "@/components/counter-section";
import ContactSection from "@/components/contact-section";
import StylizedLogo from "@/components/stylized-logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <HeroSlider />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  Soluciones integrales para proyectos a gran escala
                </h1>
                <p className="text-white text-lg md:text-xl mb-6 drop-shadow-lg">
                  Grupo empresarial líder en los sectores de la construcción,
                  inmobiliario, metalmecánico, aeronáutico y de servicios.
                </p>
                <Button className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                  Conoce más <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0e2240] mb-6">
                  Grupo JC Rodríguez
                </h2>
                <p className="text-gray-700 mb-6">
                  Somos un grupo empresarial con más de 20 años de experiencia,
                  comprometidos con la excelencia y la innovación en cada uno de
                  nuestros proyectos.
                </p>
                <p className="text-gray-700 mb-6">
                  Nuestra misión es proporcionar soluciones integrales de alta
                  calidad que satisfagan las necesidades de nuestros clientes,
                  contribuyendo al desarrollo económico y social de las
                  comunidades donde operamos.
                </p>
                <Button className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                  Conoce nuestra historia{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://mx.ternium.com/media/xhmljbyn/aceria_render.png?v=1d9a52f8a565560"
                  alt="Grupo JC Rodríguez"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section - Estadísticas animadas */}
        <CounterSection />

        {/* Primera sección Parallax con efecto de zoom */}
        <ParallaxSection
          imageUrl="https://mx.ternium.com/media/awnn3p3y/tx_home_automotriz_03.jpg"
          title="Innovación y excelencia en cada proyecto"
          description="En Grupo JC Rodríguez, combinamos tecnología de vanguardia con experiencia para ofrecer soluciones que superan las expectativas de nuestros clientes y establecen nuevos estándares en la industria."
          ctaText="Descubre nuestra tecnología"
          ctaLink="/tecnologia"
          colorBox="blue"
        />

        {/* Sectors Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">
                Sectores Estratégicos
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Nuestro grupo empresarial opera en diversos sectores
                estratégicos, ofreciendo soluciones especializadas y de alta
                calidad en cada uno de ellos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SectorCard
                title="Construcción"
                description="Desarrollo de proyectos de infraestructura, edificación y obra civil con los más altos estándares de calidad."
                icon="https://mx.ternium.com/media/ccrdpsdb/producto-de-acero-ternium-para-hospital.jpeg"
              />
              <SectorCard
                title="Inmobiliario"
                description="Desarrollo y comercialización de proyectos inmobiliarios residenciales, comerciales e industriales."
                icon="https://mx.ternium.com/media/koinsndg/edificio-acero-ternium.jpg"
              />
              <SectorCard
                title="Metalmecánico"
                description="Fabricación de estructuras metálicas, componentes y soluciones a medida para diversos sectores industriales."
                icon="https://mx.ternium.com/media/tpyaegho/acero-para-edificios-metalicos.jpeg"
              />
              <SectorCard
                title="Aeronáutico"
                description="Servicios especializados para la industria aeronáutica, incluyendo mantenimiento y fabricación de componentes."
                icon="https://mx.ternium.com/media/ydidvmua/edificios-meta-licos-ternium.jpg"
              />
              <SectorCard
                title="Servicios"
                description="Ofrecemos servicios integrales de consultoría, logística y gestión de proyectos para diversas industrias."
                icon="https://mx.ternium.com/media/ccrdpsdb/producto-de-acero-ternium-para-hospital.jpeg"
              />
              <SectorCard
                title="Innovación"
                description="Desarrollo de soluciones tecnológicas y procesos innovadores para mejorar la eficiencia y sostenibilidad."
                icon="https://mx.ternium.com/media/koinsndg/edificio-acero-ternium.jpg"
              />
            </div>
          </div>
        </section>

        {/* Projects Highlight */}
        <section className="py-16 px-4 md:px-6 bg-[#0e2240] text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
              <p className="max-w-3xl mx-auto text-gray-300">
                Conoce algunos de nuestros proyectos más emblemáticos que
                demuestran nuestra capacidad y compromiso con la excelencia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a3152] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0"
                    alt="Proyecto 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Centro Comercial Punto Alto
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Desarrollo inmobiliario comercial con más de 50,000 m² de
                    construcción, incluyendo tiendas, restaurantes y áreas de
                    entretenimiento.
                  </p>
                  <Link
                    href="/proyectos/1"
                    className="text-[#1a62b3] hover:underline inline-flex items-center"
                  >
                    Ver proyecto <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#1a3152] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0"
                    alt="Proyecto 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Complejo Industrial Aeroespacial
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Instalaciones de producción y mantenimiento para la
                    industria aeroespacial, con tecnología de punta y
                    certificaciones internacionales.
                  </p>
                  <Link
                    href="/proyectos/2"
                    className="text-[#1a62b3] hover:underline inline-flex items-center"
                  >
                    Ver proyecto <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#1a3152] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://mx.ternium.com/media/wy1fseqg/propymes.jpg?v=1d7d74c1f833da0"
                    alt="Proyecto 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Residencial Las Cumbres
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Desarrollo residencial de lujo con más de 200 unidades,
                    áreas verdes, amenidades y la mejor ubicación de la ciudad.
                  </p>
                  <Link
                    href="/proyectos/3"
                    className="text-[#1a62b3] hover:underline inline-flex items-center"
                  >
                    Ver proyecto <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-[#1a62b3] hover:bg-[#1a62b3]/90 text-white">
                Ver todos los proyectos{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Segunda sección Parallax con efecto de traslación */}
        <ParallaxSection2
          imageUrl="https://mx.ternium.com/media/3shn2gao/jmz_6152-baja.jpg"
          title="El futuro de la construcción está aquí"
          description="Nuestros proyectos incorporan las últimas tecnologías y materiales sostenibles para crear espacios que responden a las necesidades del mañana, optimizando recursos y minimizando el impacto ambiental."
          ctaText="Conoce nuestras soluciones"
          ctaLink="/soluciones"
          alignment="right"
          colorBox="orange"
        />

        {/* News Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0e2240] mb-4">
                Últimas Noticias
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Mantente informado sobre las últimas novedades, logros y eventos
                de Grupo JC Rodríguez.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <NewsCard
                title="Grupo JC Rodríguez inaugura nuevo complejo industrial"
                date="15 de mayo, 2025"
                excerpt="Con una inversión de más de 50 millones de dólares, inauguramos nuestro nuevo complejo industrial que generará más de 500 empleos directos."
                image="https://mx.ternium.com/media/jwwjlg42/foto1.jpg?width=607&height=393&v=1dbc4e35b9d0900"
              />
              <NewsCard
                title="Reconocimiento a la excelencia empresarial"
                date="3 de abril, 2025"
                excerpt="Nuestro grupo empresarial recibió el premio a la excelencia empresarial por su contribución al desarrollo económico y social de la región."
                image="https://mx.ternium.com/media/jwwjlg42/foto1.jpg?width=607&height=393&v=1dbc4e35b9d0900"
              />
              <NewsCard
                title="Alianza estratégica con empresa internacional"
                date="20 de marzo, 2025"
                excerpt="Firmamos una alianza estratégica con una importante empresa internacional para el desarrollo de proyectos de infraestructura en América Latina."
                image="https://mx.ternium.com/media/jwwjlg42/foto1.jpg?width=607&height=393&v=1dbc4e35b9d0900"
              />
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-[#1a62b3] text-[#1a62b3] hover:bg-[#1a62b3] hover:text-white"
              >
                Ver todas las noticias <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Nueva sección de contacto con animaciones */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <StylizedLogo size="md" showText={true} className="mb-6" />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Grupo Jc Rodriguez, es un conglomerado empresarial conformado
                por empresas mexicanas con una amplia experiencia en todo tipo
                de proyectos y servicios que traza una trayectoria empresarial
                que envuelve una cultura de emprendimiento, innovación y
                adaptabilidad, con los más altos estándares de calidad para
                optimizar tiempos y costos, utilizando lo último en tecnología,
                para brindar soluciones adaptables para los sectores primario,
                secundario, terciario, cuaternario y quinario.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Enlaces rápidos
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/somos"
                    className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                  >
                    Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectores-estrategicos"
                    className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                  >
                    Sectores Estratégicos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capital-humano"
                    className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                  >
                    Capital Humano
                  </Link>
                </li>
                <li>
                  <Link
                    href="/noticias"
                    className="text-gray-400 hover:text-[#1a62b3] transition-colors"
                  >
                    Noticias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Contáctanos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-[#1a62b3] mt-0.5" />
                  <span className="text-gray-400">557 501 35 15</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-[#1a62b3] mt-0.5" />
                  <span className="text-gray-400">
                    jrodriguez@gporodriguez.com
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Boletín</h3>
              <p className="text-gray-400 mb-4">
                Suscríbete para recibir noticias y actualizaciones.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 rounded-full bg-zinc-800 border border-zinc-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a62b3]"
                />
                <Button className="w-full bg-[#1a62b3] hover:bg-[#0e2240] rounded-full">
                  Suscribirse
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-gray-500 text-sm">
            <p>
              © Grupo JC Rodríguez {new Date().getFullYear()} | Todos los
              derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
