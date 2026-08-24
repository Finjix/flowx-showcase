import { AGENT_LOOP, AGENT_PROTOCOL, AGENT_TOOLS } from "../../data/content";
import "./agent-arch.css";

/**
 * 多模态内容生产 Agent 架构图 — 任务入口、生产闭环、能力供给
 */
export default function ArchDiagram() {
  return (
    <div className="arch-board">
      <div className="arch-lane">
        <span className="arch-id">01</span>
        <div>
          <span className="arch-kicker">统一内容入口</span>
          <b>一次描述，替代跨工具串联</b>
          <p>Agent 接收生产需求、参考素材与过程反馈，把分散操作收成单次任务。</p>
        </div>
      </div>

      <div className="arch-lane core">
        <span className="arch-id">02</span>
        <div>
          <span className="arch-kicker">端到端内容闭环</span>
          <b>从内容需求，到结果交付</b>
          <ol className="prod-steps">
            {AGENT_LOOP.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </div>

      <div className="arch-lane">
        <span className="arch-id">03</span>
        <div>
          <span className="arch-kicker">生产能力供给层</span>
          <b>统一接口，让图片、动态与素材工具可被调度</b>
          <p>标准协议：{AGENT_PROTOCOL.join(" · ")}</p>
          <div className="prod-tools">
            {AGENT_TOOLS.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>

      <p className="arch-thesis">人定义目标与质量 → AI 编排步骤与工具</p>
    </div>
  );
}
