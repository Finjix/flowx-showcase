import { chromium } from "playwright";
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

await browser.close();
console.log(`已导出：${outFile}`);
