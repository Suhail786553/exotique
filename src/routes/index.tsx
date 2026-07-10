import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { CarCard } from "@/components/site/CarCard";
import { cars } from "@/data/cars";
import { brands, faqs, highlights, site, testimonials, values } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = cars.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 min-h-[100svh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/20131971/pexels-photo-20131971.jpeg"
          alt="Luxury car in dark showroom"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
          <div className="max-w-2xl">
            <Eyebrow>Exotique Machines · {site.city}</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">
              Curated Luxury.
              <br />
              <span className="italic">Driven by </span>
              <span className="italic text-gold">Trust.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/80">
              Explore a handpicked collection of premium pre-owned luxury cars at
              Exotique Machines. From refined sedans to commanding SUVs, every
              vehicle is presented with personalised assistance, finance support,
              and a premium showroom experience in Lucknow.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/collection"
                className="inline-flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
              >
                Explore Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold"
              >
                Book Showroom Visit
              </Link>
              <Link
                to="/sell-exchange"
                className="inline-flex items-center gap-3 border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold"
              >
                Sell / Exchange Your Car
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border/50 pt-8 md:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.n}>
                <div className="font-serif text-2xl text-gold">{h.n}</div>
                <div className="mt-2 text-sm text-foreground/80">{h.label}</div>
              </div>
            ))}
          </div>
        </Container>

        <div className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
          Scroll ↓
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>The Collection</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Featured Machines
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground">
                A handpicked selection of pre-owned luxury cars currently available
                at our Lucknow showroom — each detailed, inspected, and presented
                with care.
              </p>
            </div>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold hover:opacity-80"
            >
              View Full Collection <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CarCard key={c.slug} car={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section className="border-y border-border/40 bg-card/40 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>Why Exotique Machines</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                A Refined Way to Buy Pre-Owned Luxury
              </h2>
              <p className="mt-6 text-sm text-muted-foreground">
                We approach pre-owned luxury the way a maison approaches its craft
                — with attention to detail, transparency, and a quiet sense of
                pride. Here's what sets us apart.
              </p>
              <img
                src="https://images.pexels.com/photos/27692895/pexels-photo-27692895.jpeg"
                alt="Luxury car interior detail"
                className="mt-10 aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid gap-px bg-border/50 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="bg-background p-8">
                  <h3 className="font-serif text-xl text-gold-soft">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SHOWROOM */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
              alt="Exotique Machines Lucknow showroom"
              className="aspect-[5/4] w-full object-cover"
            />
            <div>
              <Eyebrow>The Showroom Experience</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Luxury Buying, <span className="italic">Reimagined</span> for the Pre-Owned Market
              </h2>
              <p className="mt-6 text-sm text-muted-foreground">
                Step into our Indira Nagar showroom for an unhurried, considered
                look at our current collection. Every car is detailed and
                presented at its best — and our team is ready to guide you
                through specs, finance, and delivery whenever you're ready.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
              >
                Visit Our Showroom <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* BRANDS */}
      <section className="border-y border-border/40 py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Shop by Brand</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">Browse by marque</h2>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {brands.map((b) => (
              <Link
                key={b}
                to="/collection"
                search={{ brand: b }}
                className="border border-border px-5 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-gold hover:text-gold"
              >
                {b}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SELL / EXCHANGE */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>Sell / Exchange</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Looking to Sell or Exchange Your Luxury Car?
              </h2>
              <p className="mt-6 text-sm text-muted-foreground">
                Share your car's details and our team will help you discover its
                real worth — whether you're looking to sell outright or step up
                to your next luxury car from our curated collection.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/sell-exchange"
                  className="bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
                >
                  Sell Your Car
                </Link>
                <Link
                  to="/sell-exchange"
                  className="border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold"
                >
                  Exchange Your Car
                </Link>
              </div>
            </div>
            <ol className="space-y-6">
              {[
                { n: "01", t: "Share Your Car Details", d: "Submit a quick form with your car's specs and condition." },
                { n: "02", t: "Connect With Our Team", d: "We review and get in touch to plan an inspection." },
                { n: "03", t: "Explore Sale or Exchange", d: "Choose between an outright sale or upgrading to a new car from our collection." },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border/50 pt-6">
                  <div className="font-serif text-3xl text-gold">{s.n}</div>
                  <div>
                    <h3 className="font-serif text-2xl">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* FINANCE */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <img
          src="https://images.pexels.com/photos/9792967/pexels-photo-9792967.jpeg"
          alt="Luxury car interior detail"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow>Finance</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Finance Assistance for Your Next Luxury Car
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              We work with reputed financing partners to help you structure a
              finance plan that complements your lifestyle — quick approvals,
              competitive rates, and discreet handling.
            </p>
            <Link
              to="/finance"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
            >
              Get Finance Assistance <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <Container>
          <Eyebrow>Owners</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Delivered With Confidence</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border border-border p-8">
                <div className="font-serif text-5xl leading-none text-gold">"</div>
                <blockquote className="mt-4 font-serif text-xl leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {t.name} · {t.city} · {t.car}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/40 py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Frequently Asked
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-xl hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-border/40 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-xs tracking-[0.22em] text-gold">
              EM
            </span>
            <div className="eyebrow mt-6">Begin</div>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Your Next Luxury Car <span className="italic text-gold">Starts Here</span>
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Step into our Lucknow showroom or speak to our team — we'll help
              you find the right car, on your terms.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/collection"
                className="bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
              >
                Explore Collection
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold"
              >
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
