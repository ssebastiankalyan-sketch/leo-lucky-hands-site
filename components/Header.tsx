"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Actress Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about-contact", label: "About & Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Leo Lucky Hands Studios home">
        <Image src="/images/brand/leo-lucky-hands-logo.png" alt="Leo Lucky Hands Studios logo" width={240} height={240} priority className="brand-logo" />
      </Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "main-nav nav-open" : "main-nav"}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="nav-cta" href="/about-contact#enquiry" onClick={() => setOpen(false)}>Enquire <span>↗</span></Link>
      </nav>
    </header>
  );
}
