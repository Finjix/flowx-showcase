# Flowx Showcase

薯薯的项目展示站点 —— 展示 FlowX 图像、动效、视频、内容模板与生产管线实践。

## 技术栈

- **React 19 + Vite 8** — 前端框架与构建工具
- **TypeScript 7** — 严格模式类型检查
- **原生 CSS** — 无 UI 框架，样式按区块拆分
- **sharp** — 图片格式转换（PNG/GIF → WebP）

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器（http://localhost:5173）
npm run typecheck  # 类型检查（tsc --noEmit）
npm run build      # 类型检查 + 生产构建（输出到 dist/）
npm run preview    # 本地预览构建产物
```

## 图片资源

站点所有图片统一存放在 `public/image/`，格式全部为 **WebP**（PNG 已转无损、GIF 已转动画 WebP）。

### 图片转 WebP

`npm run images:webp` 将 PNG / JPG / GIF 转换为 WebP：

| 输入格式 | 转换策略 |
|---|---|
| PNG | 无损 WebP（画面零损失，保留透明通道） |
| JPG | WebP（默认质量 75） |
| GIF | 动画 WebP（有损 q75，保留帧时序与循环） |

```bash
npm run images:webp                     # 转换 public/image/ 下全部 PNG/GIF
npm run images:webp -- public/image --dry-run   # 预览将要转换的文件
npm run images:webp -- public/image/foo.gif --quality 80 --keep   # 指定文件、质量，保留原文件
npm run images:webp -- public/image --lossless --output dist/image  # 全部无损并输出到指定目录
```

常用选项：

| 选项 | 说明 |
|---|---|
| `--quality <n>` | 有损质量，默认 75 |
| `--lossless` | 全部使用无损编码 |
| `--keep` | 保留原文件（默认转换成功后删除） |
| `--output <dir>` | 输出到指定目录（自动创建） |
| `--dry-run` | 只预览不执行 |

> 提示：`public/image/` 下的 `gif1/gif2/gif3.webp` 等文件名保留历史命名，实际已是 WebP 格式。

## 目录结构

```
├── index.html              # 入口 HTML
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
├── scripts/
│   └── convert-webp.mjs    # 图片转 WebP 脚本（sharp）
├── public/
│   └── image/              # 站点图片资源（全部 WebP）
├── pdf/custom/             # PPT/PDF 交付物
└── src/
    ├── main.tsx            # 应用入口
    ├── App.tsx             # 根组件
    ├── styles/global.css   # 全局样式
    ├── data/content.ts     # 站点文案与案例数据（含类型定义）
    ├── hooks/useReveal.ts  # 滚动显现观察器
    ├── components/         # 通用组件（导航、泳道、对比矩阵等）
    │   └── agent/          # Agent 区块组件
    └── sections/           # 页面区块（Hero、旗舰案例、方法、副案例等）
        ├── dynamic/        # 动态生成副案例
        └── repeat/         # 重复工作案例
```
