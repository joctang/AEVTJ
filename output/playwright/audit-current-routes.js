async page => {
  const routes = [
    "/",
    "/aviso-legal",
    "/colaboradores",
    "/contacto",
    "/demandas",
    "/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar",
    "/guia-para-salir-de-los-testigos-de-jehova",
    "/hazte-socio",
    "/legal",
    "/noticias",
    "/noticias/conversaciones-pendientes-episodio-128-cadena-ser",
    "/noticias/documental-expulsados-de-los-testigos-de-jehova-el-pais",
    "/noticias/documental-hbo",
    "/noticias/el-precio-de-salir-de-los-testigos-de-jehova-3cat-visibiliza-el-impacto-del-ostracismo-y-la-salud-mental",
    "/noticias/entrevista-a-la-aevtj-noruega-y-los-testigos-de-jehova",
    "/noticias/entrevista-a-samuel-ferrando-presidente-de-la-aevtj",
    "/noticias/entrevista-soraya-narez-el-intermedio-la-sexta",
    "/noticias/estreno-del-documental-expulsados-de-los-testigos-de-jehova-en-el-pais",
    "/noticias/israel-florez-y-soraya-narez-en-onda-cero-el-vacio-de-una-vida-borrada-por-la-expulsion",
    "/noticias/la-aevtj-reclama-libertad-medica-plena-tras-el-cambio-sobre-transfusiones",
    "/noticias/la-aevtj-solicita-al-defensor-del-pueblo-y-al-gobierno-la-revision-del-estatus-legal-de-los-testigos-de-jehova",
    "/noticias/la-audiencia-provincial-de-madrid-revoca-la-condena-contra-un-ex-testigo",
    "/noticias/mas-alla-del-prejuicio-nuestra-opinion",
    "/noticias/nuevo-documental-revela-historias-de-jovenes-expulsados-por-ser-homosexuales-en-los-testigos-de-jehova",
    "/noticias/organizaciones-coercitivas-salir-de-la-trampa-000906-21-06-2026",
    "/noticias/rtve-da-voz-a-las-victimas-del-ostracismo-el-testimonio-de-marcos-en-directo-al-grano",
    "/noticias/ser-catalunya-da-voz-a-expulsados-de-los-testigos-de-jehova",
    "/noticias/suecia-rechaza-subsidios-estatales-a-los-testigos-de-jehova",
    "/noticias/victoria-historica-de-aevtj",
    "/otras-asociaciones",
    "/politica-de-cookies",
    "/politica-de-privacidad",
    "/quienes-somos",
    "/recursos-de-ayuda",
    "/relacion-de-pecados-para-un-comite-judicial",
    "/separacion-de-la-sociedad",
    "/testimonios-bajo-juramento",
    "/transparencia",
    "/victimas"
  ];
  const results = [];
  for (const route of routes) {
    const response = await page.goto(`http://localhost:4322${route}`, { waitUntil: "domcontentloaded" });
    const data = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
      h1: document.querySelectorAll("h1").length,
      broken: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src),
      title: document.title
    }));
    const viewport = page.viewportSize();
    const suffix = viewport && viewport.width < 600 ? "390" : "1440";
    const safe = route === "/" ? "home" : route.slice(1).replace(/\//g, "-");
    await page.screenshot({ path: `output/playwright/audit-${safe}-${suffix}.png` });
    results.push({ route, status: response ? response.status() : null, width: data.width, client: data.client, h1: data.h1, broken: data.broken, title: data.title });
  }
  return { count: results.length, issues: results.filter(r => r.status !== 200 || r.width > r.client + 1 || r.h1 !== 1 || r.broken.length), results };
}
