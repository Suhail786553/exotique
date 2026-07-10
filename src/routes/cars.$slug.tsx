import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { getCar } from "@/data/cars";
import { site } from "@/data/site";

export const Route = createFileRoute("/cars/$slug")({
  loader: ({ params }) => {
    const car = getCar(params.slug);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData, params }) => {
    const car = loaderData?.car;
    const title = car
      ? `${car.year} ${car.brand} ${car.model} — Exotique Machines`
      : "Car — Exotique Machines";
    const description = car
      ? `${car.year} ${car.brand} ${car.model} · ${car.kms} · ${car.fuel} · ${car.transmission} · ${car.owners}. Priced at ${car.price}. Available at Exotique Machines, Lucknow.`
      : "Pre-owned luxury car at Exotique Machines, Lucknow.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/cars/${params.slug}` },
        ...(car ? [{ property: "og:image", content: car.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/cars/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <Container className="py-32 text-center">
      <div className="eyebrow">Not found</div>
      <h1 className="mt-4 font-serif text-4xl">This car is no longer available</h1>
      <Link
        to="/collection"
        className="mt-8 inline-block bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
      >
        View collection
      </Link>
    </Container>
  ),
  errorComponent: () => (
    <Container className="py-32 text-center">
      <h1 className="font-serif text-3xl">Something went wrong.</h1>
    </Container>
  ),
  component: CarPage,
});

function CarPage() {
  const { car } = Route.useLoaderData();
  const enquiry = `https://wa.me/${site.phoneRaw.replace("+", "")}?text=Hi%20Exotique%20Machines%2C%20I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(car.year + " " + car.brand + " " + car.model)}.`;

  return (
    <section className="py-12 md:py-20">
      <Container>
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Collection
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>{car.brand} · {car.year}</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl">{car.model}</h1>
            <p className="mt-6 text-sm text-muted-foreground">{car.description}</p>

            <div className="mt-10 hairline" />

            <dl className="mt-8 grid grid-cols-2 gap-6">
              {[
                ["Year", car.year],
                ["Kilometres", car.kms],
                ["Fuel", car.fuel],
                ["Transmission", car.transmission],
                ["Ownership", car.owners],
                ["Brand", car.brand],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 font-serif text-lg">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-border p-6">
              <div className="eyebrow">Price</div>
              <div className="mt-2 font-serif text-4xl text-gold">{car.price}</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={enquiry}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
                >
                  Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-gold"
                >
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-border/40 pt-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Highlights</Eyebrow>
            <ul className="mt-6 space-y-4">
              {car.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-px w-6 bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-8">
            <Eyebrow>Ready when you are</Eyebrow>
            <h3 className="mt-4 font-serif text-2xl">
              Book a viewing at our Lucknow showroom
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We'll have the car detailed and ready for a considered walk-through.
              Finance and exchange discussions welcome at the same visit.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
            >
              Book Showroom Visit
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
