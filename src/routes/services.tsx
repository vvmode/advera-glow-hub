import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/components/site/data";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Advera Consulting" },
      { name: "description", content: "ISO consultancy, strategic management, operational advisory, risk & compliance, and training & capacity building — tailored for councils, corporations and institutions." },
      { property: "og:title", content: "Advera Services" },
      { property: "og:description", content: "Five pillars of strategic and operational excellence." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative bg-navy-deep text-ivory">
        <Nav variant="dark" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-10 md:pt-48 md:pb-32">
          <p className="eyebrow flex items-center gap-4 animate-fade-up">
            <span className="gold-rule" /> Our Services
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl animate-fade-up delay-100">
            Practical expertise across <em className="text-gold">five pillars.</em>
          </h1>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-3 text-sm text-ivory/80 md:grid-cols-3 animate-fade-up delay-200">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="border-t border-ivory/15 pt-3 hover:text-gold">
                <span className="text-gold mr-3 font-serif">{s.number}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 border-b border-border py-24 md:py-32 ${
            i % 2 === 1 ? "bg-secondary" : "bg-background"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-4">
              <p className="font-serif text-6xl text-gold md:text-7xl">{s.number}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{s.title}</h2>
              <p className="mt-6 text-base text-muted-foreground">{s.short}</p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{s.body}</p>
              <ul className="mt-10 space-y-4">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-border pb-4 text-sm md:text-base">
                    <Check size={18} className="mt-1 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy-deep py-24 text-ivory md:py-32">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 md:px-10">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Which pillar moves your organisation forward?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold px-8 py-5 text-xs tracking-[0.22em] uppercase text-navy-deep hover:bg-gold-soft"
          >
            Start the Conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}