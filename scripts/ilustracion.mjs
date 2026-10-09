// Convierte una ilustración generada (PNG/JPG/WebP) a las dos variantes WebP que usa la web.
// Uso:  node scripts/ilustracion.mjs <archivo-origen> <nombre-seo> [aaaa/mm]
// Ej.:  node scripts/ilustracion.mjs ~/Descargas/imprenta.png tdj-origen-imprenta-hilo 2026/10
// Resultado: public/uploads/aaaa/mm/<nombre>-900.webp y <nombre>-1536.webp
// Guía completa: docs-ilustraciones/GUIA-ILUSTRACIONES.md
import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";
import path from "node:path";

const [origen, nombre, carpetaArg] = process.argv.slice(2);
if (!origen || !nombre) {
  console.error("Uso: node scripts/ilustracion.mjs <archivo-origen> <nombre-seo> [aaaa/mm]");
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(nombre)) {
  console.error("El nombre debe ir en minúsculas, sin tildes y separado por guiones (ej.: tdj-origen-imprenta-hilo).");
  process.exit(1);
}

const hoy = new Date();
const carpeta = carpetaArg ?? `${hoy.getFullYear()}/${String(hoy.getMonth() + 1).padStart(2, "0")}`;
const destino = path.join("public", "uploads", carpeta);
mkdirSync(destino, { recursive: true });

const meta = await sharp(origen).metadata();
const ratio = meta.width / meta.height;
if (Math.abs(ratio - 1.5) > 0.05 && Math.abs(ratio - 1) > 0.05) {
  console.warn(`Aviso: proporción ${meta.width}×${meta.height} (${ratio.toFixed(2)}). Las escenas y objetos deben ser 3:2 y los iconos 1:1.`);
}

for (const ancho of [900, 1536]) {
  const salida = path.join(destino, `${nombre}-${ancho}.webp`);
  await sharp(origen).resize({ width: Math.min(ancho, meta.width) }).webp({ quality: 82, effort: 6 }).toFile(salida);
  console.log(`${salida}  ${Math.round(statSync(salida).size / 1024)} KB`);
}

console.log(`\nEn el archivo de datos de la página:\n  imagen: { nombre: "${nombre}", alt: "Ilustración de …" },`);
