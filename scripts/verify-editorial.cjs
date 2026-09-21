const {chromium} = require('C:/Users/jocta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const origin = 'http://localhost:4322';
const out = 'output/playwright';
const report = {pages: [], interactions: {}, consoleErrors: [], screenshots: []};
const pages = fs.readdirSync('dist',{recursive:true}).filter(p => p.endsWith('index.html')).map(p => '/' + p.replaceAll('\\','/').replace(/index.html$/,''));
const pause = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await chromium.launch({channel:'msedge',headless:true});
  const ctx = await browser.newContext({viewport:{width:1440,height:1000}});
  await ctx.addInitScript(() => { if(location.protocol === 'http:') localStorage.setItem('aevtj-cookie-consent','declined'); });
  const page = await ctx.newPage();
  page.on('pageerror', e => report.consoleErrors.push(e.message));
  async function shot(name, fullPage=false) {
    await page.screenshot({path:`${out}/${name}.png`,fullPage});
    report.screenshots.push(name+'.png');
  }
  await page.goto(origin,{waitUntil:'networkidle'});
  await page.evaluate(() => document.fonts.ready);
  await pause(1000);
  await shot('home-desktop');
  const firstTransform = await page.locator('.premium-hero__image').evaluate(el => getComputedStyle(el).transform);
  await page.mouse.wheel(0,550);
  await pause(1000);
  report.interactions.heroParallax = firstTransform !== await page.locator('.premium-hero__image').evaluate(el => getComputedStyle(el).transform);
  await shot('home-overlap');
  for (const [selector,name] of [['.help-section','home-help'],['.dark-story','home-story'],['.world-section','home-world'],['.evidence-section','home-news']]) {
    await page.locator(selector).first().scrollIntoViewIfNeeded();
    await pause(1000);
    await shot(name);
  }
  // Walk the full page to trigger entrances and lazy images before a full capture.
  await page.evaluate(() => window.scrollTo({top:0,behavior:'instant'}));
  for (let y=0;y<await page.evaluate(() => document.documentElement.scrollHeight);y+=650) {
    await page.evaluate(y => window.scrollTo({top:y,behavior:'instant'}),y);
    await pause(80);
  }
  await pause(1100);
  await shot('home-desktop-full',true);
  await page.setViewportSize({width:390,height:844});
  await page.goto(origin,{waitUntil:'networkidle'});
  await pause(900);
  await shot('home-mobile');
  await page.getByRole('button',{name:'Abrir menú'}).click();
  report.interactions.mobileMenuOpens = await page.locator('#mobile-menu').isVisible();
  await shot('mobile-menu');
  await page.keyboard.press('Escape');
  report.interactions.mobileMenuEscape = !(await page.locator('#mobile-menu').isVisible());
  await page.locator('.help-section').scrollIntoViewIfNeeded();
  await pause(1000);
  await shot('home-help-mobile');
  for (const [route,name] of [['/contacto/','contact'],['/quienes-somos/','about'],['/noticias/','news'],['/hazte-socio/','membership'],['/guia-para-salir-de-los-testigos-de-jehova/','guide']]) {
    for (const width of [390,1440]) {
      await page.setViewportSize({width,height:width===390?844:1000});
      await page.goto(origin+route,{waitUntil:'domcontentloaded'});
      await pause(1100);
      await shot(`${name}-${width}`);
    }
  }
  await page.emulateMedia({reducedMotion:'reduce'});
  for (const width of [390,1440]) {
    await page.setViewportSize({width,height:900});
    for (const route of pages) {
      const response = await page.goto(origin+route,{waitUntil:'domcontentloaded'});
      await page.evaluate(() => document.fonts.ready);
      await pause(170);
      const result = await page.evaluate(() => ({
        width:innerWidth, scrollWidth:document.documentElement.scrollWidth,
        overflow:[...document.querySelectorAll('main *')].filter(el=>{const r=el.getBoundingClientRect();return r.width && (r.right>innerWidth+2||r.left < -2) && !['absolute','fixed'].includes(getComputedStyle(el).position)}).slice(0,8).map(el=>({tag:el.tagName,cls:el.className,text:el.textContent?.slice(0,70)})),
        brokenImages:[...document.images].filter(img=>img.complete&&!img.naturalWidth).map(img=>img.getAttribute('src')),
        hiddenHeadings:[...document.querySelectorAll('h1,h2')].filter(el=>getComputedStyle(el).opacity==='0').length
      }));
      report.pages.push({route,status:response.status(),...result});
    }
  }
  for (const width of [320,768,1024]) {
    await page.setViewportSize({width,height:900});
    await page.goto(origin,{waitUntil:'domcontentloaded'});
    await pause(250);
    report.pages.push({route:'/',...(await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}))),status:200});
  }
  const cookieContext = await browser.newContext({viewport:{width:390,height:844}});
  const cookiePage = await cookieContext.newPage();
  await cookiePage.goto(origin,{waitUntil:'networkidle'});
  report.interactions.cookieVisible = await cookiePage.locator('#cookie-banner').isVisible();
  await cookiePage.screenshot({path:`${out}/mobile-cookie.png`});
  await cookiePage.getByRole('button',{name:'Denegar',exact:true}).click();
  await cookiePage.reload({waitUntil:'networkidle'});
  report.interactions.cookieChoicePersists = !(await cookiePage.locator('#cookie-banner').isVisible());
  await cookieContext.close();
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(origin,{waitUntil:'domcontentloaded'});
  const noMotion = await page.locator('.premium-hero__image').evaluate(el=>getComputedStyle(el).transform);
  await page.mouse.wheel(0,300);
  await pause(150);
  report.interactions.reducedMotion = noMotion==='none' && await page.locator('.premium-hero__image').evaluate(el=>getComputedStyle(el).transform)==='none';
  fs.writeFileSync(`${out}/verification.json`,JSON.stringify(report,null,2));
  console.log(JSON.stringify({pages:report.pages.length,overflow:report.pages.filter(p=>p.scrollWidth>p.width),brokenImages:report.pages.filter(p=>p.brokenImages?.length),consoleErrors:[...new Set(report.consoleErrors)],interactions:report.interactions},null,2));
  await browser.close();
})().catch(e=>{fs.writeFileSync(`${out}/verification-partial.json`,JSON.stringify(report,null,2));console.error(e);process.exit(1)});
