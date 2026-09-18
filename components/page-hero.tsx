import { Reveal } from "./reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro: string }) {
  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-wide relative z-10 py-24 md:py-32">
        <Reveal><p className="eyebrow text-cyan">{eyebrow}</p><h1 className="page-title">{title}</h1></Reveal>
        <Reveal delay={100}><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p></Reveal>
      </div>
    </section>
  );
}
