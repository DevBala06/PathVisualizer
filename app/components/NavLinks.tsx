"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the NavLink interface
interface NavLink {
  label: string;
  href: string;
}

// Define the navLinks array with navigation details
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Visualize", href: "/visualizer" },
];

// Create the NavLinks component
const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className=" ml-3 flex gap-6">
      {navLinks.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={`${pathname === link.href ? "text-zinc-100" : "text-zinc-500 "}font-medium flex items-start text-sm hover:text-zinc-100`}
        >
          {link.label}
          <span className={`${pathname === link.href ? "hidden" : ""}`}>
            <ArrowUpRight color="#71717a" size="0.7rem" />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
