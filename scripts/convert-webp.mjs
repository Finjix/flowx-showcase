/**
 * 图片资源转 WebP 脚本
 *
 * 将 PNG / GIF 转换为 WebP：
 *   - PNG → 无损 WebP（画面零损失，保留透明通道）
 *   - GIF → 动画 WebP（有损 q75，保留帧时序与循环）
 *
 * 用法：
 *   node scripts/convert-webp.mjs [paths...] [options]
 *
 * 参数：
 *   paths        文件或目录路径（默认 public/image）
 *   --quality <n>  有损编码质量，默认 75
 *   --lossless     全部使用无损编码（覆盖默认策略）
 *   --keep         保留原文件（默认转换成功后删除）
 *   --output <dir> 输出到指定目录（默认与原文件同目录）
 *   --dry-run      只打印将要转换的文件，不实际执行
 *
 * 示例：
 *   node scripts/convert-webp.mjs
 *   node scripts/convert-webp.mjs public/image/gif1.gif public/image/logo.png
 *   node scripts/convert-webp.mjs public/image --quality 80 --keep
 *   node scripts/convert-webp.mjs public/image --lossless --dry-run
 */
import { globSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DEFAULT_PATHS = ["public/image"];
const DEFAULT_QUALITY = 75;
const EXTENSIONS = new Set([".png", ".gif"]);

// 禁用 libvips 缓存：否则已解码图片的文件句柄会被保留，导致 Windows 上无法删除原文件
sharp.cache(false);

// ---- 解析命令行参数 ----
const args = process.argv.slice(2);
const paths = [];
const opts = { quality: DEFAULT_QUALITY, lossless: false, keep: false, output: null, dryRun: false };

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  switch (arg) {
    case "--quality":
      opts.quality = Number(args[++i]);
      if (!Number.isFinite(opts.quality) || opts.quality < 1 || opts.quality > 100) {
        console.error("--quality 必须是 1-100 的数字");
        process.exit(1);
      }
      break;
    case "--lossless":
      opts.lossless = true;
      break;
    case "--keep":
      opts.keep = true;
      break;
    case "--output":
      opts.output = args[++i];
      break;
    case "--dry-run":
      opts.dryRun = true;
      break;
    default:
      paths.push(arg);
  }
}

// ---- 收集待转换文件 ----
const inputs = (paths.length ? paths : DEFAULT_PATHS).flatMap((p) => {
  const matches = globSync(p);
  if (matches.length === 0) {
    console.warn(`⚠ 路径不存在或未匹配：${p}`);
    return [];
  }
  return matches.flatMap((m) => {
    if (!statSync(m).isDirectory()) {
      return EXTENSIONS.has(path.extname(m).toLowerCase()) ? [m] : [];
    }
    return globSync(path.join(m, "**", "*"))
      .filter((f) => statSync(f).isFile() && EXTENSIONS.has(path.extname(f).toLowerCase()));
  });
});

const targets = [...new Set(inputs)];
if (targets.length === 0) {
  console.log("没有找到需要转换的 PNG / GIF 文件");
  process.exit(0);
}

// ---- 转换 ----
console.log(`待转换 ${targets.length} 个文件${opts.dryRun ? "（预览模式）" : ""}\n`);
let totalBefore = 0;
let totalAfter = 0;
const errors = [];

for (const file of targets) {
  const ext = path.extname(file).toLowerCase();
  const outName = path.basename(file, ext) + ".webp";
  const outDir = opts.output ?? path.dirname(file);
  const outFile = path.join(outDir, outName);
  const sizeBefore = fileSize(file);

  if (opts.dryRun) {
    console.log(`  ${path.relative(process.cwd(), file)}  →  ${path.relative(process.cwd(), outFile)}`);
    continue;
  }

  try {
    const animated = ext === ".gif";
    const lossless = opts.lossless || ext === ".png";
    mkdirSync(outDir, { recursive: true });
    await sharp(file, { animated })
      .webp({
        quality: opts.quality,
        lossless,
        ...(animated ? { animated: true, loop: 0 } : {}),
      })
      .toFile(outFile);

    const sizeAfter = fileSize(outFile);
    totalBefore += sizeBefore;
    totalAfter += sizeAfter;
    const pct = sizeBefore ? Math.round((sizeAfter / sizeBefore) * 100) : 0;
    console.log(
      `  ✓ ${path.relative(process.cwd(), file)}` +
        `  (${formatSize(sizeBefore)} → ${formatSize(sizeAfter)}, ${pct}%)`
    );

    if (!opts.keep) await removeFile(file);
  } catch (err) {
    errors.push({ file, message: err.message });
    console.error(`  ✗ ${path.relative(process.cwd(), file)}: ${err.message}`);
  }
}

// ---- 汇总 ----
if (!opts.dryRun) {
  console.log(`\n完成：${targets.length - errors.length}/${targets.length} 成功`);
  if (totalBefore > 0) {
    console.log(`体积：${formatSize(totalBefore)} → ${formatSize(totalAfter)}（${Math.round((totalAfter / totalBefore) * 100)}%）`);
  }
  if (errors.length > 0) {
    console.error("\n失败列表：");
    for (const { file, message } of errors) console.error(`  ${file}: ${message}`);
    process.exit(1);
  }
}

/**
 * 删除文件，带重试（Windows 上文件可能被杀软/索引短暂占用）
 */
async function removeFile(p) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      unlinkSync(p);
      return;
    } catch (err) {
      if (attempt === 5) throw err;
      await new Promise((resolve) => setTimeout(resolve, 300 * attempt));
    }
  }
}

function fileSize(p) {
  try {
    return statSync(p).size;
  } catch {
    return 0;
  }
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}
