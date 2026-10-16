
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDownRight,
  Clapperboard,
  Handshake,
  Megaphone,
  Mic2,
  MonitorPlay,
  Star,
  UsersRound,
} from "lucide-react";

const services = [
  {
    no: "01",
    title: "Talent & Celebrity Management",
    icon: Star,
    body: "Artist representation, opportunity coordination and professional collaborations tailored to each brief.",
    description: [
      "Leo Lucky Hands Studios connects artists and entertainment professionals with suitable opportunities across the entertainment, advertising and digital industries. We focus on understanding each artist's professional identity, strengths and career objectives before exploring relevant collaborations.",
      "Our support includes coordinating talent enquiries, facilitating communication with brands and production teams, and helping organise professional collaborations. We aim to make the process clear and structured for artists, clients and industry partners.",
      "Whether a brand is searching for the right personality for a campaign or a production team needs talent for a project, we help connect the relevant parties and coordinate the initial discussions.",
    ],
    points: [
      "Artist representation and enquiries",
      "Brand endorsement opportunities",
      "Professional collaboration coordination",
      "Talent and client communication",
    ],
  },
  {
    no: "02",
    title: "Actress Marketing",
    icon: UsersRound,
    body: "Connecting actresses with brand campaigns, public appearances and relevant promotional opportunities.",
    description: [
      "We help connect actresses with brands, advertising campaigns, promotional opportunities and public appearances that align with their professional identity. Our approach begins with understanding the campaign requirements and identifying suitable talent for the intended audience.",
      "We coordinate enquiries and communication related to brand endorsements, promotional shoots, product campaigns and appearances. We also help clients understand the proposed collaboration requirements before proceeding with the artist's team.",
      "Our goal is to create relevant connections between actresses and businesses while maintaining a professional approach to campaign planning and coordination.",
    ],
    points: [
      "Celebrity endorsement coordination",
      "Brand campaign opportunities",
      "Promotional appearances",
      "Artist and brand communication",
    ],
  },
  {
    no: "03",
    title: "Influencer Campaigns",
    icon: Megaphone,
    body: "Creator selection, campaign planning and coordination around your brand goals and audience.",
    description: [
      "We help brands identify influencers and digital creators whose content, audience and communication style suit the campaign brief. Each recommendation is considered in relation to the brand's objectives, target audience, budget and required deliverables.",
      "From creator shortlisting to campaign brief coordination, we help organise communication between the brand and influencer. This can include discussing content formats, promotional requirements, timelines and campaign expectations.",
      "Whether the objective is product awareness, a launch promotion or a creator-led digital campaign, we focus on connecting the right people with a clear campaign purpose.",
    ],
    points: [
      "Influencer discovery and shortlisting",
      "Campaign brief coordination",
      "Sponsored content collaborations",
      "Creator and brand communication",
    ],
  },
  {
    no: "04",
    title: "Brand Collaborations",
    icon: Handshake,
    body: "Partnerships between artists, brands and creative teams built around a clear campaign brief.",
    description: [
      "We bring brands, artists and creative professionals together to explore partnerships that support their respective goals. We begin by understanding the brand's requirements, campaign message, intended audience and preferred type of collaboration.",
      "Depending on the brief, we help coordinate artist partnerships, product promotions, endorsements, event participation and branded content opportunities. We facilitate communication between the relevant parties so the expectations and requirements can be discussed clearly.",
      "Our focus is on building purposeful professional connections and helping each collaboration move forward with agreed deliverables, schedules and commercial terms.",
    ],
    points: [
      "Artist and brand partnerships",
      "Product and campaign collaborations",
      "Promotional events and appearances",
      "Creative partnership coordination",
    ],
  },
  {
    no: "05",
    title: "Film, OTT & Casting Support",
    icon: Clapperboard,
    body: "Talent sourcing and coordination support for films, digital productions and entertainment projects.",
    description: [
      "We support film, OTT and digital production enquiries by helping connect production teams with suitable artists and talent. Our coordination begins with understanding the project's requirements, the roles or profiles needed, and the proposed schedule.",
      "We can assist with talent enquiries, availability discussions and communication between production teams and artist representatives. Project-specific requirements, remuneration and selection decisions are discussed with the relevant parties.",
      "Our objective is to help production teams and talent discover suitable opportunities while keeping the initial coordination process organised and professional.",
    ],
    points: [
      "Casting enquiries and talent sourcing",
      "Artist availability coordination",
      "Production-team communication",
      "Film and digital project collaborations",
    ],
  },
  {
    no: "06",
    title: "Promotional Content & Appearances",
    icon: MonitorPlay,
    body: "Support for promotional shoots, event appearances, interviews and campaign content.",
    description: [
      "We coordinate opportunities for artists to participate in promotional content, brand campaigns, launches and public appearances. These collaborations can help brands introduce products, communicate campaign messages and connect with audiences through relevant talent.",
      "Depending on the project, our coordination may include promotional video enquiries, brand shoots, event participation, campaign appearances and artist-led content. We help communicate the requirements and timelines between the client and the artist's team.",
      "Before a collaboration is confirmed, the deliverables, schedules, usage requirements, fees and other project terms should be agreed upon by the relevant parties.",
    ],
    points: [
      "Promotional video collaborations",
      "Brand launches and event appearances",
      "Artist-led campaign content",
      "Shoot and schedule coordination",
    ],
  },
  {
    no: "07",
    title: "Artist Interviews & Media",
    icon: Mic2,
    body: "Planning and coordination for artist interviews, media opportunities and branded conversations.",
    description: [
      "We help coordinate interview enquiries and media interactions that showcase artists, their work, upcoming projects and professional journeys. We connect relevant media platforms and artists based on the interview concept and the requirements of the parties involved.",
      "Our support can include initial communication, interview scheduling, sharing project information and coordinating arrangements with media teams or artist representatives.",
      "Whether it is an artist interview, a project-related conversation or a branded media interaction, we aim to make the coordination process clear and professional.",
    ],
    points: [
      "Interview and media enquiries",
      "Artist and media-team coordination",
      "Project and release promotions",
      "Interview scheduling support",
    ],
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main>
      <section className="page-hero container">
        <div className="eyebrow">
          <span />
          OUR EXPERTISE
        </div>

        <h1>
          Built around <em>possibility.</em>
        </h1>

        <p className="page-lede">
          From artist representation to brand partnerships, we help
          the right people and ideas find each other.
        </p>

        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = expanded === service.no;

            return (
              <article
                className={`service-row ${isOpen ? "is-expanded" : ""}`}
                key={service.no}
              >
                <div className="service-row-main">
                  <span className="service-number">
                    {service.no}
                  </span>

                  <div className="service-row-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <div className="service-row-copy">
                    <h2>{service.title}</h2>
                    <p>{service.body}</p>
                  </div>

                  <button
                    type="button"
                    className="service-row-toggle"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setExpanded(isOpen ? null : service.no)
                    }
                  >
                    <span>{isOpen ? "Less" : "More"}</span>

                    {isOpen ? (
                      <ArrowDownRight size={20} />
                    ) : (
                      <ArrowUpRight size={20} />
                    )}
                  </button>
                </div>

                {isOpen && (
                  <div className="service-expanded">
                    <div className="service-expanded-inner">
                      <div className="eyebrow">
                        SERVICE OVERVIEW
                      </div>

                      {service.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                      <h3>What we can help with</h3>

                      <ul>
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <a
                        href={`https://wa.me/917675961136?text=${encodeURIComponent(
                          `Hello Leo Lucky Hands Studios, I would like to enquire about ${service.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-enquiry-link"
                      >
                        Enquire about this service
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="services-cta">
          <div>
            <div className="eyebrow">LET'S COLLABORATE</div>

            <h2>
              Have a brief?
              <br />
              <em>Let's talk.</em>
            </h2>
          </div>

          <a
            className="button button-gold"
            href="https://wa.me/917675961136?text=Hello%20Leo%20Lucky%20Hands%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss your project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
