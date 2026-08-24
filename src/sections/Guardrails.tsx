import RepeatWork from "./repeat/RepeatWork";
import { GUARD_ROUTES, GUARD_STEPS } from "../data/content";
import "./guardrails.css";

/**
 * 内容质量方法 — 从目标对齐到人工质检与资产沉淀
 */
export default function Guardrails() {
  return (
    <section className="guard section-pad" id="method">
      <div className="container">
        <header className="guard-head reveal">
          <span className="guard-kicker">CONTENT METHOD · 质量与验收</span>
          <h2>从生成结果，到可发布内容</h2>
          <p>审美、有效性与平台适配，需要在同一套标准里验收</p>
        </header>

        <article className="guard-band reveal">
          <aside className="guard-side">
            <span>01 / REVIEW FLOW</span>
            <h3>内容验收流程</h3>
            <p>先对齐生产需求，再逐层检查画面、内容与平台要求</p>
          </aside>
          <div className="guard-main">
            <ol className="guard-flow">
              {GUARD_STEPS.map((step) => (
                <li key={step.no}>
                  <b>{step.title}</b>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
            <p className="guard-note">AI 负责加速初稿，人负责判断什么值得发布、测试和沉淀。</p>
          </div>
        </article>

        <article className="guard-band reveal">
          <aside className="guard-side">
            <span>02 / QUALITY BAR</span>
            <h3>四个判断维度</h3>
            <p>不只看生成成功，还要判断画面是否好看、内容是否有效</p>
          </aside>
          <div className="guard-cards">
            {GUARD_ROUTES.map((route) => (
              <article className="guard-card" key={route.tag}>
                <span>{route.tag}</span>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
              </article>
            ))}
          </div>
        </article>

        <RepeatWork />
      </div>
    </section>
  );
}
