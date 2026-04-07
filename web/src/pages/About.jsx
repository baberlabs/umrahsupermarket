import { Link } from "react-router-dom";

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

const VALUES = [
  {
    title: "Authentic Choice",
    body: "We bring together trusted ingredients and familiar products from African, Caribbean, Asian, and Middle Eastern kitchens.",
    icon: "🌍",
  },
  {
    title: "Fresh Quality",
    body: "From produce to halal meats, we focus on freshness, consistency, and products families genuinely come back for.",
    icon: "🥬",
  },
  {
    title: "Better Value",
    body: "Our pricing is built around everyday households, with strong offers, bigger packs, and dependable value.",
    icon: "💷",
  },
];

const STATS = [
  { value: "7+", label: "UK Locations" },
  { value: "Fresh", label: "Daily Deliveries" },
  { value: "100%", label: "Halal Focused" },
  { value: "Local", label: "Community Driven" },
];

export const About = () => {
  return (
    <main className="bg-[#000] min-h-screen">
      <section className="relative bg-[#000] overflow-hidden border-b border-[#141414]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/4 w-px h-full bg-[#1a1a1a]" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-[#1a1a1a]" />
        </div>

        <div
          className="absolute -right-28 top-10 w-[460px] h-[460px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "#f3aa34", filter: "blur(120px)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-7 py-24">
          <SectionLabel>About Us</SectionLabel>

          <h1
            className="text-[#fefefe] font-bold leading-[0.95] mb-8"
            style={{ ...TRAJAN, fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            More Than a Store.
            <br />
            <span className="text-[#f3aa34]">A Taste of Home.</span>
          </h1>

          <p className="text-[#999] text-lg leading-relaxed max-w-3xl">
            Umrah Supermarket was built to serve multicultural communities with
            quality groceries, halal meats, fresh produce, and authentic
            ingredients that reflect the foods people actually love to cook. We
            are proud to be a place where value, culture, and everyday shopping
            come together.
          </p>
        </div>
      </section>

      <section className="bg-[#050505] py-16 border-b border-[#141414]">
        <div className="max-w-7xl mx-auto px-7 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-6 text-center"
            >
              <p className="text-[#f3aa34] text-3xl font-bold mb-2">
                {item.value}
              </p>
              <p className="text-[#777] text-xs uppercase tracking-[0.2em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#000] py-20">
        <div className="max-w-7xl mx-auto px-7 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <SectionHeading>Serving Families Across the UK</SectionHeading>

            <div className="mt-8 space-y-5 text-[#888] leading-relaxed">
              <p>
                We know grocery shopping is not just about filling a basket. It
                is about finding the right ingredients, keeping traditions
                alive, and making everyday meals easier for families who want
                quality and familiarity in one place.
              </p>
              <p>
                That is why Umrah Supermarket focuses on products that reflect
                real households and real communities. Whether you are shopping
                for fresh halal meats, everyday produce, bakery essentials, or
                specialist world ingredients, our goal is to make the experience
                simple, affordable, and reliable.
              </p>
              <p>
                From Leicester to Birmingham and beyond, we continue growing
                with the same promise: trusted products, strong value, and a
                shopping experience that feels connected to the community it
                serves.
              </p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl p-8">
            <SectionLabel>What We Stand For</SectionLabel>
            <div className="space-y-6 mt-6">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="border-b border-[#1f1f1f] pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{value.icon}</span>
                    <div>
                      <h3
                        className="text-[#fefefe] text-xl font-bold mb-2"
                        style={TRAJAN}
                      >
                        {value.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-20 border-t border-[#141414]">
        <div className="max-w-7xl mx-auto px-7">
          <div className="bg-[#f3aa34] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className="text-black text-4xl font-bold mb-4 leading-tight"
                style={TRAJAN}
              >
                Fresh food. Real value.
                <br />
                Community first.
              </h2>
              <p className="text-black/75 leading-relaxed">
                We are proud to serve customers looking for both quality and
                culture in their weekly shop. Explore our grocery range or get
                in touch with our team.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/groceries"
                className="inline-flex items-center gap-2 bg-black text-[#f3aa34] font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-[#111] transition-colors"
              >
                Shop Groceries →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-black/20 text-black font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-black hover:text-[#f3aa34] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
