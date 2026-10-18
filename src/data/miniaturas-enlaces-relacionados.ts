const miniaturasPorRuta: Record<string, string> = {
  "/testigos-de-jehova/": "/uploads/2026/10/tdj-reuniones-expositor-puerta-hilo-900.webp",
  "/testigos-de-jehova/biblia/": "/uploads/2026/10/tdj-biblia-libro-marcapaginas-hilo-900.webp",
  "/testigos-de-jehova/fundador/": "/uploads/2026/10/tdj-fundador-russell-revistas-hilo-900.webp",
  "/testigos-de-jehova/cumpleanos/": "/uploads/2026/10/tdj-cumpleanos-aula-hilo-900.webp",
  "/testigos-de-jehova/navidad/": "/uploads/2026/10/tdj-navidad-arbol-papa-noel-hilo-900.webp",
  "/testigos-de-jehova/normas/": "/uploads/2026/10/tdj-normas-voto-urna-hilo-900.webp",
  "/testigos-de-jehova/sangre/": "/uploads/2026/10/tdj-sangre-habitacion-hospital-hilo-900.webp",
  "/testigos-de-jehova/vestimenta/": "/uploads/2026/10/tdj-vestimenta-chaqueta-corbata-hilo-900.webp",
  "/testigos-de-jehova/documentales/": "/uploads/2026/10/tdj-documentales-pantalla-hilo-900.webp",
  "/guia-para-salir-de-los-testigos-de-jehova/": "/uploads/2026/10/tdj-renuncia-arco-hilo-libre-900.webp",
  "/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/": "/uploads/2026/10/tdj-sangre-habitacion-hospital-hilo-900.webp",
  "/noticias/la-aevtj-reclama-libertad-medica-plena-tras-el-cambio-sobre-transfusiones/": "/uploads/2026/09/comunicado-transfusiones-aevtj.jpg",
  "/recursos-de-ayuda/": "/uploads/2026/10/tdj-renuncia-apoyo-manos-sobre-hilo-900.webp",
  "/derecho-de-supresion/": "/uploads/2026/10/pluma-y-papeles-derecho-de-supresion.webp",
  "/carta-de-renuncia-testigos-de-jehova/": "/uploads/2026/10/pluma-y-papeles-derecho-de-supresion.webp",
  "/quienes-somos/": "/uploads/2025/10/16690551373007.jpg",
  "/legal/": "/uploads/2025/10/nmcr_downloaded_image.png",
};

export function miniaturaEnlaceRelacionado(href: string): string | undefined {
  if (!href.startsWith("/")) return undefined;
  const sinFragmento = href.split(/[?#]/, 1)[0];
  const ruta = sinFragmento === "/" ? "/" : `${sinFragmento.replace(/\/+$/, "")}/`;
  return miniaturasPorRuta[ruta];
}
