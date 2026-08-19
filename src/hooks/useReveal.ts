import { useEffect, useRef } from "react";

/**
 * 滚动显现观察器 — 为带 `.reveal` 的节点添加 `.visible`
 * @returns 根节点引用
 */
export function useReveal() {
  const root = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const nodes = root.current?.querySelectorAll(".reveal") ?? [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return root;
}
