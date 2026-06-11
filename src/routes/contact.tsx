import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>Contact — Advera Consulting</title>
        <meta name="description" content="Tell us about your organisation. Advera Consulting responds with a tailored approach within two working days." />
        <meta property="og:title" content="Contact Advera Consulting" />
        <meta property="og:description" content="Begin a conversation with Advera." />
      </Helmet>
      <section className="relative bg-navy-deep text-ivory">
        <Nav variant="dark" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-10 md:pt-48 md:pb-28">
          <p className="eyebrow flex items-center gap-4 animate-fade-up">
            <span className="gold-rule" /> Contact
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl animate-fade-up delay-100">
            Let's design what's <em className="text-gold">next.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ivory/75 animate-fade-up delay-200">
            Share a few details about your organisation and the outcome you're
            seeking. We respond within two working days.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <aside className="md:col-span-4">
            <p className="eyebrow flex items-center gap-4"><span className="gold-rule" /> Direct</p>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <Mail size={18} className="mt-0.5 text-gold" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</p>
                  <p className="mt-1">hello@advera.consulting</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="mt-0.5 text-gold" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone</p>
                  <p className="mt-1">+1 (000) 000-0000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 text-gold" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Office</p>
                  <p className="mt-1">By appointment</p>
                </div>
              </li>
            </ul>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-7 md:col-start-6"
          >
            {sent ? (
              <div className="border border-gold/40 bg-secondary p-10">
                <p className="eyebrow">Received</p>
                <p className="mt-4 font-serif text-3xl">Thank you. We'll be in touch shortly.</p>
              </div>
            ) : (
              <div className="space-y-8">
                <Field label="Full name" name="name" required />
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Organisation" name="org" />
                </div>
                <Field label="Area of interest" name="topic" placeholder="e.g. ISO 9001 implementation" />
                <Field
                  label="How can we help?"
                  name="message"
                  textarea
                  required
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-5 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:bg-navy-deep"
                >
                  Send Enquiry
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label, name, type = "text", textarea = false, required = false, placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
}) {
  const base =
    "mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-0";
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}