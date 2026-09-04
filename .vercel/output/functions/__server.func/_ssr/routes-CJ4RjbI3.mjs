import { r as __toESM } from "../_runtime.mjs";
import { a as testimonials, i as site, n as faqs, o as values, r as highlights, t as brands } from "./site-rnwvzzZM.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, n as Header, r as Item, s as require_react, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Eyebrow, r as cn, t as Container } from "./Container-Bv2gqLQl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cars } from "./cars-B8d5cLeT.mjs";
import { c as ArrowUpRight, l as ArrowRight, n as Phone, s as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as CarCard } from "./CarCard-Bp202Vq8.mjs";
import { t as Route } from "./routes-Bg65QgO5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJ4RjbI3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Home() {
	const { featured: apiFeatured, settings } = Route.useLoaderData();
	const featured = apiFeatured ?? cars.slice(0, 6);
	const heroImage = settings?.heroImage || "https://images.pexels.com/photos/20131971/pexels-photo-20131971.jpeg";
	const heroSubtitle = settings?.heroSubtitle || "Explore a handpicked collection of premium pre-owned luxury cars at Exotique Machines. From refined sedans to commanding SUVs, every vehicle is presented with personalised assistance, finance support, and a premium showroom experience in Lucknow.";
	const featuredSectionTitle = settings?.featuredSectionTitle || "Featured Machines";
	const featuredSectionDescription = settings?.featuredSectionDescription || "A handpicked selection of pre-owned luxury cars currently available at our Lucknow showroom — each detailed, inspected, and presented with care.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative -mt-20 min-h-[100svh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: heroImage,
					alt: "Luxury car in dark showroom",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["Exotique Machines · ", site.city] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-serif text-5xl leading-[1.05] md:text-7xl",
								children: [
									"Curated Luxury.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic",
										children: "Driven by "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "Trust."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base text-foreground/80",
								children: heroSubtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: settings?.heroCtaUrl || "/collection",
										className: "inline-flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
										children: [
											settings?.heroCtaText || "Explore Collection",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-3 border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold",
										children: "Book Showroom Visit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sell-exchange",
										className: "inline-flex items-center gap-3 border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold",
										children: "Sell / Exchange Your Car"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border/50 pt-8 md:grid-cols-4",
						children: highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-2xl text-gold",
							children: h.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-foreground/80",
							children: h.label
						})] }, h.n))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block",
					children: "Scroll ↓"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Collection" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl",
						children: featuredSectionTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm text-muted-foreground",
						children: featuredSectionDescription
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/collection",
					className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold hover:opacity-80",
					children: ["View Full Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: featured.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCard, { car: c }, c.slug))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/40 bg-card/40 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why Exotique Machines" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl",
						children: "A Refined Way to Buy Pre-Owned Luxury"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "We approach pre-owned luxury the way a maison approaches its craft — with attention to detail, transparency, and a quiet sense of pride. Here's what sets us apart."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://images.pexels.com/photos/27692895/pexels-photo-27692895.jpeg",
						alt: "Luxury car interior detail",
						className: "mt-10 aspect-[4/3] w-full object-cover"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px bg-border/50 sm:grid-cols-2",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-gold-soft",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: v.body
						})]
					}, v.title))
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
					alt: "Exotique Machines Lucknow showroom",
					className: "aspect-[5/4] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Showroom Experience" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl",
						children: [
							"Luxury Buying, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "Reimagined"
							}),
							" for the Pre-Owned Market"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Step into our Indira Nagar showroom for an unhurried, considered look at our current collection. Every car is detailed and presented at its best — and our team is ready to guide you through specs, finance, and delivery whenever you're ready."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
						children: ["Visit Our Showroom ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] })]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Shop by Brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-serif text-3xl md:text-4xl",
					children: "Browse by marque"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collection",
					search: { brand: b },
					className: "border border-border px-5 py-3 text-[11px] uppercase tracking-[0.22em] hover:border-gold hover:text-gold",
					children: b
				}, b))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sell / Exchange" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl",
						children: "Looking to Sell or Exchange Your Luxury Car?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Share your car's details and our team will help you discover its real worth — whether you're looking to sell outright or step up to your next luxury car from our curated collection."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sell-exchange",
							className: "bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
							children: "Sell Your Car"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sell-exchange",
							className: "border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold",
							children: "Exchange Your Car"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-6",
					children: [
						{
							n: "01",
							t: "Share Your Car Details",
							d: "Submit a quick form with your car's specs and condition."
						},
						{
							n: "02",
							t: "Connect With Our Team",
							d: "We review and get in touch to plan an inspection."
						},
						{
							n: "03",
							t: "Explore Sale or Exchange",
							d: "Choose between an outright sale or upgrading to a new car from our collection."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-6 border-t border-border/50 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-3xl text-gold",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl",
							children: s.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.d
						})] })]
					}, s.n))
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.pexels.com/photos/9792967/pexels-photo-9792967.jpeg",
					alt: "Luxury car interior detail",
					className: "absolute inset-0 h-full w-full object-cover opacity-25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Finance" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-4xl md:text-5xl",
								children: "Finance Assistance for Your Next Luxury Car"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted-foreground",
								children: "We work with reputed financing partners to help you structure a finance plan that complements your lifestyle — quick approvals, competitive rates, and discreet handling."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/finance",
								className: "mt-8 inline-flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
								children: ["Get Finance Assistance ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Owners" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-serif text-4xl md:text-5xl",
					children: "Delivered With Confidence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-5xl leading-none text-gold",
								children: "\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-4 font-serif text-xl leading-snug",
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground",
								children: [
									t.name,
									" · ",
									t.city,
									" · ",
									t.car
								]
							})
						]
					}, t.name))
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/40 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-serif text-4xl md:text-5xl",
					children: "Frequently Asked"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-serif text-xl hover:no-underline",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-sm text-muted-foreground",
							children: f.a
						})]
					}, f.q))
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/40 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-xs tracking-[0.22em] text-gold",
						children: "EM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mt-6",
						children: "Begin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-serif text-4xl md:text-6xl",
						children: ["Your Next Luxury Car ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "Starts Here"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Step into our Lucknow showroom or speak to our team — we'll help you find the right car, on your terms."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/collection",
								className: "bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
								children: "Explore Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${site.phoneRaw}`,
								className: "inline-flex items-center gap-2 border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Call Now"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "border border-border px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-gold",
								children: "WhatsApp Us"
							})
						]
					})
				]
			}) })
		})
	] });
}
//#endregion
export { Home as component };
