"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { actresses, models, talent } from "@/lib/talent";
import TalentCard from "@/components/TalentCard";

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("All talent");
  const [language, setLanguage] = useState("All languages");
  const allLanguages = Array.from(new Set(talent.flatMap((item) => item.languages.split(/,|&| and /).map((part) => part.trim()).filter(Boolean)))).sort();
  const filtered = useMemo(() => talent.filter((person) => {
    const matchesQuery = `${person.name} ${person.languages}`.toLowerCase().includes(query.toLowerCase());
    const matchesKind = kind === "All talent" || (kind === "Actresses" && person.type === "Actress") || (kind === "Models" && person.type === "Model");
    const matchesLanguage = language === "All languages" || person.languages.toLowerCase().includes(language.toLowerCase());
    return matchesQuery && matchesKind && matchesLanguage;
  }), [query, kind, language]);
  return <section className="page-hero container portfolio-page"><div className="eyebrow"><span/> THE ROSTER</div><h1>Meet the <em>talent.</em></h1><p className="page-lede">Explore our artist roster and discover the right face, voice and presence for your next project.</p>
    <div className="portfolio-toolbar"><label className="search-box"><Search size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or language" /></label><label className="filter-box"><SlidersHorizontal size={16}/><select value={kind} onChange={(e) => setKind(e.target.value)}><option>All talent</option><option>Actresses</option><option>Models</option></select></label><label className="filter-box"><select value={language} onChange={(e) => setLanguage(e.target.value)}><option>All languages</option>{allLanguages.map((lang) => <option key={lang}>{lang}</option>)}</select></label></div>
    <div className="result-line"><span>{filtered.length} PROFILES</span><span>SELECT A PROFILE TO VIEW DETAILS ↗</span></div>
    {filtered.length ? <div className="talent-grid portfolio-grid">{filtered.map((person) => <TalentCard key={person.slug} person={person}/>)}</div> : <div className="empty-state"><h2>No profiles found</h2><p>Try a different name or filter.</p></div>}
    <p className="portfolio-note">Model profiles can be added in <code>data/talent.json</code>. Add photographs to <code>public/images/talent/</code> using the filename specified in each profile.</p>
  </section>;
}
