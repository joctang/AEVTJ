export const mainNav = [
  { label: "¿Quiénes somos?", href: "/quienes-somos/" },
  { label: "Noticias", href: "/noticias/" },
  {
    label: "Documentos",
    href: "#",
    children: [
      { label: "Demandas, juicios y sentencias judiciales", href: "/legal/" },
      {
        label: "Guía para salir de los Testigos de Jehová",
        href: "/guia-para-salir-de-los-testigos-de-jehova/",
      },
      {
        label: "Guía para proteger tus derechos sanitarios en caso de interferencia familiar",
        href: "/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/",
      },
    ],
  },
  { label: "Hazte socio / Donaciones", href: "/hazte-socio/" },
  { label: "Contacto", href: "/contacto/" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/asoc.aevtj", icon: "facebook" },
  { label: "Youtube", href: "https://www.youtube.com/@AEVTJ", icon: "youtube" },
  { label: "X", href: "https://x.com", icon: "x" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal/" },
  { label: "Política de Cookies", href: "/politica-de-cookies/" },
  { label: "Política de privacidad", href: "/politica-de-privacidad/" },
];
