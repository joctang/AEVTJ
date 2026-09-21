const { chromium } = require('C:/Users/jocta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
(async () => {
  const browser = await chromium.launch({channel: 'msedge', headless: true});
  const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
  for (const [name, url] of [['reference','https://alliahealth.co/'], ['before','http://localhost:4322/']]) {
    await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 60000});
    await page.waitForTimeout(3000);
    await page.screenshot({path: `output/playwright/${name}.png`});
    if (name === 'reference') {
      fs.writeFileSync('output/playwright/reference-styles.json', JSON.stringify(await page.locator('h1,h2,body').evaluateAll(els => els.slice(0,10).map(el => ({text:el.textContent, font:getComputedStyle(el).fontFamily, size:getComputedStyle(el).fontSize, color:getComputedStyle(el).color, bg:getComputedStyle(el).backgroundColor}))),null,2));
      await page.mouse.wheel(0,950);
      await page.waitForTimeout(1800);
      await page.screenshot({path:'output/playwright/reference-scroll.png'});
    }
  }
  await browser.close();
})();
