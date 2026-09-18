"use client";

import { useRef, type PointerEvent } from "react";

type ValueIcon = "shield" | "partnership" | "spark" | "performance" | "paths" | "quality";
type ValueVariant = "navy" | "ice" | "glass" | "white" | "deep";

type ValueCardProps = {
  number: string;
  title: string;
  text: string;
  icon: ValueIcon;
  variant: ValueVariant;
};

function ValueMark({ icon }: { icon: ValueIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {icon === "shield" && <><path {...common} d="M24 5 38 11v10c0 10-5.8 17.2-14 22-8.2-4.8-14-12-14-22V11L24 5Z" /><path {...common} d="m17.5 24 4.3 4.3 9-10" /></>}
      {icon === "partnership" && <><circle {...common} cx="16" cy="17" r="6" /><circle {...common} cx="32" cy="17" r="6" /><path {...common} d="M6.5 39c.8-7.4 4.3-11 9.5-11s8.7 3.6 9.5 11M22.5 39c.8-7.4 4.3-11 9.5-11s8.7 3.6 9.5 11M20 18h8" /></>}
      {icon === "spark" && <><path {...common} d="M24 4c1.6 8.8 6.8 14 15.6 15.6C30.8 21.2 25.6 26.4 24 35.2 22.4 26.4 17.2 21.2 8.4 19.6 17.2 18 22.4 12.8 24 4Z" /><path {...common} d="M37.5 31.5c.6 3.4 2.6 5.4 6 6-3.4.6-5.4 2.6-6 6-.6-3.4-2.6-5.4-6-6 3.4-.6 5.4-2.6 6-6Z" /></>}
      {icon === "performance" && <><path {...common} d="M7 39h34M10 33l8-8 7 5 13-16" /><path {...common} d="M30 14h8v8" /><circle {...common} cx="10" cy="33" r="2" /><circle {...common} cx="18" cy="25" r="2" /><circle {...common} cx="25" cy="30" r="2" /></>}
      {icon === "paths" && <><circle {...common} cx="9" cy="24" r="4" /><circle {...common} cx="39" cy="10" r="4" /><circle {...common} cx="39" cy="38" r="4" /><path {...common} d="M13 24h7c10 0 8-14 15-14M13 24h7c10 0 8 14 15 14" /><path {...common} d="m31 6 4 4-4 4M31 34l4 4-4 4" /></>}
      {icon === "quality" && <><circle {...common} cx="24" cy="22" r="14" /><path {...common} d="m17.5 22.5 4.3 4.3 9-10M16 34l-2 9 10-5 10 5-2-9" /></>}
    </svg>
  );
}

export function ValueCard({ number, title, text, icon, variant }: ValueCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 7;
    const rotateX = ((y / bounds.height) - 0.5) * -7;

    card.style.setProperty("--spot-x", `${(x / bounds.width) * 100}%`);
    card.style.setProperty("--spot-y", `${(y / bounds.height) * 100}%`);
    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  }

  function resetCard() {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--spot-x", "50%");
    card.style.setProperty("--spot-y", "36%");
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article
      ref={cardRef}
      className={`value-card value-card--${variant}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
    >
      <div className="value-card__top">
        <span className="value-card__number">{number}</span>
        <span className="value-card__icon"><ValueMark icon={icon} /></span>
      </div>
      <div className="value-card__body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <span className="value-card__watermark" aria-hidden="true">{number}</span>
    </article>
  );
}
