import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/sell-exchange", label: "Sell / Exchange" },
  { to: "/finance", label: "Finance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-[10px] tracking-[0.2em] text-gold">
            EM
          </span>
          <span className="font-serif text-xl">
            Exotique <span className="italic text-gold">Machines</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-[11px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5 text-gold" /> {site.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="bg-gold px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Visit
          </Link>
        </div>

        <button
          className="lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[11px] uppercase tracking-[0.22em] text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-gold px-5 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
            >
              Book Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
