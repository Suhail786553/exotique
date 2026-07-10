import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/Container";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Finance Assistance for Luxury Cars — Exotique Machines" },
      {
        name: "description",
        content:
          "Finance assistance for pre-owned luxury cars in Lucknow. Competitive rates, quick approvals, and discreet handling through trusted partners.",
      },
      { property: "og:title", content: "Finance Assistance — Exotique Machines" },
      { property: "og:description", content: "Tailored finance for pre-owned luxury cars." },
      { property: "og:url", content: "/finance" },
    ],
    links: [{ rel: "canonical", href: "/finance" }],
  }),
  component: Finance,
});

function Finance() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow>Finance</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">
            Finance <span className="italic text-gold">tailored</span> to your next luxury car.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            We work with reputed banks and NBFCs to help you structure a plan
            that complements your lifestyle — quick approvals, competitive rates,
            and discreet handling from start to finish.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/40 bg-card/40 py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { t: "Trusted Partners", d: "Established banks and NBFCs experienced with luxury vehicles." },
              { t: "Competitive Rates", d: "Attractive interest rates and flexible tenures on eligible cars." },
              { t: "Discreet Handling", d: "Documentation and approvals managed privately and professionally." },
            ].map((v) => (
              <div key={v.t} className="border border-border bg-background p-8">
                <h3 className="font-serif text-2xl text-gold-soft">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <Eyebrow>Enquire</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Request finance assistance
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Share your details and the car you're interested in — our team will
            reach out with next steps.
          </p>
          <div className="mt-10">
            <EnquiryForm submitLabel="Request Assistance" />
          </div>
        </Container>
      </section>
    </>
  );
}
