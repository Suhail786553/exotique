import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as fetchHomepageSettings, t as fetchFeaturedVehicles } from "./api-UO9dgbYO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-6SpfK526.js
var $$splitComponentImporter = () => import("./routes-AhkAisDC.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		const [featured, settings] = await Promise.all([fetchFeaturedVehicles(), fetchHomepageSettings()]);
		return {
			featured,
			settings
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
