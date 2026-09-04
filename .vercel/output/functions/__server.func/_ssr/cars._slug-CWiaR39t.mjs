import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Container } from "./Container-Bv2gqLQl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cars._slug-CWiaR39t.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
	className: "py-32 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: "Not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 font-serif text-4xl",
			children: "This car is no longer available"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/collection",
			className: "mt-8 inline-block bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
			children: "View collection"
		})
	]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
