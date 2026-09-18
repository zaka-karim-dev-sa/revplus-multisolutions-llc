import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ValueCard } from "@/components/value-card";
import { values } from "@/data/content";

export const metadata: Metadata = { title: "About Us", description: "Learn how Revplus combines operational support and technology to help businesses work better." };

const coreValues = [
  {
    number: "01",
    title: "100% Ownership",
    text: "We care for every responsibility as if the outcome were our own—staying accountable for the work, the details, and the quality of every interaction.",
    icon: "shield" as const,
    variant: "navy" as const,
  },
  {
    number: "02",
    title: "True Loyalty",
    text: "We earn durable relationships through dependable delivery, candid communication, and consistent commitment to clients, teammates, and partners.",
    icon: "partnership" as const,
    variant: "ice" as const,
  },
  {
    number: "03",
    title: "Continuous Innovation",
    text: "We keep questioning how work can be smarter, using better processes and technology to improve service and customer outcomes.",
    icon: "spark" as const,
    variant: "glass" as const,
  },
  {
    number: "04",
    title: "Maximum Efficiency",
    text: "We design clear workflows that reduce friction, strengthen delivery, and turn effort into measurable business value.",
    icon: "performance" as const,
    variant: "white" as const,
  },
  {
    number: "05",
    title: "Resourcefulness",
    text: "We adapt quickly, think beyond standard playbooks, and shape practical solutions around each client's real constraints.",
    icon: "paths" as const,
    variant: "deep" as const,
  },
  {
    number: "06",
    title: "Uncompromised Quality",
    text: "We hold delivery to clear standards, then review, refine, and improve the work so quality never becomes static.",
    icon: "quality" as const,
    variant: "ice" as const,
  },
];

export default function About() {
  return <main id="main-content">
    <PageHero eyebrow="About Revplus" title={<>A practical partner for <span className="text-cyan">work that matters.</span></>} intro="Revplus Multisolutions LLC helps businesses strengthen day-to-day operations and move important technology initiatives forward." />
    <section className="section bg-white"><div className="container-wide grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow text-navy">Our point of view</p></Reveal><Reveal><h2 className="section-title">Operations and technology should reinforce each other.</h2><div className="prose-grid"><p>Many business challenges sit between people, process, and software. A support team cannot succeed with a broken workflow. A new platform cannot create value if it ignores the people who use it.</p><p>That is why Revplus works across both sides: BPO support for the work happening now, and IT solutions for the systems that can make tomorrow better.</p></div></Reveal></div></section>
    <section className="section bg-mist/60"><div className="container-wide"><Reveal><p className="eyebrow text-navy">What guides us</p><h2 className="section-title max-w-3xl">A straightforward approach to building trust.</h2></Reveal><div className="mt-14 grid gap-5 md:grid-cols-2">{values.map(([title, text], i) => <Reveal key={title} delay={i * 60}><article className="principle-card"><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="section values-showcase"><div className="values-showcase__grid" aria-hidden="true" /><div className="container-wide"><Reveal><div className="values-showcase__heading"><div><p className="eyebrow text-cyan">Our core values</p><h2 className="section-title text-white">Principles behind every engagement.</h2></div><p>Six standards shape how we take responsibility, solve problems, and deliver work our clients can depend on.</p></div></Reveal><div className="values-card-grid">{coreValues.map((value, i) => <Reveal key={value.title} delay={i * 70}><ValueCard {...value} /></Reveal>)}</div></div></section>
    <section className="section bg-ink text-white"><div className="container-wide grid gap-12 lg:grid-cols-2"><Reveal><p className="eyebrow text-cyan">Our mission</p><h2 className="section-title text-white">Help businesses move with more clarity, capacity, and confidence.</h2></Reveal><Reveal delay={100}><p className="text-lg leading-8 text-slate-300">We aim to be useful before we try to be impressive. That means understanding the real need, choosing an appropriate level of support, and keeping communication clear from the first conversation through delivery.</p><Link className="button mt-8" href="/contact">Talk about your goals <span>↗</span></Link></Reveal></div></section>
  </main>;
}
