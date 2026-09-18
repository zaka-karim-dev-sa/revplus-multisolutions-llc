"use client";

import { useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  return (
    <form className="contact-form" action={endpoint || undefined} method="POST" onSubmit={(event) => {
      if (!endpoint) { event.preventDefault(); setMessage("Online delivery is being configured. Please call us at +1 832-942-9484 for immediate assistance."); }
    }}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>First name<input name="firstName" autoComplete="given-name" required placeholder="Jane" /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required placeholder="Smith" /></label>
      </div>
      <label>Work email<input type="email" name="email" autoComplete="email" required placeholder="jane@company.com" /></label>
      <label>Company<input name="company" autoComplete="organization" placeholder="Your company" /></label>
      <label>How can we help?<select name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>BPO Services</option><option>IT Solutions</option><option>Both BPO + IT</option><option>Other</option></select></label>
      <label>Tell us about your needs<textarea name="message" required rows={5} placeholder="What would you like to improve, build, or scale?" /></label>
      <button className="button w-full justify-center sm:w-auto" type="submit" data-cursor="button">Send inquiry <span>↗</span></button>
      {message && <p className="form-note" role="status">{message}</p>}
    </form>
  );
}
