// One-off migration script: WP REST JSON -> clean Astro content collection JSON.
// Not part of the final site; run manually during the WordPress -> Astro migration.
import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";

const SP =
  "C:/Users/jocta/AppData/Local/Temp/claude/C--Users-jocta-OneDrive-Documentos-Proyectos-y-Clientes-AEVTJ/ca1dced6-0bef-49ef-8a89-a736111dc40c/scratchpad/data";
const SITE = "https://victimasdetestigosdejehova.org";

const pagesRaw = JSON.parse(fs.readFileSync(`${SP}/pages.json`, "utf8"));
const postsRaw = JSON.parse(fs.readFileSync(`${SP}/posts.json`, "utf8"));
const pagesFm = JSON.parse(fs.readFileSync(`${SP}/pages_fm.json`, "utf8"));
const postsFm = JSON.parse(fs.readFileSync(`${SP}/posts_fm.json`, "utf8"));
const mediaFeatured = JSON.parse(fs.readFileSync(`${SP}/media_featured.json`, "utf8"));
const mediaById = new Map(mediaFeatured.map((m) => [m.id, m.source_url]));
const fmById = new Map(
  [...pagesFm, ...postsFm].map((p) => [p.id, p.featured_media])
);

const KEEP_ATTRS = {
  img: ["src", "alt", "width", "height"],
  a: ["href", "target"],
  iframe: ["src", "title", "allow", "allowfullscreen"],
  th: ["colspan", "rowspan"],
  td: ["colspan", "rowspan"],
};

const assetUrls = new Set();

function localizeUrl(u) {
  if (!u) return u;
  if (u.startsWith(SITE)) {
    const p = u.slice(SITE.length);
    if (p.startsWith("/wp-content/uploads/")) {
      assetUrls.add(u);
      return p.replace("/wp-content/uploads/", "/uploads/");
    }
  }
  return u;
}

function stripSection($, root, dropSelectors) {
  const kids = root.children();
  const navIdxs = [];
  kids.each((i, el) => {
    if ($(el).find(".elementor-widget-nav-menu").length > 0) navIdxs.push(i);
  });
  let start = 0;
  let end = kids.length; // exclusive
  if (navIdxs.length > 0) {
    start = navIdxs[0] + 1;
    end = navIdxs[navIdxs.length - 1];
  }
  const out = $("<div></div>");
  kids.slice(start, end).each((i, el) => out.append($(el)));
  return out;
}

function cleanTree($, root) {
  // Remove noise widgets/tags entirely.
  root
    .find(
      [
        "script",
        "style",
        "noscript",
        "meta",
        "title",
        "link",
        ".elementor-widget-search-form",
        "form",
        "svg",
        ".elementor-icon-list-icon",
        ".elementor-social-icons-wrapper .elementor-screen-only",
      ].join(",")
    )
    .remove();

  // Elementor counters animate 0 -> data-to-value via JS; bake the final number in statically.
  root.find(".elementor-counter-number").each((_, el) => {
    const to = el.attribs["data-to-value"];
    if (to) $(el).text(to);
  });

  // Material-icons/font-icon ligatures rendered as plain <i>identifier</i> text
  // (no font loaded here, so they'd otherwise show as literal words like "info").
  root.find("i").each((_, el) => {
    const $el = $(el);
    const t = $el.text().trim();
    if (/^[a-z_]+$/.test(t) && $el.children().length === 0) {
      $el.remove();
    }
  });

  // Strip attributes down to a whitelist; rewrite uploads URLs to local paths.
  root.find("*").each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    const $el = $(el);
    const realImgSrc =
      tag === "img"
        ? el.attribs["data-src"] || el.attribs["data-lazy-src"] || el.attribs["src"]
        : null;
    const keep = KEEP_ATTRS[tag] || [];
    for (const attr of Object.keys(el.attribs || {})) {
      if (!keep.includes(attr)) $el.removeAttr(attr);
    }
    if (tag === "img") {
      if (realImgSrc) $el.attr("src", localizeUrl(realImgSrc));
      $el.removeAttr("width");
      $el.removeAttr("height");
    }
    if (tag === "a") {
      const href = $el.attr("href");
      if (href) $el.attr("href", localizeUrl(href));
    }
    if (tag === "iframe") {
      const src = $el.attr("src");
      if (src && src.startsWith("//")) $el.attr("src", "https:" + src);
    }
  });

  // Drop now-empty leaf containers (repeated passes: removing leaves can create new
  // empty parents several levels up in Elementor's deeply nested wrapper divs).
  for (let pass = 0; pass < 10; pass++) {
    root.find("div,span,p").each((_, el) => {
      const $el = $(el);
      if (
        $el.children().length === 0 &&
        $el.text().trim() === "" &&
        $el.find("img,iframe").length === 0
      ) {
        $el.remove();
      }
    });
  }

  return $.html(root).trim();
}

function extractEntry(item, kind) {
  const $ = cheerio.load(item.content.rendered, null, false);
  const root = $.root();
  const elementorRoot = root.find(".elementor").first();
  const base = elementorRoot.length ? elementorRoot : root;
  const middle = stripSection($, base, []);
  const html = cleanTree($, middle);

  const $out = cheerio.load(html, null, false);
  const firstImg = $out("img").first().attr("src") || null;

  const featuredId = fmById.get(item.id);
  const featuredUrl = featuredId ? mediaById.get(featuredId) : null;
  const image = featuredUrl ? localizeUrl(featuredUrl) : firstImg;

  const excerptFull = cheerio
    .load(item.excerpt?.rendered || "", null, false)
    .root()
    .text()
    .replace(/\s+/g, " ")
    .trim();
  const excerpt =
    excerptFull.length > 220 ? excerptFull.slice(0, 217).trim() + "…" : excerptFull;

  return {
    id: item.id,
    slug: item.slug,
    title: cheerio.load(item.title.rendered, null, false).root().text().trim(),
    date: item.date,
    link: item.link,
    excerpt,
    image,
    html,
  };
}

const outDir = path.resolve("scripts/out");
fs.mkdirSync(outDir, { recursive: true });

const pages = pagesRaw.map((p) => extractEntry(p, "page"));
const posts = postsRaw.map((p) => extractEntry(p, "post"));

fs.writeFileSync(`${outDir}/pages.json`, JSON.stringify(pages, null, 2));
fs.writeFileSync(`${outDir}/posts.json`, JSON.stringify(posts, null, 2));
fs.writeFileSync(
  `${outDir}/asset-urls.json`,
  JSON.stringify([...assetUrls].sort(), null, 2)
);

console.log("pages:", pages.length, "posts:", posts.length, "assets:", assetUrls.size);
