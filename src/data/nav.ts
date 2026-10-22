export const mainNav = [
  { label: "¿Quiénes somos?", href: "/quienes-somos/" },
  { label: "Noticias", href: "/noticias/" },
  {
    label: "Testigos de Jehová",
    href: "/testigos-de-jehova/",
    children: [
      { label: "Testigos de Jehová: quiénes son y qué creen", href: "/testigos-de-jehova/" },
      { label: "Transfusiones de sangre", href: "/testigos-de-jehova/sangre/" },
      { label: "Expulsión y desasociación", href: "/testigos-de-jehova/expulsion-y-desasociacion/" },
      { label: "Cumpleaños", href: "/testigos-de-jehova/cumpleanos/" },
      { label: "Navidad", href: "/testigos-de-jehova/navidad/" },
      { label: "Documentales", href: "/testigos-de-jehova/documentales/" },
      { label: "La Biblia de los Testigos de Jehová", href: "/testigos-de-jehova/biblia/" },
      { label: "Quién fundó los Testigos de Jehová", href: "/testigos-de-jehova/fundador/" },
    ],
  },
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
      {
        label: "Guía para suprimir tus datos personales (derecho de supresión)",
        href: "/derecho-de-supresion/",
      },
    ],
  },
  { label: "Hazte socio / Donaciones", href: "/hazte-socio/" },
  { label: "Contacto", href: "/contacto/" },
];

// Pie de página: lista corta propia (no repite el menú entero).
export const footerNav = [
  { label: "Testigos de Jehová: quiénes son y qué creen", href: "/testigos-de-jehova/" },
  { label: "Transfusiones de sangre", href: "/testigos-de-jehova/sangre/" },
  { label: "Expulsión y desasociación", href: "/testigos-de-jehova/expulsion-y-desasociacion/" },
  { label: "Cumpleaños", href: "/testigos-de-jehova/cumpleanos/" },
  { label: "Navidad", href: "/testigos-de-jehova/navidad/" },
  { label: "Documentales", href: "/testigos-de-jehova/documentales/" },
  { label: "La Biblia de los Testigos de Jehová", href: "/testigos-de-jehova/biblia/" },
  { label: "Quién fundó los Testigos de Jehová", href: "/testigos-de-jehova/fundador/" },
  { label: "Guía para salir", href: "/guia-para-salir-de-los-testigos-de-jehova/" },
  { label: "Otras asociaciones", href: "/otras-asociaciones/" },
  { label: "Ex testigos en las redes", href: "/victimas/" },
  { label: "Contacto", href: "/contacto/" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/asoc.aevtj", icon: "facebook" },
  { label: "Youtube", href: "https://www.youtube.com/@AEVTJ", icon: "youtube" },
  { label: "X", href: "https://x.com/aevtj", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/asoc.aevtj/", icon: "instagram" },
];

export const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal/" },
  { label: "Política de Cookies", href: "/politica-de-cookies/" },
  { label: "Política de privacidad", href: "/politica-de-privacidad/" },
  { label: "Transparencia", href: "/quienes-somos/#transparencia" },
];
