import { i as site } from "./site-rnwvzzZM.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Eyebrow, t as Container } from "./Container-Bv2gqLQl.mjs";
import { a as Mail, i as MapPin, n as Phone, o as Clock } from "../_libs/lucide-react.mjs";
import { t as EnquiryForm } from "./EnquiryForm-BbRtUOvE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C6ZheueB.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-4 max-w-3xl font-serif text-5xl md:text-6xl",
				children: [
					"Come by, or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold",
						children: "get in touch"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-sm text-muted-foreground",
				children: "Visit us at our Indira Nagar showroom, or reach out — WhatsApp is often fastest. We'd be delighted to walk you through the collection."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }),
							label: "Showroom",
							children: site.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }),
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${site.phoneRaw}`,
								className: "hover:text-gold",
								children: site.phoneDisplay
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gold" }),
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "hover:text-gold",
								children: site.email
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-gold" }),
							label: "Hours",
							children: site.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] w-full overflow-hidden border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Exotique Machines Lucknow",
								src: "https://www.google.com/maps?q=Indira+Nagar+Lucknow&output=embed",
								className: "h-full w-full grayscale",
								loading: "lazy"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Book a visit" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-3xl",
							children: "Send us a message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Share a few details and we'll be in touch to plan your visit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
								submitLabel: "Send Message",
								source: "contact"
							})
						})
					]
				})]
			})
		] })
	});
}
function Info({ icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: label
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 font-serif text-xl",
		children
	})] });
}
//#endregion
export { Contact as component };
