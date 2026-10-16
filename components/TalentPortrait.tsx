"use client";

import { useState } from "react";

export default function TalentPortrait({ src, name, className = "" }: { src: string; name: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  return (
    <div className={`portrait ${className}`}>
      {!failed && src ? <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} /> : null}
      {(failed || !src) && <div className="portrait-placeholder"><span>{initials}</span><small>PHOTO TO BE ADDED</small></div>}
      <div className="portrait-shade" />
    </div>
  );
}
