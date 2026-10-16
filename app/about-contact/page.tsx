
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About & Contact",
};

export default function AboutContactPage() {
  return (
    <>
      {/* ABOUT & FOUNDER SECTION */}
      <section className="page-hero container">
        <div className="eyebrow">
          <span />
          OUR STORY
        </div>

        <h1>
          Talent is the beginning.
          <br />
          <em>Opportunity is the work.</em>
        </h1>

        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lede">
              Leo Lucky Hands Studios is a talent management and
              celebrity marketing studio focused on connecting
              artists with meaningful opportunities across
              entertainment, advertising and digital campaigns.
            </p>

            <p>
              We work across artist representation, brand
              partnerships, influencer campaigns and production
              collaborations. Our approach is personal, considered
              and built around the needs of each artist and project.
            </p>

            <p>
              Our aim is simple: create the right introductions,
              support strong collaborations and help talent meet
              opportunities that make sense.
            </p>

            <Link className="text-link" href="/portfolio">
              Explore our talent
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* FOUNDER PROFILE */}
          <aside className="founder-card">
            <div className="founder-photo">
              <img
                src="/images/brand/managing-director.png"
                alt="Murali Mohan, Founder and Managing Director of Leo Lucky Hands Studios"
                className="founder-photo-image"
              />
            </div>

            <div className="founder-card-content">
              <div className="eyebrow">
                FOUNDER & MANAGING DIRECTOR
              </div>

              <h2>Murali Mohan</h2>

              <p>
                Leading talent relationships and creative
                partnerships at Leo Lucky Hands Studios.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="eyebrow">
              <span />
              GET IN TOUCH
            </div>

            <h2>
              Let's make the
              <br />
              <em>right connection.</em>
            </h2>

            <p>
              Tell us about your artist booking, campaign or
              production. We'll get back to you to discuss
              the next steps.
            </p>

            <a
              href="tel:+917675961136"
              className="contact-detail"
            >
              <Phone />

              <span>
                <small>CALL THE STUDIO</small>
                <strong>+91 76759 61136</strong>
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://wa.me/917675961136?text=Hello%20Leo%20Lucky%20Hands%20Studios%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <Phone />

              <span>
                <small>WHATSAPP ENQUIRIES</small>
                <strong>Chat with our studio</strong>
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://www.instagram.com/leoluckyhands/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <Instagram />

              <span>
                <small>FOLLOW ON INSTAGRAM</small>
                <strong>@leoluckyhands</strong>
              </span>

              <ArrowUpRight />
            </a>

            <div className="contact-detail">
              <MapPin />

              <span>
                <small>BASED IN</small>
                <strong>Hyderabad, Telangana, India</strong>
              </span>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="eyebrow">PROJECT ENQUIRY</div>

            <h3>Tell us what you have in mind.</h3>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
