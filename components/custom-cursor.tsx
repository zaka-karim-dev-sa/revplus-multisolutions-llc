"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    document.body.classList.add("has-custom-cursor");
    const move = (event: MouseEvent) => {
      if (dot.current) dot.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (ring.current) ring.current.animate({ transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)` }, { duration: 360, fill: "forwards" });
    };
    const over = (event: MouseEvent) => {
      const active = (event.target as HTMLElement).closest("a, button, [data-cursor]");
      ring.current?.classList.toggle("active", Boolean(active));
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => { document.body.classList.remove("has-custom-cursor"); window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, []);
  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>;
}
