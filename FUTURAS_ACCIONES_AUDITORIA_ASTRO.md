# Auditoría Astro: AEVTJ

- Ruta del proyecto: `C:/Users/jocta/OneDrive/Documentos/Proyectos y Clientes/AEVTJ/astro-site`
- Dominio/entorno revisado: https://aevtj.org — HTTP 200 confirmado el 2026-09-23.
- WordPress de origen y fuentes consultadas: Pendiente de contraste.
- Fecha de auditoría: 2026-09-23
- Auditoría realizada por: Codex
- Estado general: Parcial
- Estado de cierre documental: **Bloqueada por despliegue**. La auditoría queda documentada; producción sirve un dominio aparcado y requiere resolver el P0 antes de validar el Astro publicado.
- Prioridad máxima confirmada: No determinada

## Resumen ejecutivo
La web publicada responde correctamente por HTTPS. La auditoría técnica y visual sigue en curso; no se presentan como confirmados problemas que aún no tengan evidencia específica.

## Alcance y cobertura
- Rutas detectadas / revisadas: inventario local inicial; revisión funcional completa pendiente.
- Rutas WordPress comparadas: pendiente.
- Viewports revisados: 360×800 / 390×844 / 414×896 / 768×1024 / 1366×768 / 1920×1080.
- Recorridos funcionales revisados: ninguno enviado a terceros.
- Entornos comprobados: código local y producción HTTP.
- Límites: no se enviaron formularios ni datos; no se instalaron dependencias.

## Acciones futuras priorizadas

### [AEVTJ-AUD-01] P1 Completar auditoría técnica, visual y de conversión
- Estado: Pendiente
- Área: SEO, UX, accesibilidad, rendimiento, formularios, legal y producción
- Evidencia: https://aevtj.org respondió HTTP 200 por HTTPS el 2026-09-23.
- Observación: HTTP 200 no demuestra que todas las rutas, recursos y conversiones funcionen.
- Riesgo/impacto probable: desconocido hasta completar pruebas.
- Acción recomendada: revisar todas las rutas y los seis viewports oficiales, además de build/dist y fuente WordPress.
- Esfuerzo: Alto.
- Dependencias: acceso a origen, hosting y proveedor de formularios si aplica.
- Criterio de cierre: cobertura declarada y evidencias reproducibles por cada hallazgo.

## Hallazgos descartados (falsos positivos)
- Ninguno confirmado en esta fase.

## Comprobaciones pendientes
- Rutas y paridad con WordPress.
- Metadata, sitemap, robots, canonical y schema.
- Responsive y accesibilidad.
- Cookies, legal, analítica y formularios.
- Redirects, errores, rendimiento, seguridad e integraciones.
- Build y revisión de dist.

## No aplica
- Ningún apartado se marca como No aplica sin revisar el contexto funcional.

## Evidencias y método
Solicitud HEAD no destructiva a https://aevtj.org con respuesta HTTP 200. Inventario local mediante rg y PowerShell. No se enviaron formularios.

## Definición de auditoría completa
No completada todavía: faltan revisión visual efectiva, rutas completas, build/dist verificado, comparación con origen y pruebas funcionales seguras.

## Evidencia adicional — 2026-09-24
- [AEVTJ-AUD-02] P0 Dominio publicado no sirve el sitio: **Confirmado**.
- Evidencia: `https://aevtj.org/` devuelve HTTP 200, pero el HTML es una página de dominio aparcado de Hostinger con título “Parked Domain name on Hostinger DNS system”.
- Evidencia adicional: `https://aevtj.org/robots.txt` devuelve `User-agent: * / Disallow: /`; `/sitemap.xml` devuelve HTML de la página aparcada, no XML.
- Riesgo: pérdida total de disponibilidad, indexación y conversión en producción.
- Acción recomendada: revisar DNS/hosting y publicar la salida Astro correcta; después comprobar HTTPS, robots, sitemap y rutas profundas.
- Esfuerzo: Alto; requiere acceso al proveedor.
- Criterio de cierre: home y rutas prioritarias sirven el contenido AEVTJ, robots permite lo previsto y sitemap responde XML válido.

## Diagnóstico DNS/hosting — 2026-09-24
- [AEVTJ-AUD-04] P0 Dominio apuntando a DNS de parking: Confirmado
- Evidencia: AEVTJ resuelve a 2.57.91.91; sus nameservers son ns1.dns-parking.com y ns2.dns-parking.com; www es un CNAME a aevtj.org. Las variantes HTTP/HTTPS y con www responden 200 con servidor hcdn y sin redirección.
- Interpretación: la evidencia refuerza que el dominio está conectado a una configuración de parking/hosting, no a la publicación Astro prevista.
- Acción recomendada: revisar en el proveedor DNS la zona y el hosting contratado, confirmar el destino de publicación y configurar redirecciones HTTP a HTTPS después de publicar.
- Criterio de cierre: DNS apunta al hosting correcto, las cuatro variantes convergen en una URL HTTPS canónica y el HTML ya no es la página aparcada.

## SEO técnico del build local — 2026-09-24
- [AEVTJ-AUD-05] P1 Sitemap/robots/canonical ausentes en el build: Confirmado
- Evidencia: las 38 salidas HTML locales no contienen canonical ni meta robots, y dist no contiene archivos sitemap o robots detectables.
- Riesgo: después de resolver el P0 de hosting, el sitio podría publicarse sin señales básicas de indexación y canonicalización.
- Acción recomendada: añadir/generar sitemap y robots apropiados y canonical por ruta antes del despliegue; verificar que no se bloquee la indexación accidentalmente.
- Criterio de cierre: cada URL indexable tiene canonical, robots según intención y sitemap XML válido publicado.

## Responsive del build local — 2026-09-24
- [AEVTJ-AUD-03] P2 Desbordamiento horizontal en tablet: Confirmado en local
- Evidencia reproducible con Playwright y la matriz oficial: 360×800 -> 360 px; 390×844 -> 390; 414×896 -> 414; 768×1024 -> 816; 1366×768 -> 1366; 1920×1080 -> 1920. La home mantiene un H1 y main en los seis tamaños.
- Elementos que salen del viewport a 768 px: .home-ambient, .country-label y .premium-hero__image; la etiqueta de Australia llega aproximadamente a 816 px.
- Riesgo/impacto probable: barra horizontal y acabado visual defectuoso en tablet; no se ha demostrado pérdida del CTA.
- Acción recomendada: limitar la capa ambiental y las etiquetas geográficas al contenedor/viewport en el breakpoint tablet, sin ocultar globalmente el overflow del body.
- Criterio de cierre: scrollWidth igual a innerWidth en los seis formatos y revisión visual de mapa, hero y CTA.

## Estado real de cobertura
- El build local ya tiene comprobación responsive, pero la auditoría de producción queda bloqueada por el dominio aparcado de Hostinger. No se debe certificar la web publicada hasta corregir DNS/hosting y repetir rutas, recursos y conversión.
