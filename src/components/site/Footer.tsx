import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl">Advera</span>
              <span className="text-[10px] tracking-[0.3em] text-gold">CONSULTING</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              Bridging expert strategy and digital execution for councils,
              corporations and institutions building tomorrow's standards.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>hello@advera.consulting</li>
              <li>+1 (000) 000-0000</li>
              <li>Mon — Fri · 09:00 – 18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Advera Consulting. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Strategy · Compliance · Innovation</p>
        </div>
      </div>
    </footer>
  );
}