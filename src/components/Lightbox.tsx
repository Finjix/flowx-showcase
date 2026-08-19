import { useCallback, useEffect, useRef, useState } from "react";
import "./lightbox.css";

interface LightboxState {
  index: number;
  images: string[];
  alts: string[];
}

/**
 * 全局图片灯箱 — 监听页面内所有 <img> 点击，全屏大图查看
 * 支持：Esc / 点击背景关闭、左右方向键切换、关闭动画
 */
export default function Lightbox() {
  const [state, setState] = useState<LightboxState | null>(null);
  const [closing, setClosing] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const close = useCallback(() => {
    if (!state) return;
    setClosing(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState(null);
      setClosing(false);
    }, 220);
  }, [state]);

  const go = useCallback((dir: 1 | -1) => {
    setState((prev) => {
      if (!prev) return prev;
      const count = prev.images.length;
      const index = (prev.index + dir + count) % count;
      return { ...prev, index };
    });
  }, []);

  // 捕获阶段监听所有图片点击（含未来新增的图片，无需逐个接入）
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const img = target?.closest?.("img");
      if (!img || img.closest(".lightbox")) return;
      e.preventDefault();
      e.stopPropagation();
      const all = Array.from(document.querySelectorAll<HTMLImageElement>("img"))
        .filter((el) => el.offsetParent !== null || el.getClientRects().length > 0);
      const index = all.indexOf(img);
      setState({
        index: index >= 0 ? index : 0,
        images: all.map((el) => el.currentSrc || el.src),
        alts: all.map((el) => el.alt || ""),
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // 打开时锁滚动，监听键盘
  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [state, close, go]);

  if (!state) return null;

  const src = state.images[state.index];
  const alt = state.alts[state.index] || "";
  const multiple = state.images.length > 1;

  return (
    <div
      className={`lightbox${closing ? " closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={alt || "图片大图预览"}
      onClick={close}
    >
      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <img key={src} src={src} alt={alt} />
      </div>

      <button className="lightbox-close" aria-label="关闭" onClick={close}>✕</button>

      {multiple && (
        <>
          <button className="lightbox-nav prev" aria-label="上一张" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
          <button className="lightbox-nav next" aria-label="下一张" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
          <span className="lightbox-count">{state.index + 1} / {state.images.length}</span>
        </>
      )}

      {alt && <div className="lightbox-caption">{alt}</div>}
    </div>
  );
}
