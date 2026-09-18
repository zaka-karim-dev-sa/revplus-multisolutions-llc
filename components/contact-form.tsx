"use client";

import { FormEvent, useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "e1ab462c-af10-4aae-a46e-4ef6aff60d98";

type SubmissionStatus = {
  type: "success" | "error";
  message: string;
} | null;

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData(form);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms rejected the submission.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your inquiry has been sent successfully. Our team will be in touch soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We couldn't send your inquiry right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New Website Inquiry — Revplus Multisolutions LLC" />
      <input type="hidden" name="from_name" value="Revplus Multisolutions Website" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label>First name<input name="First Name" autoComplete="given-name" required placeholder="Jane" /></label>
        <label>Last name<input name="Last Name" autoComplete="family-name" required placeholder="Smith" /></label>
      </div>
      <label>Work email<input type="email" name="email" autoComplete="email" required placeholder="jane@company.com" /></label>
      <label>Company<input name="Company" autoComplete="organization" placeholder="Your company" /></label>
      <label>How can we help?<select name="Service Requested" defaultValue=""><option value="" disabled>Select a service</option><option>BPO Services</option><option>IT Solutions</option><option>Both BPO + IT</option><option>Other</option></select></label>
      <label>Tell us about your needs<textarea name="Message / Business Needs" required rows={5} placeholder="What would you like to improve, build, or scale?" /></label>
      <button className="button w-full justify-center sm:w-auto" type="submit" data-cursor="button" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? "Sending..." : <>Send inquiry <span>↗</span></>}
      </button>
      {status && <p className="form-note" role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</p>}
    </form>
  );
}
