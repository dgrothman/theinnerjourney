#!/usr/bin/env node
// Builds the class handout PDFs from handouts/class-N.html into handouts/dist/class-N.pdf.
// It never touches the live PDFs in public/handouts/; copy a PDF there yourself to publish it.
// Usage: pnpm handouts            (all)      pnpm handouts 3 5   (only classes 3 and 5)
//        node handouts/build.mjs --out <dir> 3   (write somewhere else)
// Page size, margins, header and footer come from @page rules in handout.css.
// Needs Google Chrome installed (set CHROME_PATH if it isn't in /Applications).
import { readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const outIdx = args.indexOf("--out");
const outDir = outIdx >= 0 ? args.splice(outIdx, 2)[1] : join(here, "dist");
mkdirSync(outDir, { recursive: true });
const only = new Set(args.map(Number));
const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const files = readdirSync(here).filter((f) => /^class-\d+\.html$/.test(f))
  .filter((f) => !only.size || only.has(Number(f.match(/\d+/)[0]))).sort();
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
try {
  for (const f of files) {
    const page = await browser.newPage();
    await page.goto(`file://${join(here, f)}`, { waitUntil: "networkidle0" });
    await page.evaluateHandle("document.fonts.ready");
    const out = join(outDir, f.replace(".html", ".pdf"));
    await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true });
    await page.close();
    console.log(out);
  }
} finally {
  await browser.close();
}
