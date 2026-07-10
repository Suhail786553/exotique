import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/Container";
import { EnquiryForm, Field } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/sell-exchange")({
  head: () => ({
    meta: [
      { title: "Sell or Exchange Your Luxury Car — Exotique Machines" },
      {
        name: "description",
        content:
          "Sell or exchange your luxury car with Exotique Machines, Lucknow. Fair valuations, quick inspection, and the option to step up to a curated pre-owned luxury car.",
      },
      { property: "og:title", content: "Sell or Exchange Your Luxury Car" },
      { property: "og:description", content: "Fair valuations and easy exchange with Exotique Machines." },
      { property: "og:url", content: "/sell-exchange" },
    ],
    links: [{ rel: "canonical", href: "/sell-exchange" }],
  }),
  component: SellExchange,
});

function SellExchange() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow>Sell / Exchange</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">
            Discover your car's <span className="italic text-gold">true worth</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            Share your car's details below. Our team reviews every submission and
            reaches out to schedule an inspection — after which you can choose an
            outright sale, or step up to a car from our collection.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/40 bg-card/40 py-16">
        <Container>
          <ol className="grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Share Your Car Details", d: "Submit a quick form with your car's specs and condition." },
              { n: "02", t: "Connect With Our Team", d: "We review and get in touch to plan an inspection." },
              { n: "03", t: "Sale or Exchange", d: "Choose an outright sale or step up to a car from our collection." },
            ].map((s) => (
              <li key={s.n}>
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <Eyebrow>Your car details</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Tell us about your car</h2>
          <div className="mt-10">
            <EnquiryForm
              submitLabel="Get Valuation"
              extra={
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Make" name="make" required />
                  <Field label="Model" name="model" required />
                  <Field label="Year" name="year" required />
                  <Field label="Kilometres" name="kms" required />
                  <div className="md:col-span-2">
                    <label className="eyebrow mb-2 block">Intent</label>
                    <select
                      name="intent"
                      className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                    >
                      <option>Sell outright</option>
                      <option>Exchange for a car in your collection</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
              }
            />
          </div>
        </Container>
      </section>
    </>
  );
}
