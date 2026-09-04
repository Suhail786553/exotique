import { t as brands } from "./site-rnwvzzZM.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Eyebrow, t as Container } from "./Container-Bv2gqLQl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cars } from "./cars-B8d5cLeT.mjs";
import { t as Route } from "./collection-8cQb88wd.mjs";
import { t as CarCard } from "./CarCard-Bp202Vq8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection-Bld-mnJw.js
var import_jsx_runtime = require_jsx_runtime();
function Collection() {
	const { brand } = Route.useSearch();
	const { vehicles } = Route.useLoaderData();
	const filtered = vehicles ?? (brand ? cars.filter((c) => c.brand === brand) : cars);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Collection" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-4 font-serif text-5xl md:text-6xl",
				children: ["Available ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "Now"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-sm text-muted-foreground",
				children: "Every car in our collection has been hand-selected, inspected, and detailed. Filter by brand or browse the full inventory below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collection",
					search: {},
					className: `border px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${!brand ? "border-gold text-gold" : "border-border hover:border-gold"}`,
					children: "All"
				}), brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collection",
					search: { brand: b },
					className: `border px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${brand === b ? "border-gold text-gold" : "border-border hover:border-gold"}`,
					children: b
				}, b))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCard, { car: c }, c.slug))
			}),
			filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-16 text-center text-sm text-muted-foreground",
				children: [
					"No cars currently listed for ",
					brand,
					". Please check back soon or",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-gold",
						children: "contact us"
					}),
					"."
				]
			})
		] })
	});
}
//#endregion
export { Collection as component };
