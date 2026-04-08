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

const CONTACT_CARDS = [
  {
    title: "Customer Support",
    body: "Questions about products, pricing, or availability? Our team is here to help.",
    info: "support@umrahsupermarket.co.uk",
    icon: "✉️",
  },
  {
    title: "Visit a Store",
    body: "Find your nearest Umrah Supermarket and shop with us in person.",
    info: "7+ locations across the UK",
    icon: "📍",
  },
  {
    title: "Opening Hours",
    body: "We are open throughout the week to make shopping easier for busy families.",
    info: "8:00am – 10:00pm",
    icon: "⏰",
  },
];

export const Contact = () => {
  return (
    <main className="bg-[#000] min-h-screen">
      <section className="relative bg-[#000] overflow-hidden border-b border-[#141414]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-1/4 w-px h-full bg-[#1a1a1a]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#1a1a1a]" />
        </div>

        <div
          className="absolute -right-24 top-8 w-[420px] h-[420px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "#f3aa34", filter: "blur(115px)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-7 py-24">
          <SectionLabel>Contact</SectionLabel>
          <h1
            className="text-[#fefefe] font-bold leading-[0.95] mb-8"
            style={{ ...TRAJAN, fontSize: "clamp(2.7rem, 7vw, 5rem)" }}
          >
            We’d Love to
            <br />
            <span className="text-[#f3aa34]">Hear From You.</span>
          </h1>

          <p className="text-[#999] text-lg leading-relaxed max-w-2xl">
            Whether you want to ask about stock, store locations, product
            availability, or general enquiries, send us a message and our team
            will get back to you.
          </p>
        </div>
      </section>

      <section className="bg-[#050505] py-16 border-b border-[#141414]">
        <div className="max-w-7xl mx-auto px-7 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-7 hover:border-[#f3aa34]/40 transition-colors"
            >
              <p className="text-3xl mb-4">{card.icon}</p>
              <h3
                className="text-[#fefefe] text-xl font-bold mb-3"
                style={TRAJAN}
              >
                {card.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed mb-4">
                {card.body}
              </p>
              <p className="text-[#f3aa34] text-sm font-medium">{card.info}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#000] py-20">
        <div className="max-w-7xl mx-auto px-7 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <SectionHeading>Send Us a Message</SectionHeading>

            <p className="text-[#777] text-sm leading-relaxed mt-6 max-w-md">
              Fill in the form and let us know how we can help. This design
              matches your homepage, so it will feel clean and consistent across
              the whole website.
            </p>

            <div className="mt-10 space-y-4 text-sm text-[#888]">
              <p>
                <span className="text-[#f3aa34] font-semibold">Address:</span>{" "}
                Leicester Flagship Store, UK
              </p>
              <p>
                <span className="text-[#f3aa34] font-semibold">Email:</span>{" "}
                hello@umrahsupermarket.co.uk
              </p>
              <p>
                <span className="text-[#f3aa34] font-semibold">Phone:</span>{" "}
                0116 000 0000
              </p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-[2rem] p-6 md:p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#bbb] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full bg-[#111] border border-[#1f1f1f] rounded-2xl px-4 py-3 text-[#fefefe] placeholder:text-[#555] outline-none focus:border-[#f3aa34]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#bbb] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full bg-[#111] border border-[#1f1f1f] rounded-2xl px-4 py-3 text-[#fefefe] placeholder:text-[#555] outline-none focus:border-[#f3aa34]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#bbb] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#111] border border-[#1f1f1f] rounded-2xl px-4 py-3 text-[#fefefe] placeholder:text-[#555] outline-none focus:border-[#f3aa34]/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#bbb] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is your enquiry about?"
                  className="w-full bg-[#111] border border-[#1f1f1f] rounded-2xl px-4 py-3 text-[#fefefe] placeholder:text-[#555] outline-none focus:border-[#f3aa34]/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#bbb] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full bg-[#111] border border-[#1f1f1f] rounded-2xl px-4 py-3 text-[#fefefe] placeholder:text-[#555] outline-none focus:border-[#f3aa34]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#f3aa34] text-black font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-[#e09a20] transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
