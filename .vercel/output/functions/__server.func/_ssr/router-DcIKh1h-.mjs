import { r as __toESM } from "../_runtime.mjs";
import { i as site } from "./site-rnwvzzZM.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Container } from "./Container-Bv2gqLQl.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$5 } from "./cars._slug-DWhQwaYk.mjs";
import { n as Phone, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Route$6 } from "./collection-8cQb88wd.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$7 } from "./routes-Bg65QgO5.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DcIKh1h-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DFMuMb8h.css";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/collection",
		label: "Collection"
	},
	{
		to: "/sell-exchange",
		label: "Sell / Exchange"
	},
	{
		to: "/finance",
		label: "Finance"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-[10px] tracking-[0.2em] text-gold",
						children: "EM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-serif text-xl",
						children: ["Exotique ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "Machines"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						activeProps: { className: "text-gold" },
						className: "text-[11px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-gold",
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${site.phoneRaw}`,
						className: "flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-gold" }),
							" ",
							site.phoneDisplay
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "bg-gold px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90",
						children: "Book Visit"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden",
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/40 bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 px-6 py-6",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "py-3 text-[11px] uppercase tracking-[0.22em] text-foreground/80",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-4 bg-gold px-5 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
					children: "Book Visit"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/40 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-serif text-2xl",
								children: ["Exotique ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "Machines"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm text-muted-foreground",
								children: "A curated collection of pre-owned luxury cars, presented with transparency and craft — from our Indira Nagar showroom in Lucknow."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collection",
									className: "hover:text-gold",
									children: "Collection"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sell-exchange",
									className: "hover:text-gold",
									children: "Sell / Exchange"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/finance",
									className: "hover:text-gold",
									children: "Finance"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-gold",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-gold",
									children: "Contact"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "not-italic text-sm text-muted-foreground space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: site.address }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${site.phoneRaw}`,
									className: "hover:text-gold",
									children: site.phoneDisplay
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "hover:text-gold",
									children: site.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: site.hours })
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Exotique Machines. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "tracking-widest uppercase",
						children: "Lucknow · India"
					})]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-4",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-5xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "The page you're looking for isn't in our collection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-block bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Please try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "border border-border px-6 py-3 text-[11px] uppercase tracking-[0.22em]",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Exotique Machines — Curated Pre-Owned Luxury Cars in Lucknow" },
			{
				name: "description",
				content: "A handpicked collection of pre-owned luxury cars in Lucknow. Curated inventory, finance assistance, and a premium showroom experience at Exotique Machines."
			},
			{
				property: "og:title",
				content: "Exotique Machines — Curated Pre-Owned Luxury Cars"
			},
			{
				property: "og:description",
				content: "Handpicked pre-owned luxury cars in Lucknow, presented with transparency and craft."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Exotique Machines"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 pt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$3 = () => import("./sell-exchange-BxV_PmWf.mjs");
var Route$3 = createFileRoute("/sell-exchange")({
	head: () => ({
		meta: [
			{ title: "Sell or Exchange Your Luxury Car — Exotique Machines" },
			{
				name: "description",
				content: "Sell or exchange your luxury car with Exotique Machines, Lucknow. Fair valuations, quick inspection, and the option to step up to a curated pre-owned luxury car."
			},
			{
				property: "og:title",
				content: "Sell or Exchange Your Luxury Car"
			},
			{
				property: "og:description",
				content: "Fair valuations and easy exchange with Exotique Machines."
			},
			{
				property: "og:url",
				content: "/sell-exchange"
			}
		],
		links: [{
			rel: "canonical",
			href: "/sell-exchange"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./finance-DIB22w5P.mjs");
var Route$2 = createFileRoute("/finance")({
	head: () => ({
		meta: [
			{ title: "Finance Assistance for Luxury Cars — Exotique Machines" },
			{
				name: "description",
				content: "Finance assistance for pre-owned luxury cars in Lucknow. Competitive rates, quick approvals, and discreet handling through trusted partners."
			},
			{
				property: "og:title",
				content: "Finance Assistance — Exotique Machines"
			},
			{
				property: "og:description",
				content: "Tailored finance for pre-owned luxury cars."
			},
			{
				property: "og:url",
				content: "/finance"
			}
		],
		links: [{
			rel: "canonical",
			href: "/finance"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-C6ZheueB.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & Book a Visit — Exotique Machines, Lucknow" },
			{
				name: "description",
				content: "Visit our Indira Nagar showroom in Lucknow, or send us a message. Call, WhatsApp, or book a showroom visit with Exotique Machines."
			},
			{
				property: "og:title",
				content: "Contact Exotique Machines"
			},
			{
				property: "og:description",
				content: "Book a showroom visit at our Lucknow showroom."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./about-B2O5lnhr.mjs");
var Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Exotique Machines — Pre-Owned Luxury in Lucknow" },
			{
				name: "description",
				content: "Exotique Machines is a Lucknow-based curator of pre-owned luxury cars. Learn about our approach, our showroom, and the standards behind every car we sell."
			},
			{
				property: "og:title",
				content: "About Exotique Machines"
			},
			{
				property: "og:description",
				content: "A curator of pre-owned luxury cars in Lucknow."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SellExchangeRoute = Route$3.update({
	id: "/sell-exchange",
	path: "/sell-exchange",
	getParentRoute: () => Route$4
});
var FinanceRoute = Route$2.update({
	id: "/finance",
	path: "/finance",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var CollectionRoute = Route$6.update({
	id: "/collection",
	path: "/collection",
	getParentRoute: () => Route$4
});
var AboutRoute = Route.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute,
	CollectionRoute,
	ContactRoute,
	FinanceRoute,
	SellExchangeRoute,
	CarsSlugRoute: Route$5.update({
		id: "/cars/$slug",
		path: "/cars/$slug",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
