import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-background">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl">
              Exotique <span className="italic text-gold">Machines</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A curated collection of pre-owned luxury cars, presented with
              transparency and craft — from our Indira Nagar showroom in Lucknow.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collection" className="hover:text-gold">Collection</Link></li>
              <li><Link to="/sell-exchange" className="hover:text-gold">Sell / Exchange</Link></li>
              <li><Link to="/finance" className="hover:text-gold">Finance</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Visit</div>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <div>{site.address}</div>
              <div>
                <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </div>
              <div>{site.hours}</div>
            </address>
          </div>
        </div>
        <div className="hairline my-10" />
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Exotique Machines. All rights reserved.</div>
          <div className="tracking-widest uppercase">Lucknow · India</div>
        </div>
      </Container>
    </footer>
  );
}
