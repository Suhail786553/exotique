import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Eyebrow, t as Container } from "./Container-Bv2gqLQl.mjs";
import { n as Field, t as EnquiryForm } from "./EnquiryForm-BbRtUOvE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sell-exchange-BxV_PmWf.js
var import_jsx_runtime = require_jsx_runtime();
function SellExchange() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sell / Exchange" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 max-w-3xl font-serif text-5xl md:text-6xl",
					children: [
						"Discover your car's ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "true worth"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-sm text-muted-foreground",
					children: "Share your car's details below. Our team reviews every submission and reaches out to schedule an inspection — after which you can choose an outright sale, or step up to a car from our collection."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/40 bg-card/40 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-10 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Share Your Car Details",
						d: "Submit a quick form with your car's specs and condition."
					},
					{
						n: "02",
						t: "Connect With Our Team",
						d: "We review and get in touch to plan an inspection."
					},
					{
						n: "03",
						t: "Sale or Exchange",
						d: "Choose an outright sale or step up to a car from our collection."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-3xl text-gold",
						children: s.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-serif text-2xl",
						children: s.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: s.d
					})
				] }, s.n))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Your car details" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-3xl md:text-4xl",
						children: "Tell us about your car"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
							submitLabel: "Get Valuation",
							source: "sell-exchange",
							extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Make",
										name: "make",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Model",
										name: "model",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Year",
										name: "year",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Kilometres",
										name: "kms",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "md:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "eyebrow mb-2 block",
											children: "Intent"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "intent",
											className: "w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sell outright" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Exchange for a car in your collection" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not sure yet" })
											]
										})]
									})
								]
							})
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { SellExchange as component };
