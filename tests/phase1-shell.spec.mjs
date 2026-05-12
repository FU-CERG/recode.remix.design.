import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:4321";
const cases = [
  {
    path: "/",
    viewport: { width: 1280, height: 900 },
    screenshot: ".planning/artifacts/phase-01/desktop-home.png",
    text: "Alle Arbeiten",
  },
  {
    path: "/",
    viewport: { width: 390, height: 844 },
    screenshot: ".planning/artifacts/phase-01/mobile-home.png",
    text: "Alle Arbeiten",
  },
  {
    path: "/exponate/schotter/",
    viewport: { width: 390, height: 844 },
    screenshot: ".planning/artifacts/phase-01/mobile-exhibit.png",
    text: "Schotter",
  },
  {
    path: "/exponate/punkt-linie-flaeche/",
    viewport: { width: 390, height: 844 },
    screenshot: ".planning/artifacts/phase-01/mobile-long-title.png",
    text: "Punkt.Linie.Flaeche",
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const browser = await chromium.launch();

try {
  for (const check of cases) {
    const page = await browser.newPage({ viewport: check.viewport });
    await page.goto(new URL(check.path, baseUrl).toString(), { waitUntil: "networkidle" });

    await page.getByText("Recode.Remix.Design").first().waitFor({ state: "visible" });
    await page.getByText("Computingeducation © 2026").waitFor({ state: "visible" });
    await page.getByText(check.text).first().waitFor({ state: "visible" });

    const href = await page.getByRole("link", { name: "Impressum" }).getAttribute("href");
    assert(href === "https://computingeducation.de/impressum/", "Impressum link href mismatch.");

    const hasNoHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    );
    assert(hasNoHorizontalOverflow, `Horizontal overflow detected at ${check.viewport.width}px.`);

    await mkdir(dirname(check.screenshot), { recursive: true });
    await page.screenshot({ path: check.screenshot, fullPage: true });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log("Visual shell checks passed.");
