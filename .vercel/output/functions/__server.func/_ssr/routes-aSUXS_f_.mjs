import { o as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, o as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as ChevronDown, B as Boxes, C as FolderSearch, D as Cloud, E as EyeOff, F as CalendarPlus, H as ArrowRight, I as CalendarClock, L as Building, M as ChartLine, N as ChartColumn, O as Clock, P as ChartColumnBig, R as Building2, S as Gauge, T as FileStack, U as Activity, V as BookOpen, _ as Layers, a as TrendingUp, b as GraduationCap, c as School, d as QrCode, f as Network, g as LayoutDashboard, h as Library, i as UserCog, j as Check, k as CircleCheck, l as ScanFace, m as MapPin, n as User, o as Sparkles, p as Megaphone, r as UserX, s as ShieldCheck, t as Users, u as Radio, v as Landmark, w as FileText, x as Globe, y as KeyRound, z as BrainCircuit } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-aSUXS_f_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			brand: "text-primary-foreground shadow-[var(--shadow-glow)] [background:var(--gradient-brand)] hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300",
			soft: "border border-border bg-background text-foreground shadow-[var(--shadow-soft)] hover:bg-secondary hover:-translate-y-0.5 transition-all duration-300"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			xl: "h-12 rounded-xl px-7 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var links = [
	{
		label: "Features",
		href: "#features"
	},
	{
		label: "Solutions",
		href: "#dashboards"
	},
	{
		label: "Insights",
		href: "#insights"
	},
	{
		label: "How it works",
		href: "#how"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-auto shrink-0 place-items-center overflow-hidden rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/presentiq-logo.jpeg",
							alt: "PresentIQ logo",
							className: "h-full w-auto object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-bold tracking-tight text-foreground",
						children: "PresentIQ"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "hidden text-sm sm:inline-flex",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cta",
							children: "Explore Platform"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "brand",
						className: "text-sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cta",
							children: "Request Demo"
						})
					})]
				})
			]
		})
	});
}
var heat = [
	.3,
	.6,
	.9,
	.4,
	.8,
	.5,
	.2,
	.7,
	1,
	.5,
	.9,
	.6,
	.4,
	.8,
	.3,
	.7,
	.9,
	.5,
	.6,
	.4,
	.8,
	1,
	.7,
	.5,
	.3,
	.9,
	.6,
	.8
];
var bars$1 = [
	55,
	72,
	64,
	88,
	76,
	92,
	81
];
function DashboardPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative rounded-[26px] border border-border bg-card p-3 shadow-[var(--shadow-card)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[20px] bg-gradient-to-b from-secondary/50 to-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-muted-foreground",
						children: "Institution Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-foreground",
						children: "Greenfield University"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 rounded-full bg-brand-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-brand-cyan-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan-deep" }), " Live"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: "Overall Attendance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl font-extrabold text-foreground",
									children: "94.2%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 text-[10px] font-semibold text-emerald-500",
									children: "+2.4%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: "94%" },
									transition: {
										duration: 1.2,
										delay: .6
									},
									className: "h-full rounded-full [background:var(--gradient-brand)]"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-3 w-3" }), " Today's Sessions"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-2xl font-extrabold text-foreground",
								children: "28"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "6 active classes"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 grid grid-cols-2 gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-[11px] font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "h-3 w-3 text-brand-cyan-deep" }), " Live Attendance"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: "CS-301 · Room B2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex -space-x-1.5",
								children: [[
									0,
									1,
									2,
									3
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-5 w-5 rounded-full border-2 border-card [background:var(--gradient-brand)]" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-5 w-5 place-items-center rounded-full border-2 border-card bg-secondary text-[8px] font-bold text-foreground",
									children: "+38"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-brand-cyan/30 bg-brand-cyan/[0.06] p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-[11px] font-semibold text-brand-cyan-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Recent Activity"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] leading-snug text-muted-foreground",
							children: "Attendance up 8% this week across 4 departments."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 rounded-2xl border border-border bg-card p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold text-foreground",
						children: "Attendance Trends"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-[repeat(14,1fr)] gap-1",
						children: heat.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								scale: .5
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: { delay: .5 + i * .02 },
							className: "aspect-square rounded-[3px]",
							style: { background: `oklch(0.7 0.15 220 / ${.15 + v * .85})` }
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 grid grid-cols-2 gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-[11px] font-semibold text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3 text-brand-cyan-deep" }), " Department Analytics"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex h-12 items-end gap-1",
							children: bars$1.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: { height: 0 },
								animate: { height: `${h}%` },
								transition: {
									duration: .8,
									delay: .7 + i * .06
								},
								className: "flex-1 rounded-t-[3px] [background:var(--gradient-brand)]"
							}, i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-[11px] font-semibold text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-3 w-3 text-brand-cyan-deep" }), " Student Statistics"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full rounded-full bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-4/5 rounded-full bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-3/5 rounded-full bg-secondary" })
							]
						})]
					})]
				})
			]
		})
	});
}
var float = (delay) => ({
	animate: { y: [
		0,
		-10,
		0
	] },
	transition: {
		duration: 4,
		repeat: Infinity,
		ease: [
			.45,
			0,
			.55,
			1
		],
		delay
	}
});
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 h-[520px]",
				style: { background: "var(--gradient-glow)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-sky/30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-brand-cyan-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Intelligent Attendance Platform"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .05
							},
							className: "mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl",
							children: [
								"Attendance,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Reimagined."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .15
							},
							className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0",
							children: "PresentIQ is an intelligent attendance management platform that helps educational institutions automate attendance, improve operational efficiency, reduce administrative workload, and gain actionable insights through one unified platform."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .25
							},
							className: "mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "brand",
								size: "xl",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#cta",
									children: ["Request Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "soft",
								size: "xl",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									children: "Explore Platform"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .7,
								delay: .4
							},
							className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-brand-cyan-deep" }), " 99% accuracy"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-4 w-4 text-brand-cyan-deep" }), " 100% cloud based"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-brand-cyan-deep" }), " Secure & scalable"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .94,
						y: 30
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative mx-auto w-full max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPreview, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...float(0),
							className: "absolute -left-6 top-10 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-lg [background:var(--gradient-brand)] text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "Smart Sessions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...float(1.2),
							className: "absolute -right-4 top-28 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "QR Check-in"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...float(.6),
							className: "absolute -left-8 bottom-24 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanFace, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "Geo-Verified"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...float(1.8),
							className: "absolute -right-6 bottom-10 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: "Analytics"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...float(2.4),
							className: "absolute right-16 -top-4 glass flex items-center gap-2 rounded-full px-3 py-1.5 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-4 w-4 text-brand-cyan-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-foreground",
								children: "Cloud Sync"
							})]
						})
					]
				})]
			})
		]
	});
}
var variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: i * .08
		}
	})
};
function Reveal({ children, className, delay = 0, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		variants,
		custom: delay,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-80px"
		},
		children
	});
}
function SectionHeading({ eyebrow, title, subtitle, className = "", align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-2xl ${align === "left" ? "text-left" : "mx-auto text-center"} ${className}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan-deep",
				children: eyebrow
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl",
					children: title
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-muted-foreground sm:text-lg",
					children: subtitle
				})
			})
		]
	});
}
var logos = [
	{
		icon: School,
		label: "Schools"
	},
	{
		icon: GraduationCap,
		label: "Colleges"
	},
	{
		icon: Landmark,
		label: "Universities"
	},
	{
		icon: Building2,
		label: "Institutes"
	},
	{
		icon: Library,
		label: "Academies"
	},
	{
		icon: BookOpen,
		label: "Campuses"
	}
];
function TrustedBy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 pb-16 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground",
				children: "Built for modern educational institutions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
				children: logos.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 px-4 py-4 text-muted-foreground shadow-[var(--shadow-soft)] transition-colors hover:text-brand-cyan-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold",
						children: l.label
					})]
				}, l.label))
			})]
		})
	});
}
var problems = [
	{
		icon: Clock,
		title: "Wasted classroom time",
		desc: "Manual attendance consumes valuable classroom time every single session."
	},
	{
		icon: UserX,
		title: "Proxy attendance",
		desc: "Unverified check-ins affect data accuracy and institutional trust."
	},
	{
		icon: FolderSearch,
		title: "Scattered records",
		desc: "Managing attendance across departments and semesters is difficult and error-prone."
	},
	{
		icon: FileStack,
		title: "Manual reporting",
		desc: "Generating institutional reports requires unnecessary manual effort."
	},
	{
		icon: EyeOff,
		title: "No real insights",
		desc: "Traditional systems store data but lack meaningful, actionable insights."
	}
];
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:sticky lg:top-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "The Problem",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Attendance is still stuck ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "in the past"
					})] }),
					subtitle: "Most institutions rely on outdated processes that cost time, reduce accuracy, and hide the insights that matter most."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: problems.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-destructive/10 text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-foreground",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.desc
						})] })]
					})
				}, p.title))
			})]
		})
	});
}
var pillars = [
	{
		icon: ShieldCheck,
		title: "Secure & Transparent",
		desc: "Verified attendance sessions build trust across the entire institution."
	},
	{
		icon: Cloud,
		title: "Cloud-Based",
		desc: "Access attendance data anywhere, always in sync, with zero infrastructure."
	},
	{
		icon: Gauge,
		title: "Effortless Efficiency",
		desc: "Digitize attendance without introducing operational complexity."
	}
];
function WhyPresentIQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-4 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-sky/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan-deep",
						children: "Why PresentIQ"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]",
							children: ["A secure, cloud-based platform that makes attendance", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: " simple, transparent, and insightful."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg",
							children: "PresentIQ enables educational institutions to manage attendance digitally—improving transparency, efficiency, and decision-making—without adding operational complexity."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3",
				children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl [background:var(--gradient-brand)] text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-bold text-foreground",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.desc
							})
						]
					})
				}, p.title))
			})
		]
	});
}
var features = [
	{
		icon: CalendarPlus,
		title: "Smart Attendance Sessions",
		desc: "Teachers can create attendance sessions in seconds and manage classroom attendance efficiently."
	},
	{
		icon: MapPin,
		title: "Geo-Verified Attendance",
		desc: "Verify that students are present within the permitted classroom area before attendance is accepted."
	},
	{
		icon: KeyRound,
		title: "Secure Session Authentication",
		desc: "Each attendance session uses a temporary verification code to prevent unauthorized attendance."
	},
	{
		icon: UserCog,
		title: "Manual Verification",
		desc: "Teachers retain complete control and can review or manually update attendance whenever required."
	},
	{
		icon: ChartColumnBig,
		title: "Attendance Analytics",
		desc: "Visualize attendance trends across students, classes, departments, and semesters with interactive dashboards."
	},
	{
		icon: FileText,
		title: "Automated Reports",
		desc: "Generate attendance summaries and institutional reports within seconds, with organized digital documentation."
	},
	{
		icon: LayoutDashboard,
		title: "Real-Time Dashboards",
		desc: "Instantly monitor attendance statistics, ongoing sessions, and institutional performance."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "relative px-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Core Features",
			title: "Everything your institution needs, intelligently unified",
			subtitle: "A complete toolkit that turns tedious attendance into a secure, efficient, insight-rich workflow."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-2xl bg-brand-cyan/10 text-brand-cyan-deep transition-colors group-hover:[background:var(--gradient-brand)] group-hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-bold text-foreground",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: f.desc
						})
					]
				})
			}, f.title))
		})]
	});
}
var roles = [
	{
		icon: Building2,
		title: "Administrator",
		items: [
			"Manage departments",
			"Manage teachers",
			"Manage students",
			"Institution-wide analytics",
			"Attendance reports",
			"Academic monitoring"
		]
	},
	{
		icon: GraduationCap,
		title: "Teacher",
		featured: true,
		items: [
			"Create attendance sessions",
			"Manage classrooms",
			"Monitor attendance",
			"Review attendance history",
			"Publish announcements",
			"Manage attendance records"
		]
	},
	{
		icon: User,
		title: "Student",
		items: [
			"View attendance percentage",
			"Track attendance history",
			"View academic schedule",
			"Upload medical documents",
			"Receive attendance notifications",
			"Monitor semester progress"
		]
	}
];
function Dashboards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "dashboards",
		className: "relative bg-[var(--gradient-soft)] px-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Built for Everyone",
			title: "One platform, tailored dashboards",
			subtitle: "Every role gets a focused workspace designed around their daily workflow."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 grid max-w-6xl items-stretch gap-5 lg:grid-cols-3",
			children: roles.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${r.featured ? "border-transparent [background:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]" : "border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-12 w-12 place-items-center rounded-2xl ${r.featured ? "bg-white/20 text-primary-foreground" : "bg-brand-cyan/10 text-brand-cyan-deep"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: `mt-5 text-xl font-bold ${r.featured ? "text-primary-foreground" : "text-foreground"}`,
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2.5",
							children: r.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid h-5 w-5 shrink-0 place-items-center rounded-full ${r.featured ? "bg-white/25" : "bg-brand-cyan/15 text-brand-cyan-deep"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: r.featured ? "text-primary-foreground/90" : "text-muted-foreground",
									children: item
								})]
							}, item))
						})
					]
				})
			}, r.title))
		})]
	});
}
var steps = [
	{
		icon: CalendarPlus,
		title: "Create Session",
		desc: "Teacher opens a new attendance session in seconds."
	},
	{
		icon: Users,
		title: "Students Join Session",
		desc: "Students join the active session from their devices."
	},
	{
		icon: ShieldCheck,
		title: "Attendance Verification",
		desc: "Presence is verified via code and geo-location."
	},
	{
		icon: CircleCheck,
		title: "Attendance Recorded",
		desc: "Verified attendance is recorded instantly and securely."
	},
	{
		icon: ChartLine,
		title: "Analytics Updated",
		desc: "Dashboards refresh with the latest attendance data."
	},
	{
		icon: FileText,
		title: "Reports Generated",
		desc: "Institutional reports are ready to export on demand."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "how",
		className: "relative bg-[var(--gradient-soft)] px-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Simple Workflow",
			title: "From session to insights in one clean flow",
			subtitle: "A frictionless process designed around how classrooms actually work."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto mt-16 max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[27px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: `relative flex items-center gap-5 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl [background:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] md:absolute md:left-1/2 md:-translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex-1 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:max-w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-brand-cyan-deep",
								children: ["Step ", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-lg font-bold text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: s.desc
							})
						]
					})]
				}, s.title))
			})]
		})]
	});
}
var bars = [
	64,
	78,
	71,
	88,
	82,
	94
];
var donut = 76;
function Insights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "insights",
		className: "px-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Insights That Matter",
			title: "Turn attendance data into institutional intelligence",
			subtitle: "PresentIQ transforms raw attendance into clear, actionable insights for every level of your institution."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-foreground",
								children: "Attendance Overview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Last 6 months"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-brand-cyan-deep",
								children: "+11.2%"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex h-40 items-end gap-3",
							children: bars.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { height: 0 },
								whileInView: { height: `${h}%` },
								viewport: { once: true },
								transition: {
									duration: .8,
									delay: i * .08
								},
								className: "flex-1 rounded-xl [background:var(--gradient-brand)]"
							}, i))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "self-start text-sm font-bold text-foreground",
								children: "Attendance Distribution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-6 grid h-36 w-36 place-items-center rounded-full",
								style: { background: `conic-gradient(oklch(0.68 0.15 230) ${donut * 3.6}deg, oklch(0.93 0.02 230) 0deg)` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-24 w-24 place-items-center rounded-full bg-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-2xl font-extrabold text-foreground",
										children: [donut, "%"]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-muted-foreground",
								children: "Present · On-time rate"
							})
						]
					})
				}),
				[
					{
						t: "Department Performance",
						v: "Top: Computer Science",
						s: "92% avg attendance"
					},
					{
						t: "Semester Analytics",
						v: "Semester 4",
						s: "Trending upward"
					},
					{
						t: "Student Trends",
						v: "3,240 students",
						s: "Consistency improving"
					},
					{
						t: "Institution Performance",
						v: "Excellent",
						s: "Across all campuses"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					className: i === 3 ? "md:col-span-3" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-brand-cyan-deep",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xl font-bold text-foreground",
								children: c.v
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: c.s
							})
						]
					})
				}, c.t))
			]
		})]
	});
}
var reasons = [
	{
		icon: Sparkles,
		title: "Modern Digital Platform",
		desc: "A refined, intuitive experience your whole institution will actually enjoy using."
	},
	{
		icon: ShieldCheck,
		title: "Secure Attendance Verification",
		desc: "Code and geo-based verification keep every record trustworthy."
	},
	{
		icon: Activity,
		title: "Real-Time Monitoring",
		desc: "Track sessions, attendance, and performance the moment they happen."
	},
	{
		icon: Gauge,
		title: "Administrative Efficiency",
		desc: "Cut manual workload and reclaim valuable time across departments."
	},
	{
		icon: Layers,
		title: "Scalable Architecture",
		desc: "From a single classroom to multi-campus operations, without friction."
	},
	{
		icon: GraduationCap,
		title: "Built for Institutions",
		desc: "Purpose-built for schools, colleges, and universities."
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-[var(--gradient-soft)] px-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Why Institutions Choose PresentIQ",
			title: "Trusted foundations for modern campuses"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					delay: i * .08,
					duration: .6
				},
				className: "group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-brand-cyan/10 text-brand-cyan-deep transition-colors group-hover:[background:var(--gradient-brand)] group-hover:text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg font-bold text-foreground",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: r.desc
					})
				]
			}, r.title))
		})]
	});
}
var modules = [
	{
		icon: Building,
		label: "Smart Campus Expansion"
	},
	{
		icon: Boxes,
		label: "ERP Integration"
	},
	{
		icon: Network,
		label: "Multi-Campus Management"
	},
	{
		icon: ChartColumn,
		label: "Advanced Academic Analytics"
	},
	{
		icon: BrainCircuit,
		label: "AI-Powered Insights"
	},
	{
		icon: TrendingUp,
		label: "Predictive Student Performance"
	},
	{
		icon: ScanFace,
		label: "Face-Recognition Verification"
	},
	{
		icon: Globe,
		label: "Institution-wide Digital Operations"
	}
];
function FutureVision() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "vision",
		className: "relative px-4 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Future Vision",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["More Than ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Attendance"
				})] }),
				subtitle: "PresentIQ is designed to become the digital foundation for educational institutions."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto mt-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep",
					children: "Future Roadmap"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: modules.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-cyan/10 text-brand-cyan-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: m.label
						})]
					})
				}, m.label))
			})
		]
	});
}
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
var faqs = [
	{
		q: "How does attendance verification work?",
		a: "Teachers open a secure session with a temporary verification code, and students confirm their presence within the permitted classroom area. Geo-verification and session codes work together to ensure every record is accurate and trustworthy."
	},
	{
		q: "Is PresentIQ suitable for universities?",
		a: "Absolutely. PresentIQ is built for schools, colleges, and universities alike, with department, semester, and institution-wide management designed to handle large, complex academic structures."
	},
	{
		q: "Can multiple departments use the platform?",
		a: "Yes. Each department can manage its own classes, teachers, and students while administrators retain a unified, institution-wide view of attendance and analytics."
	},
	{
		q: "Can attendance reports be generated automatically?",
		a: "Yes. Attendance summaries and institutional reports are generated within seconds, giving your administrative team organized digital documentation on demand."
	},
	{
		q: "Is the platform scalable for large institutions?",
		a: "PresentIQ runs on a secure, cloud-based, scalable architecture—supporting everything from a single classroom to multi-campus operations without added complexity."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "px-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Frequently asked questions",
			subtitle: "Everything you need to know about bringing PresentIQ to your institution."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto mt-12 max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					className: "rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-base font-semibold text-foreground hover:no-underline",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})
		})]
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: { duration: .7 },
			className: "relative mx-auto max-w-5xl overflow-hidden rounded-[32px] [background:var(--gradient-brand)] px-6 py-16 text-center shadow-[var(--shadow-glow)] sm:px-12 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "relative text-3xl font-extrabold text-primary-foreground sm:text-5xl",
					children: "Ready to Modernize Attendance?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg",
					children: "Empower your institution with a smarter, more efficient way to manage attendance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						variant: "soft",
						className: "border-transparent",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							children: ["Request Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						variant: "ghost",
						className: "text-primary-foreground hover:bg-white/15 hover:text-primary-foreground",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							children: "Contact Sales"
						})
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-card px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-auto shrink-0 place-items-center overflow-hidden rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/presentiq-logo.jpeg",
								alt: "PresentIQ logo",
								className: "h-full w-auto object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-bold tracking-tight text-foreground",
							children: "PresentIQ"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm text-muted-foreground",
						children: "Intelligent Attendance Management Platform. Designed for schools, colleges and universities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								className: "transition-colors hover:text-foreground",
								children: "Features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dashboards",
								className: "transition-colors hover:text-foreground",
								children: "Solutions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#vision",
								className: "transition-colors hover:text-foreground",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#cta",
								className: "transition-colors hover:text-foreground",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								className: "transition-colors hover:text-foreground",
								children: "Privacy Policy"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground",
				children: [
					"Copyright © ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" PresentIQ. All rights reserved."
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBy, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyPresentIQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboards, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insights, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FutureVision, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
