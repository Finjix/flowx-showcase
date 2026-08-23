import { SCENE_ROLES } from "../data/content";
import "./scene-future.css";

const LOOP_TOP = ["创意目标", "发布 / 测试"];
const LOOP_BOT = ["拆解需求", "生成初稿", "人工质检", "沉淀复用"];

/**
 * 协作场景 — 从内容目标到反馈复用，以及谁在用
 */
export default function SceneFuture() {
  return (
    <section className="scene section-pad" id="scene">
      <div className="container">
        <header className="scene-head reveal">
          <span className="scene-kicker">COLLABORATION · 内容、美术与运营</span>
          <h2>让内容生产形成可迭代闭环</h2>
          <p>创意目标驱动生产，真实反馈反哺 Prompt、模板与素材资产。</p>
        </header>

        <div className="loop-board reveal">
          <div className="loop-grid">
            <div className="loop-node">{LOOP_TOP[0]}</div>
            <span className="loop-dash" aria-hidden="true" />
            <span className="loop-dash" aria-hidden="true" />
            <div className="loop-node">{LOOP_TOP[1]}</div>
            {LOOP_BOT.map((step) => (
              <div className="loop-node" key={step}>{step}</div>
            ))}
          </div>
          <p className="loop-caption"><b>让每次交付都沉淀下一次的起点</b>——有效方法进入资产库，反馈继续推动迭代。</p>
        </div>

        <div className="scene-roles reveal">
          {SCENE_ROLES.map((role) => (
            <article className="scene-role" key={role.tag}>
              <span>{role.tag}</span>
              <div>
                <h3>{role.title} <small>{role.extra}</small></h3>
                <p>{role.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
