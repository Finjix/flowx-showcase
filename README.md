# FlowX Showcase

张喆涵的项目作品集站点 —— 展示 FlowX 游戏营销素材生产平台等 AI 产品项目案例。

## 技术栈

- React 19 + Vite 8
- TypeScript（严格模式）
- 原生 CSS（无 UI 框架）
- oxlint 代码检查
- Playwright（PDF 导出）

## 开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run lint       # 代码检查（oxlint）
npm run typecheck  # 类型检查（tsc）
npm run build      # 类型检查 + 生产构建
npm run preview    # 预览构建产物
```

## PDF 导出

先启动开发服务器，再执行导出脚本（Playwright 无头浏览器渲染页面并输出 PDF）：

```bash
npm run dev        # 默认端口 5173
npm run export-pdf # 导出 PDF 到 public/image/
```

可通过 `SITE_URL` 环境变量指定站点地址（默认 `http://localhost:5177/`）。

## 目录结构

```
src/
├── main.tsx            # 入口
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
