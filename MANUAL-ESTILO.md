# Manual de estilo — Web AEVTJ (rediseño premium editorial)

> Referencia de diseño: [alliahealth.co](https://alliahealth.co/) — estilo "premium editorial":
> fondos crema pálidos con matiz lima, tinta navy profunda, serif expresiva en titulares,
> imágenes flotantes con mucho aire, y movimiento continuo y suave en toda la página.

---

## 1. Paleta de colores

### Colores base (tokens en `src/styles/global.css`)

| Rol | Color | Hex | Uso |
|---|---|---|---|
| Fondo (superficie) | Crema lima | `#f5fbdf` | Fondo global de toda la web (base, casi plano) |
| Tinta (texto) | Navy profundo | `#122c33` | Texto, titulares, botones sólidos, footer |
| Navy hero | Navy | `#0f2537` | Hero de portada, secciones narrativas oscuras, cabeceras con foto |

### Colores de acento

| Rol | Color | Hex | Uso |
|---|---|---|---|
| Acento principal | Teal | `#2ea88f` | Hover de botones, foco de teclado, barra de progreso, símbolo "+", enlaces en hover |
| Acento secundario | Lima | `#d8eaa4` | Botón CTA principal ("Únete…"), bloques decorativos tras imágenes |
| Lima suave | Lima pálido | `#e9f6c4` | Hover del botón CTA lima |
| Teal oscuro (enlaces) | Teal texto | `#1f7a63` | Enlaces dentro de artículos (`.prose a`) |

### Degradados ambientales (fondos)

Los fondos nunca son 100% planos: llevan degradados radiales muy sutiles casi del
mismo tono que la superficie, que además se desplazan lentamente (ver §4):

- Escena **light**: `#f0f8d8` → transparente + `linear-gradient(120deg, #f9fceb, #eef6d9)`
- Escena **sage** (secciones "movimiento mundial", "noticias"): `#e9f3cd` + `linear-gradient(135deg, #f3f9e4, #fbfdf4)`
- Escena **dusk** (secciones narrativas oscuras): toques `#e2f2ea` / `#f0f8dd` + `linear-gradient(150deg, #f8fcef, #eef6ec)`

**Regla de oro:** el color fuerte solo aparece en acentos pequeños (botones, insignias,
detalles). El fondo se mantiene siempre pálido y uniforme.

---

## 2. Tipografía

| Uso | Fuente | Notas |
|---|---|---|
| Titulares | **Lora** (serif, `--font-heading`) | `font-weight: 400`, `letter-spacing` negativo (-0.035 a -0.065em), `text-wrap: balance`. Nunca en mayúsculas salvo kickers |
| Cuerpo y UI | **DM Sans** (`--font-body`) | Texto, botones, nav, formularios |
| Kickers (etiquetas de sección) | DM Sans 10-11px, 600, mayúsculas, `letter-spacing: .16em` | Con punto circular delante (`::before`) |

Tamaños de referencia:

- H1 portada: `clamp(5rem, 8.8vw, 8.8rem)`, `line-height: .99`
- H2 de sección: `clamp(34px, 4.15vw, 58px)`, `line-height: 1.12`
- H2 artículos: `clamp(1.7rem, 3vw, 2.6rem)`
- Cuerpo artículos: `16.5px`, `line-height: 1.9`

---

## 3. Componentes

### Botones (pills)

- **Radio 100px** (píldora completa), altura 54px, padding lateral 28px.
- Flecha `↗` al final; al hacer hover se desplaza en diagonal.
- Variantes:
  - `--solid`: fondo lima `#d8eaa4`, texto navy. Hover: lima pálido + elevación.
  - `--dark`: fondo navy `#122c33`, texto crema. Hover: **teal** `#2ea88f`.
  - `--ghost`: borde blanco translúcido (para fondos oscuros).
- Transiciones: **450ms** con `--ease-editorial: cubic-bezier(.22,1,.36,1)`.
- Hover: elevación `-3px` + sombra `0 14px 30px #0f25371a`.

### Tarjetas

- Radio **28px** (tarjetas de contenido) / **32px** (imágenes flotantes).
- Superficies pálidas: crema `#fbfdf5` o limas muy suaves (`#ebf2da`, `#e2edc9`).
- Borde fino `1px` verdoso pálido (`#dce3cd`) + sombra difusa navy translúcida.
- Hover: elevación `-6px` con transición de 450ms.

### Imágenes flotantes (storytelling)

Patrón `.layered-media`: imagen grande (~65-70% del ancho de sección) con:

- Esquinas **32px uniformes** (nada de arcos ni círculos).
- **Bloque de color degradado desplazado** detrás (lima, verde suave o arena según variante:
  `--soft`, `--round`), asomando por una esquina → efecto "flotante".
- Sombra `0 30px 70px #0f25371f`.
- Círculo decorativo `+` en crema con símbolo teal, flotando arriba/deabajo en bucle.
- Nunca cubren el fondo completo: el crema siempre respira alrededor.

### Insignias de paso (artículos largos)

- Círculos navy `#122c33` con número en serif crema.
- Verticales (capítulos, `.step-badge`): 62px, con hilo discontinuo hacia abajo.
- Horizontales (procesos, `.step-marker`): 48px en regleta con conectores discontinuos.
- Las ilustraciones de artículos van enmarcadas en tarjetas crema 28px con hover de elevación.

### Cabeceras de página

- Con foto: imagen a sangre con **degradado navy** (`from-brand-ink/60 via /75 to sólido`)
  y título serif centrado en crema.
- Sin foto: banda lima suave `#eef6d9` con borde inferior redondeado 44px.

### Header y footer

- Header: píldora flotante sticky con `backdrop-filter: blur(18px)`, fondo crema translúcido.
- Footer: navy `#0f2537` con esquinas superiores redondeadas 40px.
- Barra de progreso de scroll: teal `#2ea88f`, 3px, arriba.

---

## 4. Movimiento (la regla más importante)

**La página nunca está quieta.** Tres capas de movimiento simultáneas:

1. **Fondo en deriva**: el degradado ambiental fijo se expande/desplaza en un ciclo
   de **28s** (`ambient-drift`, escala 1.04, alternado). Presente en toda la web
   (`body::before` en interiores, `.home-ambient` en portada).
2. **Escenas por sección**: el tono del fondo se funde (1,2s) al cambiar de sección
   (`data-scene="light|sage|dusk"`, gestionado por `src/scripts/editorial.ts` con
   IntersectionObserver).
3. **Reveals al hacer scroll**: los bloques entran desde abajo:
   - Recorrido **88px**, desenfoque inicial **8px**.
   - Duración **1500ms** con easing expo `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Las fotos se asientan de zoom 1.08 → 1 en **2000ms**.
   - Tarjetas escalonadas **150ms** entre sí.
   - Implementación: atributo `data-reveal` + clase `reveal-ready` en `<html>`
     (progressive enhancement: sin JS el contenido siempre es visible).

Extras: parallax sutil (±24px) en imágenes flotantes, hover lentos de 450-600ms,
flotación en bucle de elementos decorativos (7s).

**Accesibilidad**: todo se desactiva con `prefers-reduced-motion`.

---

## 5. Sombras y bordes

- Sombras **siempre navy translúcido**, nunca negro puro: `#0f25371a`, `#0f25371f`.
- Difusas y amplias (30-70px de blur) → sensación de flotación.
- Selección de texto: lima `#d8eaa4` con texto navy.
- Foco de teclado: outline 3px teal `#2ea88f` con offset 5px.

---

## 6. Archivos clave

| Archivo | Contenido |
|---|---|
| `src/styles/global.css` | Tokens de paleta, tipografías Tailwind, sistema `data-reveal` |
| `src/styles/editorial.css` | Lenguaje visual compartido: header, footer, artículos, badges, escenas |
| `src/styles/home-editorial.css` | Portada: hero, tarjetas de rutas, secciones, imágenes flotantes |
| `src/scripts/editorial.ts` | Observers: reveals, escenas, parallax, contadores |
| `src/components/ArticleContent.astro` | Plantilla de artículos: h1→h2, badges de paso, scrim navy |
| `src/styles-backup-premium/` | Copia de seguridad de los estilos anteriores al rediseño |

---

## 7. Reglas rápidas (chuleta)

- ¿Nuevo botón? → pill 100px, navy o lima, hover teal/lima pálido a 450ms.
- ¿Nueva sección? → kicker con punto + H2 serif enorme + mucho aire (padding 130-140px).
- ¿Nueva imagen? → nunca a sangre completa en secciones claras; tarjeta flotante 28-32px
  con bloque de color detrás.
- ¿Nueva página? → cabecera navy con degradado o banda lima; fondo pálido con deriva.
- ¿Texto enfatizado? → `strong` navy; enlaces teal `#1f7a63`.
- ¿Animación? → lenta (1,5s+), easing expo, siempre con `prefers-reduced-motion`.
