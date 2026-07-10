# Exotique Machines — site clone

Rebuild the reference site as a multi-page TanStack Start app with matching content, structure, and a similar dark/gold luxury aesthetic. All content is static (no backend needed).

## Design system (src/styles.css)
- Dark background (near-black `#0b0b0c`), warm off-white foreground.
- Gold/champagne accent (`#c9a55c`) for CTAs, dividers, small labels.
- Fonts via `<link>` in `__root.tsx` head: serif display (Cormorant Garamond / Playfair) for headings + italic emphasis, sans (Inter) for body, small uppercase tracked labels.
- Generous spacing, thin gold hairline dividers, subtle image overlays.

## Routes (src/routes/)
- `__root.tsx` — sticky top nav (logo "Exotique Machines", HOME / COLLECTION / SELL·EXCHANGE / FINANCE / ABOUT / CONTACT, phone number, gold "BOOK VISIT" button), footer with brand, address (Indira Nagar, Lucknow), quick links, contact, WhatsApp/Call. Adds font `<link>` tags. Sets default site metadata.
- `index.tsx` — homepage sections:
  1. Hero with darkened car image, eyebrow "EXOTIQUE MACHINES · LUCKNOW", headline "Curated Luxury. Driven by *Trust*." (italic gold "Trust"), paragraph, three CTAs, four numbered feature chips (Curated Inventory, Finance Assistance, Exchange Support, Premium Showroom), "SCROLL" indicator.
  2. Featured Machines — grid of 6 car cards (Lexus LX, Toyota Vellfire, Porsche Cayenne, Range Rover Vogue, BMW 740Li, Mercedes S-Class) with image, year, brand, model, km/fuel/transmission/owner, price, "View Details" link.
  3. "Why Exotique Machines" — 6 value props in a grid alongside an interior detail image.
  4. Showroom Experience section with image + copy + CTA.
  5. Browse by marque — chip links to `/collection?brand=...` for 9 brands.
  6. Sell/Exchange — copy, two CTAs, 3-step process.
  7. Finance section with image + CTA.
  8. Testimonials (3 quotes).
  9. FAQ accordion (5 questions with sensible answers).
  10. Closing CTA "Your Next Luxury Car Starts Here" with Explore/Call/WhatsApp buttons.
- `collection.tsx` — full inventory grid (reuse card component; ~9-12 cars). Simple brand filter chips reading `?brand=` search param. Own head metadata.
- `cars.$slug.tsx` — car detail page. Static data map keyed by slug for the 6 featured cars: hero image, spec list, price, description, enquire CTA (WhatsApp + Contact link). notFoundComponent for unknown slugs. Dynamic head() from loader data (title, description, og:image = car image).
- `sell-exchange.tsx` — hero, 3-step process, form (name, phone, car make/model/year/km, condition, intent select sell/exchange, message) — submits to a client-side toast (no backend).
- `finance.tsx` — copy about finance partners, benefits list, enquiry form (toast on submit).
- `about.tsx` — brand story, showroom pitch, values.
- `contact.tsx` — address, phone, email, hours, WhatsApp link, embedded static map image or iframe of Indira Nagar Lucknow, contact form (toast).

## Shared components (src/components/)
- `SiteHeader.tsx`, `SiteFooter.tsx`
- `CarCard.tsx` — used on home + collection.
- `SectionLabel.tsx` — small gold uppercase eyebrow.
- `Container.tsx`
- `FaqItem.tsx` — using existing `ui/accordion`.
- `data/cars.ts` — array of car objects (slug, brand, model, year, km, fuel, transmission, owners, price, image, description, specs).
- `data/brands.ts`, `data/testimonials.ts`, `data/faqs.ts`.

## Head/SEO
- Per-route `head()` with unique title + description + og tags. Car detail sets og:image to the car photo (absolute URL from Unsplash). Update `__root.tsx` defaults away from "Lovable App".

## Out of scope
- No backend, no real form submission, no auth, no CMS. Forms show a success toast via existing `ui/sonner`.
- Not pixel-identical — a visually close, respectful reinterpretation using shadcn primitives already in the project.
