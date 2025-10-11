"use client";

import Link from "next/link";
import { useNavbarLinks } from "../_hooks/useNavbarLinks";

export default function NavbarContainer() {
  const links = useNavbarLinks();
  return (
    <header className="w-full bg-[var(--card)] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-8 py-4 rounded-xl mb-8 shadow-sm border-b border-[var(--primary-accent)]">
      <span className="font-bold text-xl tracking-wider">
        <span className="text-white">RAFAEL</span>
        <span className="text-[var(--primary)] ml-2">OLIVEIRA</span>
      </span>
      <nav className="flex flex-wrap justify-center space-x-6 font-semibold">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-[var(--primary)] transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
