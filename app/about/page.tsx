import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { values } from "@/data/content";

export const metadata: Metadata = { title: "About Us", description: "Learn how Revplus combines operational support and technology to help businesses work better." };

export default function About() {
  return <main id="main-content">
    <PageHero eyebrow="About Revplus" title={<>A practical partner for <span className="text-cyan">work that matters.</span></>} intro="Revplus Multisolutions LLC helps businesses strengthen day-to-day operations and move important technology initiatives forward." />
    <section className="section bg-white"><div className="container-wide grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow text-navy">Our point of view</p></Reveal><Reveal><h2 className="section-title">Operations and technology should reinforce each other.</h2><div className="prose-grid"><p>Many business challenges sit between people, process, and software. A support team cannot succeed with a broken workflow. A new platform cannot create value if it ignores the people who use it.</p><p>That is why Revplus works across both sides: BPO support for the work happening now, and IT solutions for the systems that can make tomorrow better.</p></div></Reveal></div></section>
    <section className="section bg-mist/60"><div className="container-wide"><Reveal><p className="eyebrow text-navy">What guides us</p><h2 className="section-title max-w-3xl">A straightforward approach to building trust.</h2></Reveal><div className="mt-14 grid gap-5 md:grid-cols-2">{values.map(([title, text], i) => <Reveal key={title} delay={i * 60}><article className="principle-card"><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="section bg-ink text-white"><div className="container-wide grid gap-12 lg:grid-cols-2"><Reveal><p className="eyebrow text-cyan">Our mission</p><h2 className="section-title text-white">Help businesses move with more clarity, capacity, and confidence.</h2></Reveal><Reveal delay={100}><p className="text-lg leading-8 text-slate-300">We aim to be useful before we try to be impressive. That means understanding the real need, choosing an appropriate level of support, and keeping communication clear from the first conversation through delivery.</p><Link className="button mt-8" href="/contact">Talk about your goals <span>↗</span></Link></Reveal></div></section>
  </main>;
}
