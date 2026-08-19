/**
 * 对比卡 — 左右两栏，展示人工 / 通用 AI 与 FlowX 的差异
 */
interface CompareMatrixProps {
  title: string;
  left: string;
  right: string;
  rows: [string, string, string][];
  conclusion: string;
}

export default function CompareMatrix({ title, left, right, rows, conclusion }: CompareMatrixProps) {
  return (
    <section className="compare-matrix reveal">
      <h4>{title}</h4>
      <div className="compare-pair">
        <div className="compare-lane old">
          <div className="lane-label">{left}</div>
          {rows.map(([label, before]) => (
            <div className="compare-item" key={`b-${label}`}>
              <span>{label}</span>
              <b>{before}</b>
            </div>
          ))}
        </div>
        <div className="compare-lane new">
          <div className="lane-label">{right}</div>
          {rows.map(([label, , after]) => (
            <div className="compare-item" key={`a-${label}`}>
              <span>{label}</span>
              <b>{after}</b>
            </div>
          ))}
        </div>
      </div>
      <p className="compare-verdict">{conclusion}</p>
    </section>
  );
}
