export type Car = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  kms: string;
  fuel: string;
  transmission: string;
  owners: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
};

export const cars: Car[] = [
  {
    slug: "lexus-lx-500d-2022",
    brand: "Lexus",
    model: "LX 500d Ultra Luxury",
    year: 2022,
    kms: "14,500 km",
    fuel: "Diesel",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 2.15 Cr",
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=1600&q=80",
    description:
      "A commanding flagship SUV finished in showroom condition — the Lexus LX 500d Ultra Luxury pairs unshakable off-road capability with a rear cabin engineered for chauffeur-driven comfort.",
    highlights: [
      "Executive rear seating with recline & massage",
      "Mark Levinson 25-speaker audio",
      "Full service history, single owner",
      "Comprehensive inspection & detailing",
    ],
  },
  {
    slug: "toyota-vellfire-executive-2022",
    brand: "Toyota",
    model: "Vellfire Executive Lounge Hybrid",
    year: 2022,
    kms: "19,500 km",
    fuel: "Hybrid",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 92.00 L",
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=1600&q=80",
    description:
      "The definitive luxury MPV. Second-row captain lounges, refined hybrid drivetrain, and an interior best appreciated from the back seat.",
    highlights: [
      "Executive Lounge captain seats",
      "Twin sunroof & ambient lighting",
      "Hybrid drivetrain — refined and efficient",
      "Meticulously maintained, single owner",
    ],
  },
  {
    slug: "porsche-cayenne-2021",
    brand: "Porsche",
    model: "Cayenne Coupe Platinum",
    year: 2021,
    kms: "24,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 1.12 Cr",
    image: "https://images.unsplash.com/photo-1614162883005-ddd341faaf9c?w=1600&q=80",
    description:
      "The Cayenne Coupe Platinum brings sports-car composure to the SUV silhouette — sharp, quick, and unmistakably Porsche.",
    highlights: [
      "Platinum Edition trim",
      "Sport Chrono & adaptive air suspension",
      "BOSE surround sound",
      "Fully inspected, service records available",
    ],
  },
  {
    slug: "range-rover-vogue-2022",
    brand: "Land Rover",
    model: "Range Rover Vogue LWB",
    year: 2022,
    kms: "21,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 1.85 Cr",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    description:
      "The long-wheelbase Range Rover Vogue — a hushed, effortless cabin over a chassis that goes anywhere with quiet authority.",
    highlights: [
      "Long-wheelbase rear lounge",
      "Meridian signature audio",
      "Terrain response & air suspension",
      "One-owner, dealer-serviced",
    ],
  },
  {
    slug: "bmw-7-series-740li-2021",
    brand: "BMW",
    model: "7 Series 740Li M-Sport",
    year: 2021,
    kms: "32,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 78.00 L",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80",
    description:
      "The 740Li M-Sport — a boardroom on wheels, sharpened by M-Sport styling and a silken inline-six.",
    highlights: [
      "Executive Lounge rear seating",
      "Harman Kardon audio",
      "Comfort access & gesture control",
      "Well-kept, comprehensive records",
    ],
  },
  {
    slug: "mercedes-benz-s-class-s450-2022",
    brand: "Mercedes-Benz",
    model: "S-Class S450 4MATIC",
    year: 2022,
    kms: "18,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 1.25 Cr",
    image: "https://images.unsplash.com/photo-1622200294772-c3b1cd722352?w=1600&q=80",
    description:
      "The current-generation S-Class in S450 4MATIC guise — the benchmark for luxury sedans, delivered with our full inspection and detailing.",
    highlights: [
      "MBUX with rear entertainment",
      "Burmester 4D surround sound",
      "Rear axle steering",
      "Immaculate one-owner example",
    ],
  },
  {
    slug: "audi-a8l-2021",
    brand: "Audi",
    model: "A8 L 55 TFSI Technology",
    year: 2021,
    kms: "28,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 88.00 L",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    description:
      "Understated presence, exceptional technology. The A8 L Technology trim is the connoisseur's choice in this segment.",
    highlights: [
      "Rear executive package",
      "Matrix LED headlights",
      "Bang & Olufsen 3D audio",
      "Full Audi service history",
    ],
  },
  {
    slug: "jaguar-f-pace-2021",
    brand: "Jaguar",
    model: "F-Pace R-Dynamic S",
    year: 2021,
    kms: "26,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 62.00 L",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80",
    description:
      "The F-Pace R-Dynamic combines Jaguar's design language with everyday usability. Sharp, expressive, and beautifully maintained.",
    highlights: [
      "R-Dynamic exterior styling",
      "Meridian sound system",
      "Panoramic sunroof",
      "Single owner, dealer maintained",
    ],
  },
  {
    slug: "volvo-xc90-2022",
    brand: "Volvo",
    model: "XC90 T8 Recharge Inscription",
    year: 2022,
    kms: "17,000 km",
    fuel: "Hybrid",
    transmission: "Automatic",
    owners: "1st Owner",
    price: "₹ 82.00 L",
    image: "https://images.unsplash.com/photo-1614162883005-ddd341faaf9c?w=1600&q=80",
    description:
      "Scandinavian restraint meets plug-in hybrid efficiency. The XC90 Inscription is quietly one of the most complete luxury SUVs on sale.",
    highlights: [
      "T8 plug-in hybrid drivetrain",
      "Nappa leather Inscription trim",
      "Bowers & Wilkins audio",
      "Full service records",
    ],
  },
];

export const getCar = (slug: string) => cars.find((c) => c.slug === slug);
