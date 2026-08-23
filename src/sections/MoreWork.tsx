import SimplifyProd from "./dynamic/SimplifyProd";
import Placeholder from "../components/Placeholder";
import { DYNAMIC_GIF_COLS, PROJECTS, STRENGTHS } from "../data/content";
import { assetPath } from "../utils/assetPath";
import SceneFuture from "./SceneFuture";

/** 图片、分镜与内容工具作品墙 */
export function SelectedProjects() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="projects-glow" />
      <div className="container">
        <div className="section-kicker project-kicker reveal"><span>SELECTED AI CONTENT WORK</span></div>
        <header className="project-intro reveal">
          <h2>先看作品，<em>再看生产方法</em></h2>
          <p>覆盖从需求拆解、视觉生成到内容修正与成品输出，既关注画面质量，也关注内容能否进入真实生产。</p>
        </header>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <article className={`project-card reveal${index < 2 ? " project-card--featured" : ""}`} key={project.no}>
              <Placeholder title={project.title} src={project.image} />
              <div className="project-body">
                <span className="project-no">CONTENT / {project.no}</span>
                <h3>{project.title}</h3><p>{project.desc}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 动态内容模板与素材资产案例 */
export function ContentTemplates() {
  return (
    <section className="sub-cases section-pad" id="sub-cases">
      <div className="container">
        <div className="section-kicker sub-kicker reveal"><span>TEMPLATES & ASSETS</span><b>让一次创作成为可复用的方法</b></div>

        <article className="split-case reveal">
          <div className="split-copy">
            <span className="eyebrow">CONTENT CASE · 动态素材模板</span>
            <h2>把 KV 变成<br /><span>多规格动态内容</span></h2>
            <p>将时长、帧率、码率、版式和导出规格参数化，分钟级批量输出可直接交付的 GIF。</p>
            <div className="mini-compare">
              <div className="old"><span>过去</span><b>10+ 分钟 / 张</b><small>手动改模板、逐个导出</small></div>
              <div className="new"><span>现在</span><b>分钟级 / 批量</b><small>按模板一次输出多规格</small></div>
            </div>
            <div className="case-tags"><span>模板参数化</span><span>画面规格</span><span>批量导出</span></div>
          </div>
          <Placeholder title="动态生成图片集合包" ratio="tall" src={assetPath("image/图片集合包.webp")} />
        </article>

        <SimplifyProd />

        <div className="anim-showcase reveal">
          <div className="anim-row main">
            {DYNAMIC_GIF_COLS.map((col, colIndex) => (
              <div className={col.length > 1 ? "anim-stack" : undefined} key={colIndex}>
                {col.map((src, index) => (
                  <img key={src} src={src} alt={`动态生成案例 ${colIndex + 1}-${index + 1}`} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <article className="split-case reverse reveal">
          <Placeholder title="素材管理界面" ratio="tall" src={assetPath("image/资产库.webp")} />
          <div className="split-copy">
            <span className="eyebrow">CONTENT CASE · 素材与模板库</span>
            <h2>把参考素材变成<br /><span>可复用创作资产</span></h2>
            <p>角色、渠道骨架、字效与品牌素材一次沉淀，在图片、动态和营销内容中持续复用。</p>
            <div className="reuse-stat"><strong>70%+</strong><span>核心资产复用率</span></div>
            <div className="asset-route"><span>素材沉淀</span><i>→</i><span>模板调用</span><i>→</i><span>跨内容复用</span></div>
            <div className="case-tags"><span>统一素材库</span><span>内容模板</span><span>版本管理</span></div>
          </div>
        </article>
      </div>
    </section>
  );
}

/** 个人能力、协作场景与结尾 */
export function PortfolioClose() {
  return (
    <>
      <section className="strengths section-pad" id="about">
        <div className="container">
          <div className="section-kicker about-kicker reveal"><span>CREATIVE VALUE</span><b>我能为 AI 内容团队带来的能力</b></div>
          <div className="strength-grid">
            {STRENGTHS.map(([no, title, desc]) => (
              <div className="strength-card reveal" key={no}><span>{no}</span><h3>{title}</h3><p>{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <SceneFuture />

      <footer className="footer section-pad">
        <div className="footer-glow" />
        <div className="container footer-inner reveal">
          <h2>让创意快速变成<br /><em>可发布的内容</em></h2>
          <div className="footer-bottom"><span>钟丰骏 · AI 内容作品集</span><span>FLOWX / 2026</span></div>
        </div>
      </footer>
    </>
  );
}
