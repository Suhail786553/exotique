import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as fetchVehicleBySlug } from "./api-Bmggo4v0.mjs";
import { n as getCar } from "./cars-B8d5cLeT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cars._slug-DWhQwaYk.js
var $$splitComponentImporter = () => import("./cars._slug-BHww8kZZ.mjs");
var $$splitErrorComponentImporter = () => import("./cars._slug-DY_CaetE.mjs");
var $$splitNotFoundComponentImporter = () => import("./cars._slug-CWiaR39t.mjs");
var Route = createFileRoute("/cars/$slug")({
	loader: async ({ params }) => {
		const car = await fetchVehicleBySlug(params.slug) ?? getCar(params.slug);
		if (!car) throw notFound();
		return { car };
	},
	head: ({ loaderData, params }) => {
		const car = loaderData?.car;
		const title = car ? `${car.year} ${car.brand} ${car.model} — Exotique Machines` : "Car — Exotique Machines";
		const description = car ? `${car.year} ${car.brand} ${car.model} · ${car.kms} · ${car.fuel} · ${car.transmission} · ${car.owners}. Priced at ${car.price}. Available at Exotique Machines, Lucknow.` : "Pre-owned luxury car at Exotique Machines, Lucknow.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/cars/${params.slug}`
				},
				...car ? [{
					property: "og:image",
					content: car.image
				}] : []
			],
			links: [{
				rel: "canonical",
				href: `/cars/${params.slug}`
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
