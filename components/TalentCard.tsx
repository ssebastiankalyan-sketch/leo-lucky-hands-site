import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Talent } from "@/lib/talent";
import TalentPortrait from "@/components/TalentPortrait";

export default function TalentCard({ person }: { person: Talent }) {
  return (
    <Link href={`/portfolio/${person.slug}`} className="talent-card">
      <TalentPortrait src={person.photo} name={person.name} />
      <div className="talent-card-info"><div><h3>{person.name}</h3><p>{person.type} {person.followers ? `· ${person.followers} followers` : ""}</p></div><span className="round-arrow"><ArrowUpRight size={18} /></span></div>
      <div className="talent-card-languages">{person.languages || "Languages on request"}</div>
    </Link>
  );
}
