import fs from 'node:fs';
import path from 'node:path';
import { load } from 'cheerio';

const dist = path.resolve('C:/PROYECTOS/Clientes/AEVTJ/astro-site/dist');
const base = 'http://127.0.0.1:4322';
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'index.html') files.push(full);
  }
}

function routeFromFile(file) {
  const rel = path.relative(dist, path.dirname(file)).replaceAll(path.sep, '/');
  return rel ? `/${rel}/` : '/';
}

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

walk(dist);
const routes = files.map(routeFromFile).sort();
const results = [];

for (const route of routes) {
  const file = files.find((candidate) => routeFromFile(candidate) === route);
  const html = fs.readFileSync(file, 'utf8');
  const $ = load(html);
  const text = clean($('body').text());
  const images = $('img').toArray().map((el) => ({
    src: $(el).attr('src') || '',
    alt: $(el).attr('alt'),
    loading: $(el).attr('loading') || '',
  }));
  const forms = $('form').toArray().map((el) => ({
    action: $(el).attr('action') || '',
    method: ($(el).attr('method') || 'get').toLowerCase(),
    fields: $(el).find('input,textarea,select,button').toArray().map((field) => ({
      tag: field.tagName,
      type: $(field).attr('type') || '',
      name: $(field).attr('name') || '',
      required: $(field).is('[required]'),
      checked: $(field).is(':checked'),
      text: clean($(field).text()).slice(0, 120),
    })),
  }));
  const links = $('a[href]').toArray().map((el) => ({
    href: $(el).attr('href') || '',
    text: clean($(el).text()).slice(0, 120),
  }));
  const internalLinks = links.filter((link) => link.href.startsWith('/') && !link.href.startsWith('//'));
  const externalLinks = links.filter((link) => /^https?:\/\//i.test(link.href));
  const cookieNodes = $('[id*="cookie" i],[class*="cookie" i]').toArray().map((el) => ({
    tag: el.tagName,
    id: $(el).attr('id') || '',
    className: clean($(el).attr('class') || '').slice(0, 120),
    text: clean($(el).text()).slice(0, 300),
  }));
  const scripts = $('script[src]').toArray().map((el) => $(el).attr('src'));
  const sensitiveTerms = ['religión', 'creencias', 'salud', 'transfus', 'menor', 'testimonio', 'denuncia', 'expuls', 'ostracismo', 'datos personales', 'privacidad', 'cookies', 'donac', 'socio'];
  const flags = sensitiveTerms.filter((term) => text.toLowerCase().includes(term));
  const httpLinks = links.filter((link) => /^http:\/\//i.test(link.href));
  const mailtoLinks = links.filter((link) => /^mailto:/i.test(link.href));
  const telLinks = links.filter((link) => /^tel:/i.test(link.href));
  results.push({
    route,
    file: path.relative(dist, file).replaceAll(path.sep, '/'),
    title: clean($('title').text()),
    description: $('meta[name="description"]').attr('content') || '',
    canonical: $('link[rel="canonical"]').attr('href') || '',
    lang: $('html').attr('lang') || '',
    h1Count: $('h1').length,
    headings: $('h1,h2,h3,h4,h5,h6').toArray().map((el) => ({ tag: el.tagName, text: clean($(el).text()).slice(0, 140) })),
    images,
    missingAlt: images.filter((image) => image.alt === undefined).length,
    emptyAlt: images.filter((image) => image.alt === '').length,
    forms,
    cookieNodes,
    scripts,
    externalLinks,
    httpLinks,
    mailtoLinks,
    telLinks,
    internalLinks: [...new Set(internalLinks.map((link) => link.href))],
    flags,
    textLength: text.length,
    bodyStart: text.slice(0, 240),
  });
}

const summary = {
  routes: results.length,
  missingTitle: results.filter((item) => !item.title).map((item) => item.route),
  missingDescription: results.filter((item) => !item.description).map((item) => item.route),
  missingCanonical: results.filter((item) => !item.canonical).map((item) => item.route),
  wrongH1Count: results.filter((item) => item.h1Count !== 1).map((item) => ({ route: item.route, h1Count: item.h1Count })),
  imagesWithoutAlt: results.filter((item) => item.missingAlt > 0).map((item) => ({ route: item.route, count: item.missingAlt })),
  emptyAltImages: results.filter((item) => item.emptyAlt > 0).map((item) => ({ route: item.route, count: item.emptyAlt })),
  routesWithForms: results.filter((item) => item.forms.length > 0).map((item) => ({ route: item.route, forms: item.forms })),
  routesWithCookies: results.filter((item) => item.cookieNodes.length > 0).map((item) => item.route),
  routesWithHttpLinks: results.filter((item) => item.httpLinks.length > 0).map((item) => ({ route: item.route, links: item.httpLinks })),
  routesWithMailto: results.filter((item) => item.mailtoLinks.length > 0).map((item) => ({ route: item.route, links: item.mailtoLinks })),
  routesWithTel: results.filter((item) => item.telLinks.length > 0).map((item) => ({ route: item.route, links: item.telLinks })),
  sensitiveRoutes: results.filter((item) => item.flags.length > 0).map((item) => ({ route: item.route, flags: item.flags })),
};

console.log(JSON.stringify({ generatedAt: new Date().toISOString(), base, summary, results }, null, 2));
