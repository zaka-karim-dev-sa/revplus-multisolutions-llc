import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Revplus Multisolutions LLC in Houston, Texas to discuss BPO or IT solution needs.",
};

export default function Contact() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact Revplus"
        title={
          <>
            Start with the business need.{" "}
            <span className="text-cyan">We’ll take it from there.</span>
          </>
        }
        intro="Tell us what you are trying to improve, support, or build. We’ll help make the next step clear."
      />
      <section className="section bg-white">
        <div className="container-wide grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow text-navy">Contact details</p>
            <h2 className="section-title">Let’s talk.</h2>
            <div className="contact-details">
              <div>
                <span>Primary phone</span>
                <a href="tel:+18329429484">+1 832-942-9484</a>
              </div>
              <div>
                <span>Secondary phone</span>
                <a href="tel:+18329429040">+1 832-942-9040</a>
              </div>
              <div>
                <span>Office</span>
                <address>
                  4065 S Braeswood Blvd
                  <br />
                  Houston, TX 77025
                  <br />
                  USA
                </address>
              </div>
              <div>
                <span>Website</span>
                <a href="https://revplusmultisolutions.com">
                  Revplusmultisolutions.com
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="form-shell">
              <div className="mb-8">
                <span className="eyebrow text-navy">
                  Tell us about your goals
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                  How can Revplus help?
                </h2>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
