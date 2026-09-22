# Prompts para Sonnet — rediseño /guia-para-salir-de-los-testigos-de-jehova/

**Estado: prompts 1-6 ejecutados y verificados (21/09).** Queda pendiente el PROMPT 7 de correcciones, al final de este archivo.

Ejecútalos EN ORDEN, uno por mensaje. Cada uno es autónomo.
Contexto común: proyecto Astro en `astro-site/`, manual de diseño en `MANUAL-ESTILO.md`
(leerlo SIEMPRE antes de tocar nada), propuesta en `REDISENO-GUIA-SALIDA.md`.
Dev server: `astro dev --background` (nunca lanzarlo con Bash).

---

## PROMPT 1 — Extraer el contenido a datos estructurados

Lee `MANUAL-ESTILO.md` y `REDISENO-GUIA-SALIDA.md`.

En `astro-site/`, el contenido de la guía vive como HTML plano de Elementor dentro de
`src/content/pages/guia-para-salir-de-los-testigos-de-jehova.json` (campo `html`) y se
renderiza con la ruta genérica `src/pages/[...slug].astro` → `src/components/ArticleContent.astro`,
que lo mete todo en un `.prose` de 800px y lo parchea con regex. Quiero eliminar esa
dependencia SOLO para esta página.

Tarea:
1. Crea `src/data/guia-salida.ts` exportando datos tipados:
   - `intro`: { kicker, titulo, entradilla, heroImage, minutosLectura, actualizado }
   - `capitulos`: array de 6 objetos { n, id (slug kebab), titulo, resumen (1 línea que
     redactas tú a partir del texto), parrafos: string[] (HTML inline permitido:
     `<strong>`, `<em>`), imagen: { src, alt }, variante: 'lima' | 'salvia' | 'arena' }
     → capítulos: El comienzo, Love bombing, La vida dentro, El bautismo,
     Empezar a cuestionar, El impacto emocional de plantearse la salida.
   - `pasos`: array de 7 { n, titulo, parrafos: string[] } extraídos de la sección
     "7 PASOS PARA afrontar la salida" (ahora mismo son 7 paneles apilados sin número).
     Titula cada paso a partir del `<strong>` que lo abre.
   - `libros`: los 2 recomendados (Combatiendo el control mental de las sectas / Steve
     Hassan / 1988 y Crisis de conciencia / Raymond Franz / 1983) con su portada en
     `/uploads/2025/10/...webp`.
   - `cierre`: { quedarse, conclusion } con los bloques finales "Si decides quedarte por
     motivos personales" y "Conclusión: no estás solo".
   - `recursos`: array de { titulo, descripcion, url? } con los "Otros recursos
     disponibles" (Tú puedes salir de los Testigos de Jehová, cuenta de Instagram
     "Territorio Salida", canal de YouTube "La verdad sobre la verdad", Verdadtj.com).
2. **No inventes ni reescribas el texto**: copia literalmente el contenido del JSON, sólo
   limpia `&nbsp;`, `<br>` sueltos, tabulaciones y saltos de línea intermedios. Lo único
   que redactas nuevo son los `resumen` de una línea y los títulos de paso.
3. Añade `"guia-para-salir-de-los-testigos-de-jehova"` a `excludedSlugs` en
   `src/pages/[...slug].astro` y crea
   `src/pages/guia-para-salir-de-los-testigos-de-jehova.astro` como página provisional que
   use `BaseLayout` y pinte los datos sin estilos elaborados (sólo estructura semántica).
4. Verifica en el navegador que la URL sigue respondiendo y que no falta ningún párrafo ni
   imagen respecto al original (compara conteos). Enséñame el resultado.

No toques otras páginas ni el CSS global todavía.

---

## PROMPT 2 — Hero editorial + índice-portal

Lee `MANUAL-ESTILO.md` y `REDISENO-GUIA-SALIDA.md`. Trabaja en
`src/pages/guia-para-salir-de-los-testigos-de-jehova.astro` y crea
`src/styles/guia-salida.css` (importado sólo desde esa página).

1. **Hero**: foto `/uploads/2025/10/val-vesa-02dGWFjSZPo-unsplash-1.jpg` a sangre con
   degradado navy `#122c33` del 60% al 75% hasta sólido; altura ~78vh (mínimo 560px).
   Dentro, centrado y con mucho aire:
   - kicker DM Sans 10-11px, 600, mayúsculas, `letter-spacing:.16em`, crema al 70%, con
     punto circular teal delante: "Guía · Acompañamiento".
   - H1 Lora **400 y en minúsculas**, `clamp(2.9rem, 6vw, 5.4rem)`,
     `letter-spacing:-.045em`, `line-height:1.04`, `text-wrap:balance`. (El H1 actual está
     en `uppercase tracking-wide`: contradice el manual §2, corrígelo.)
   - entradilla de 18px, máximo 620px, crema al 80%.
   - fila meta separada por puntos: "X min de lectura · 6 capítulos · 7 pasos".
   - dos pills de 100px de radio y 54px de alto: "Empezar la guía ↗" (variante sólida lima
     `#d8eaa4`, ancla al capítulo 1) y "Necesito ayuda ahora ↗" (variante ghost, borde
     blanco translúcido, a `/contacto`).
   Mantén el `TornEdge` inferior si encaja; si no, borde inferior redondeado 44px.
2. **Índice-portal** justo debajo, sobre el crema: kicker "En esta guía" + H2 serif, y
   rejilla de 6 tarjetas (3 columnas ≥1024px, 2 ≥640px, 1 en móvil): radio 28px, fondo
   `#fbfdf5`, borde `1px #dce3cd`, sombra `0 18px 45px #0f25371a`, número serif grande en
   teal claro al fondo de la tarjeta, título Lora y resumen DM Sans 14px. Hover de 450ms
   con `cubic-bezier(.22,1,.36,1)`: `translateY(-6px)` y sombra mayor. Enlazan al `#id` de
   cada capítulo (ya hay `scroll-behavior:smooth` y `scroll-padding-top:120px`).
3. Sombras siempre navy translúcido, nunca negro. Foco de teclado: outline 3px teal con
   offset 5px. Responsive desde 360px sin scroll horizontal.
4. Verifica en el navegador a 1440px y 375px, revisa la consola y enséñame capturas.

---

## PROMPT 3 — Capítulos alternos con imagen flotante

Lee `MANUAL-ESTILO.md`, en especial §3 "Imágenes flotantes" y §4 "Movimiento". Sigue en la
página y el CSS de la guía.

Crea `src/components/GuiaCapitulo.astro` con props `{ n, id, titulo, parrafos, imagen,
variante, invertido }` y úsalo para los 6 capítulos.

- Sección de ancho completo con `padding-block: clamp(90px, 10vw, 140px)`, contenido en
  rejilla de 2 columnas (texto 46% / media 54%) que **alterna lado en los capítulos pares**.
  Por debajo de 900px: una sola columna, imagen primero.
- Columna de texto: badge navy `#122c33` circular de 62px con el número en Lora crema y un
  hilo discontinuo vertical descendente; H2 Lora 400 `clamp(1.9rem, 3.2vw, 2.9rem)` con
  `letter-spacing:-.035em`; párrafos de 16.5px, `line-height:1.9`, color `#435043`, ancho
  máximo 560px; los `<strong>` en navy.
- Columna media: patrón `.layered-media` — imagen con esquinas **32px uniformes**,
  `object-fit:cover`, sombra `0 30px 70px #0f25371f`, y **bloque de color degradado
  desplazado detrás** asomando por una esquina según `variante` (lima `#d8eaa4`, salvia
  `#e2edc9`, arena `#eef0d7`). Añade el círculo decorativo crema con "+" teal flotando en
  bucle de 7s.
- Movimiento: `data-reveal` en cada bloque (el sistema ya existe en `global.css` y
  `src/scripts/editorial.ts`) y parallax sutil de ±24px en la imagen, reutilizando el
  observer de `editorial.ts` si ya lo soporta; si no, añádelo allí sin romper la portada.
- Intercala **dos pull-quotes** (tras el capítulo 2 y tras el 5): frase corta ya presente en
  el texto, Lora 400 `clamp(1.6rem,3vw,2.4rem)`, ancho 780px, centrada, con una barra teal
  de 3px encima. No inventes frases: recorta literal del contenido.
- Respeta `prefers-reduced-motion`: sin parallax, sin flotación, sin reveals.
- Verifica en el navegador a 1440px y 375px y enséñame capturas.

---

## PROMPT 4 — Los "7 pasos" como recorrido interactivo

Lee `MANUAL-ESTILO.md`. Crea `src/components/GuiaPasos.astro` alimentado por `pasos` y
`libros` de `src/data/guia-salida.ts`.

Hoy esos 7 pasos se ven como 7 bloques de texto apilados y sin numerar: es el punto más
flojo de la página. Quiero un recorrido claro.

- Cabecera de sección sobre fondo salvia suave `#edf5d7` con esquinas 44px: kicker "Cómo
  afrontarlo" + H2 "7 pasos para afrontar la salida" (serif, en minúsculas; hoy está en
  mayúsculas y el manual lo prohíbe salvo en kickers).
- **Stepper horizontal**: 7 círculos navy de 48px con el número en Lora crema, unidos por
  conectores discontinuos; el activo pasa a teal `#2ea88f` y escala 1.08. Debajo, el panel
  del paso activo: título Lora y párrafos. Transición del panel de 450ms con
  `cubic-bezier(.22,1,.36,1)`, fade más 12px de desplazamiento.
- **Accesible y con mejora progresiva**: markup nativo de tabs (`role="tablist"`,
  `role="tab"` con `aria-selected`, `role="tabpanel"`), navegable con flechas ←/→ y
  Home/End. **Sin JS deben verse los 7 paneles**: ocúltalos sólo bajo una clase
  `is-enhanced` que añada el script.
- Por debajo de 768px, en lugar de tabs: acordeón vertical con `<details>` nativo, el
  primero abierto y el número dentro del `<summary>`.
- Dentro del paso "Infórmate", los 2 libros como tarjetas horizontales con su portada
  (`/uploads/2025/10/Combatiendo-el-control-mental-de-las-sectas.webp` y
  `/uploads/2025/10/Crisis-de-conciencia.webp`), esquinas 18px, sombra, título Lora, autor
  y año en DM Sans 13px.
- Verifica en el navegador: haz clic en varios pasos, comprueba el cambio de panel y la
  navegación con teclado, revisa la consola. Capturas de desktop y móvil.

---

## PROMPT 5 — Rail de capítulos, aviso de ayuda y cierre

Lee `MANUAL-ESTILO.md`. Tres piezas, todas en la página de la guía.

1. **Rail sticky de capítulos** (sólo ≥1280px): columna fija a la izquierda con los 6
   capítulos más "7 pasos"; DM Sans 12px, color `#7c8a72`; el activo en navy con un punto
   teal delante y una fina línea de progreso teal que avanza con el scroll. Resuelve el
   activo con `IntersectionObserver` en `src/scripts/editorial.ts` o en un script propio;
   no dupliques la barra superior que ya existe (`.site-progress`). Oculto en móvil; con
   `prefers-reduced-motion`, estático.
2. **Callout de ayuda** tras el capítulo del impacto emocional: tarjeta crema con borde
   teal de 4px a la izquierda, icono, título "Si sientes que la desesperación te supera" y
   el texto de crisis que ya está en el contenido, más enlaces a `/contacto` y
   `/recursos-de-ayuda`. Tono sobrio, nada alarmista, sin emojis.
3. **Cierre**: bloque sobre navy `#0f2537` con esquinas 40px que recoja "Si decides
   quedarte por motivos personales" y "Conclusión: no estás solo" (texto crema, H2 Lora,
   `strong` en lima); debajo, rejilla de tarjetas de `recursos` (radio 28px, hover -6px,
   flecha ↗) y, al final, dos pills: "Contacta con la asociación" (lima, a `/contacto`) y
   "Hazte socio" (navy con hover teal, a `/hazte-socio`).
   Los recursos externos con `target="_blank" rel="noopener"`. Si de alguno no tenemos URL
   fiable, déjalo como tarjeta sin enlace: no inventes URLs.
4. Verifica en el navegador y enséñame capturas.

---

## PROMPT 6 — Pulido final, accesibilidad y rendimiento

Lee `MANUAL-ESTILO.md` completo y revisa `/guia-para-salir-de-los-testigos-de-jehova/` de
punta a punta.

1. **Coherencia con el sistema**: audita que no se haya colado ningún color, radio, sombra
   o tiempo de transición fuera del manual (sombras navy translúcidas, radios 28/32/44/100px,
   450ms en hover y 1500ms en reveals, easings del manual). Lista lo que corrijas.
2. **Accesibilidad**: un solo `<h1>`; jerarquía h2/h3 correcta; contraste AA del crema sobre
   navy y del texto `#435043` sobre crema (mídelo y corrígelo si no llega a 4.5:1); `alt`
   descriptivo en todas las imágenes (hoy varias están vacías o con el nombre del archivo en
   mayúsculas); foco visible en todo elemento interactivo; recorrido completo con teclado;
   `prefers-reduced-motion` desactiva parallax, flotación y reveals.
3. **Rendimiento**: `width` y `height` en todas las imágenes para evitar CLS,
   `loading="lazy"` y `decoding="async"` salvo la del hero (`eager` +
   `fetchpriority="high"`); confirma que el CSS de la guía no se carga en otras páginas.
4. **SEO**: title y description propios en `BaseLayout` y JSON-LD `Article` (o `HowTo` para
   la sección de 7 pasos) con autoría AEVTJ.
5. **Responsive**: revisa 360, 768, 1024, 1440 y 1920px. Sin scroll horizontal, sin texto
   cortado, objetivos táctiles ≥44px.
6. Ejecuta `npm run build` y confirma que compila sin errores ni warnings nuevos.
7. Resumen de lo corregido y capturas de los cinco anchos.

---

## PROMPT 7 — Correcciones tras la revisión (21/09)

Lee `MANUAL-ESTILO.md`. Revisión de la guía ya implementada; corrige estos puntos y
verifica cada uno en el navegador.

1. **[YA CORREGIDO, no lo repitas]** En `src/styles/guia-salida.css` los selectores de
   variante apuntaban a `.layered-media--guia[data-variante=...]`, pero `data-variante`
   vive en la `<section class="guia-capitulo">`. El bloque de color desplazado quedaba
   transparente en los 6 capítulos. Ya está cambiado a
   `[data-variante='lima'] .layered-media--guia span`. Sólo comprueba que sigue bien.
2. **Ritmo del hero**: el H1 parte en 3 líneas a 1126px de ancho y el hero ocupa casi una
   pantalla entera antes de que se vea nada más. Sube el `max-width` del H1 para que caiga
   en 2 líneas entre 1100 y 1440px, y añade un indicador de scroll discreto (flecha o línea
   teal) al pie del hero.
3. **Sección de 7 pasos**: el panel activo cambia de altura al saltar de paso y el bloque
   entero se queda corto de aire. Fija una altura mínima al panel (la del paso más largo o
   `min-height` con `grid-template-areas` apiladas) para que el stepper no salte, y sube el
   `padding-block` de la sección al mismo rango que los capítulos.
4. **Continuidad visual entre pasos y cierre**: hoy la sección salvia termina y arranca de
   golpe el bloque navy. Añade una transición (borde redondeado 44px + franja crema) como
   la que ya hay entre hero e índice.
5. **Rail lateral**: sólo aparece a partir de 1280px y el ancho útil de la pantalla más
   común (1280-1366px) lo deja muy pegado al contenido. Revisa que no se solape con el
   texto a 1280px exactos y que la línea de progreso teal se vea (hoy es muy tenue).
6. **Enlaces de recursos**: comprueba cuáles de los 4 recursos externos quedaron sin URL y
   dime cuáles son para que los complete el cliente. No inventes URLs.
7. Vuelve a ejecutar `npm run build` y dame capturas a 375, 1280 y 1440px.
