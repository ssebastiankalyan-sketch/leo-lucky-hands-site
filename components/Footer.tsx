import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div><div className="footer-brand">LEO LUCKY HANDS <span>STUDIOS</span></div><p>Where talent meets opportunity.</p></div>
        <div className="footer-links"><Link href="/portfolio">Talent</Link><Link href="/services">Services</Link><Link href="/about-contact">About & Contact</Link></div>
      </div>
      <div className="footer-bottom">
        <a href="tel:+917675961136"><Phone size={15} /> +91 76759 61136</a>
        <a href="https://www.instagram.com/leoluckyhands/" target="_blank" rel="noreferrer"><Instagram size={15} /> @leoluckyhands</a>
        <span><MapPin size={15} /> Hyderabad, Telangana, India</span>
        <small>© {new Date().getFullYear()} Leo Lucky Hands Studios</small>
      </div>
    </footer>
  );
}
