import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.35fr_.65fr_.7fr]">
          <div>
            <div className="inline-flex rounded-xl bg-white px-3 py-2"><Logo /></div>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-300">Business operations and technology solutions designed around the way your company actually works.</p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <Link href="/about">About Revplus</Link><Link href="/bpo-services">BPO Services</Link><Link href="/it-solutions">IT Solutions</Link><Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Talk with us</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <a href="tel:+18329429484">+1 832-942-9484</a>
              <a href="tel:+18329429040">+1 832-942-9040</a>
              <p className="leading-6">4065 S Braeswood Blvd<br />Houston, TX 77025, USA</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Revplus Multisolutions LLC. All rights reserved.</p>
          <p>Houston, Texas · Serving businesses across the United States</p>
        </div>
      </div>
    </footer>
  );
}
