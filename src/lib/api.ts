import type { Car } from "@/data/cars";

export const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export type ApiCollection = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
  mobileImage: string;
  ctaText: string;
  ctaLink: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  vehicleCount?: number;
};

export type ApiVehicle = {
  _id: string;
  title: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  priceOnRequest: boolean;
  mileage: string;
  fuelType: string;
  transmission: string;
  ownership: string;
  description: string;
  shortDescription: string;
  collectionId: ApiCollection | string | null;
  images: string[];
  primaryImage: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  specifications: { label: string; value: string }[];
  highlights: string[];
};

export type HomepageSettings = {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroCtaText: string;
  heroCtaUrl: string;
  featuredSectionTitle: string;
  featuredSectionDescription: string;
  collectionSectionTitle: string;
  collectionSectionDescription: string;
};

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api${path}`);
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch (error) {
    console.error(`[api] failed to fetch ${path}:`, error);
    return null;
  }
}

/** Maps a backend Vehicle document to the existing `Car` shape used by the site's UI components. */
export function vehicleToCar(vehicle: ApiVehicle): Car {
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
    highlights: vehicle.highlights,
  };
}

/** Returns `null` when the backend is unreachable (so callers can fall back to static data), or an array (possibly empty) on a successful request. */
export async function fetchFeaturedVehicles(): Promise<Car[] | null> {
  const data = await apiFetch<{ vehicles: ApiVehicle[] }>("/vehicles/featured");
  return data ? data.vehicles.map(vehicleToCar) : null;
}

export async function fetchVehicles(params?: { brand?: string }): Promise<Car[] | null> {
  const query = params?.brand ? `?brand=${encodeURIComponent(params.brand)}` : "";
  const data = await apiFetch<{ vehicles: ApiVehicle[] }>(`/vehicles${query}`);
  return data ? data.vehicles.map(vehicleToCar) : null;
}

export async function fetchVehicleBySlug(slug: string): Promise<Car | null> {
  const data = await apiFetch<{ vehicle: ApiVehicle }>(`/vehicles/${encodeURIComponent(slug)}`);
  return data ? vehicleToCar(data.vehicle) : null;
}

export async function fetchCollections(): Promise<ApiCollection[]> {
  const data = await apiFetch<{ collections: ApiCollection[] }>("/collections");
  return data?.collections ?? [];
}

export async function fetchHomepageSettings(): Promise<HomepageSettings | null> {
  const data = await apiFetch<{ settings: HomepageSettings }>("/homepage-settings");
  return data?.settings ?? null;
}

export type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  city?: string;
  message?: string;
  source?: string;
  extra?: Record<string, unknown>;
};

export async function submitContact(data: ContactSubmission): Promise<{ message: string }> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Failed to send message" }));
    throw new Error(error.message || "Failed to send message");
  }
  return response.json();
}
