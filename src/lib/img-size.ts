// Lee las dimensiones intrínsecas de una imagen de public/ en tiempo de build,
// para inyectarlas como width/height en las <img> y que el navegador reserve
// espacio antes de cargar (evita CLS). Rutas tipo "/flags/es.svg".
import { readFileSync } from "node:fs";
import { join } from "node:path";

type Dim = { w: number; h: number };

function png(b: Buffer): Dim | null {
  return b.length > 24 && b.toString("ascii", 12, 16) === "IHDR"
    ? { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }
    : null;
}
function gif(b: Buffer): Dim | null {
  return b.length > 10 && b.toString("ascii", 0, 3) === "GIF"
    ? { w: b.readUInt16LE(6), h: b.readUInt16LE(8) }
    : null;
}
function jpeg(b: Buffer): Dim | null {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
      return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}
function webp(b: Buffer): Dim | null {
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
function svg(b: Buffer): Dim | null {
  const s = b.toString("utf8");
  const w = s.match(/\bwidth="([\d.]+)(?:px)?"/);
  const h = s.match(/\bheight="([\d.]+)(?:px)?"/);
  if (w && h) return { w: +w[1], h: +h[1] };
  const vb = s.match(/viewBox="([\d.\-]+)[ ,]+([\d.\-]+)[ ,]+([\d.\-]+)[ ,]+([\d.\-]+)"/);
  if (vb && +vb[3] > 0 && +vb[4] > 0) return { w: +vb[3], h: +vb[4] };
  return null;
}

const cache = new Map<string, Dim | null>();

export function imageSize(rel: string): Dim | null {
  if (cache.has(rel)) return cache.get(rel)!;
  let dim: Dim | null = null;
  try {
    const abs = join(process.cwd(), "public", decodeURIComponent(rel.split("?")[0]).replace(/^\//, ""));
    const b = readFileSync(abs);
    const ext = abs.toLowerCase().split(".").pop() ?? "";
    dim = (ext === "png" ? (png(b) ?? svg(b)) : ext === "svg" ? svg(b) : ext === "webp" ? webp(b) : ext === "gif" ? gif(b) : (jpeg(b) ?? null)) ?? null;
  } catch { /* fichero ausente: devuelve null y la img queda sin atributos */ }
  if (!dim) console.warn(`[img-size] sin dimensiones: ${rel}`);
  cache.set(rel, dim);
  return dim;
}
