export const identity = {
  name: "Williams Zacarías Gutiérrez",
  alias: "ZET4GE",
  location: "Morteros, Córdoba, Argentina",
  relocation: "Abierto a reubicación en Córdoba Capital / Rosario, y a remoto",
  email: "williamsgutierrez.wz@gmail.com",
  phone: "+54 3562 458009",
  linkedin: "https://www.linkedin.com/in/williamsgutierrez/",
  summary:
    "8 años en infraestructura de redes y sistemas en ISPs y cooperativas regionales. Operación 24/7 de redes FTTH de hasta 16.000 clientes, monitoreo, virtualización, migraciones y automatización de tareas operativas. En transición hacia DevOps e infraestructura cloud.",
  role: "Infraestructura de Redes & Sistemas → DevOps / SRE",
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  context?: string;
  highlights: string[];
  scope?: string[];
  note?: string;
};

export const experience: Experience[] = [
  {
    company: "WINF — Servicios Técnicos",
    location: "Morteros, Córdoba",
    role: "Titular · Infraestructura y redes",
    period: "mar 2026 – actualidad",
    context: "Marca propia de servicios técnicos.",
    highlights: [
      "Instalación y soporte de conectividad satelital (Starlink): venta del kit, instalación y abono mensual revendido",
      "Amplificación de Wi-Fi, redes y videovigilancia para clientes residenciales y comerciales",
      "7 clientes con contrato de mantenimiento mensual",
    ],
  },
  {
    company: "Cooperativa de Servicios Públicos de Morteros",
    location: "Morteros, Córdoba",
    role: "Técnico en Telecomunicaciones — Infraestructura y Redes",
    period: "oct 2022 – feb 2026",
    context: "Red FTTH de ~7.000 socios. Monitoreo de toda la infraestructura del nodo.",
    highlights: [
      "Migración KEA DHCP → RADIUS: desarrolló el script que reconfiguró ~5.000–6.000 ONTs en la migración del esquema de autenticación de toda la red, en trabajo conjunto con el equipo de soporte de Rosario",
      "Homologación de ONT TP-Link sobre OLT Zhone ante la discontinuidad de Zhone, con aprovisionamiento propio para reducir la carga manual del área de instalaciones",
      "Modernización del stack de monitoreo: Zabbix 2.4 → 4.0, incorporación de LibreNMS y NFSEN",
      "Documentación de red desde cero con NetBox como sistema de inventario",
      "Rackeo y migración de switching de la nueva red con switches Huawei",
      "Automatización y documentación de procedimientos de telefonía VoIP",
    ],
    scope: [
      "Incidentes FTTH, IPTV y telefonía VoIP",
      "Reclamos escalados de nivel 2 y guardias",
      "Administración de clúster Nutanix y Proxmox VE",
      "Armado de cuadrillas y stock de insumos del nodo",
    ],
  },
  {
    company: "Wiltel Comunicaciones",
    location: "Rafaela, Santa Fe",
    role: "NOC",
    period: "mar 2019 – oct 2022",
    context: "ISP con ~16.000 clientes en múltiples localidades. FTTH, ADSL, wireless, enlaces metro, TV, telefonía, correo y hosting.",
    highlights: [
      "Migración de phpIPAM 2.4 a la última versión sin pérdida de datos",
      "Automatización de migraciones masivas ADSL → FTTH mediante macros",
    ],
    scope: [
      "Monitoreo 24/7 con guardias rotativas (Zabbix, Cacti, Observium)",
      "OLTs Zhone y ZTE, DSLAM, EDFAs y cores",
      "Switching multi-vendor (Huawei, Cisco, MikroTik, HP, Asga, Transition)",
      "Enlaces inalámbricos (Ubiquiti, Mimosa, MikroTik)",
      "Servidores Linux y VMware para hosting, correo, DNS y RADIUS",
    ],
    note: "Promovido internamente a NOC tras un año en Mesa de Ayuda — Soporte Técnico (mar 2018 – mar 2019).",
  },
];

export type InfraProject = {
  name: string;
  description: string;
  tags: string[];
  status?: "in-progress";
};

export const infraProjects: InfraProject[] = [
  {
    name: "Homelab sobre Proxmox VE",
    description:
      "Servidor propio con Proxmox VE, IP pública fija. Laboratorio de configuraciones, pruebas y proyectos locales.",
    tags: ["Proxmox VE", "Virtualización", "Networking"],
  },
  {
    name: "Pterodactyl — plataforma de servidores de juegos",
    description:
      "Panel y Wings en contenedores separados sobre Proxmox, expuestos a internet con dominio propio (DNS en Cloudflare) y subdominio dedicado, publicado en puerto alternativo por restricciones de red residencial. Corriendo un servidor de Assetto Corsa.",
    tags: ["Docker", "Proxmox VE", "Cloudflare DNS", "Exposición de servicios"],
  },
  {
    name: "Contenerización y migración del ERP",
    description:
      "Migración del ERP de WINF desde PaaS hacia infraestructura propia sobre Proxmox: Docker multi-stage, PostgreSQL en contenedor, volúmenes persistentes, Nginx como reverse proxy, Let's Encrypt, pipeline CI/CD con Jenkins y observabilidad con Prometheus + Grafana.",
    tags: ["Docker", "Nginx", "Jenkins", "Prometheus", "Grafana"],
    status: "in-progress",
  },
];

export type WebProject = {
  name: string;
  url?: string;
  description: string;
  stack: string[];
  disclaimer?: string;
};

export const webProjects: WebProject[] = [
  {
    name: "WINF — Landing page",
    url: "winf.com.ar",
    description: "Sitio público de la marca de servicios técnicos WINF.",
    stack: ["Next.js 15", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Resend"],
  },
  {
    name: "WINF ERP",
    url: "erp.winf.com.ar",
    description:
      "ERP/CRM interno: gestión de clientes con geolocalización, inventario serializado, motor de contratos y suscripciones, generación de documentos y PDFs, agenda, automatización financiera vía cron y dashboard de KPIs.",
    stack: ["Next.js 15", "Supabase", "Tailwind CSS v4", "shadcn/ui", "Vercel"],
  },
  {
    name: "LifeSport",
    url: "lifesports.com.ar",
    description:
      "E-commerce de indumentaria deportiva con MercadoPago Checkout Pro, sistema de referidos, notificaciones de pedidos por Telegram, soporte PWA y panel de administración.",
    stack: ["Next.js", "MongoDB", "Vercel", "MercadoPago"],
    disclaimer: "Desarrollado para un proyecto familiar; no llegó a operar comercialmente. Queda como demostración técnica completa.",
  },
];

export const otherWebProjects = [
  {
    name: "ACORDAMOS",
    description: "App de organización para parejas, con feed iCal para notificaciones.",
    stack: ["Next.js", "Supabase", "MercadoPago"],
  },
  {
    name: "Oratoria Arena",
    description: "Juego multijugador asincrónico de oratoria, más una app standalone de práctica.",
    stack: ["Next.js", "Supabase"],
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    label: "Redes",
    items: [
      "FTTH / GPON (OLT Zhone, ZTE)",
      "ADSL / DSLAM",
      "Switching & Routing multi-vendor (Huawei, Cisco, MikroTik, HP)",
      "VLANs, TCP/IP, RADIUS, DHCP, DNS",
      "Wireless (Cambium, Ubiquiti, Mimosa)",
      "VoIP (Kamailio), IPTV",
    ],
  },
  {
    label: "Sistemas y virtualización",
    items: ["Linux (Debian/Ubuntu)", "Windows Server", "Active Directory", "Proxmox VE", "Nutanix", "VMware"],
  },
  {
    label: "Monitoreo y observabilidad",
    items: ["Zabbix", "LibreNMS", "Cacti", "Observium", "NfSen", "Smokeping / Nagios"],
  },
  {
    label: "Documentación e inventario",
    items: ["NetBox", "phpIPAM", "Wiki.js"],
  },
  {
    label: "Automatización y scripting",
    items: ["Bash", "cron", "Python", "SQL", "Git", "Node.js / TypeScript"],
  },
  {
    label: "Desarrollo (asistido por IA)",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "MongoDB", "Vercel"],
  },
];

export const learning = [
  "AWS — cursando Cloud Practitioner Essentials",
  "Docker — exploración, sin experiencia productiva",
  "Kubernetes",
  "CI/CD (Jenkins)",
];

export const education = [
  {
    title: "Técnico Superior en Programación",
    institution: "UTN Facultad Regional Rafaela",
    period: "1,5 años cursados",
  },
  {
    title: "Técnico en Mantenimiento y Electromecánica",
    institution: "E.E.T.P. Soldados Argentinos, Moisés Ville, Santa Fe",
    period: "2014",
  },
];

export const certifications = [
  { name: "Microsoft Applied Skills: Administer Active Directory Domain Services", year: "2026" },
  { name: "Linux SysAdmin — EducaciónIT", year: "2024" },
  { name: "CCNAv7: Switching, Routing and Wireless Essentials — Cisco", year: "2024" },
  { name: "CCNAv7: Introducción a Redes — Cisco", year: "2023" },
  { name: "OPI 2.0 — Oratoria y Comunicación Profesional", year: "2026" },
  { name: "NDG Linux Unhatched — Cisco", year: "2022" },
  { name: "Introduction to Cybersecurity — Cisco", year: "2022" },
  { name: "PHP y MySQL inicial — UTN Buenos Aires", year: "2021" },
];
