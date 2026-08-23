import ChapterHead from "../components/ChapterHead";
import CompareMatrix from "../components/CompareMatrix";
import FlowLane from "../components/FlowLane";
import Placeholder from "../components/Placeholder";
import { assetPath } from "../utils/assetPath";
import {
  AI_COMPARE,
  CASE_RESULT,
  HUMAN_COMPARE,
  MAIN_RESULTS,
  NEW_FLOW,
  OLD_FLOW,
  PAINS,
} from "../data/content";

/**
 * 代表案例 — 回流 AI 营销素材生产
 */
export default function MainCase() {
  return (
    <section className="main-case section-pad" id="main-case">
      <div className="container">
        <div className="case-cover reveal">
          <span className="case-eyebrow">代表案例｜游戏回流 AI 营销素材</span>
          <h2 className="case-title">用 Prompt 与素材模板，<em>生产可投放内容</em></h2>
          <div className="case-result">
            {CASE_RESULT.map((item) => (
              <div className="case-res" key={item.label}>
                <strong>{item.value}<small>{item.unit}</small></strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <article className="chapter">
          <ChapterHead eyebrow="创作挑战" title="创意、质量与交付，" highlight="不能只顾一头" />
          <div className="pain-grid reveal">
            {PAINS.map((pain) => (
              <div className="pain-card" key={pain.no}>
                <div className="pain-top"><span>{pain.no}</span><b>{pain.tag}</b></div>
                <h4>{pain.title}</h4><p>{pain.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="chapter">
          <ChapterHead eyebrow="内容拆解" title="把隐性经验，" highlight="写进内容管线" />
          <div className="flow-stack reveal">
            <FlowLane title="过去 · 人工串流程" tone="old" items={OLD_FLOW} />
            <FlowLane title="现在 · 模板化生产" tone="new" items={NEW_FLOW} />
          </div>
        </article>

        <article className="chapter">
          <ChapterHead eyebrow="生产方式" title="同样是 AI，" highlight="差在内容能否交付" />
          <div className="compare-stack">
            <CompareMatrix title="从人工协作到模板化生产" left="人工串流程" right="内容生产管线" rows={HUMAN_COMPARE} conclusion="反复对齐 → 标准化协作" />
            <CompareMatrix title="从通用生成到可发布内容" left="通用 AI" right="FlowX" rows={AI_COMPARE} conclusion="可看初稿 → 可投放内容" />
          </div>
        </article>

        <article className="chapter">
          <ChapterHead eyebrow="内容生产管线" title="把内容标准，" highlight="写进每次生成" />
          <div className="system-map-group">
            <div className="system-map reveal">
              <div className="system-inputs">
                <span>内容目标</span><span>平台语境</span><span>参考素材</span><span>品牌与渠道规范</span>
              </div>
              <div className="system-engine">
                <div className="engine-title"><b>FLOWX 内容生产管线</b><span>把创意要求拆成模型可执行、团队可验收的生产标准</span></div>
                <div className="engine-layers">
                  <div><span>拆解</span><b>需求与内容目标</b><small>受众、卖点、平台与规格</small></div>
                  <div><span>Prompt</span><b>结构化生成约束</b><small>风格、构图、角色与文案区</small></div>
                  <div><span>生成</span><b>多参考与 A/B</b><small>批量生成、单张重试</small></div>
                  <div><span>验收</span><b>质量与任务状态</b><small>人工质检、失败恢复、终稿交付</small></div>
                </div>
              </div>
              <div className="system-outputs"><span>可投放成品</span><span>多渠道规格</span><span>A/B 内容版本</span><span>可追踪任务</span></div>
            </div>
            <div className="value-strip reveal">
              <span>可复用的不是一次出图</span>
              <p>而是被验证过的 Prompt 结构、素材组合、渠道模板和验收标准。</p>
            </div>
          </div>
        </article>

        <article className="chapter result-chapter">
          <ChapterHead eyebrow="交付结果" title="从一张初稿，" highlight="到规模化内容生产" />
          <div className="result-grid reveal">
            {MAIN_RESULTS.map((result) => (
              <div className="result-card" key={result.label}>
                <strong>{result.value}<small>{result.unit}</small></strong><span>{result.label}</span>
              </div>
            ))}
          </div>
          <div className="case-shots">
            <Placeholder title="游戏回流营销素材生产" src={assetPath("image/游戏回流.webp")} />
            <Placeholder title="游戏回流生成预览" src={assetPath("image/游戏回流2.webp")} />
          </div>
        </article>
      </div>
    </section>
  );
}
