import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Advera Consulting" },
      { name: "description", content: "Advera bridges strategic consultancy and digital innovation — redefining excellence in local governance and corporate operations through integrity and insight." },
      { property: "og:title", content: "About Advera Consulting" },
      { property: "og:description", content: "Bridging strategy and execution for transparent, high-performing organisations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative bg-navy-deep text-ivory">
        <Nav variant="dark" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-28 md:px-10 md:pt-48 md:pb-36">
          <p className="eyebrow flex items-center gap-4 animate-fade-up">
            <span className="gold-rule" /> About Advera
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl animate-fade-up delay-100">
            Empowering organisations to lead with <em className="text-gold">confidence.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ivory/75 animate-fade-up delay-200">
            We bridge the gap between expert strategy and digital execution.
            By aligning development with national standards and automating
            complex workflows, we transform compliance from a hurdle into a
            competitive advantage — ensuring absolute clarity and operational
            agility.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <img
              src={aboutImg}
              alt="Boardroom"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Vision</p>
            <h2 className="mt-6 font-serif text-3xl leading-snug md:text-4xl">
              Redefining excellence in local governance through innovation, integrity and insight.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              To redefine the future of governance and corporate operations by
              bridging the gap between strategic consultancy and digital
              innovation — creating a world of transparent, efficient and
              high-performing organisations.
            </p>

            <div className="my-12 h-px w-full bg-border" />

            <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Mission</p>
            <h2 className="mt-6 font-serif text-3xl leading-snug md:text-4xl">
              Strategic goals, transformed into measurable impact.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              To empower local government, companies and councils through a
              fusion of expert consultancy, rigorous audit support and
              innovative digital workflows — streamlining operations and
              delivering measurable community impact at peak compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Principles</p>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {[
              { t: "Integrity", d: "Transparent counsel, rooted in evidence and accountable to every stakeholder we serve." },
              { t: "Insight", d: "Local context fused with global standards — practical recommendations that endure." },
              { t: "Innovation", d: "Strategy delivered through digital workflows that compound in value over time." },
            ].map((p) => (
              <div key={p.t}>
                <p className="font-serif text-3xl text-gold">{p.t}.</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-12">
            <p className="max-w-xl font-serif text-2xl md:text-3xl">
              Let's build something measurable, together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground hover:bg-navy-deep"
            >
              Engage Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}