import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { itServices } from "@/data/content";

export const metadata: Metadata = {
  title: "IT Solutions",
  description:
    "Custom software, integrations, cloud delivery, automation, and ongoing technology support.",
};
const lifecycle = [
  [
    "Understand",
    "Define the user, business constraint, technical context, and desired outcome.",
  ],
  [
    "Shape",
    "Choose the smallest sound solution and make the delivery path clear.",
  ],
  [
    "Build",
    "Create in focused stages with visible progress and practical feedback loops.",
  ],
  [
    "Support",
    "Launch responsibly, address real-world needs, and plan sensible improvements.",
  ],
];

export default function ItSolutions() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="IT & Technology Solutions"
        title={
          <>
            Technology that earns its place{" "}
            <span className="text-cyan">in your business.</span>
          </>
        }
        intro="Revplus designs and delivers useful digital products, integrations, cloud solutions, and automation with the business outcome in view."
      />
      <section className="section bpo-services-showcase">
        <div className="bpo-services-showcase__grid" aria-hidden="true" />

        <div
          className="bpo-services-showcase__glow bpo-services-showcase__glow--one"
          aria-hidden="true"
        />

        <div
          className="bpo-services-showcase__glow bpo-services-showcase__glow--two"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <Reveal className="grid gap-8 lg:grid-cols-[.6fr_1fr]">
            <p className="eyebrow text-navy">What we build</p>
            <div>
              <h2 className="section-title">
                Solve the bottleneck. Strengthen the foundation.
              </h2>
              <p className="section-copy bpo-services-showcase__copy">
                A successful technology engagement starts with the right problem
                and a maintainable path forward.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {itServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 65}>
                <article
                  className={`service-card service-card-large bpo-service-card ${
                    i % 3 === 1
                      ? "bpo-service-card--ice"
                      : i % 3 === 2
                        ? "bpo-service-card--glass"
                        : "bpo-service-card--navy"
                  }`}
                >
                  <span>{item.n}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>

                  <div
                    className="bpo-service-card__bubble"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>
          {/* <div className="mt-16 grid gap-5 md:grid-cols-2">
            {itServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 65}>
                <article className="solution-card">
                  <span>{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div> */}
        </div>
      </section>
      <section className="section tech-section">
        <div className="container-wide relative z-10">
          <Reveal>
            <p className="eyebrow text-cyan">Delivery model</p>
            <h2 className="section-title max-w-3xl text-white">
              A clear path from question to working solution.
            </h2>
          </Reveal>
          <div className="process-grid process-dark">
            {lifecycle.map(([title, text], i) => (
              <Reveal key={title} delay={i * 70}>
                <article>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-mist/60">
        <div className="container-wide grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow text-navy">Where BPO meets IT</p>
            <h2 className="section-title">
              Improve the process and the system behind it.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-8 text-slate-600">
              Operational teams see friction up close: duplicate entry,
              disconnected tools, slow handoffs, and repetitive tasks. Revplus
              can help operate the workflow today while identifying where
              integration, software, or automation may create better results
              tomorrow.
            </p>
            <Link href="/contact" className="button button-dark mt-8">
              Explore a connected solution <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
