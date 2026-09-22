# Rediseño premium — /guia-para-salir-de-los-testigos-de-jehova/

## Diagnóstico

La página existe sólo como `html` plano dentro de
`src/content/pages/guia-para-salir-de-los-testigos-de-jehova.json` (12.9 KB de divs
heredados de Elementor, sin clases) y se pinta con la ruta genérica
`src/pages/[...slug].astro` → `src/components/ArticleContent.astro`, que la mete
entera en un `.prose` de 800px. Consecuencias:

- 7 capítulos narrativos (El comienzo, Love bombing, La vida dentro, El bautismo,
  Empezar a cuestionar, El impacto emocional, 7 pasos) quedan como una columna
  uniforme: mismo ritmo, mismo ancho, cero jerarquía.
- Las 8 imágenes se centran todas iguales (`max-width:520px`) — no se usa el patrón
  `.layered-media` del manual (bloque de color desplazado, parallax, esquinas 32px).
- Los "7 PASOS" eran pestañas en el original: ahora los 7 botones se convierten en
  `.step-marker` sueltos y los 7 paneles caen apilados **sin numeración asociada**.
  Es el peor punto de la página: 7 bloques de texto indistinguibles.
- No hay índice, ni progreso de lectura por capítulo, ni tiempo de lectura, ni
  llamada de ayuda/crisis, ni CTA final, ni tarjetas de recursos (los "Otros recursos"
  finales son una lista con bullets `●` dentro de un `<p>`).
- El h1 del hero está en `uppercase tracking-wide` — contradice el manual §2
  (serif Lora 400, `letter-spacing` negativo, nunca mayúsculas).

## Propuesta

Convertirla en la pieza **flagship editorial** del sitio: una guía larga con
capítulos, no un artículo. Mismo sistema de diseño (crema `#f5fbdf`, tinta `#122c33`,
teal `#2ea88f`, lima `#d8eaa4`, Lora + DM Sans, movimiento lento), pero con
arquitectura propia:

1. **Hero editorial** — foto a sangre con degradado navy, kicker "Guía · Acompañamiento",
   H1 serif 400 en minúsculas, entradilla, meta (tiempo de lectura + nº de capítulos +
   actualización) y dos pills: "Empezar por el capítulo 1" y "Necesito ayuda ahora".
2. **Índice-portal** — 7 tarjetas crema 28px con número serif, título y una línea de
   resumen; hover elevación -6px; enlazan a cada capítulo (scroll suave, ya hay
   `scroll-padding-top:120px`).
3. **Rail lateral sticky** (≥1280px) — lista de capítulos con punto teal para el activo
   y barra de progreso; en móvil se reduce a la barra superior existente.
4. **Capítulos alternos** — cada capítulo es una sección con badge navy 62px, H2 serif
   grande e imagen en `.layered-media` alternando izquierda/derecha, con bloque lima/salvia
   detrás y parallax ±24px. Ancho de texto 680px, aire de 120-140px entre capítulos.
5. **Citas y avisos** — una pull-quote serif grande por cada 2 capítulos (frases que ya
   están en el texto, p.ej. love bombing / ostracismo) y un callout teal "Si te sientes
   en peligro" con teléfonos de crisis.
6. **"7 pasos" como recorrido interactivo** — stepper horizontal de 7 números navy
   (48px, conectores discontinuos) + panel que cambia; sin JS, los 7 paneles se ven
   como acordeón abierto. Los dos libros recomendados, como tarjetas de portada.
7. **Cierre** — bloque "No estás solo/a" sobre navy con esquinas 40px, tarjetas de
   recursos externos, y CTA a `/contacto` y `/hazte-socio`.

**Requisito técnico:** dejar de parchear HTML con regex. Extraer el contenido a
`src/data/guia-salida.ts` (capítulos, pasos, recursos) y crear la ruta propia
`src/pages/guia-para-salir-de-los-testigos-de-jehova.astro`, excluyendo el slug en
`[...slug].astro` como ya se hace con `quienes-somos`.
