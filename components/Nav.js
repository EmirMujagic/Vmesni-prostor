"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Prevajalnik" },
  { href: "/blog", label: "Blog" },
  { href: "/storitve", label: "Storitve" },
  { href: "/o-meni", label: "O meni" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Vmesni prostor" width={44} height={44} className="logo-icon" style={{ height: 44, width: "auto" }} />
          Vmesni <span>prostor</span>
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/kontakt" className="nav-cta">
          Rezerviraj termin
        </Link>
        <button
          type="button"
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Odpri meni"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile-menu">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/kontakt" className="btn-primary" onClick={() => setOpen(false)}>
            Rezerviraj termin
          </Link>
        </div>
      )}
    </nav>
  );
}
