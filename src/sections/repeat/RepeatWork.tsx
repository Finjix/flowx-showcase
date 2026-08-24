import Placeholder from "../../components/Placeholder";
import { REPEAT_CASES, REPEAT_NEW, REPEAT_OLD } from "../../data/content";
import "./repeat.css";

/**
 * 方法页下半 — 把重复制作沉淀为模板与自动化流程
 */
export default function RepeatWork() {
  return (
    <div className="repeat reveal">
      <header className="repeat-head">
        <h3>把重复制作沉淀为模板</h3>
      </header>

      <div className="repeat-compare">
        <div className="repeat-lane old">
          <b>过去 · 人工逐项制作</b>
          <p>{REPEAT_OLD.join(" → ")}</p>
        </div>
        <div className="repeat-shift">
          <span>沉淀标准</span>
          <i>→</i>
          <small>复用模板</small>
        </div>
        <div className="repeat-lane now">
          <b>现在 · 内容生产管线</b>
          <p>FlowX {REPEAT_NEW.join(" → ")}</p>
        </div>
      </div>

      <div className="repeat-grid">
        {REPEAT_CASES.map((item) => (
          <article className="repeat-card" key={item.title}>
            <h4>{item.title} <small>为例</small></h4>
            <p className="repeat-flow">{item.flow}</p>
            <p className="repeat-stat">
              {item.note} <strong>{item.stat}</strong> {item.after}
              {item.extra ? <em>，{item.extra}</em> : null}
            </p>
            <div className="repeat-thumbs">
              {item.images.map((src, index) => (
                <Placeholder key={src} title={`${item.title} ${index + 1}`} src={src} />
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="repeat-foot">把时长、尺寸、命名、画面与交付标准写进模板，让人工精力留给质量判断与关键调整。</p>
    </div>
  );
}
