//#region node_modules/.nitro/vite/services/ssr/assets/api-Bmggo4v0.js
var API_BASE_URL = "http://localhost:5000";
async function apiFetch(path) {
	try {
		const response = await fetch(`${API_BASE_URL}/api${path}`);
		if (!response.ok) return null;
		return await response.json();
	} catch (error) {
		console.error(`[api] failed to fetch ${path}:`, error);
		return null;
	}
}
/** Maps a backend Vehicle document to the existing `Car` shape used by the site's UI components. */
function vehicleToCar(vehicle) {
	return {
		slug: vehicle.slug,
		brand: vehicle.brand,
		model: vehicle.model,
		year: vehicle.year,
		kms: vehicle.mileage,
		fuel: vehicle.fuelType,
		transmission: vehicle.transmission,
		owners: vehicle.ownership,
		price: vehicle.priceOnRequest ? "Price on Request" : vehicle.price,
		image: vehicle.primaryImage || vehicle.images[0] || "",
		description: vehicle.description,
		highlights: vehicle.highlights
	};
}
/** Returns `null` when the backend is unreachable (so callers can fall back to static data), or an array (possibly empty) on a successful request. */
async function fetchFeaturedVehicles() {
	const data = await apiFetch("/vehicles/featured");
	return data ? data.vehicles.map(vehicleToCar) : null;
}
async function fetchVehicles(params) {
	const data = await apiFetch(`/vehicles${params?.brand ? `?brand=${encodeURIComponent(params.brand)}` : ""}`);
	return data ? data.vehicles.map(vehicleToCar) : null;
}
async function fetchVehicleBySlug(slug) {
	const data = await apiFetch(`/vehicles/${encodeURIComponent(slug)}`);
	return data ? vehicleToCar(data.vehicle) : null;
}
async function fetchHomepageSettings() {
	return (await apiFetch("/homepage-settings"))?.settings ?? null;
}
async function submitContact(data) {
	const response = await fetch(`${API_BASE_URL}/api/contact`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	});
	if (!response.ok) {
		const error = await response.json().catch(() => ({ message: "Failed to send message" }));
		throw new Error(error.message || "Failed to send message");
	}
	return response.json();
}
//#endregion
export { submitContact as a, fetchVehicles as i, fetchHomepageSettings as n, fetchVehicleBySlug as r, fetchFeaturedVehicles as t };
