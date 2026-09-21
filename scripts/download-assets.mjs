// One-off migration script: download referenced wp-content/uploads assets locally.
import fs from "node:fs";
import path from "node:path";

const SITE = "https://victimasdetestigosdejehova.org";
const urls = JSON.parse(
  fs.readFileSync(path.resolve("scripts/out/asset-urls.json"), "utf8")
);
const outRoot = path.resolve("public/uploads");

function localPathFor(url) {
  const p = url.slice((SITE + "/wp-content/uploads/").length);
  return path.join(outRoot, decodeURIComponent(p));
}

let ok = 0;
let fail = 0;

for (const url of urls) {
  const dest = localPathFor(url);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest)) {
    ok++;
    continue;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    ok++;
  } catch (err) {
    fail++;
    console.error("FAILED:", url, err.message);
  }
}

console.log(`Downloaded/present: ${ok}, failed: ${fail}, total: ${urls.length}`);
