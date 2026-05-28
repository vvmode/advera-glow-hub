import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/components/site/data";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>Advera Consulting — Strategy, Compliance & Digital Innovation</title>
        <meta name="description" content="Advera bridges expert strategy and digital execution — ISO consultancy, strategic management, risk & compliance and capacity building for councils, corporations and institutions." />
        <meta property="og:title" content="Advera Consulting" />
        <meta property="og:description" content="Bridging expert strategy and digital execution for transparent, high-performing organisations." />
      </Helmet>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep text-ivory">
        <img
          src={heroImg}
          alt="Architectural columns at dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
        <Nav variant="dark" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pt-40 pb-16 md:px-10">
          <div className="max-w-4xl animate-fade-up">
            <p className="eyebrow mb-8 flex items-center gap-4">
              <span className="gold-rule" /> Advera Consulting
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Where strategic clarity meets <em className="text-gold">digital execution.</em>
            </h1>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
              We empower councils, corporations and institutions to lead with
              confidence — aligning development with national standards and
              automating complex workflows so compliance becomes a competitive
              advantage.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs font-medium tracking-[0.22em] uppercase text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Explore Services
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="text-xs tracking-[0.22em] uppercase text-ivory/80 underline-offset-8 hover:text-gold hover:underline"
              >
                Begin a Conversation
              </Link>
            </div>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-ivory/15 bg-ivory/10 md:grid-cols-4">
            {[
              ["05", "Service Pillars"],
              ["ISO", "9001 : 2015"],
              ["100%", "Tailored Engagements"],
              ["End-to-End", "Strategy → Execution"],
            ].map(([n, l]) => (
              <div key={l} className="bg-navy-deep p-6">
                <p className="font-serif text-2xl text-gold md:text-3xl">{n}</p>
                <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-ivory/60">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-border bg-background py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> About</p>
            <h2 className="mt-8 font-serif text-4xl leading-tight md:text-5xl">
              We bridge the distance between <em className="text-gold">expert strategy</em> and the systems that bring it to life.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <img
              src={aboutImg}
              alt="Sophisticated boardroom interior"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              By aligning development with national standards and automating
              complex workflows, we transform compliance from a hurdle into a
              competitive advantage — ensuring absolute clarity and operational
              agility for every organisation we serve.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-primary hover:text-gold"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="bg-navy-deep py-28 text-ivory md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Our Compass</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-ivory/10 bg-ivory/10 md:grid-cols-2">
            <div className="bg-navy-deep p-10 md:p-14">
              <p className="text-xs tracking-[0.3em] uppercase text-gold">Vision</p>
              <p className="mt-8 font-serif text-2xl leading-snug md:text-[2rem]">
                Building a more <em className="text-gold">transparent, high-performing world</em> by bridging the gap between strategic consulting and digital transformation for every organisation we serve.
              </p>
            </div>
            <div className="bg-navy-deep p-10 md:p-14">
              <p className="text-xs tracking-[0.3em] uppercase text-gold">Mission</p>
              <p className="mt-8 font-serif text-2xl leading-snug md:text-[2rem]">
                To empower companies, councils and institutions through expert development planning, rigorous audit support and innovative digital workflows — transforming strategic goals into <em className="text-gold">measurable impact.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Services</p>
              <h2 className="mt-8 font-serif text-4xl leading-tight md:text-5xl">
                Five pillars. One coherent practice.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-primary hover:text-gold"
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 border-t border-border">
            {services.map((s) => (
              <Link
                key={s.id}
                to={`/services#${s.id}`}
                className="group grid grid-cols-12 items-baseline gap-6 border-b border-border py-10 transition-colors hover:bg-secondary/60"
              >
                <span className="col-span-2 font-serif text-2xl text-gold md:col-span-1">{s.number}</span>
                <div className="col-span-10 md:col-span-7">
                  <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground">{s.short}</p>
                </div>
                <div className="col-span-12 flex items-center justify-end md:col-span-4">
                  <ArrowUpRight
                    size={28}
                    className="text-foreground/40 transition-all group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Begin</p>
              <h2 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
                Ready to turn complexity into <em className="text-gold">clarity?</em>
              </h2>
              <p className="mt-6 max-w-xl text-base text-muted-foreground">
                Tell us about your organisation. We'll respond with a tailored
                approach within two working days.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary px-8 py-5 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:bg-navy-deep"
              >
                Start a Project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
