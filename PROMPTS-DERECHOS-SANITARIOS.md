# Prompts para Sonnet — rediseño /guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/

Ejecútalos EN ORDEN, uno por mensaje. Cada uno es autónomo.
Contexto común: proyecto Astro en `astro-site/`, manual en `MANUAL-ESTILO.md` (leerlo
SIEMPRE antes de tocar nada), propuesta en `REDISENO-DERECHOS-SANITARIOS.md`. Como
referencia de implementación ya terminada tienes la guía de salida y `/legal/`:
`src/data/guia-salida.ts`, `src/data/legal.ts`, `src/styles/guia-salida.css`,
`src/styles/legal.css`, `src/components/CasoJudicial.astro`, `src/scripts/rail.ts`.
Dev server: `astro dev --background`.

**Aviso que aplica a los 6 prompts:** esta página da indicaciones médicas y jurídicas
(transfusiones, reanimación, eutanasia, instrucciones previas). No reescribas, resumas,
amplíes ni "aclares" ninguna indicación. No añadas leyes, plazos, trámites, organismos ni
recomendaciones que no estén literalmente en el contenido actual. El aviso de que la guía
no sustituye asesoramiento profesional se mantiene literal y visible. Si detectas algo que
crees incompleto o desactualizado, dímelo en tu respuesta en vez de corregirlo.

---

## PROMPT 1 — Extraer el procedimiento a datos estructurados

Lee `MANUAL-ESTILO.md` y `REDISENO-DERECHOS-SANITARIOS.md`.

El contenido vive como HTML de Elementor en
`src/content/pages/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar.json`
(campo `html`) y se renderiza con la ruta genérica `src/pages/[...slug].astro`. En la
página resultante hay **38 `<br>`, cero `<ul>` y 27 `<strong>` vacíos**: todas las listas
son viñetas "•" escritas dentro de párrafos y el marcado heredado está roto.

1. Crea `src/data/derechos-sanitarios.ts` con tipos explícitos:
   - `intro`: { kicker, titulo, objetivo, queNecesitas, heroImage, actualizado }.
     El H1 del contenido y el del hero son distintos hoy: usa el largo del contenido como
     `titulo` y déjame decidir cuál mostrar.
   - `avisoLegal`: el texto literal del "Aviso importante".
   - `pasos`: array de 5 { n, id (slug kebab), titulo, intro?, bloques } donde cada bloque
     es `{ tipo: 'parrafo', texto }` o `{ tipo: 'lista', etiqueta?, items: string[] }`.
     **Convierte cada viñeta "•" en un item real de lista**; mantén el `<strong>` inline
     dentro del item, literal. Los encabezados en negrita que introducen una lista
     ("Recomendaciones:", "Dónde se formaliza:", "Cómo formalizarlo (elige una vía):",
     "Modelo recomendado:") pasan a `etiqueta` de la lista.
   - `tarjetaEmergencia`: { titulo: "Tarjeta de Instrucciones Sanitarias",
     campos: { etiqueta, tipo: 'rellenable' | 'fijo', valor? }[] } a partir del bloque con
     guiones bajos del paso 4. Los `___________` son campos rellenables; las dos frases en
     negrita ("Autorizo transfusiones…", "Exclusión familiar: …") son texto fijo.
   - `cierre`: la frase "Queremos que nos ayudes a que este movimiento sea imparable".
   - Descarta los 27 `<strong>` vacíos y los `<br>` residuales.
2. Añade el slug a `excludedSlugs` en `src/pages/[...slug].astro` y crea
   `src/pages/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar.astro`
   con estructura semántica sin estilos elaborados (listas reales, no párrafos con "•").
3. Verifica que no falta ni una viñeta ni una frase respecto al original: compara el texto
   plano del JSON con el texto plano renderizado y dime qué diferencias quedan.

---

## PROMPT 2 — Hero, aviso legal destacado y resumen "Qué necesitas"

Lee `MANUAL-ESTILO.md`. Crea `src/styles/derechos-sanitarios.css`, importado sólo desde
esa página. Reutiliza los patrones de kicker y pill que ya existen en `guia-salida.css` /
`legal.css`; si los duplicas por tercera vez, extráelos antes a un
`src/styles/_editorial-ui.css` compartido e impórtalo desde las tres páginas **sin cambiar
el aspecto de ninguna** (verifícalo comparando capturas antes y después).

1. **Hero** con `/uploads/2025/10/Serene-Seascape-at-Sunset.webp` a sangre, degradado navy
   60% → 75% → sólido, altura ~58vh (mínimo 460px): esta página es utilitaria, el hero no
   debe robar espacio. Kicker "Derechos sanitarios · Protección", H1 Lora 400 en
   minúsculas, el "Objetivo" como entradilla, meta "5 pasos · 1 tarjeta descargable" y dos
   pills: "Ver los 5 pasos" (sólida lima, ancla al paso 1) y "Descargar la tarjeta"
   (ghost, ancla a la tarjeta).
2. **Aviso legal destacado**, inmediatamente bajo el hero y antes de cualquier otra cosa:
   tarjeta crema `#fbfdf5`, borde teal de 4px a la izquierda, icono de información, título
   "Aviso importante" y el texto **literal**. Ancho máximo 900px. Que se lea antes que los
   pasos: hoy está enterrado entre párrafos.
3. **Resumen "Qué necesitas"**: dos casillas en rejilla (2 col ≥768px) con radio 28px,
   borde `1px #dce3cd` y sombra `0 18px 45px #0f25371a`: una para el DVA/DIP (con el alias
   "Testamento Vital") y otra para el representante sanitario. Texto sacado literal del
   párrafo de objetivo, sin añadir.
4. Corrige que hoy conviven dos titulares distintos (el del hero viene del mapa
   `heroTitles` de `[...slug].astro` y es más corto que el H1 del contenido). Deja un solo
   `<h1>` y dime cuál has usado.
5. Verifica a 1440 y 375px, consola limpia, capturas.

---

## PROMPT 3 — Los 5 pasos como tarjetas de procedimiento

Lee `MANUAL-ESTILO.md`. Crea `src/components/PasoSanitario.astro` y úsalo para los 5 pasos.

Hoy cada paso es un `<h2>` seguido de un párrafo gigante con viñetas "•" y `<br>`. Quiero
tarjetas de procedimiento, con las listas ya convertidas en `<ul>` reales en el prompt 1.

- Tarjeta de ancho máximo 900px centrada, radio 28px, fondo `#fbfdf5`, borde `1px #dce3cd`,
  sombra `0 20px 50px #0f25371a`, padding `clamp(28px, 4vw, 48px)`, separación de
  `clamp(24px, 3vw, 40px)` entre pasos, `data-reveal` en cada una.
- Cabecera: badge navy circular de 54px con el número en Lora crema + H2 Lora 400
  `clamp(1.4rem, 2.4vw, 2rem)`, `letter-spacing:-.03em`, alineados en fila (en móvil el
  badge arriba).
- Listas: marcador propio (nunca el "•" del texto, que ya se eliminó) — punto teal de 6px
  a 14px del texto, items de 15.5px `line-height:1.8` color `#435043`, separados 12px,
  `<strong>` en navy. Las `etiqueta` de lista en DM Sans 12px 600 mayúsculas con
  `letter-spacing:.1em` color `#1f7a63`.
- **Caso especial paso 2** ("Cómo formalizarlo, elige una vía"): las tres vías (ante
  notario / ante tres testigos / en el Registro de Instrucciones Previas) como rejilla de
  3 tarjetas pequeñas (radio 18px, fondo `#f0f7dd`), con el nombre de la vía en Lora y el
  matiz debajo. Es una elección excluyente y debe leerse como tal. No cambies el texto.
- **Caso especial paso 2, bloque de exclusiones**: la fórmula entrecomillada "Las
  siguientes personas no están autorizadas…" va en un bloque monoespaciado o con borde
  discontinuo, como texto a copiar literalmente. Añade un botón "Copiar texto" que use
  `navigator.clipboard` con fallback si no está disponible.
- Verifica a 1440 y 375px; comprueba que ninguna lista quedó como párrafo. Capturas.

---

## PROMPT 4 — La tarjeta de emergencia (pieza central)

Lee `MANUAL-ESTILO.md`. Crea `src/components/TarjetaEmergencia.astro`.

El paso 4 describe una "Tarjeta de Instrucciones Sanitarias" para llevar en la cartera y en
el móvil, y hoy está escrita como texto plano con guiones bajos. Quiero que sea una tarjeta
de verdad: es lo que diferencia esta página de cualquier PDF sobre el tema.

- Componente con **proporción de tarjeta de cartera (85,6 × 54 mm)**, escalado en pantalla
  a un ancho máximo de 440px: fondo crema `#fbfdf5`, borde `1px #122c3333`, radio 18px,
  sombra `0 20px 50px #0f25371a`. Cabecera con el logo o las siglas AEVTJ en navy y el
  título "Tarjeta de Instrucciones Sanitarias" en Lora.
- **Campos rellenables** con línea de escritura real (borde inferior discontinuo de 1px),
  etiqueta en DM Sans 10px 600 mayúsculas `letter-spacing:.12em` color `#7c8a72`. Nada de
  guiones bajos escritos.
- **Texto fijo** destacado: la autorización de transfusiones sobre fondo lima `#d8eaa4` y
  la exclusión familiar sobre crema con borde navy. Son las dos frases que tienen que
  leerse en una urgencia.
- **Impresión**: hoja de estilos `@media print` para que la tarjeta salga a **tamaño real**
  en A4 (85,6 × 54 mm exactos), centrada, con marcas de corte discontinuas, y que se oculte
  todo lo demás de la página (header, footer, rail, resto de secciones). Botón
  "Imprimir tarjeta" que llame a `window.print()`. Verifica el resultado con la vista
  previa de impresión del navegador y enséñame la captura.
- Añade una segunda variante visual en la misma sección: una **captura de ejemplo de cómo
  se ve como información SOS en el móvil**, maquetada en CSS (no una imagen), porque el
  texto dice "pon esta tarjeta como información médica/SOS en la pantalla del móvil".
- Nada de formularios que envíen datos: los campos son para rellenar a mano o imprimir. **No
  guardes ni transmitas ningún dato personal**, ni siquiera en `localStorage`.
- Verifica a 1440 y 375px y en impresión. Capturas.

---

## PROMPT 5 — Registros autonómicos, navegación y cierre

Lee `MANUAL-ESTILO.md`.

1. **Registros de Instrucciones Previas**: la guía repite tres veces "regístralo en tu
   Comunidad Autónoma" y no da ni un solo enlace. Es un hueco de contenido real.
   Crea en `src/data/derechos-sanitarios.ts` un array `registrosAutonomicos` con las 17
   comunidades y las 2 ciudades autónomas, cada una con `{ nombre, url: null }`, y píntalas
   como rejilla de tarjetas pequeñas. **Mientras `url` sea `null`, renderiza el nombre sin
   enlace** y muestra una nota de que los enlaces se están completando. NO busques ni
   inventes las URLs: las tiene que aportar la asociación. Dime en tu respuesta que quedan
   pendientes.
2. **Índice sticky de pasos** (≥1280px): reutiliza `src/scripts/rail.ts` (ya extraído para
   la guía y `/legal/`) con los 5 pasos más "Tarjeta de emergencia" y "Registros".
   No dupliques el script; si necesitas parametrizarlo, hazlo sin romper las otras dos
   páginas y compruébalas después.
3. **Enlaces cruzados** antes del cierre: tres tarjetas a `/guia-para-salir-de-los-testigos-de-jehova/`,
   `/recursos-de-ayuda/` y `/legal/`, con el mismo patrón de tarjeta con flecha ↗ que ya
   usa el cierre de la guía de salida.
4. **Cierre** sobre navy `#0f2537`, esquinas 40px: la frase "Queremos que nos ayudes a que
   este movimiento sea imparable" como titular (hoy está suelta a mitad de página sin
   función), un párrafo breve y dos pills: "Hazte socio" (lima) y "Consúltanos tu caso"
   (navy con hover teal, a `/contacto`).
5. Verifica y dame capturas.

---

## PROMPT 6 — Pulido final, accesibilidad, SEO y rendimiento

Lee `MANUAL-ESTILO.md` completo y revisa la página de punta a punta.

1. **Coherencia con el sistema**: audita colores, radios, sombras y tiempos frente al
   manual, y frente a lo ya hecho en `/legal/` y la guía de salida — las tres páginas deben
   parecer la misma web. Lista lo que corrijas.
2. **Marcado limpio**: confirma que no queda ni un `<strong>` vacío, ni un `<br>` de
   maquetación, ni una viñeta "•" escrita a mano (había 27, 38 y unas 30 respectivamente en
   el original). Todas las listas deben ser `<ul>`/`<li>` reales.
3. **Accesibilidad**: un solo `<h1>`; jerarquía correcta; el aviso legal con
   `role="note"` o equivalente y contraste AA; el botón "Copiar texto" con confirmación
   accesible (`aria-live`); foco visible; recorrido con teclado; objetivos ≥44px;
   `prefers-reduced-motion`.
4. **Rendimiento**: `width`/`height` y `fetchpriority="high"` en la imagen del hero;
   confirma que `derechos-sanitarios.css` no se carga en otras páginas comparando los
   `<link>` de `dist/` entre páginas.
5. **SEO**: `title` y `description` propios y JSON-LD. Usa `HowTo` para los 5 pasos, pero
   **no uses `MedicalWebPage` ni tipos que impliquen consejo médico**: la propia guía dice
   que no sustituye asesoramiento profesional y el marcado no puede contradecirla.
6. **Impresión**: revisa que al imprimir la página completa (no sólo la tarjeta) el
   resultado sea legible y no arrastre fondos navy a página completa.
7. **Responsive**: 360, 768, 1024, 1280, 1440 y 1920px, sin scroll horizontal.
8. Ejecuta `npm run build`, confirma que compila limpio, y dame el resumen, los datos
   pendientes (URLs de registros autonómicos) y capturas.
