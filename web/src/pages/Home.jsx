import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useScrollY } from "../hooks/useScrollY";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "Fresh Produce", emoji: "🥦", to: "/groceries?cat=produce" },
  { label: "Halal Meats", emoji: "🥩", to: "/groceries?cat=meat" },
  { label: "Bakery", emoji: "🍞", to: "/groceries?cat=bakery" },
  { label: "Beverages", emoji: "🧃", to: "/groceries?cat=beverages" },
  { label: "Dairy", emoji: "🥛", to: "/groceries?cat=dairy" },
  { label: "Snacks", emoji: "🍪", to: "/groceries?cat=snacks" },
  { label: "African & Carib.", emoji: "🌍", to: "/groceries?cat=african" },
  { label: "Asian Essentials", emoji: "🍜", to: "/groceries?cat=asian" },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Premium Lamb Shoulder",
    category: "Halal Meats",
    price: "£12.99",
    badge: "Best Seller",
    kg: "per kg",
  },
  {
    id: 2,
    name: "Scotch Bonnet Peppers",
    category: "Fresh Produce",
    price: "£1.49",
    badge: "Fresh Daily",
    kg: "200g",
  },
  {
    id: 3,
    name: "Basmati Rice XL Pack",
    category: "Pantry",
    price: "£8.99",
    badge: "Mega Pack",
    kg: "5kg",
  },
  {
    id: 4,
    name: "Jollof Rice Seasoning",
    category: "African & Carib.",
    price: "£2.29",
    badge: "Top Pick",
    kg: "100g",
  },
  {
    id: 5,
    name: "Chicken Thighs (Halal)",
    category: "Halal Meats",
    price: "£5.49",
    badge: "Double Deal",
    kg: "1kg",
  },
  {
    id: 6,
    name: "Mango Juice",
    category: "Beverages",
    price: "£1.99",
    badge: null,
    kg: "1L",
  },
  {
    id: 7,
    name: "Plantain (Ripe)",
    category: "Fresh Produce",
    price: "£0.89",
    badge: "Fresh Daily",
    kg: "each",
  },
  {
    id: 8,
    name: "Pita Bread (6pk)",
    category: "Bakery",
    price: "£1.49",
    badge: null,
    kg: "pack",
  },
];

const PILLARS = [
  {
    icon: "✦",
    title: "Halal Certified",
    body: "Strictly certified and ethically sourced meats — every cut, every time.",
  },
  {
    icon: "◈",
    title: "World Flavours",
    body: "African, Caribbean, Asian, and Middle Eastern essentials under one roof.",
  },
  {
    icon: "◉",
    title: "Best Prices",
    body: "High-volume sourcing means exclusive Double Deal and XL Mega Pack savings.",
  },
  {
    icon: "◆",
    title: "Open Late",
    body: "8am–10pm across all major retail parks to fit your lifestyle.",
  },
];

const LOCATIONS = [
  "Leicester (Flagship)",
  "Liverpool",
  "Huddersfield",
  "Northampton",
  "Birmingham",
  "Bradford",
  "Coventry",
];

// ─── Shared ───────────────────────────────────────────────────────────────────

const TRAJAN = {
  fontFamily: "'Trajan Pro', 'Palatino Linotype', Palatino, serif",
};

const SectionLabel = ({ children }) => (
  <p className="text-[#f3aa34] text-xs font-bold uppercase tracking-[0.2em] mb-2">
    {children}
  </p>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-[#fefefe] text-4xl font-bold" style={TRAJAN}>
    {children}
  </h2>
);

// ─── BadgePill ────────────────────────────────────────────────────────────────

const BadgePill = ({ label }) => {
  const amber = "bg-[#f3aa34] text-black";
  const dark = "bg-[#1a1a1a] text-[#fefefe] border border-white/20";
  const amber2 = "bg-[#1a1a1a] text-[#f3aa34] border border-[#f3aa34]/40";

  const cls =
    label === "Best Seller" || label === "Double Deal" || label === "Mega Pack"
      ? amber
      : label === "Fresh Daily"
        ? amber2
        : dark;

  return (
    <span
      className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${cls}`}
    >
      {label}
    </span>
  );
};

// ─── ProductCard ──────────────────────────────────────────────────────────────

const ProductCard = ({ name, category, price, badge, kg }) => (
  <div className="group bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col gap-3 hover:border-[#f3aa34]/50 transition-all duration-300 hover:-translate-y-0.5">
    <div className="aspect-square w-full rounded-xl bg-[#161616] flex items-center justify-center text-4xl">
      🛒
    </div>

    <div className="flex flex-col gap-1 flex-1">
      {badge && <BadgePill label={badge} />}
      <p className="text-[11px] text-[#666] uppercase tracking-wider mt-1">
        {category}
      </p>
      <p className="text-[#fefefe] text-sm font-medium leading-snug">{name}</p>
    </div>

    <div className="flex items-end justify-between mt-auto">
      <div>
        <span className="text-[#f3aa34] text-xl font-bold">{price}</span>
        <span className="text-[#555] text-xs ml-1">{kg}</span>
      </div>
      <button className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#f3aa34] text-black hover:bg-[#e09a20] transition-colors">
        Add
      </button>
    </div>
  </div>
);

// ─── Spline Hero ──────────────────────────────────────────────────────────────

const SplineHero = ({ scrollY }) => {
  return (
    <div
      className="absolute right-[-20%] top-2/2 -translate-y-1/2 w-[90%] h-[90%] z-0 transition-transform duration-75"
      style={{
        transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
      }}
    >
      <Spline scene="https://prod.spline.design/3EZb0fbZKHGuBR7r/scene.splinecode" />
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = ({ scrollY }) => (
  <section className="relative bg-[#000] overflow-hidden min-h-[85vh] flex items-center">
    <SplineHero scrollY={scrollY} />

    <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden>
      <div className="absolute top-0 left-1/3 w-px h-full bg-[#1a1a1a]" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#1a1a1a]" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-[#1a1a1a]" />
    </div>

    <div
      className="absolute -right-32 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full opacity-10 pointer-events-none z-[1]"
      style={{ background: "#f3aa34", filter: "blur(120px)" }}
      aria-hidden
    />

    <div className="relative z-10 max-w-7xl mx-auto px-7 py-24 w-full">
      <div className="max-w-3xl">
        <p className="text-[#f3aa34] text-xs font-bold uppercase tracking-[0.25em] mb-6">
          Quality · Freshness · Best Prices
        </p>

        <h1
          className="text-[#fefefe] font-bold leading-[0.95] mb-8"
          style={{ ...TRAJAN, fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          World Flavours.
          <br />
          <span className="text-[#f3aa34]">Local Prices.</span>
        </h1>

        <p className="text-[#999] text-lg leading-relaxed max-w-xl mb-10">
          Premium Halal meats, fresh seasonal produce, and authentic ingredients
          from African, Caribbean, and Asian markets — all under one roof.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/groceries"
            className="inline-flex items-center gap-2 bg-[#f3aa34] text-black font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-[#e09a20] transition-colors"
          >
            Shop Now →
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-[#333] text-[#fefefe] font-medium text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:border-[#f3aa34]/60 hover:text-[#f3aa34] transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-[#1a1a1a]">
        <p className="text-[#555] text-xs uppercase tracking-widest mb-3">
          7+ locations across the UK
        </p>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <span
              key={loc}
              className="text-xs text-[#777] border border-[#1f1f1f] rounded-full px-3 py-1"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Marquee Banner ───────────────────────────────────────────────────────────

const DoubleDealBanner = () => (
  <section className="bg-[#f3aa34] py-4 overflow-hidden">
    <style>{`
      @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    `}</style>
    <div className="flex w-max animate-[marquee_18s_linear_infinite]">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-10 text-black font-bold text-sm uppercase tracking-widest mx-6 whitespace-nowrap"
        >
          <span>★ Double Deal Offers</span>
          <span>★ XL Mega Packs</span>
          <span>★ Fresh Daily Deliveries</span>
          <span>★ Halal Certified</span>
        </span>
      ))}
    </div>
  </section>
);

// ─── Categories ───────────────────────────────────────────────────────────────

const Categories = () => (
  <section className="bg-[#000] py-20 border-t border-[#141414]">
    <div className="max-w-7xl mx-auto px-7">
      <div className="flex items-end justify-between mb-10">
        <div>
          <SectionLabel>Browse</SectionLabel>
          <SectionHeading>Shop by Category</SectionHeading>
        </div>
        <Link
          to="/groceries"
          className="text-[#f3aa34] text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {CATEGORIES.map(({ label, emoji, to }) => (
          <Link
            key={label}
            to={to}
            className="group flex flex-col items-center gap-3 bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl py-6 px-3 hover:border-[#f3aa34]/60 hover:bg-[#111] transition-all duration-200"
          >
            <span className="text-3xl">{emoji}</span>
            <span className="text-[#aaa] group-hover:text-[#fefefe] text-[10px] font-medium uppercase tracking-wide text-center leading-tight transition-colors">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// ─── Featured Products ────────────────────────────────────────────────────────

const FeaturedProducts = () => (
  <section className="bg-[#050505] py-20 border-t border-[#141414]">
    <div className="max-w-7xl mx-auto px-7">
      <div className="flex items-end justify-between mb-10">
        <div>
          <SectionLabel>This Week</SectionLabel>
          <SectionHeading>Featured Products</SectionHeading>
        </div>
        <Link
          to="/groceries"
          className="text-[#f3aa34] text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4"
        >
          See all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {FEATURED_PRODUCTS.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  </section>
);

// ─── Pillars ──────────────────────────────────────────────────────────────────

const Pillars = () => (
  <section className="bg-[#000] py-20 border-t border-[#141414]">
    <div className="max-w-7xl mx-auto px-7">
      <div className="text-center mb-14">
        <SectionLabel>Our Promise</SectionLabel>
        <SectionHeading>Why Umrah Supermarket?</SectionHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS.map(({ icon, title, body }) => (
          <div
            key={title}
            className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-7 hover:border-[#f3aa34]/40 transition-colors"
          >
            <span className="text-[#f3aa34] text-3xl block mb-5">{icon}</span>
            <h3
              className="text-[#fefefe] text-lg font-bold mb-3"
              style={TRAJAN}
            >
              {title}
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Community Banner ─────────────────────────────────────────────────────────

const CommunityBanner = () => (
  <section className="relative bg-[#f3aa34] py-20 overflow-hidden">
    <div
      className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none"
      aria-hidden
    />
    <div
      className="absolute right-10 top-5 w-48 h-48 rounded-full bg-black/5 pointer-events-none"
      aria-hidden
    />

    <div className="relative z-10 max-w-7xl mx-auto px-7 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-xl">
        <h2
          className="text-black text-4xl font-bold mb-4 leading-tight"
          style={TRAJAN}
        >
          Your Community Hub.
          <br />
          Our Fresh Promise.
        </h2>
        <p className="text-black/70 text-base leading-relaxed">
          From our flagship Leicester store to 7+ locations across the UK, we
          serve multicultural families every single day with the tastes and
          traditions of home.
        </p>
      </div>

      <Link
        to="/about"
        className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-[#f3aa34] font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#111] transition-colors"
      >
        About Us →
      </Link>
    </div>
  </section>
);

// ─── Newsletter ───────────────────────────────────────────────────────────────

const Newsletter = () => (
  <section className="bg-[#050505] py-20 border-t border-[#141414]">
    <div className="max-w-xl mx-auto px-7 text-center">
      <SectionLabel>Stay in the loop</SectionLabel>
      <h2 className="text-[#fefefe] text-3xl font-bold mb-4" style={TRAJAN}>
        Get Exclusive Deals
      </h2>
      <p className="text-[#666] text-sm mb-8">
        Sign up for Double Deal alerts, Mega Pack launches, and weekly specials
        straight to your inbox.
      </p>

      <div className="flex gap-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded-full p-1.5 focus-within:border-[#f3aa34]/60 transition-colors">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 bg-transparent outline-none text-[#fefefe] text-sm px-4 placeholder:text-[#444]"
        />
        <button className="bg-[#f3aa34] text-black font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#e09a20] transition-colors flex-shrink-0">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export const Home = () => {
  const scrollY = useScrollY();

  return (
    <main className="bg-[#000] min-h-screen">
      <Hero scrollY={scrollY} />
      <DoubleDealBanner />
      <Categories />
      <FeaturedProducts />
      <Pillars />
      <CommunityBanner />
      <Newsletter />
    </main>
  );
};
