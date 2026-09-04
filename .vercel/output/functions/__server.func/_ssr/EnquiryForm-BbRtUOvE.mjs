import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as submitContact } from "./api-Bmggo4v0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EnquiryForm-BbRtUOvE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CORE_FIELDS = [
	"name",
	"phone",
	"email",
	"city",
	"message"
];
function EnquiryForm({ submitLabel = "Send Enquiry", source = "general", extra }) {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const form = e.currentTarget;
			const formData = new FormData(form);
			const name = String(formData.get("name") ?? "");
			const phone = String(formData.get("phone") ?? "");
			const email = String(formData.get("email") ?? "");
			const city = String(formData.get("city") ?? "");
			const message = String(formData.get("message") ?? "");
			const extraData = {};
			formData.forEach((value, key) => {
				if (!CORE_FIELDS.includes(key) && typeof value === "string") extraData[key] = value;
			});
			await submitContact({
				name,
				phone,
				email,
				city,
				message,
				source,
				extra: extraData
			});
			form.reset();
			toast.success("Thanks — we'll be in touch shortly.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Your name",
						name: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "City",
						name: "city"
					})
				]
			}),
			extra,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "eyebrow mb-2 block",
				children: "Message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name: "message",
				rows: 4,
				className: "w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: loading,
				className: "bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
				children: loading ? "Sending…" : submitLabel
			})
		]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "eyebrow mb-2 block",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		name,
		required,
		className: "w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
	})] });
}
//#endregion
export { Field as n, EnquiryForm as t };
