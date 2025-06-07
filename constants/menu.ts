// Definición de tipos para los menús
export type SimpleMenuItem = {
  title: string;
  href: string;
};

type CompanyItem = {
  name: string;
  logo: string;
  href: string;
};

export type SectorMenuItem = {
  title: string;
  href: string;
  companies: CompanyItem[];
};
type MenuItem = {
  title: string;
  href: string;
  submenu?: SimpleMenuItem[] | SectorMenuItem[];
  isSectorMenu?: boolean;
};

// Datos de ejemplo para el menú
export const menuItems: MenuItem[] = [
  {
    title: "INICIO",
    href: "/",
  },
  {
    title: "SOMOS",
    href: "/somos",
    submenu: [
      { title: "Historia", href: "/somos/historia" },
      { title: "Filosofía GPA", href: "/somos/filosofia" },
      { title: "Código de Ética", href: "/somos/codigo-de-etica" },
      { title: "Cronología", href: "/somos/cronologia" },
      {
        title: "Responsabilidad Social Empresarial",
        href: "/somos/responsabilidad-social",
      },
    ],
  },
  {
    title: "SECTORES ESTRATÉGICOS",
    href: "/sectores-estrategicos",
    isSectorMenu: true,
    submenu: [
      {
        title: "Sector Construcción",
        href: "/sectores-estrategicos/construccion",
        companies: [
          {
            name: "Jc Construcciones",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/construccion/jc-construcciones",
          },
        ],
      },
      {
        title: "Sector Energético",
        href: "/sectores-estrategicos/energetico",
        companies: [
          {
            name: "Energy Jc",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/energetico/energy-jc",
          },
        ],
      },
      {
        title: "Sector Metalmecánico",
        href: "/sectores-estrategicos/metalmecanico",
        companies: [
          {
            name: "Jc Machinery",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/metalmecanico/jc-machinery",
          },
        ],
      },
      {
        title: "Sector Hospitalario",
        href: "/sectores-estrategicos/hospitalario",
        companies: [
          {
            name: "Medical Center Rodríguez",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/hospitalario/medical-center-rodriguez",
          },
        ],
      },
      {
        title: "Sector Servicios",
        href: "/sectores-estrategicos/servicios",
        companies: [
          {
            name: "Auto transportes Rodríguez",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/auto-transportes-rodriguez",
          },
          {
            name: "Servicios Industriales Del Sureste",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/servicios-industriales-del-sureste",
          },
          {
            name: "Jc Logística",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/jc-logistica",
          },
          {
            name: "Jc Protect",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/jc-protect",
          },
          {
            name: "Jc Ifood",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/jc-ifood",
          },
          {
            name: "Jc Quality",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/jc-quality",
          },
          {
            name: "Reclutamiento Jc",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/reclutamiento-jc",
          },
          {
            name: "Jc Clean",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/jc-clean",
          },
          {
            name: "Servi Jc",
            logo: "/placeholder.svg?height=80&width=160",
            href: "/sectores-estrategicos/servicios/servi-jc",
          },
        ],
      },
    ],
  },
  {
    title: "CAPITAL HUMANO",
    href: "/capital-humano",
  },
  {
    title: "NOTICIAS",
    href: "/noticias",
  },
  {
    title: "CONTACTO",
    href: "/contacto",
  },
];
