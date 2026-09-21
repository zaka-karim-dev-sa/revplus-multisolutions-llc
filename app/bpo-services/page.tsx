import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { bpoServices } from "@/data/content";

export const metadata: Metadata = {
  title: "BPO Services",
  description:
    "Flexible customer support, back-office, sales support, and virtual assistance for U.S. businesses.",
};
const process = [
  [
    "Discover",
    "Map goals, workloads, tools, service expectations, and current friction.",
  ],
  [
    "Design",
    "Define the workflow, ownership, communication rhythm, and measures that matter.",
  ],
  [
    "Launch",
    "Prepare the team and process, then begin with clear checkpoints and support.",
  ],
  [
    "Improve",
    "Review what is working, address gaps, and adapt as the operation evolves.",
  ],
];

export default function BpoServices() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Business Process Outsourcing"
        title={
          <>
            More capacity for the work{" "}
            <span className="text-cyan">your business depends on.</span>
          </>
        }
        intro="Revplus helps companies extend customer-facing and back-office operations through structured, adaptable support."
      />
      <section className="section bpo-services-showcase">
        <div className="bpo-services-showcase__grid" aria-hidden="true" />
        <div className="bpo-services-showcase__glow bpo-services-showcase__glow--one" />
        <div className="bpo-services-showcase__glow bpo-services-showcase__glow--two" />
        <div className="container-wide relative z-10">
          <Reveal className="grid gap-8 lg:grid-cols-[.6fr_1fr]">
            <p className="eyebrow text-navy">Core services</p>
            <div>
              <h2 className="section-title">
                Support designed around the process—not a generic seat.
              </h2>
              <p className="section-copy bpo-services-showcase__copy">
                We focus on a clear operating model: what needs to happen, who
                owns it, how quality is maintained, and how your team stays
                informed.
              </p>
            </div>
          </Reveal>
          <div className="services-grid mt-16">
            {bpoServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
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
                  <ul>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div className="bpo-service-card__bubble" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-mist/60">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-navy">Engagement path</p>
            <h2 className="section-title max-w-3xl">
              From business need to a working operation.
            </h2>
          </Reveal>
          <div className="process-grid">
            {process.map(([title, text], i) => (
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
      <section className="section bg-white">
        <div className="container-wide grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-navy">Built to fit</p>
            <h2 className="section-title">
              The right level of support can change over time.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="feature-list">
              <div>
                <strong>Focused scope</strong>
                <p>
                  Start with a defined process or area where added capacity can
                  make a meaningful difference.
                </p>
              </div>
              <div>
                <strong>Flexible delivery</strong>
                <p>
                  Shape the workflow around business hours, priorities, tools,
                  and customer expectations.
                </p>
              </div>
              <div>
                <strong>Connected technology</strong>
                <p>
                  When the process needs better software or automation, our IT
                  capabilities can support the next step.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="cta-section">
        <div className="container-wide relative z-10 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-cyan">
              Build the support model you need
            </p>
            <h2 className="max-w-4xl">
              Let’s find the work your team should no longer carry alone.
            </h2>
            <Link href="/contact" className="button button-white mt-9">
              Discuss BPO support <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
