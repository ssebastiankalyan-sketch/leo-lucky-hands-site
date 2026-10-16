
import Link from "next/link";
import {
  ArrowUpRight,
  Clapperboard,
  Megaphone,
  Sparkles,
  Star,
} from "lucide-react";

import { actresses } from "@/lib/talent";
import TalentCard from "@/components/TalentCard";

const selected = [
  ...actresses
    .filter(
      (person) =>
        person.slug !== "kayal-anandhi" &&
        person.slug !== "tamanna-bhatia"
    )
    .slice(0, 3),
  ...actresses.filter(
    (person) => person.slug === "tamanna-bhatia"
  ),
];

const services = [
  {
    no: "01",
    category: "REPRESENTATION",
    title: "Talent & Celebrity Management",
    description:
      "We connect artists with relevant industry opportunities, brand partnerships and professional collaborations that support their careers.",
    icon: Star,
  },
  {
    no: "02",
    category: "CAMPAIGNS",
    title: "Actress Marketing",
    description:
      "We connect actresses with brand campaigns, endorsements, public appearances and promotional opportunities.",
    icon: Megaphone,
  },
  {
    no: "03",
    category: "PRODUCTION",
    title: "Film & Brand Collaborations",
    description:
      "We coordinate creative partnerships between artists, production teams and businesses for productions and brand campaigns.",
    icon: Clapperboard,
  },
  {
    no: "04",
    category: "INFLUENCE",
    title: "Influencer Partnerships",
    description:
      "We connect brands with relevant creators and help coordinate influencer campaigns around their goals and audiences.",
    icon: Sparkles,
  },
];

const team = [
  {
    no: "01",
    category: "PRODUCTION",
    title: "Cinematographers & Photographers",
    description:
      "Our experienced team works across films, events, celebrity projects and commercial productions. With 30+ professional photographers and cinematographers and experience across 1,000+ projects, we create visuals shaped around each project's creative vision.",
    stat: "30+",
    statLabel: "Photography & cinematography professionals",
  },
  {
    no: "02",
    category: "POST-PRODUCTION",
    title: "Professional Editing Team",
    description:
      "Our 25+ professional editors bring experience across films, digital platforms, events, social media and branded content. From precise editing and colour grading to sound synchronisation and finishing, we turn footage into polished visual stories.",
    stat: "25+",
    statLabel: "Professional editors",
  },
  {
    no: "03",
    category: "CREATIVE",
    title: "Directors & Creative Direction",
    description:
      "Our directors bring storytelling, scripting and visual direction to celebrity projects, films, events and brand campaigns. From developing concepts to guiding performances and planning shots, we turn ideas into compelling productions.",
  },
  {
    no: "04",
    category: "DIGITAL PRESENCE",
    title: "Social Media Management",
    description:
      "Our professional social media team handles brand and celebrity accounts through content planning, creative development, publishing, audience engagement and performance tracking to build consistent digital identities.",
  },
  {
    no: "05",
    category: "PERFORMANCE",
    title: "SEO & Digital Advertising",
    description:
      "We improve online visibility through search engine optimisation, keyword strategy and paid advertising. Our campaigns focus on reaching relevant audiences, generating enquiries and improving performance through ongoing optimisation.",
  },
  {
    no: "06",
    category: "DIGITAL FOUNDATIONS",
    title: "Website & Google Business",
    description:
      "We create professional, responsive websites and help eligible businesses establish and optimise their Google Business Profiles. We focus on clear service information, convenient enquiry journeys and stronger local online visibility.",
  },
  {
    no: "07",
    category: "OFFLINE BRANDING",
    title: "Printing & Complete Offline Branding",
    description:
      "From stickers, labels and brochures to large-format hoardings, auto advertising, vehicle branding and theatre advertisements, we coordinate creative design and print-ready artwork across physical brand touchpoints.",
    tags: [
      "Stickers & Labels",
      "Print & Collateral",
      "Outdoor Hoardings",
      "Auto Advertising",
      "Theatre Advertising",
    ],
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-split container">
        <div className="hero-intro">
          <span className="eyebrow">
            LEO LUCKY HANDS STUDIOS
          </span>

          <h1>
            Talent.
            <br />
            Influence.
            <br />
            <em>Opportunity.</em>
          </h1>

          <p className="hero-description">
            We represent exceptional talent and connect artists
            with meaningful opportunities across entertainment,
            film, digital media and brand partnerships.
          </p>

          <div className="hero-actions">
            <Link
              href="/portfolio"
              className="button button-gold"
            >
              Explore Our Talent
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/services"
              className="button button-outline"
            >
              Discover Our Services
            </Link>
          </div>

          <div className="hero-caption">
            <span>ARTISTS</span>
            <span>BRANDS</span>
            <span>OPPORTUNITIES</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art-frame hero-art-image-frame">
            <img
              src="/images/brand/icons-influence.png"
              alt="Icons and Influence — Leo Lucky Hands Studios"
              className="hero-art-image"
            />
          </div>
        </div>
      </section>

      {/* FEATURED ACTRESSES */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A CURATED ROSTER</div>
            <h2>
              In the <em>spotlight.</em>
            </h2>
          </div>

          <Link href="/portfolio" className="text-link">
            View all talent
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="talent-grid">
          {selected.map((person) => (
            <TalentCard
              key={person.slug}
              person={person}
            />
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="statement-band">
        <div className="container statement-content">
          <span className="eyebrow">
            BEYOND THE SPOTLIGHT
          </span>

          <h2>
            Exceptional talent.
            <br />
            <em>Meaningful connections.</em>
          </h2>

          <p>
            We bring artists, entertainment professionals and
            ambitious brands together through thoughtful
            representation and creative partnerships.
          </p>

          <Link href="/about-contact" className="text-link">
            Discover our story
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">WHAT WE DO</div>
            <h2>
              Creative reach.
              <br />
              <em>Real connections.</em>
            </h2>
          </div>

          <p className="section-intro">
            From talent representation to creative production
            and brand partnerships, we bring the right people
            and ideas together.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-tile"
                key={service.no}
              >
                <Icon size={25} />

                <span>
                  {service.no} / {service.category}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="center-action">
          <Link
            className="button button-outline"
            href="/services"
          >
            Explore all services
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* OUR TEAM — IMMEDIATELY AFTER SERVICES */}
      <section className="section container team-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              THE PEOPLE BEHIND THE WORK
            </div>

            <h2>
              A team built for
              <br />
              <em>every vision.</em>
            </h2>
          </div>

          <p className="section-intro">
            From the first concept to the final campaign,
            our specialists bring creative thinking,
            technical expertise and coordinated execution
            together under one roof.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article
              className={`team-card ${
                member.tags ? "team-card-wide" : ""
              }`}
              key={member.no}
            >
              <span className="team-number">
                {member.no} / {member.category}
              </span>

              <div className="team-card-icon">
                {member.no}
              </div>

              <h3>{member.title}</h3>

              <p>{member.description}</p>

              {"stat" in member && member.stat && (
                <div className="team-stat">
                  <strong>{member.stat}</strong>
                  <span>{member.statLabel}</span>
                </div>
              )}

              {"tags" in member && member.tags && (
                <div className="team-tags">
                  {member.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="center-action">
          <a
            href="https://wa.me/917675961136?text=Hello%20Leo%20Lucky%20Hands%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold"
          >
            Discuss Your Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* CLOSING ENQUIRY */}
      <section className="closing-cta">
        <div className="container closing-cta-content">
          <span className="eyebrow">
            LET'S CREATE SOMETHING EXCEPTIONAL
          </span>

          <h2>
            The right connection
            <br />
            changes <em>everything.</em>
          </h2>

          <p>
            Looking for talent, planning a campaign or exploring
            a collaboration? Let's start a conversation.
          </p>

          <a
            href="https://wa.me/917675961136?text=Hello%20Leo%20Lucky%20Hands%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
