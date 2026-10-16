import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Instagram, Languages, UsersRound } from "lucide-react";
import { actresses, getTalent } from "@/lib/talent";
import TalentPortrait from "@/components/TalentPortrait";
import TalentCard from "@/components/TalentCard";

export function generateStaticParams() { return actresses.map((person) => ({ slug: person.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const person = getTalent(slug);
  return { title: person?.name ?? "Talent profile", description: person ? `${person.name} — talent profile at Leo Lucky Hands Studios.` : "Talent profile" };
}
export default async function TalentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getTalent(slug);
  if (!person) notFound();
  const related = actresses.filter((item) => item.slug !== person.slug).slice(0, 3);
  return <>
    <section className="container profile-page"><Link className="back-link" href="/portfolio"><ArrowLeft size={16}/> Back to portfolio</Link><div className="profile-layout"><div className="profile-image-wrap"><TalentPortrait src={person.photo} name={person.name} className="profile-portrait"/><span className="image-index">LLH / TALENT PROFILE</span></div><div className="profile-content"><div className="eyebrow"><span/> {person.type.toUpperCase()} PROFILE</div><h1>{person.name.split(" ").map((part, i) => <span key={`${part}-${i}`}>{part} </span>)}</h1><p className="profile-description">{person.description || "For bookings, brand collaborations and project availability, contact Leo Lucky Hands Studios."}</p><div className="profile-facts"><div><UsersRound/><span>INSTAGRAM FOLLOWERS</span><strong>{person.followers || "On request"}</strong></div><div><Languages/><span>LANGUAGES</span><strong>{person.languages || "On request"}</strong></div><div><Instagram/><span>INSTAGRAM PROFILE</span><strong>{person.instagram ? <a href={person.instagram} target="_blank" rel="noreferrer">View Instagram <ArrowUpRight size={14}/></a> : "Available on request"}</strong></div></div><div className="profile-price"><span>PROFESSIONAL FEE</span><strong>{person.price ? `₹${person.price}` : "Contact for fee"}</strong><small>Travel, accommodation, food and production expenses may be additional. Confirm the final quote with the studio.</small></div><Link className="button button-gold" href={`/about-contact?artist=${encodeURIComponent(person.name)}#enquiry`}>Enquire about this artist <ArrowUpRight size={17}/></Link></div></div>
      {person.gallery.length > 0 && <div className="profile-gallery"><div className="eyebrow">SELECTED IMAGES</div><div className="gallery-grid">{person.gallery.map((src) => <img src={src} alt={`${person.name} portfolio`} key={src}/>)}</div></div>}
      {person.videos.length > 0 && <div className="profile-videos"><div className="eyebrow">SHOWREEL & VIDEO</div><div className="video-list">{person.videos.map((src) => <video key={src} controls preload="metadata" src={src}/>)}</div></div>}
    </section>
    <section className="section container"><div className="section-heading"><div><div className="eyebrow">MORE FROM THE ROSTER</div><h2>Explore other <em>talent.</em></h2></div><Link className="text-link" href="/portfolio">View all talent <ArrowUpRight size={16}/></Link></div><div className="talent-grid">{related.map((item) => <TalentCard key={item.slug} person={item}/>)}</div></section>
  </>;
}
