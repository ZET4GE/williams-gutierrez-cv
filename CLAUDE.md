@AGENTS.md

# Portfolio de Williams Zacarías Gutiérrez (ZET4GE / ZG)

Este archivo es la fuente de verdad del contenido y las reglas de este proyecto. Léelo completo antes de escribir o editar copy, secciones o metadata del sitio.

## Posicionamiento (leer antes de tocar diseño o contenido)

**El perfil es infraestructura de redes y sistemas, no desarrollo web.** 8 años de experiencia real y verificable en ISPs y cooperativas (FTTH, monitoreo, virtualización, migraciones, automatización, guardias 24/7). El desarrollo web es un complemento genuino pero secundario — no debe abrir el sitio ni competir visualmente con los logros de infraestructura.

Objetivo declarado del sitio: transición hacia **DevOps / SRE / Cloud Infrastructure**, apalancando la base on-premise.

Jerarquía de secciones (en este orden):
1. Hero — posicionamiento de infraestructura
2. Experiencia profesional (con escala y logros concretos)
3. Proyectos de infraestructura y automatización
4. Proyectos de desarrollo web (marcados como AI-assisted, ver regla abajo)
5. Stack y herramientas
6. Formación y certificaciones
7. Contacto

## Identidad y contacto

- Nombre: Williams Zacarías Gutiérrez
- Ubicación: Morteros, Córdoba, Argentina (abierto a reubicación a Córdoba Capital/Rosario, y a remoto)
- Email: williamsgutierrez.wz@gmail.com
- Teléfono: +54 3562 458009
- LinkedIn: https://www.linkedin.com/in/williamsgutierrez/
- Marca de negocio: WINF (winf.com.ar) — NO es la marca de este portfolio
- Alias personal de este portfolio: **ZET4GE / ZG**
- Idiomas: español nativo; inglés técnico (lectura de documentación)
- Sin foto, sin DNI/CUIL, sin estado civil, sin fecha de nacimiento (no incluir)

## Resumen profesional (base del hero)

> 8 años en infraestructura de redes y sistemas en ISPs y cooperativas regionales. Operación 24/7 de redes FTTH de hasta 16.000 clientes, monitoreo, virtualización, migraciones y automatización de tareas operativas. En transición hacia DevOps e infraestructura cloud.

## Experiencia profesional

### WINF — Servicios Técnicos · Morteros, Córdoba
**Titular · Infraestructura y redes** — mar 2026 – actualidad
- Instalación y soporte de conectividad satelital (Starlink): venta de kit, instalación, abono mensual revendido
- Amplificación de Wi-Fi, redes y videovigilancia (clientes residenciales/comerciales)
- 7 clientes con contrato de mantenimiento mensual
- Modelo: margen mínimo en equipo, instalación única, suscripción mensual recurrente

### Cooperativa de Servicios Públicos de Morteros · Morteros, Córdoba
**Técnico en Telecomunicaciones — Infraestructura y Redes** — oct 2022 – feb 2026
Red FTTH de ~7.000 socios. Monitoreo de toda la infraestructura del nodo.

Logros (el material más fuerte del perfil, dar prioridad visual):
- **Migración KEA DHCP → RADIUS:** desarrolló el script que reconfiguró ~5.000–6.000 ONTs en la migración del esquema de autenticación de toda la red, en trabajo conjunto con el equipo de soporte de Rosario.
- **Homologación de ONT TP-Link sobre OLT Zhone:** ante discontinuidad de Zhone y escasez de ONTs, homologó e implementó una alternativa TP-Link sobre OLT Zhone. Diseñó aprovisionamiento propio para reducir carga manual del área de instalaciones.
- **Modernización del stack de monitoreo:** actualizó Zabbix 2.4 → 4.0, incorporó LibreNMS y NFSEN (separación de tráfico entre cooperativas).
- **Documentación desde cero:** implementó NetBox como inventario y documentación de red.
- **Rackeo y migraciones de switching:** armó el rackeo de la nueva red con switches Huawei (trabajo conjunto con soporte regional).
- **Telefonía VoIP:** automatizó y documentó procedimientos para reducir tiempos de resolución.

Responsabilidades operativas: incidentes FTTH/IPTV/VoIP, reclamos escalados nivel 2, guardias, administración de clúster Nutanix y Proxmox VE, armado de cuadrillas, stock de insumos.

**No incluir:** motivo/circunstancias de la salida (desvinculación sin causa) — no corresponde en el portfolio.

### Wiltel Comunicaciones · Rafaela, Santa Fe
**NOC** — mar 2019 – oct 2022
**Mesa de Ayuda — Soporte Técnico** — mar 2018 – mar 2019
(Fechas del pase a NOC sin confirmar del todo — verificar antes de publicar; la promoción interna en ~1 año es real y vale destacarla)

ISP con ~16.000 clientes, múltiples localidades. Servicios: FTTH, ADSL, wireless, enlaces metro, TV, telefonía, correo, hosting.

Logros:
- **Migración de phpIPAM 2.4 a la última versión** sin pérdida de datos.
- **Automatización de migraciones masivas ADSL → FTTH** mediante macros.

Alcance técnico NOC: Zabbix, Cacti, Observium; OLTs Zhone y ZTE; DSLAM, EDFAs, cores; switching multi-vendor (Huawei, Cisco, MikroTik, HP, Asga, Transition); wireless (Ubiquiti, Mimosa, MikroTik); Linux y VMware (hosting, correo, DNS, RADIUS); VLANs; energía/baterías/climatización de nodos; laboratorio de homologación de ONTs/routers.

Mesa de Ayuda: incluir solo si hay espacio, sin peso visual — un año de call center diluye el posicionamiento de infraestructura. La promoción a NOC se lee sola con las fechas, no hace falta detallar. **No incluir** motivo de salida de Wiltel (desgaste por guardias 24/7).

## Proyectos de infraestructura (priorizar sobre los de desarrollo web)

### Homelab sobre Proxmox VE
Servidor propio, nodo "Servidores winf", Morteros, IP pública fija. Laboratorio de configuraciones y proyectos locales.

### Pterodactyl — plataforma de servidores de juegos
Panel y Wings en contenedores separados sobre Proxmox, expuestos a internet con **dominio propio** (no nombrar zonegan.com — usar genérico o cambiar subdominio antes de publicar) y DNS en Cloudflare. Publicado en puerto alternativo por restricciones en 80/443. Corre un servidor de Assetto Corsa.
Demuestra: virtualización, segmentación de red, exposición de servicios, gestión de DNS/dominios, resolución de limitaciones de red residencial.

### Contenerización y migración del ERP (EN CURSO)
Migrar el ERP de WINF desde Vercel a infraestructura propia sobre Proxmox: Docker multi-stage, PostgreSQL en contenedor, volúmenes persistentes, Nginx reverse proxy, Let's Encrypt, CI/CD con Jenkins, observabilidad Prometheus + Grafana.
**Marcar explícitamente como "en progreso"** o no publicar hasta que funcione — no presentar como logro terminado.

## Proyectos de desarrollo web

> **REGLA DE HONESTIDAD OBLIGATORIA:** todo el desarrollo full-stack se hace con asistencia de IA (Claude Code, prompts por fases, archivos CLAUDE.md de memoria de proyecto) — no desde conocimiento propio de programación tradicional. Describir siempre como **"desarrollo asistido por IA"**. No presentar como desarrollo escrito a mano. No resta mérito (levantar y operar apps reales en producción sí lo es), pero describirlo mal es un riesgo de credibilidad en entrevista técnica.

### WINF — Landing page
winf.com.ar · Next.js 15, Tailwind CSS, shadcn/ui, Framer Motion, Resend (formulario de contacto). Identidad visual: nodos de red abstractos en teal #13B5A6 sobre slate oscuro.

### WINF ERP — sistema interno de gestión
erp.winf.com.ar · Next.js 15, Supabase, Tailwind CSS v4, shadcn/ui, Vercel. Gestión de clientes con geolocalización, inventario serializado, motor de contratos/suscripciones, generación de documentos/PDFs, agenda, automatización financiera vía cron, dashboard de KPIs. Desarrollado en 12 fases con documento maestro de planificación.

### LifeSport — e-commerce de indumentaria deportiva
lifesports.com.ar · Next.js, Vercel, MongoDB. MercadoPago Checkout Pro, sistema de referidos, notificaciones por Telegram, PWA, panel de administración.
**No presentar como caso de éxito comercial** (desarrollado para su hermana, no entró en uso por falta de presupuesto) — sí como demostración técnica completa.

### Otros (menor peso, opcionales)
- **ACORDAMOS** — app de organización para parejas (Next.js, Supabase, MercadoPago), feed iCal, 10+ fases. Proyecto de Supabase ya eliminado.
- **Oratoria Arena** — juego multijugador asincrónico de oratoria + app standalone de práctica. Costo cero de hosting (free tier Supabase).

## Stack técnico

**Redes:** FTTH/GPON (OLT Zhone, ZTE), ADSL/DSLAM, switching/routing multi-vendor (Huawei, Cisco, MikroTik, HP, Asga, Transition), VLANs, TCP/IP, RADIUS, DHCP, DNS, wireless (Cambium, Ubiquiti, Mimosa), EDFAs, cores, VoIP (Kamailio), IPTV

**Sistemas y virtualización:** Linux Debian/Ubuntu, Windows Server, Active Directory, Proxmox VE, Nutanix, VMware

**Monitoreo:** Zabbix (~8 años, herramienta más fuerte), LibreNMS, Cacti, Observium, NfSen, Smokeping/Datadog/Nagios (uso puntual). Grafana: **solo pruebas propias, no productivo** — no presentar como experiencia productiva.

**Documentación:** NetBox, phpIPAM, Wiki.js

**Automatización/scripting:** Bash, cron, Python, SQL, Git, Node.js/TypeScript

**Desarrollo:** Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Supabase, PostgreSQL, MongoDB, Vercel, MercadoPago, Resend

**Gestión:** ticketing propio de cada empresa, Asana, ClickUp, Microsoft Planner

**En aprendizaje (marcar explícitamente como tal, no como dominado):** AWS (cursando Cloud Practitioner Essentials, 5/9 módulos), Docker (probado, sin experiencia productiva), Kubernetes (sin experiencia), CI/CD Jenkins (sin experiencia)

## Formación

- Técnico Superior en Programación — UTN FR Rafaela (1,5 años cursados, sin completar)
- Técnico en Mantenimiento y Electromecánica — E.E.T.P. Soldados Argentinos, Moisés Ville, Santa Fe (nov 2014)
- Un año de Ingeniería Electromecánica (2015), abandonada

## Certificaciones (priorizar las primeras 4, el resto de bajo peso visual)

1. Microsoft Applied Skills: Administer Active Directory Domain Services (2026)
2. Linux SysAdmin — EducaciónIT (2024)
3. CCNAv7: Switching, Routing and Wireless Essentials — Cisco (2024)
4. CCNAv7: Introducción a Redes — Cisco (2023)
5. OPI 2.0 — Oratoria y Comunicación Profesional (2026)
6. NDG Linux Unhatched — Cisco (2022)
7. Introduction to Cybersecurity — Cisco (2022)
8. PHP y MySQL inicial — UTN Buenos Aires (2021)

## Reglas de exclusión — NO INCLUIR

- **ZoneGan / GANAMOS.NET / Ganamos Rewards** (plataformas de iGaming): nunca mencionar, ni de forma genérica.
- El dominio **zonegan.com** en el proyecto Pterodactyl: usar "dominio propio" sin nombrarlo, o cambiar de dominio antes de publicar.
- Circunstancias de salida de Coopmorteros (desvinculación sin causa) y motivo de salida de Wiltel (desgaste por guardias): no van.
- Empleos no-IT 2016–2017 (Verónica SA, Williner, Carreteles Rafaela) y ZG Reparaciones: no aportan al posicionamiento, no incluir.
- Datos personales innecesarios: DNI/CUIL, estado civil, fecha de nacimiento, foto.
- **No inventar métricas.** Números disponibles: 16.000 clientes (Wiltel), 7.000 socios (Coopmorteros), ~5.000–6.000 ONTs (migración RADIUS), 7 clientes (WINF), 8 años de experiencia. No hay datos de tickets/SLA/tiempos de resolución — no completar con estimaciones.
- No sobredeclarar el hosting de las apps web: corren en Vercel/PaaS, no atribuir administración de servidor ni gestión de certificados SSL (será cierto recién cuando termine la migración del ERP).
- No listar habilidades blandas ("proactivo", "trabajo en equipo", etc.) — se demuestran solas en los logros (trabajo conjunto con Rosario, NetBox desde cero, guardias 24/7).

## Dirección de diseño

- Dark mode "tech". Identidad visual existente de WINF: teal #13B5A6 sobre slate oscuro con nodos de red abstractos — reutilizable como referencia pero este portfolio es la identidad personal (ZET4GE/ZG), puede diferenciarse de la marca WINF.
- Tono: técnico, sobrio, sin inflar. El contenido es fuerte por sí mismo.
- Prioridad de lectura: los logros de infraestructura con escala tienen que entrar por el ojo primero (ej. migración de 5.000 ONTs no puede competir visualmente con un bullet de rackeo).
- Accesible y rápido — un portfolio de infraestructura que carga lento es una contradicción.
- Bilingüe ES/EN deseable (apunta a remoto internacional) pero no bloqueante para v1.
- Incluir link de descarga de CV en PDF.
- Evitar barras de porcentaje de habilidades (ruido) y animaciones que estorben la lectura.

## Despliegue

- Repo GitHub: `williams-gutierrez-cv`
- Proyecto Vercel conectado al repo (auto-deploy en push a main)
- Nombre de proyecto Vercel: `williams-gutierrez-cv`
