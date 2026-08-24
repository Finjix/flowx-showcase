import { SIMPLIFY_LANES } from "../../data/content";
import "./simplify.css";

/**
 * 动态生成 — 将内容规范沉淀为可复用模板
 */
export default function SimplifyProd() {
  return (
    <div className="simplify reveal">
      <header className="simplify-head">
        <span>CONTENT TEMPLATE</span>
        <h3>从生产需求到可复用模板</h3>
        <p>把时长、帧率、码率、版式与导出规格写进生产流程</p>
      </header>

      <p className="simplify-case">KV 动态循环动画 · 为例</p>

      <div className="simplify-lanes">
        {SIMPLIFY_LANES.map((lane) => (
          <article className={lane.highlight ? "lane flowx" : "lane"} key={lane.tag}>
            <b>{lane.tag}</b>
            <p>{lane.steps}</p>
          </article>
        ))}
      </div>

      <p className="simplify-bridge">
        <strong>稳定交付来自明确标准</strong>——将时长、帧数、码率和版式等内部规范封装为模板，减少重复调参与人工检查。
      </p>

      <div className="simplify-impact">
        <article>
          <span>协作方式变化</span>
          <p>美术定义质量与模板 <i>→</i> 内容、导演与运营按标准快速产出</p>
        </article>
      </div>
    </div>
  );
}
