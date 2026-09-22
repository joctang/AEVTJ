# Rediseño premium — /guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/

## Diagnóstico

Tercera página con el mismo patrón: HTML de Elementor en
`src/content/pages/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar.json`
(6,8 KB) volcado en un `.prose` de 736px por la ruta genérica. Pero el desajuste entre
contenido y formato es aquí el mayor de las tres:

**Esto no es un texto para leer: es un procedimiento para ejecutar.** Cinco pasos de
trámite administrativo-sanitario, con documentos que hay que redactar, registrar y llevar
encima. Y está presentado como seis párrafos largos.

Medido en la página renderizada:

- **38 `<br>`** y **cero `<ul>`**: todas las listas son viñetas "•" escritas a mano dentro
  de párrafos. Nada es una lista real, ni para el lector ni para un lector de pantalla.
- **27 `<strong>` vacíos**: el HTML heredado tiene etiquetas `<strong>` rotas que envuelven
  los `<h2>` y se quedan sin cerrar. Ensucian el marcado y pueden arrastrar el bold.
- **El "Aviso importante"** (que la guía es informativa y no sustituye asesoramiento
  jurídico ni médico) **es un párrafo más**, indistinguible del resto. En una página sobre
  transfusiones, reanimación y eutanasia, ese aviso tiene que verse.
- **La "Tarjeta de Instrucciones Sanitarias" está escrita como texto plano con guiones
  bajos** (`Nombre y DNI: ___________`). Es literalmente una plantilla de tarjeta física
  para la cartera, y se muestra como un párrafo cualquiera.
- Sin imágenes, sin cabecera de sección, sin índice, sin descargable, sin CTA.
- La frase "Queremos que nos ayudes a que este movimiento sea imparable" está suelta entre
  el objetivo y el aviso legal, sin ser una llamada a la acción.
- El h1 del contenido es más largo que el del hero (el hero usa un título recortado del
  mapa `heroTitles` en `[...slug].astro`); conviven dos titulares distintos.

## Propuesta

Convertirla en un **kit accionable**, no en un artículo. El usuario llega aquí con un
problema concreto y con prisa: quiere saber qué firmar, dónde registrarlo y qué llevar en
la cartera. El diseño tiene que responder a eso en este orden.

1. **Hero contenido** con la foto marina actual: kicker "Derechos sanitarios · Protección",
   H1 serif en minúsculas, el "Objetivo" como entradilla, meta ("5 pasos · 1 tarjeta
   descargable") y dos pills: "Ver los 5 pasos" y "Descargar la tarjeta".
2. **Aviso legal destacado inmediatamente bajo el hero** —no enterrado—: tarjeta crema con
   borde teal, icono, y el texto literal del aviso. Es lo primero que debe leerse.
3. **Resumen "Qué necesitas"**: dos casillas, DVA/DIP y representante sanitario, sacadas
   del párrafo de objetivo.
4. **Los 5 pasos como tarjetas de procedimiento numeradas**, cada una con su badge navy,
   su título, y **las viñetas convertidas en listas reales** (`<ul>`), con los `<strong>`
   como etiquetas de campo. Cada paso, una tarjeta de 28px sobre crema, no un párrafo.
   Dentro del paso 2, las vías de formalización (notario / tres testigos / registro
   autonómico) como tres opciones en rejilla, que es como se leen de verdad.
5. **La tarjeta de emergencia, como tarjeta de verdad**: pieza central de la página. Un
   componente con proporción de tarjeta de cartera (85,6 × 54 mm), fondo crema, borde
   navy, campos con líneas de escritura reales, y la exclusión familiar destacada.
   Con **CSS de impresión** para que salga a tamaño real en A4 y un botón "Imprimir
   tarjeta". Es lo que diferencia esta página de cualquier PDF sobre el tema.
6. **Registros autonómicos**: la guía repite "regístralo en tu Comunidad Autónoma" pero no
   da ni un enlace. Hueco de contenido real. Propongo una rejilla con las 17 comunidades
   y sus enlaces al Registro de Instrucciones Previas — **pero las URLs las tiene que
   aportar la asociación**, no se inventan.
7. **Cierre**: la frase del movimiento como CTA a `/hazte-socio`, más `/contacto` para
   consultar dudas y enlace cruzado a la guía de salida y a `/recursos-de-ayuda`.

Igual que las otras dos: extraer a `src/data/derechos-sanitarios.ts`, ruta propia
`src/pages/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar.astro`
y excluir el slug en `[...slug].astro`.

**Regla dura:** contenido médico y jurídico. No se reescribe, no se amplía, no se
"aclara" ninguna indicación clínica ni legal, no se añaden leyes, plazos ni trámites que no
estén en el texto actual, y el aviso de que la guía no sustituye asesoramiento profesional
se mantiene visible y literal.
