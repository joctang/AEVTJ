import fs from "node:fs";
import path from "node:path";

const dir = "src/content/posts";
const slugs = fs.readdirSync(dir).map((f) => f.replace(/\.json$/, ""));
const base = "http://localhost:4324";

let totalImgs = 0;
let broken = 0;
let externalImgs = 0;

for (const slug of slugs) {
  const url = `${base}/noticias/${slug}/`;
  const html = await fetch(url).then((r) => r.text());
  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  for (const src of srcs) {
    if (src.startsWith("http")) {
      externalImgs++;
      const res = await fetch(src, { method: "HEAD" }).catch(() => null);
      if (!res || !res.ok) {
        broken++;
        console.log(`EXTERNAL BROKEN [${res ? res.status : "fetch failed"}] ${src}  <- ${slug}`);
      }
      continue;
    }
    totalImgs++;
    const res = await fetch(base + src);
    if (!res.ok) {
      broken++;
      console.log(`BROKEN [${res.status}] ${src}  <- ${slug}`);
    }
  }
}

console.log(
  `\nChecked ${slugs.length} posts: ${totalImgs} local images + ${externalImgs} external images. ${broken} broken.`
);
