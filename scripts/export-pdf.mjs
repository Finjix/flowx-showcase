import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const url = process.env.SITE_URL ?? "http://localhost:5177/flowx-showcase/";
const pdfWidth = 1440;
const pdfHeight = 900;
const imageScale = 1.5;
const maxImageDimension = 1400;
const imageQuality = 0.76;
const outFile = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../pdf/flowx-showcase.pdf"
);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: pdfWidth, height: pdfHeight } });

await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
    html, body {
      background: #050706 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    @media print {
      .nav {
        display: none !important;
      }
      .case-cover,
      .chapter-head,
      .pain-grid,
      .flow-stack,
      .compare-stack,
      .system-map,
      .value-strip,
      .result-grid,
      .case-shots,
      .compare-matrix,
      .system-map-group,
      .guard-head,
      .guard-band,
      .agent-case,
      .agent-arch,
      .split-case,
      .anim-showcase,
      .project-card,
      .strength-card,
      .footer {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .section-kicker {
        break-after: avoid;
        page-break-after: avoid;
      }
      .footer {
        break-before: page;
        height: 900px;
        min-height: 900px;
      }
      .chapter-head,
      h1,
      h2,
      h3,
      h4 {
        break-after: avoid;
        page-break-after: avoid;
      }

      /* Keep the PDF aligned to the portfolio's visual chapters. */
      .main-case .chapter {
        padding: 64px 0;
      }
      .main-case .chapter-head {
        margin-bottom: 40px;
      }
      .agent {
        padding: 72px 0;
      }
      .agent-case {
        padding-bottom: 48px;
      }
      .agent-arch {
        padding-top: 48px;
      }
      .agent-arch .agent-masthead.compact p {
        margin-top: 16px;
      }
      .agent-arch .arch-board {
        margin-top: 32px;
        padding: 4px 24px 16px;
      }
      .agent-arch .arch-lane {
        padding: 14px 0;
        gap: 18px;
      }
      .agent-arch .prod-tools {
        margin-top: 12px;
      }
      .agent-arch .prod-tools span {
        padding: 10px 8px;
      }
      .agent-arch .arch-thesis {
        padding: 12px 0 2px;
      }
      .agent-now-label {
        margin-top: 40px;
      }
      .agent-past {
        margin-top: 32px;
      }
      .repeat {
        margin-top: 32px;
        padding-top: 24px;
      }
      .repeat-head {
        margin-bottom: 18px;
      }
      .repeat-compare {
        margin-bottom: 12px;
      }
      .repeat-card {
        padding: 14px 14px 12px;
      }
      .repeat-foot {
        margin-top: 10px;
        padding: 10px 14px;
        font-size: 12px;
      }
      .sub-cases {
        padding: 64px 0;
      }
      .sub-cases .split-case {
        padding: 48px 0;
      }
      .sub-cases .simplify {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .sub-cases .section-kicker,
      .projects .section-kicker {
        break-before: page;
        page-break-before: always;
      }
      .scene {
        padding: 64px 0;
      }
      .scene-head {
        margin-bottom: 32px;
      }
      .scene-roles {
        margin-top: 14px;
      }
      .scene-role {
        padding: 16px 0;
      }
    }
  `,
});
await page.evaluate(() => {
  document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
});

const compressedImages = await page.evaluate(
  async ({ imageScale: scale, maxImageDimension: maxDimension, imageQuality: quality }) => {
    const images = Array.from(document.images);
    await Promise.all(images.map((image) => image.decode().catch(() => undefined)));

    const cache = new Map();
    let converted = 0;
    let skipped = 0;

    for (const image of images) {
      const rect = image.getBoundingClientRect();
      if (!image.naturalWidth || !rect.width) {
        skipped += 1;
        continue;
      }

      const targetWidth = Math.min(
        image.naturalWidth,
        maxDimension,
        Math.max(1, Math.round(rect.width * scale)),
      );
      if (targetWidth >= image.naturalWidth * 0.95) {
        skipped += 1;
        continue;
      }

      const targetHeight = Math.max(
        1,
        Math.round(image.naturalHeight * (targetWidth / image.naturalWidth)),
      );
      const cacheKey = `${image.currentSrc}|${targetWidth}x${targetHeight}`;
      let dataUrl = cache.get(cacheKey);

      if (!dataUrl) {
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const context = canvas.getContext("2d");
        if (!context) {
          skipped += 1;
          continue;
        }
        context.drawImage(image, 0, 0, targetWidth, targetHeight);
        dataUrl = canvas.toDataURL("image/webp", quality);
        cache.set(cacheKey, dataUrl);
      }

      image.src = dataUrl;
      converted += 1;
    }

    await Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => undefined)));
    return { converted, skipped };
  },
  { imageScale, maxImageDimension, imageQuality },
);

console.log(
  `已优化图片：${compressedImages.converted} 张，跳过：${compressedImages.skipped} 张`,
);

await page.pdf({
  path: outFile,
  printBackground: true,
  width: `${pdfWidth}px`,
  height: `${pdfHeight}px`,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

const runtimeRoot = path.join(
  process.env.USERPROFILE ?? "",
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies",
);
const pythonPath =
  process.env.FLOWX_PDF_PYTHON ?? path.join(runtimeRoot, "python", "python.exe");
const rendererPath =
  process.env.FLOWX_PDFTOPPM ??
  path.join(runtimeRoot, "native", "poppler", "Library", "bin", "pdftoppm.exe");
const trimmedFile = `${outFile}.trimmed`;
const trimResult = spawnSync(
  pythonPath,
  [
    path.join(path.dirname(fileURLToPath(import.meta.url)), "crop-pdf.py"),
    outFile,
    trimmedFile,
    "--renderer",
    rendererPath,
  ],
  {
    encoding: "utf8",
    env: { ...process.env, PYTHONIOENCODING: "utf-8" },
  },
);

if (trimResult.status !== 0) {
  console.error(trimResult.stdout);
  console.error(trimResult.stderr);
  throw new Error("PDF 页面裁切失败");
}

console.log(trimResult.stdout.trim());
await import("node:fs/promises").then(async ({ copyFile, unlink }) => {
  await copyFile(trimmedFile, outFile);
  await unlink(trimmedFile);
});

await browser.close();
console.log(`已导出：${outFile}`);
