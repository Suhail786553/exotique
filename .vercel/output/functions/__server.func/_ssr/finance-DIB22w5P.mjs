import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Eyebrow, t as Container } from "./Container-Bv2gqLQl.mjs";
import { t as EnquiryForm } from "./EnquiryForm-BbRtUOvE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finance-DIB22w5P.js
var import_jsx_runtime = require_jsx_runtime();
function Finance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Finance" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 max-w-3xl font-serif text-5xl md:text-6xl",
					children: [
						"Finance ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "tailored"
						}),
						" to your next luxury car."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-sm text-muted-foreground",
					children: "We work with reputed banks and NBFCs to help you structure a plan that complements your lifestyle — quick approvals, competitive rates, and discreet handling from start to finish."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/40 bg-card/40 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					{
						t: "Trusted Partners",
						d: "Established banks and NBFCs experienced with luxury vehicles."
					},
					{
						t: "Competitive Rates",
						d: "Attractive interest rates and flexible tenures on eligible cars."
					},
					{
						t: "Discreet Handling",
						d: "Documentation and approvals managed privately and professionally."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-background p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl text-gold-soft",
						children: v.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: v.d
					})]
				}, v.t))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Enquire" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-3xl md:text-4xl",
						children: "Request finance assistance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Share your details and the car you're interested in — our team will reach out with next steps."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
							submitLabel: "Request Assistance",
							source: "finance"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Finance as component };
