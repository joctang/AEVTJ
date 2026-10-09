// Añade width/height (dimensiones intrínsecas del fichero) a las etiquetas <img>
// de los .astro de src/ que no las tengan. Las img con src dinámico ({expr}) se
// reportan sin tocar. Uso: node scripts/add-img-dimensions.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src");

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith(".astro") ? [p] : [];
  });
}

function pngSize(b) {
  return b.length > 24 && b.toString("ascii", 12, 16) === "IHDR"
    ? { w: b.readUInt32BE(16), h: b.readUInt32BE(20) } : null;
}
function gifSize(b) {
  return b.length > 10 && b.toString("ascii", 0, 3) === "GIF"
    ? { w: b.readUInt16LE(6), h: b.readUInt16LE(8) } : null;
}
function jpegSize(b) {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc)
      return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}
function webpSize(b) {
  if (b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") return null;
  const f = b.toString("ascii", 12, 16);
  if (f === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
  if (f === "VP8L") {
    const bits = b.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (f === "VP8X") return { w: b.readUIntLE(24, 3) + 1, h: b.readUIntLE(27, 3) + 1 };
  return null;
}
function svgSize(b, rel) {
  const s = b.toString("utf8");
  const w = s.match(/\bwidth="([\d.]+)(?:px)?"/);
  const h = s.match(/\bheight="([\d.]+)(?:px)?"/);
  if (w && h) return { w: +w[1], h: +h[1] };
  const vb = s.match(/viewBox="([\d.\-]+)[ ,]+([\d.\-]+)[ ,]+([\d.\-]+)[ ,]+([\d.\-]+)"/);
  if (vb) {
    if (+vb[3] === 0 || +vb[4] === 0) { console.log(`  [aviso] viewBox con tamaño 0: ${rel}`); return null; }
    return { w: +vb[3], h: +vb[4] };
  }
  console.log(`  [aviso] SVG sin width/height ni viewBox: ${rel}`);
  return null;
}

function imageSize(absPath, rel) {
  const b = readFileSync(absPath);
  const ext = absPath.toLowerCase().split(".").pop();
  try {
    if (ext === "png") return pngSize(b) ?? svgSize(b, rel); // algunos .png exportados son SVG
    if (ext === "jpg" || ext === "jpeg") return jpegSize(b);
    if (ext === "webp") return webpSize(b);
    if (ext === "gif") return gifSize(b);
    if (ext === "svg") return svgSize(b, rel);
  } catch { /* fichero ilegible: se reporta */ }
  console.log(`  [aviso] formato no soportado: ${rel}`);
  return null;
}

let added = 0, skippedDynamic = 0, missing = 0;

for (const file of walk(srcDir)) {
  const html = readFileSync(file, "utf8");
  let out = "", pos = 0;
  for (const m of html.matchAll(/<img\b/g)) {
    const start = m.index;
    const end = html.indexOf(">", start);
    if (end === -1) continue;
    const tag = html.slice(start, end + 1);
    out += html.slice(pos, start);
    pos = start;
    if (/\bwidth=|\bheight=/.test(tag)) { continue; } // se copia tal cual
    const src = tag.match(/\bsrc="([^"]+)"/);
    if (!src || src[1].includes("{")) {
      console.log(`[dinamico] ${file.replace(srcDir + "\\", "")}: ${tag.replace(/\s+/g, " ").slice(0, 90)}`);
      skippedDynamic++;
      continue;
    }
    const rel = src[1].replace(/^https?:\/\/[^/]+/, "").split("?")[0];
    const abs = join(root, "public", decodeURIComponent(rel).replace(/^\//, ""));
    if (!existsSync(abs)) {
      console.log(`[no existe] ${rel} (${file.replace(srcDir + "\\", "")})`);
      missing++;
      continue;
    }
    const dim = imageSize(abs, rel);
    if (!dim) { missing++; continue; }
    const w = Math.round(dim.w), h = Math.round(dim.h);
    const patched = tag.replace(/^<img\b/, `<img width="${w}" height="${h}"`);
    out += patched;
    pos = end + 1;
    added++;
    console.log(`[ok] ${w}x${h}  ${rel}  (${file.replace(srcDir + "\\", "")})`);
  }
  out += html.slice(pos);
  if (out !== html) writeFileSync(file, out);
}

console.log(`\nAñadidas dimensiones a ${added} etiquetas. Dinámicas sin tocar: ${skippedDynamic}. Sin dimensiones conocidas: ${missing}.`);
