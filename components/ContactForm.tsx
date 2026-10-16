"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Leo Lucky Hands Studios, I'd like to make an enquiry.",
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company") || "Not provided"}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Requirement: ${form.get("requirement")}`,
      `Message: ${form.get("message") || "Not provided"}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/917675961136?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="contact-form" id="enquiry" onSubmit={submit}>
    <div className="form-grid">
      <label>Your name *<input name="name" required placeholder="Full name" /></label>
      <label>Company / production house<input name="company" placeholder="Company name" /></label>
      <label>Email address *<input name="email" type="email" required placeholder="you@company.com" /></label>
      <label>Phone number<input name="phone" type="tel" placeholder="+91" /></label>
    </div>
    <label>What are you looking for? *<select name="requirement" required defaultValue=""><option value="" disabled>Select a requirement</option><option>Actress booking</option><option>Model booking</option><option>Celebrity marketing</option><option>Influencer campaign</option><option>Brand collaboration</option><option>Film / OTT / casting support</option><option>Other</option></select></label>
    <label>Project details<textarea name="message" rows={4} placeholder="Tell us about your project, dates, location and requirements." /></label>
    <button className="button button-gold" type="submit">{sent ? "Open WhatsApp again ↗" : "Send enquiry via WhatsApp ↗"}</button>
    <p className="form-note">Submitting opens WhatsApp with your enquiry details. Nothing is stored on this website.</p>
  </form>;
}
