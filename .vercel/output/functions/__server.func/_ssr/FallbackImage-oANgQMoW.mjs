import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FallbackImage-oANgQMoW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231a1712'/%3E%3Cpath d='M120 190l40-50 30 35 45-60 65 75H120z' fill='%233a352c'/%3E%3Ccircle cx='150' cy='120' r='18' fill='%233a352c'/%3E%3C/svg%3E";
function FallbackImage({ src, alt, className, ...rest }) {
	const [errored, setErrored] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: errored || !src ? PLACEHOLDER : src,
		alt,
		className,
		onError: () => setErrored(true),
		...rest
	});
}
//#endregion
export { FallbackImage as t };
