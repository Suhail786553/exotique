import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/Container";
import { values } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Exotique Machines — Pre-Owned Luxury in Lucknow" },
      {
        name: "description",
        content:
          "Exotique Machines is a Lucknow-based curator of pre-owned luxury cars. Learn about our approach, our showroom, and the standards behind every car we sell.",
      },
      { property: "og:title", content: "About Exotique Machines" },
      { property: "og:description", content: "A curator of pre-owned luxury cars in Lucknow." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">
            A quieter, more <span className="italic text-gold">considered</span> way to buy pre-owned luxury.
          </h1>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            Exotique Machines was founded on a simple belief — that buying a
            pre-owned luxury car should feel as considered as buying a new one.
            Our Lucknow showroom in Indira Nagar is where that belief lives:
            handpicked cars, honest condition reports, and a team that treats
            every enquiry with care.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
              alt="Showroom detail"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <Eyebrow>Our Approach</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                Inspected, detailed, and presented with pride
              </h2>
              <p className="mt-6 text-sm text-muted-foreground">
                Every car we take on is inspected end-to-end, mechanically and
                cosmetically. We share what we find, price fairly, and never
                push. It's how we'd want to be treated buying a car ourselves.
              </p>
              <Link
                to="/collection"
                className="mt-8 inline-block bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
              >
                Browse the Collection
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/40 py-16 md:py-24">
        <Container>
          <Eyebrow>What we stand for</Eyebrow>
          <div className="mt-10 grid gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="font-serif text-xl text-gold-soft">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
