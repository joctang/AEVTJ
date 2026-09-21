# Imágenes para la dirección editorial de AEVTJ

La web utiliza el logo oficial y fotografías ya disponibles. No se han generado imágenes ni vídeos: el script `~/.claude/scripts/fal-img.sh` no existe en este equipo. Estos comandos quedan preparados para un entorno que disponga del script y de su configuración de fal.ai. Ejecutarlos desde `astro-site` después de crear `public/images/editorial`.

## 1. Portada — manos y comunidad

```bash
~/.claude/scripts/fal-img.sh "Premium editorial still photograph for a Spanish nonprofit supporting people rebuilding their lives. Close-up of four adult hands of different ages gently joining in a natural, believable gesture of mutual support, accurate anatomy, warm natural daylight, olive green and deep forest green color palette, subtle film grain, restrained and dignified mood, authentic candid photography, hands composed in the right half, left half softly shaded with generous negative space for a website headline, landscape composition, no text, no letters, no logos, no watermark, still image only" public/images/editorial/comunidad.jpg 16:9 2K
```

Uso: reemplazar la fotografía de `.premium-hero__image`. El degradado y el movimiento se aplican con CSS; no deben estar incrustados como texto en la foto. Revisar el recorte móvil antes de sustituirla.

## 2. Acompañamiento — una conversación tranquila

```bash
~/.claude/scripts/fal-img.sh "High-end editorial still photograph of two ordinary adults sharing a calm supportive conversation in a sunlit Mediterranean garden, natural relaxed gestures, eye-level candid composition, soft olive foliage in the background, linen and cream clothing, warm but restrained color grading, deep forest green shadows, realistic skin texture and anatomy, compassionate and hopeful atmosphere, not a medical consultation, not a staged corporate stock photo, subjects grouped in the central third so the image can also be cropped vertically, no text, no lettering, no logos, no watermark, still image only" public/images/editorial/acompanamiento.jpg 16:9 2K
```

Uso: fotografía en arco de la sección de ayuda. Imagen conceptual; no identificar a las personas generadas como socios ni como víctimas reales.

## 3. Libertad — paisaje de fondo

```bash
~/.claude/scripts/fal-img.sh "Fine-art editorial landscape still photograph of a quiet Mediterranean path opening into a sunlit clearing, layered olive trees in the foreground, distant soft hills, pale warm sky, tactile natural details, muted sage and olive green palette with warm ivory light, subtle atmospheric depth, peaceful sense of a new beginning, elegant understated composition suitable for a premium nonprofit website background, generous open space, no people, no buildings, no text, no logos, no watermark, still image only" public/images/editorial/camino.jpg 16:9 2K
```

Uso: fondo secundario de las secciones narrativas. Mantener la capa oscura para que el texto tenga contraste.

## Logo

Se conserva el logo oficial y su verde `#5b6934`. La generación de un nuevo logo no forma parte de esta versión, según la dirección confirmada. Para una reproducción fiel, utilizar el archivo original; un generador de imágenes puede deformar las letras.

## Criterios de selección

- Solo imágenes estáticas; ningún vídeo.
- No incrustar textos: todos los titulares siguen siendo HTML en español.
- Evitar poses dramáticas, escenas de sufrimiento y fotografías que parezcan testimonios reales.
- Revisar manos, rostros y recortes en escritorio y móvil.
- Exportar la selección a WebP/AVIF antes de integrarla para reducir el peso.
