import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as fetchVehicles } from "./api-Bmggo4v0.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection-8cQb88wd.js
var $$splitComponentImporter = () => import("./collection-Bld-mnJw.mjs");
var searchSchema = objectType({ brand: stringType().optional() });
var Route = createFileRoute("/collection")({
	validateSearch: searchSchema,
	loaderDeps: ({ search }) => ({ brand: search.brand }),
	loader: async ({ deps }) => {
		return { vehicles: await fetchVehicles({ brand: deps.brand }) };
	},
	head: () => ({
		meta: [
			{ title: "Collection — Pre-Owned Luxury Cars · Exotique Machines" },
			{
				name: "description",
				content: "Browse our full collection of curated pre-owned luxury cars in Lucknow — Mercedes-Benz, BMW, Porsche, Range Rover, Lexus and more."
			},
			{
				property: "og:title",
				content: "Collection — Exotique Machines"
			},
			{
				property: "og:description",
				content: "Our full collection of curated pre-owned luxury cars in Lucknow."
			},
			{
				property: "og:url",
				content: "/collection"
			}
		],
		links: [{
			rel: "canonical",
			href: "/collection"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
