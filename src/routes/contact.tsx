import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Container";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Visit — Exotique Machines, Lucknow" },
      {
        name: "description",
        content:
          "Visit our Indira Nagar showroom in Lucknow, or send us a message. Call, WhatsApp, or book a showroom visit with Exotique Machines.",
      },
      { property: "og:title", content: "Contact Exotique Machines" },
      { property: "og:description", content: "Book a showroom visit at our Lucknow showroom." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">
          Come by, or <span className="italic text-gold">get in touch</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Visit us at our Indira Nagar showroom, or reach out — WhatsApp is often
          fastest. We'd be delighted to walk you through the collection.
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <Info icon={<MapPin className="h-4 w-4 text-gold" />} label="Showroom">
              {site.address}
            </Info>
            <Info icon={<Phone className="h-4 w-4 text-gold" />} label="Phone">
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </Info>
            <Info icon={<Mail className="h-4 w-4 text-gold" />} label="Email">
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </Info>
            <Info icon={<Clock className="h-4 w-4 text-gold" />} label="Hours">
              {site.hours}
            </Info>

            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="Exotique Machines Lucknow"
                src="https://www.google.com/maps?q=Indira+Nagar+Lucknow&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <div className="border border-border p-8 md:p-10">
            <Eyebrow>Book a visit</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl">Send us a message</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Share a few details and we'll be in touch to plan your visit.
            </p>
            <div className="mt-8">
              <EnquiryForm submitLabel="Send Message" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Info({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        {icon}
        <div className="eyebrow">{label}</div>
      </div>
      <div className="mt-2 font-serif text-xl">{children}</div>
    </div>
  );
}
