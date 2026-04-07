import { Link, useLocation } from "react-router-dom";

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

const CATEGORIES = [
  { key: "produce", label: "Fresh Produce", emoji: "🥦" },
  { key: "meat", label: "Halal Meats", emoji: "🥩" },
  { key: "bakery", label: "Bakery", emoji: "🍞" },
  { key: "beverages", label: "Beverages", emoji: "🧃" },
  { key: "dairy", label: "Dairy", emoji: "🥛" },
  { key: "snacks", label: "Snacks", emoji: "🍪" },
  { key: "african", label: "African & Carib.", emoji: "🌍" },
  { key: "asian", label: "Asian Essentials", emoji: "🍜" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Lamb Shoulder",
    category: "Halal Meats",
    catKey: "meat",
    price: "£12.99",
    size: "per kg",
    badge: "Best Seller",
    emoji: "🥩",
  },
  {
    id: 2,
    name: "Chicken Thighs (Halal)",
    category: "Halal Meats",
    catKey: "meat",
    price: "£5.49",
    size: "1kg",
    badge: "Double Deal",
    emoji: "🍗",
  },
  {
    id: 3,
    name: "Scotch Bonnet Peppers",
    category: "Fresh Produce",
    catKey: "produce",
    price: "£1.49",
    size: "200g",
    badge: "Fresh Daily",
    emoji: "🌶️",
  },
  {
    id: 4,
    name: "Plantain (Ripe)",
    category: "Fresh Produce",
    catKey: "produce",
    price: "£0.89",
    size: "each",
    badge: "Fresh Daily",
    emoji: "🍌",
  },
  {
    id: 5,
    name: "Pita Bread (6pk)",
    category: "Bakery",
    catKey: "bakery",
    price: "£1.49",
    size: "pack",
    badge: null,
    emoji: "🥙",
  },
  {
    id: 6,
    name: "Soft White Rolls",
    category: "Bakery",
    catKey: "bakery",
    price: "£1.99",
    size: "6 pack",
    badge: null,
    emoji: "🥖",
  },
  {
    id: 7,
    name: "Mango Juice",
    category: "Beverages",
    catKey: "beverages",
    price: "£1.99",
    size: "1L",
    badge: null,
    emoji: "🥭",
  },
  {
    id: 8,
    name: "Guava Drink",
    category: "Beverages",
    catKey: "beverages",
    price: "£2.19",
    size: "1L",
    badge: "Top Pick",
    emoji: "🧃",
  },
  {
    id: 9,
    name: "Whole Milk",
    category: "Dairy",
    catKey: "dairy",
    price: "£1.55",
    size: "2L",
    badge: null,
    emoji: "🥛",
  },
  {
    id: 10,
    name: "Greek Yoghurt",
    category: "Dairy",
    catKey: "dairy",
    price: "£2.49",
    size: "500g",
    badge: null,
    emoji: "🥣",
  },
  {
    id: 11,
    name: "Spicy Cassava Chips",
    category: "Snacks",
    catKey: "snacks",
    price: "£1.29",
    size: "90g",
    badge: null,
    emoji: "🍟",
  },
  {
    id: 12,
    name: "Butter Biscuits",
    category: "Snacks",
    catKey: "snacks",
    price: "£1.79",
    size: "pack",
    badge: null,
    emoji: "🍪",
  },
  {
    id: 13,
    name: "Jollof Rice Seasoning",
    category: "African & Carib.",
    catKey: "african",
    price: "£2.29",
    size: "100g",
    badge: "Top Pick",
    emoji: "🌍",
  },
  {
    id: 14,
    name: "Plantain Fufu Flour",
    category: "African & Carib.",
    catKey: "african",
    price: "£3.99",
    size: "680g",
    badge: null,
    emoji: "🥣",
  },
  {
    id: 15,
    name: "Basmati Rice XL Pack",
    category: "Asian Essentials",
    catKey: "asian",
    price: "£8.99",
    size: "5kg",
    badge: "Mega Pack",
    emoji: "🍚",
  },
  {
    id: 16,
    name: "Instant Noodles",
    category: "Asian Essentials",
    catKey: "asian",
    price: "£0.79",
    size: "each",
    badge: null,
    emoji: "🍜",
  },
];

const BadgePill = ({ label }) => {
  const amber = "bg-[#f3aa34] text-black";
  const dark = "bg-[#1a1a1a] text-[#fefefe] border border-white/20";
  const amber2 = "bg-[#1a1a1a] text-[#f3aa34] border border-[#f3aa34]/40";

  const cls =
    label === "Best Seller" || label === "Double Deal" || label === "Mega Pack"
      ? amber
      : label === "Fresh Daily" || label === "Top Pick"
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

const ProductCard = ({ name, category, price, size, badge, emoji }) => (
  <div className="group bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col gap-3 hover:border-[#f3aa34]/50 transition-all duration-300 hover:-translate-y-0.5">
    <div className="aspect-square w-full rounded-xl bg-[#161616] flex items-center justify-center text-5xl">
      {emoji}
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
        <span className="text-[#555] text-xs ml-1">{size}</span>
      </div>
      <button className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#f3aa34] text-black hover:bg-[#e09a20] transition-colors">
        Add
      </button>
    </div>
  </div>
);

export const Groceries = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const activeCat = params.get("cat") || "all";

  const filteredProducts =
    activeCat === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.catKey === activeCat);

  const activeCategoryLabel =
    activeCat === "all"
      ? "All Groceries"
      : CATEGORIES.find((cat) => cat.key === activeCat)?.label || "Groceries";

  return (
    <main className="bg-[#000] min-h-screen">
      <section className="relative bg-[#000] overflow-hidden border-b border-[#141414]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/3 w-px h-full bg-[#1a1a1a]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#1a1a1a]" />
        </div>

        <div
          className="absolute -right-24 top-16 w-[420px] h-[420px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "#f3aa34", filter: "blur(110px)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-7 py-20">
          <SectionLabel>Shop</SectionLabel>
          <h1
            className="text-[#fefefe] font-bold leading-[0.95] mb-6"
            style={{ ...TRAJAN, fontSize: "clamp(2.7rem, 7vw, 5rem)" }}
          >
            Groceries for
            <br />
            <span className="text-[#f3aa34]">Every Table.</span>
          </h1>

          <p className="text-[#999] text-lg leading-relaxed max-w-2xl mb-8">
            Explore premium halal meats, fresh produce, bakery favourites, and
            authentic world ingredients selected for everyday family shopping.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#f3aa34] text-black font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-[#e09a20] transition-colors"
            >
              Ask About Stock →
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-[#333] text-[#fefefe] font-medium text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:border-[#f3aa34]/60 hover:text-[#f3aa34] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-14 border-b border-[#141414]">
        <div className="max-w-7xl mx-auto px-7">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/groceries"
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeCat === "all"
                  ? "bg-[#f3aa34] text-black"
                  : "bg-[#0d0d0d] text-[#bbb] border border-[#1f1f1f] hover:border-[#f3aa34]/50 hover:text-[#fefefe]"
              }`}
            >
              All
            </Link>

            {CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                to={`/groceries?cat=${cat.key}`}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeCat === cat.key
                    ? "bg-[#f3aa34] text-black"
                    : "bg-[#0d0d0d] text-[#bbb] border border-[#1f1f1f] hover:border-[#f3aa34]/50 hover:text-[#fefefe]"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#000] py-20">
        <div className="max-w-7xl mx-auto px-7">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <SectionLabel>Browse Products</SectionLabel>
              <SectionHeading>{activeCategoryLabel}</SectionHeading>
            </div>
            <p className="text-[#666] text-sm">
              {filteredProducts.length} products available
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-20 border-t border-[#141414]">
        <div className="max-w-7xl mx-auto px-7 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-7">
            <p className="text-[#f3aa34] text-3xl mb-4">🚚</p>
            <h3
              className="text-[#fefefe] text-xl font-bold mb-3"
              style={TRAJAN}
            >
              Fresh Every Day
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              We keep our shelves stocked with quality essentials and fresh
              arrivals throughout the week.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-7">
            <p className="text-[#f3aa34] text-3xl mb-4">🥩</p>
            <h3
              className="text-[#fefefe] text-xl font-bold mb-3"
              style={TRAJAN}
            >
              Halal You Can Trust
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              From premium cuts to family-sized packs, our halal meat range is
              selected with care and consistency.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-7">
            <p className="text-[#f3aa34] text-3xl mb-4">💷</p>
            <h3
              className="text-[#fefefe] text-xl font-bold mb-3"
              style={TRAJAN}
            >
              Value That Lasts
            </h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Double Deals, Mega Packs, and everyday low prices designed for
              busy households and bigger baskets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
