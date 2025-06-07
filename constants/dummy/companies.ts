type Company = {
  id: string;
  name: string;
  logo: string;
  heroImage: string;
  description: string;
  longDescription: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  features: string[];
  projects: {
    title: string;
    location: string;
    image: string;
    description: string;
    year: string;
  }[];
  contact: {
    address: string[];
    phone: string;
    email: string;
  };
};

export const sectorNames: { [key: string]: string } = {
  construccion: "Construcción",
  inmobiliario: "Inmobiliario",
  metalmecanico: "Metalmecánico",
  aeronautico: "Aeronáutico",
  servicios: "Servicios",
};

const descriptions: Pick<Company, "id" | "name" | "description">[] = [
  {
    id: "jc-construcciones",
    name: "Jc Construcciones",
    description: `Brindamos servicios de construcción industrial comercial, residencial, basándonos desde la ingeniería conceptual, básica, detalle y valor, para llegar a la preconstrucción, la construcción, supervisión y post-construcción, nuestra metodología de trabajo puede ser como contratista, llave en mano o concesiones, nos especializamos en construcción industrial, comercial y residencial asi como infraestructura aeroportuaria marítima pavimentación, mejoramos la eficiencia de cada proyecto con nuestra area de venta y suministro de materiales pétreos y mezclas asfálticas`,
  },
  {
    id: "energy-jc",
    name: "Energy Jc",
    description: `Soluciones eléctricas  en instalación y  mantenimiento a subestaciones, líneas de producción, líneas aéreas, diseño y fabricación de gabinetes, transformadores plantas de energía y piezas.`,
  },
  {
    id: "jc-machinery",
    name: "Jc Machinery",
    description: `Contamos con la más amplia variedad y flota de maquinaria, tractocamiones, generadores de energía, plantas de soldar, camper y tractocamiones, para cumplir todas sus necesidades cuando y donde lo requiera su proyecto, nuestra flota se compone por equipos de calidad, modernos y con alta tecnología para asumir los retos que enfrenta cada proyecto  y garantizar su eficiencia.`,
  },
  {
    id: "medical-center-rodriguez",
    name: "Medical Center Rodríguez",
    description: `Brindamos soluciones médicas, prehospitalaria, atención de emergencias, suministro  médico, análisis clínicos, seremos tu mejor aliado en cada proyecto.`,
  },
  {
    id: "auto-transportes-rodriguez",
    name: "Auto transportes Rodríguez",
    description: `Contamos con una ﬂotilla de más de 80 unidades disponibles para cualquier requerimiento que necesite. Nuestro servicio de logística, transporte y renta de vehículos, está comprometido a satisfacer todas sus necesidades de movilidad.`,
  },
  {
    id: "servicios-industriales-del-sureste",
    name: "Servicios Industriales Del Sureste",
    description: `Fabricación y montaje de estructura y laminación, instalación de anclajes y mallas, reparación de soldadura, diseño, calculo y selección de materiales para obra metalmecánica y electromecánica. Somos tu solución en fabricación, diseño e instalación metálica`,
  },
  {
    id: "jc-logistica",
    name: "Jc Logística",
    description: `Proveemos servicio de carga y distribución de material, nos encargamos de la logística para sus productos, equipos o paquetería, a través de la consolidación o servicio privado reducimos el costo de operación, usted se preocupa por su producción nosotros por llevarla a su destino, contamos con una flotilla de más de 150 unidades distribuidas en tractocamiones, Torton, rabón, esprínter, cajas frías, secas, lowoy, plana y cama baja, nuestras unidades son de reciente modelo, equipadas con lo último en tecnología.`,
  },
  {
    id: "jc-protect",
    name: "Jc Protect",
    description: `Brindamos soluciones  en seguridad  y vigilancia, protegemos sus bienes, para que se enfoque en su productividad, nuestros años de experiencia respaldan su seguridad.`,
  },
  {
    id: "jc-ifood",
    name: "Jc Ifood",
    description: `Administramos servicios de catering para su empresa o eventos garantizando la inocuidad de los alimentos basados en la normativa mexicana de salubridad y nutrición, contamos con un servicio integral para atender sus necesidades alimentarias bajo consumo o servicio a la carta.`,
  },
  {
    id: "jc-quality",
    name: "Jc Quality",
    description: `Proveemos un servicio especializado en inspección, retrabajo,  sorteo, consultoría y gestión de almacenes, contamos con el personal calificado y tecnología para inspeccionar todo tipo de material.`,
  },
  {
    id: "reclutamiento-jc",
    name: "Reclutamiento Jc",
    description: `Contamos con amplia experiencia en la administración de personal, sub contratación laboral, reclutamos al personal idóneo para su empresa.`,
  },
  {
    id: "jc-clean",
    name: "Jc Clean",
    description: `Brindamos un servicio integral de limpieza suministrando insumos, equipos y personal, contamos con equipos de alta presión para una limpieza profunda de sus instalaciones o equipos.`,
  },
  {
    id: "servi-jc",
    name: "Servi Jc",
    description: `Nos encargamos del manejo y disposición de sus residuos peligrosos  de forma segura asi como la recolección de residuos urbanos para dar una disposición final amigable con el medio ambiente.`,
  },
];

export const dummy_companies: Company[] = descriptions.map((des) => ({
  ...des,
  logo: "/placeholder.svg?height=200&width=400",
  heroImage: "/placeholder.svg?height=1200&width=1920",
  longDescription: des.description,
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
    address: [
      "Privada Santa Mónica 144 Saltillo Coahuila Mexico C.P 25070",
      "Av. Mexico 63 Naucalpan Estado De Mexico C.P 53050",
      "Boulevard Adolfo Ruiz Cortines 1344 Villahermosa Tabasco C.P 86035",
    ],
    phone: "(557) 501-35-36",
    email: "jrodriguez@gporodriguez.com",
  },
}));
