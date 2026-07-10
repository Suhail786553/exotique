import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Container, Eyebrow } from "@/components/site/Container";
import { CarCard } from "@/components/site/CarCard";
import { cars } from "@/data/cars";
import { brands } from "@/data/site";

const searchSchema = z.object({
  brand: z.string().optional(),
});

export const Route = createFileRoute("/collection")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Collection — Pre-Owned Luxury Cars · Exotique Machines" },
      {
        name: "description",
        content:
          "Browse our full collection of curated pre-owned luxury cars in Lucknow — Mercedes-Benz, BMW, Porsche, Range Rover, Lexus and more.",
      },
      { property: "og:title", content: "Collection — Exotique Machines" },
      {
        property: "og:description",
        content: "Our full collection of curated pre-owned luxury cars in Lucknow.",
      },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: Collection,
});

function Collection() {
  const { brand } = Route.useSearch();
  const filtered = brand ? cars.filter((c) => c.brand === brand) : cars;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Eyebrow>The Collection</Eyebrow>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl">
          Available <span className="italic text-gold">Now</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Every car in our collection has been hand-selected, inspected, and
          detailed. Filter by brand or browse the full inventory below.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          <Link
            to="/collection"
            search={{}}
            className={`border px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
              !brand ? "border-gold text-gold" : "border-border hover:border-gold"
            }`}
          >
            All
          </Link>
          {brands.map((b) => (
            <Link
              key={b}
              to="/collection"
              search={{ brand: b }}
              className={`border px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
                brand === b ? "border-gold text-gold" : "border-border hover:border-gold"
              }`}
            >
              {b}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CarCard key={c.slug} car={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            No cars currently listed for {brand}. Please check back soon or{" "}
            <Link to="/contact" className="text-gold">
              contact us
            </Link>
            .
          </p>
        )}
      </Container>
    </section>
  );
}
