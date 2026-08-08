import puppeteer from 'puppeteer-core';

const SP = '/tmp/claude-1000/-home-arvind-Desktop-projects-my-portfolio/4aa1849e-f145-4237-a59e-bd6c941a49d3/scratchpad';
const EXE = process.env.CHROME || '/usr/bin/google-chrome';

const browser = await puppeteer.launch({
  executablePath: EXE,
  args: ['--no-sandbox', '--force-device-scale-factor=1'],
});

for (const [name, w, h] of [['hero-1440', 1440, 900], ['hero-390', 390, 844]]) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 2600));
  await page.screenshot({ path: `${SP}/${name}.png` });

  const over = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  console.log(name, 'h-overflow:', over);
  await page.close();
}

await browser.close();
