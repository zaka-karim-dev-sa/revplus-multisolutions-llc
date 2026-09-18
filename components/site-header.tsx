"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["BPO Services", "/bpo-services"],
  ["IT Solutions", "/it-solutions"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-wide flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Revplus home" data-cursor="link"><Logo /></Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} data-cursor="link" className={`nav-link ${pathname === href ? "active" : ""}`}>{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small hidden lg:inline-flex" data-cursor="button">Start a conversation <span>↗</span></Link>
        <button className="menu-button lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className={open ? "rotate-45 translate-y-[5px]" : ""} />
          <span className={open ? "-rotate-45 -translate-y-[5px]" : ""} />
        </button>
      </div>
      <div className={`mobile-menu lg:hidden ${open ? "open" : ""}`}>
        <nav className="container-wide flex flex-col py-5" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link key={href} href={href} className="mobile-link" onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>
          ))}
          <a href="tel:+18329429484" className="mt-5 text-sm font-bold text-cyan">+1 832-942-9484</a>
        </nav>
      </div>
    </header>
  );
}
