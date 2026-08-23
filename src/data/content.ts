/** 站点文案与案例数据 */

import { assetPath } from "../utils/assetPath";

export interface NavItem {
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  unit: string;
  label: string;
}

export interface PainItem {
  no: string;
  title: string;
  text: string;
  tag: string;
}

export interface ProjectItem {
  no: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
}

export interface SimplifyLane {
  tag: string;
  steps: string;
  highlight?: boolean;
}

export interface GuardStep {
  no: string;
  title: string;
  text: string;
}

export interface GuardRoute {
  tag: string;
  title: string;
  text: string;
}

export interface RepeatCase {
  title: string;
  flow: string;
  note: string;
  stat: string;
  after?: string;
  extra?: string;
  images: string[];
}

export interface SceneRole {
  tag: string;
  title: string;
  extra: string;
  text: string;
}

export const NAV: NavItem[] = [
  { href: "#projects", label: "作品精选" },
  { href: "#main-case", label: "代表案例" },
  { href: "#sub-cases", label: "模板与资产" },
  { href: "#method", label: "质量方法" },
  { href: "#agent", label: "生产自动化" },
  { href: "#about", label: "能力" },
];

export const CASE_RESULT: StatItem[] = [
  { value: "40,000+", unit: "资源", label: "回流模块累计产出" },
  { value: "约50", unit: "倍", label: "产出效率提升" },
  { value: "70%", unit: "", label: "素材成本降低" },
  { value: "90%", unit: "", label: "业务验收一次通过率" },
];

export const PAINS: PainItem[] = [
  { no: "01", title: "创意要求散落", text: "角色、卖点与渠道规范依赖人工转译", tag: "需求" },
  { no: "02", title: "生成结果不稳定", text: "构图、角色、风格和文案区难同时达标", tag: "质量" },
  { no: "03", title: "渠道版本繁多", text: "批量适配、重试与终稿整理消耗大量时间", tag: "交付" },
];

export const OLD_FLOW = ["内容策划", "人工找素材", "反复写提示词", "逐张验收调整"];
export const NEW_FLOW = ["需求拆解", "Prompt / 模板组合", "批量生成", "人工质检交付"];

export const HUMAN_COMPARE: [string, string, string][] = [
  ["协作", "策划、美术反复口头对齐", "目标、素材与标准结构化"],
  ["生产", "逐张制作与人工适配", "模板组合与批量生成"],
  ["迭代", "问题出现后从头重做", "单张重试、A/B 与历史恢复"],
];

export const AI_COMPARE: [string, string, string][] = [
  ["输入", "一句想法 + 零散素材", "结构化 Prompt + 参考素材 + 渠道规范"],
  ["输出", "质量波动的可看初稿", "经过质检的可投放内容"],
  ["复用", "每次从零试错", "Prompt、模板与素材资产复用"],
];

export const MAIN_RESULTS: StatItem[] = [
  { value: "40,000+", unit: "资源", label: "回流模块累计素材产出" },
  { value: "约50", unit: "倍", label: "产出效率提升" },
  { value: "70%", unit: "", label: "素材生成成本降低" },
  { value: "90%", unit: "", label: "业务验收一次通过率" },
  { value: "94%+", unit: "", label: "生成良品率" },
  { value: "20+", unit: "项", label: "已落地项目" },
];

export const PROJECTS: ProjectItem[] = [
  { no: "01", title: "AI 分镜助手", desc: "从脚本拆解到分镜初稿，控制画面、镜头与节奏。", tags: ["脚本拆解", "画面构成", "视频前期"], image: assetPath("image/分镜.webp") },
  { no: "02", title: "智能扩图与局部重绘", desc: "围绕构图和主体关系完成扩图、重绘与细节修正。", tags: ["构图控制", "局部重绘", "迭代修正"], image: assetPath("image/智能扩图.webp") },
  { no: "03", title: "角色三视图生成", desc: "用参考图与结构约束批量生成一致的角色视图。", tags: ["角色一致性", "多视角", "批量生成"], image: assetPath("image/角色三视图.webp") },
  { no: "04", title: "Logo 创作模块", desc: "从六类视觉方向快速生成 Logo 与配套品牌延展。", tags: ["风格探索", "品牌延展", "多尺寸"], image: assetPath("image/logo.webp") },
  { no: "05", title: "H5 组件生成", desc: "依据 KV 与内容层级生成可落地的长图与组件方案。", tags: ["版式生成", "风格跟随", "成品输出"], image: assetPath("image/H5.webp") },
  { no: "06", title: "智能定妆照", desc: "围绕人物质感、服装与肤色进行批量生成和修正。", tags: ["质感保留", "人物处理", "批量交付"], image: assetPath("image/定妆照.webp") },
  { no: "07", title: "模板替换", desc: "将版式与素材规则沉淀为模板，批量产出渠道成品。", tags: ["内容模板", "素材适配", "规格输出"], image: assetPath("image/模板替换.webp") },
  { no: "08", title: "可视化节点画布", desc: "把多步内容生成、调整与组合集中在一块创作画布。", tags: ["创作流程", "节点编排", "多步生成"], image: assetPath("image/无限画布.webp") },
];

export const DYNAMIC_GIF_COLS: string[][] = [
  [assetPath("image/gif1.webp")],
  [assetPath("image/gif2.webp")],
  [assetPath("image/gif3.webp"), assetPath("image/华为_216x216.webp")],
];

export const SIMPLIFY_LANES: SimplifyLane[] = [
  { tag: "传统流程", steps: "制作 AE 工程 / 找规范 / 手动导出" },
  { tag: "商业平台", steps: "上传 KV / 写提示词 / 调参数 / 导出 / 转格式" },
  { tag: "FlowX", steps: "上传 KV / 导出", highlight: true },
];

export const STRENGTHS: [string, string, string][] = [
  ["01", "需求拆解", "把内容目标拆成 Prompt、参考素材与模板规则。"],
  ["02", "多模态创作", "覆盖图片、动效、分镜、人物与品牌视觉延展。"],
  ["03", "质量判断", "同时判断视觉完成度、业务有效性与平台适配。"],
  ["04", "流程搭建", "把快速试错沉淀为团队可复用的内容生产管线。"],
];

export const AGENT_PAST = ["确认使用哪个工具", "整理并上传参考素材", "反复填写生成参数", "等待并检查结果", "手动进入下一环节"];
export const AGENT_NOW = ["描述内容目标", "拆解画面与素材需求", "调用创作工具", "跟踪生成与失败恢复", "汇总可交付结果"];
export const AGENT_LOOP = ["目标拆解", "素材准备", "内容生成", "质量检查", "结果交付"];
export const AGENT_PROTOCOL = ["能力清单", "输入输出", "状态反馈", "异常协议"];
export const AGENT_TOOLS = ["图像生成", "素材管理", "动态生成", "任务中心"];

export const GUARD_STEPS: GuardStep[] = [
  { no: "01", title: "需求对齐", text: "明确受众、目标、平台与内容形态" },
  { no: "02", title: "画面验收", text: "检查构图、主体、细节与风格一致性" },
  { no: "03", title: "内容验收", text: "确认卖点、文案区和渠道规范可用" },
  { no: "04", title: "快速迭代", text: "用 A/B、反馈和复用数据推进下一轮" },
];

export const GUARD_ROUTES: GuardRoute[] = [
  { tag: "好不好看", title: "视觉完成度", text: "主体清晰、构图稳定、细节经得起放大查看" },
  { tag: "像不像同一套", title: "内容一致性", text: "角色、品牌与参考风格在不同版本中保持连续" },
  { tag: "能不能发布", title: "业务有效性", text: "卖点清楚、文案区可用，并符合对应平台语境" },
  { tag: "能不能再用", title: "资产复用性", text: "有效的 Prompt、模板和参考素材进入团队资产库" },
];

export const REPEAT_OLD = ["需求方提单", "等待排期", "人工制作", "逐项交付"];
export const REPEAT_NEW = ["选择内容模板", "上传参考素材", "自动处理", "质检交付"];
export const REPEAT_CASES: RepeatCase[] = [
  {
    title: "选手定妆照",
    flow: "传统流程 → 专业效率管线 → AI 网页服务",
    note: "历年管线实战，约减少",
    stat: "83%",
    after: "人力处理投入",
    images: [assetPath("image/定妆照界面.webp"), assetPath("image/定妆照展示.webp")],
  },
  {
    title: "Logo 智能延展",
    flow: "逐个调整 / 命名 / 打包 → 专业效率管线 → 算法智能处理",
    stat: "80%",
    extra: "提效 400%",
    note: "机械操作耗时减少",
    images: [assetPath("image/logo延展1.webp"), assetPath("image/logo延展2.webp")],
  },
  {
    title: "多渠道资源位",
    flow: "裁切 / 压缩 / 转格式 / 命名 → 专业效率管线 → 算法智能处理",
    stat: "50%",
    note: "多环节操作封装为自动化流程，提效",
    images: [assetPath("image/资源位1.webp"), assetPath("image/资源位2.webp")],
  },
];

export const SCENE_ROLES: SceneRole[] = [
  {
    tag: "内容",
    title: "把想法快速变成初稿",
    extra: "脚本、分镜、标题与内容方向",
    text: "先把创意目标拆成镜头、画面与素材要求，再用 AI 快速形成可讨论、可测试的内容初稿。",
  },
  {
    tag: "美术",
    title: "控制质量与视觉一致性",
    extra: "三视图、扩图、人物修正与品牌延展",
    text: "用参考图、结构约束和人工验收稳定画面质量，把重复处理交给模板与工具批量完成。",
  },
  {
    tag: "运营",
    title: "快速适配渠道并验证效果",
    extra: "活动图、动态素材与多渠道规格",
    text: "通过模板替换、批量生成和规格化导出快速获得多版本素材，再用反馈推动下一轮优化。",
  },
];
