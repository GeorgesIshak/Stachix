"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // disable on touch / prefers-reduced-motion
    const isTouch = "ontouchstart" in window;
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (isTouch || reduced) return;

    const el = dotRef.current!;
    let targetX = 0,
      targetY = 0;
    let x = 0,
      y = 0;
    let raf = 0;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    // lightweight RAF loop (easing for smoothness)
    const speed = 0.85; // higher = faster follow
    function tick() {
      x += (targetX - x) * speed;
      y += (targetY - y) * speed;
      // GPU-friendly translate3d, no layout
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    }

    // start near initial pointer
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}
