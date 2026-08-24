import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent, WheelEvent } from "react";
import "./lightbox.css";

interface LightboxState {
  index: number;
  images: string[];
  alts: string[];
}

interface Position {
  x: number;
  y: number;
}

interface DragState extends Position {
  pointerId: number;
  startX: number;
  startY: number;
  moved: boolean;
}

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.15;

/**
 * 全局图片灯箱 — 监听页面内所有 <img> 点击，全屏大图查看
 * 支持：Esc / 点击背景关闭、左右方向键切换、关闭动画
 */
export default function Lightbox() {
  const [state, setState] = useState<LightboxState | null>(null);
  const [closing, setClosing] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef<DragState | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const close = useCallback(() => {
    if (!state) return;
    setClosing(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState(null);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      setClosing(false);
    }, 220);
  }, [state]);

  const go = useCallback((dir: 1 | -1) => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setState((prev) => {
      if (!prev) return prev;
      const count = prev.images.length;
      const index = (prev.index + dir + count) % count;
      return { ...prev, index };
    });
  }, []);

  const onWheel = useCallback((e: WheelEvent<HTMLImageElement>) => {
    e.preventDefault();
    const direction = e.deltaY < 0 ? 1 : -1;
    setZoom((prev) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev + direction * ZOOM_STEP)));
  }, []);

  const onPointerDown = useCallback((e: PointerEvent<HTMLImageElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      x: position.x,
      y: position.y,
      moved: false,
    };
  }, [position]);

  const onPointerMove = useCallback((e: PointerEvent<HTMLImageElement>) => {
    const current = drag.current;
    if (!current || current.pointerId !== e.pointerId) return;
    const x = current.x + e.clientX - current.startX;
    const y = current.y + e.clientY - current.startY;
    if (!current.moved && Math.hypot(e.clientX - current.startX, e.clientY - current.startY) > 4) {
      current.moved = true;
      setDragging(true);
    }
    setPosition({ x, y });
  }, []);

  const onPointerUp = useCallback((e: PointerEvent<HTMLImageElement>) => {
    if (drag.current?.pointerId !== e.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, []);

  // 捕获阶段监听所有图片点击（含未来新增的图片，无需逐个接入）
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const clickedImg = target?.closest?.("img");
      if (!clickedImg || clickedImg.closest(".lightbox")) return;
      const all = Array.from(document.querySelectorAll<HTMLImageElement>("img"))
        .filter((el) => el.dataset.lightboxIgnore !== "true")
        .filter((el) => el.offsetParent !== null || el.getClientRects().length > 0);
      const img = clickedImg.dataset.lightboxIgnore === "true"
        ? all.find((el) => (el.currentSrc || el.src) === (clickedImg.currentSrc || clickedImg.src))
        : clickedImg;
      if (!img) return;
      e.preventDefault();
      e.stopPropagation();
      setZoom(1);
      setPosition({ x: 0, y: 0 });
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
        <img
          key={src}
          src={src}
          alt={alt}
          draggable={false}
          className={dragging ? "is-dragging" : undefined}
          style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})` }}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      <button className="lightbox-close" aria-label="关闭" onClick={close}>✕</button>

      {multiple && (
        <>
          <button className="lightbox-nav prev" aria-label="上一张" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
          <button className="lightbox-nav next" aria-label="下一张" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
          <span className="lightbox-count">{state.index + 1} / {state.images.length}</span>
        </>
      )}

      <span className="lightbox-zoom" aria-live="polite">
        {Math.round(zoom * 100)}% · 滚轮缩放
      </span>

      {alt && <div className="lightbox-caption">{alt}</div>}
    </div>
  );
}
