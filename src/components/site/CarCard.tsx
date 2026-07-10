import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Car } from "@/data/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      to="/cars/$slug"
      params={{ slug: car.slug }}
      className="group block border border-border bg-card transition-colors hover:border-gold/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-baseline justify-between text-xs">
          <span className="text-muted-foreground">{car.year}</span>
          <span className="eyebrow">{car.brand}</span>
        </div>
        <h3 className="font-serif text-2xl leading-tight">{car.model}</h3>
        <p className="text-xs text-muted-foreground">
          {car.kms} · {car.fuel} · {car.transmission} · {car.owners}
        </p>
        <div className="hairline" />
        <div className="flex items-end justify-between pt-1">
          <div>
            <div className="eyebrow mb-1">Price</div>
            <div className="font-serif text-2xl text-gold">{car.price}</div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-gold">
            View <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
