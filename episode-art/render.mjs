// Render podcast episode art: node episode-art/render.mjs episode-art/fall-2026/source/episode-6.html episode-art/fall-2026/TIJ-2026-Fall-Class-6-episode-art.png
// Each source HTML is a 1000x1000 page; output is 3000x3000 PNG (Spotify wants ≥1400px square).
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
const [src, out] = process.argv.slice(2);
if (!src || !out) { console.error("usage: node episode-art/render.mjs <source.html> <out.png>"); process.exit(1); }
const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 3 });
await page.goto("file://" + resolve(src), { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: resolve(out) });
await browser.close();
console.log("wrote", out);
