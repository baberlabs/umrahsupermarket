import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [basketCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/groceries?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#1d1d1d] text-white transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-[#171717] bg-[#0a0a0a] text-[11px] text-[#cfcfcf]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between gap-4 py-2">
            <span className="hidden sm:block">
              Free delivery on orders over £50 · Open 7 days a week, 8am – 9pm
            </span>

            <div className="ml-auto flex items-center gap-4 text-[11px] uppercase tracking-[0.18em]">
              <Link
                to="/about"
                className="text-[#b9b9b9] transition-colors hover:text-[#f3aa34]"
              >
                Our Story
              </Link>
              <Link
                to="/contact"
                className="text-[#b9b9b9] transition-colors hover:text-[#f3aa34]"
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Desktop search */}
            <form
              onSubmit={handleSearch}
              role="search"
              className="hidden flex-1 overflow-hidden rounded-full border border-[#2a2a2a] bg-[#111111] lg:flex lg:max-w-[620px] lg:items-center"
            >
              <select
                aria-label="Category"
                defaultValue="All"
                className="border-none bg-transparent px-4 py-3 text-sm text-[#d0d0d0] outline-none"
              >
                <option className="bg-[#111] text-white">All</option>
                <option className="bg-[#111] text-white">Meat</option>
                <option className="bg-[#111] text-white">Produce</option>
                <option className="bg-[#111] text-white">Seafood</option>
                <option className="bg-[#111] text-white">Pantry</option>
                <option className="bg-[#111] text-white">Spices</option>
              </select>

              <div className="h-6 w-px bg-[#2a2a2a]" />

              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#6d6d6d]"
              />

              <button
                type="submit"
                className="m-1 rounded-full bg-[#f3aa34] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-[#e29a1f]"
              >
                Search
              </button>
            </form>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 md:flex">
              <Link
                to="/account"
                className="inline-flex items-center gap-2 rounded-full border border-[#252525] px-4 py-2 text-sm text-[#d7d7d7] transition hover:border-[#f3aa34] hover:text-[#f3aa34]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Account</span>
              </Link>

              <Link
                to="/checkout"
                className="relative inline-flex items-center gap-2 rounded-full border border-[#252525] px-4 py-2 text-sm text-[#d7d7d7] transition hover:border-[#f3aa34] hover:text-[#f3aa34]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Basket</span>

                {basketCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#f3aa34] px-1 text-[10px] font-bold text-black">
                    {basketCount}
                  </span>
                )}
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#252525] px-4 py-2 text-sm text-[#d7d7d7] transition hover:border-[#f3aa34] hover:text-[#f3aa34]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                <span>Help</span>
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#252525] text-white md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-[2px] w-5 bg-white transition ${
                    menuOpen ? "translate-y-[8px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white transition ${
                    menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile search */}
          <form
            onSubmit={handleSearch}
            role="search"
            className="pb-4 lg:hidden"
          >
            <div className="flex items-center overflow-hidden rounded-full border border-[#2a2a2a] bg-[#111111]">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#6d6d6d]"
              />
              <button
                type="submit"
                className="m-1 rounded-full bg-[#f3aa34] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="border-t border-[#171717] bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="hidden items-center gap-2 py-3 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#f3aa34] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black"
                  : "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e8e8e] transition hover:bg-[#111] hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/groceries"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#f3aa34] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black"
                  : "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e8e8e] transition hover:bg-[#111] hover:text-white"
              }
            >
              Groceries
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#f3aa34] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black"
                  : "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e8e8e] transition hover:bg-[#111] hover:text-white"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#f3aa34] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black"
                  : "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e8e8e] transition hover:bg-[#111] hover:text-white"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="flex flex-col gap-2 py-4 md:hidden">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-2xl bg-[#f3aa34] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
                    : "rounded-2xl bg-[#111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/groceries"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-2xl bg-[#f3aa34] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
                    : "rounded-2xl bg-[#111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                }
              >
                Groceries
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-2xl bg-[#f3aa34] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
                    : "rounded-2xl bg-[#111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-2xl bg-[#f3aa34] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
                    : "rounded-2xl bg-[#111] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                }
              >
                Contact
              </NavLink>

              <div className="mt-2 grid gap-2">
                <Link
                  to="/account"
                  onClick={closeMenu}
                  className="rounded-2xl border border-[#252525] px-4 py-3 text-sm text-[#d7d7d7]"
                >
                  Account
                </Link>
                <Link
                  to="/checkout"
                  onClick={closeMenu}
                  className="rounded-2xl border border-[#252525] px-4 py-3 text-sm text-[#d7d7d7]"
                >
                  Basket
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="rounded-2xl border border-[#252525] px-4 py-3 text-sm text-[#d7d7d7]"
                >
                  Help
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
