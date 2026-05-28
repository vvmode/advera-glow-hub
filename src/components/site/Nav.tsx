import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";
  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 ${
        isDark ? "text-ivory" : "text-foreground"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight">Advera</span>
          <span className="text-[10px] tracking-[0.3em] text-gold">CONSULTING</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `transition-colors hover:text-gold ${isActive ? "text-gold" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden border border-gold/60 px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-navy-deep md:inline-block"
        >
          Engage Us
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 py-6 text-foreground md:hidden">
          <nav className="flex flex-col gap-4 text-base">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}