import { i as site } from "./site-rnwvzzZM.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Eyebrow, t as Container } from "./Container-Bv2gqLQl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./cars._slug-DWhQwaYk.mjs";
import { t as FallbackImage } from "./FallbackImage-oANgQMoW.mjs";
import { n as Phone, u as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cars._slug-BHww8kZZ.js
var import_jsx_runtime = require_jsx_runtime();
function CarPage() {
	const { car } = Route.useLoaderData();
	const enquiry = `https://wa.me/${site.phoneRaw.replace("+", "")}?text=Hi%20Exotique%20Machines%2C%20I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(car.year + " " + car.brand + " " + car.model)}.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/collection",
				className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Collection"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallbackImage, {
					src: car.image,
					alt: `${car.brand} ${car.model}`,
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
						car.brand,
						" · ",
						car.year
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-4xl md:text-5xl",
						children: car.model
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: car.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 grid grid-cols-2 gap-6",
						children: [
							["Year", car.year],
							["Kilometres", car.kms],
							["Fuel", car.fuel],
							["Transmission", car.transmission],
							["Ownership", car.owners],
							["Brand", car.brand]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-serif text-lg",
							children: v
						})] }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 border border-border p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "Price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-serif text-4xl text-gold",
								children: car.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: enquiry,
									target: "_blank",
									rel: "noreferrer",
									className: "bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
									children: "Enquire on WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${site.phoneRaw}`,
									className: "inline-flex items-center gap-2 border border-border px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Call"]
								})]
							})
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-8 border-t border-border/40 pt-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Highlights" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-4",
					children: car.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-px w-6 bg-gold" }), h]
					}, h))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Ready when you are" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-2xl",
							children: "Book a viewing at our Lucknow showroom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "We'll have the car detailed and ready for a considered walk-through. Finance and exchange discussions welcome at the same visit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-6 inline-flex bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
							children: "Book Showroom Visit"
						})
					]
				})]
			})
		] })
	});
}
//#endregion
export { CarPage as component };
