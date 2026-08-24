import ArchDiagram from "./ArchDiagram";
import Placeholder from "../Placeholder";
import { AGENT_NOW, AGENT_PAST } from "../../data/content";
import { assetPath } from "../../utils/assetPath";
import "./agent.css";

/**
 * 内容生产自动化 — 一句任务、一条路径，再展开生产架构
 */
export default function AgentSection() {
  return (
    <section className="agent section-pad" id="agent">
      <div className="agent-watermark" aria-hidden="true">FLOW</div>
      <div className="container">
        <article className="agent-case reveal">
          <header className="agent-masthead">
            <span className="agent-kicker">CONTENT AUTOMATION · 内容生产协同</span>
            <h2>从内容需求<em>到批量内容交付</em></h2>
            <p>按目标拆解步骤、调用图片与动态素材工具、跟踪状态和失败恢复，把多步制作收成一次任务。</p>
          </header>

          <p className="agent-now-label">现在 · 自动编排内容任务</p>
          <ol className="agent-rail">
            {AGENT_NOW.map((step, index) => (
              <li key={step}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                <b>{step}</b>
              </li>
            ))}
          </ol>
          <p className="agent-now-foot">生产需求明确 · 跨工具自动化 · 结果可追踪</p>

          <aside className="agent-past">
            <span>过去 · 制作人员手动串联工具</span>
            <div className="agent-past-loop">
              <ol className="agent-past-steps">
                {AGENT_PAST.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <span className="cycle-leg start" aria-hidden="true" />
              <span className="cycle-rail" aria-hidden="true" />
              <span className="cycle-leg end" aria-hidden="true" />
              <p className="agent-past-return">循环数轮，才最终拿到交付结果</p>
            </div>
            <small>高学习成本 · 多步骤 · 易中断</small>
          </aside>
        </article>

        <article className="agent-arch reveal">
          <header className="agent-masthead compact">
            <span className="agent-kicker">多模态内容生产 Agent</span>
            <h2>从手动串工具<em>到 AI 编排内容生产</em></h2>
            <p>把任务拆解、工具调用、状态反馈、异常处理与结果交付，收成统一内容入口。</p>
          </header>
          <ArchDiagram />
        </article>

        <div className="agent-shot reveal">
          <Placeholder title="Agent 小奈" src={assetPath("image/agent.webp")} />
        </div>
      </div>
    </section>
  );
}
