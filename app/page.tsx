import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { bpoServices, itServices, values } from "@/data/content";

const industries = [
  "Healthcare operations",
  "Professional services",
  "Retail & e-commerce",
  "Technology companies",
  "Logistics & field services",
  "Growing local businesses",
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container-wide relative z-10 grid min-h-[calc(100svh-76px)] items-center gap-14 py-20 lg:grid-cols-[1.16fr_.84fr] lg:py-24">
          <div>
            <Reveal>
              <p className="eyebrow text-cyan">
                <span className="pulse-dot" />
                Headquartered in Houston, TX - Work smarter, scale faster, and
                grow stronger
              </p>
              <h1 className="hero-title">
                Better operations.
                <br />
                <span>Smarter technology.</span>
                <br />
                One clear partner.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-slate-300">
                <p>
                  At RevPlus Multisolutions, our mission is to help businesses
                  operate smarter, scale with confidence, and unlock their full
                  potential by combining exceptional people, intelligent
                  technology, and streamlined processes.
                </p>
                <p>
                  We bring together global talent, technology, and industry
                  expertise to deliver tailored IT, BPO, customer experience,
                  and business process solutions that improve efficiency, reduce
                  operational complexity, and create measurable business value.
                </p>
                <p>
                  More than a service provider, we strive to become a trusted
                  extension of every client’s team—bringing the expertise,
                  flexibility, and innovation needed to solve today’s challenges
                  while building a stronger foundation for tomorrow’s growth.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="button" data-cursor="button">
                  Discuss your goals <span>↗</span>
                </Link>
                <Link
                  href="#services"
                  className="button button-ghost"
                  data-cursor="button"
                >
                  Explore capabilities <span>↓</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="hidden lg:block">
            <div
              className="signal-panel"
              aria-label="Revplus connects operations and technology"
            >
              <div className="signal-orbit orbit-one" />
              <div className="signal-orbit orbit-two" />
              <div className="signal-core">
                <span>REV</span>
                <strong>+</strong>
              </div>
              <div className="signal-node node-ops">
                <small>01</small>
                <strong>OPERATIONS</strong>
                <span>People · Process</span>
              </div>
              <div className="signal-node node-tech">
                <small>02</small>
                <strong>TECHNOLOGY</strong>
                <span>Products · Automation</span>
              </div>
              <div className="signal-caption">One connected delivery model</div>
            </div>
          </Reveal>
        </div>
        <div className="hero-strip">
          <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-4">
            <span>BPO + IT SOLUTIONS</span>
            <span>BUILT AROUND YOUR BUSINESS</span>
            <a href="tel:+18329429484">+1 832-942-9484 ↗</a>
          </div>
        </div>
      </section>

      <section id="services" className="section bg-white">
        <div className="container-wide">
          <Reveal className="grid gap-7 lg:grid-cols-[.45fr_1fr]">
            <p className="eyebrow text-navy">Two disciplines. One purpose.</p>
            <div>
              <h2 className="section-title">
                Make the business easier to run—and easier to grow.
              </h2>
              <p className="section-copy">
                Operational support handles the work that keeps business moving.
                Technology improves how that work gets done. Revplus connects
                both sides so your solution does not stop at a handoff.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Link
                href="/bpo-services"
                className="pillar-card pillar-dark"
                data-cursor="card"
              >
                <div>
                  <span className="card-index">01 / BPO</span>
                  <h3>
                    Business Process
                    <br />
                    Outsourcing
                  </h3>
                  <p>
                    Extend your team with customer-facing and back-office
                    support built around clear processes.
                  </p>
                </div>
                <div className="card-link">
                  View BPO services <span>↗</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/it-solutions"
                className="pillar-card pillar-light"
                data-cursor="card"
              >
                <div>
                  <span className="card-index">02 / IT</span>
                  <h3>
                    Technology
                    <br />
                    Solutions
                  </h3>
                  <p>
                    Design, build, connect, and improve the systems that support
                    your operation.
                  </p>
                </div>
                <div className="card-link">
                  View IT solutions <span>↗</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-mist/60">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-navy">BPO capabilities</p>
            <div className="section-heading-row">
              <h2 className="section-title max-w-3xl">
                Reliable support for the work behind every customer experience.
              </h2>
              <Link href="/bpo-services" className="text-link">
                All BPO services ↗
              </Link>
            </div>
          </Reveal>
          <div className="services-grid">
            {bpoServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="service-card">
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
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container-wide relative z-10">
          <Reveal className="grid gap-8 lg:grid-cols-[.72fr_1fr]">
            <div>
              <p className="eyebrow text-cyan">Technology capabilities</p>
              <h2 className="section-title text-white">
                Practical technology, built to perform.
              </h2>
            </div>
            <p className="section-copy !mt-0 text-slate-300 lg:pt-8">
              From a focused workflow integration to a new digital product, we
              shape technology around the outcome—not around a fashionable tool.
            </p>
          </Reveal>
          <div className="mt-16 border-t border-white/15">
            {itServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 45}>
                <Link
                  href="/it-solutions"
                  className="tech-row"
                  data-cursor="card"
                >
                  <span>{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <b>↗</b>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="eyebrow text-navy">Why Revplus</p>
            <h2 className="section-title">Partnership without the theater.</h2>
            <p className="section-copy">
              No inflated promises. Just thoughtful scoping, responsible
              delivery, and solutions that fit where your business is today.
            </p>
            <Link href="/about" className="text-link mt-8 inline-flex">
              How we think ↗
            </Link>
          </Reveal>
          <div className="values-list">
            {values.map(([title, text], i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="value-item">
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-navy">Where we can help</p>
            <h2 className="section-title max-w-3xl">
              Flexible capabilities for businesses with work to simplify and
              ideas to build.
            </h2>
          </Reveal>
          <div className="industry-track mt-12">
            {industries.map((item, i) => (
              <Reveal key={item} delay={i * 35}>
                <span>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container-wide relative z-10 grid gap-8 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
          <Reveal>
            <p className="eyebrow text-cyan">Let’s solve the right problem</p>
            <h2>
              What could your business do with fewer operational roadblocks?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contact"
              className="button button-white"
              data-cursor="button"
            >
              Start a conversation <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
