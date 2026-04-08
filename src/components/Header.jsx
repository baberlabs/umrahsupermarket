import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

// Umrah Logo — "U" mark, no background
function UmrahLogo() {
  return <img src="/umrah-u.svg" width="34" height="34" alt="Umrah logo" />;
}

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/categories", label: "Categories", end: false },
  { to: "/deals", label: "Deals", end: false },
  { to: "/blog", label: "Blog", end: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/groceries?search=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal("");
    }
  };

  return (
    <header className={`hdr ${scrolled ? "hdr--scrolled" : ""}`}>
      {/* ─── Utility bar ─── */}
      <div className="hdr__util">
        <div className="container hdr__util-inner">
          <div />
          {/* Crown centred */}
          <Link
            to="/"
            className="hdr__crown"
            aria-label="Umrah Supermarket Home"
          >
            <UmrahLogo />
            <span className="hdr__crown-wordmark">UMRAH</span>
          </Link>
          {/* Right utility actions */}
          <div className="hdr__util-actions">
            <Link to="/account" className="hdr__util-btn">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Account
            </Link>
            <span className="hdr__util-sep">+</span>
            <Link to="/basket" className="hdr__util-btn hdr__basket">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="hdr__basket-count">20</span>
              <span className="hdr__basket-divider">/</span>
              <span>16</span>
            </Link>
            <span className="hdr__util-sep">|</span>
            <Link to="/contact" className="hdr__util-btn">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Help
            </Link>
            <Link to="/account" className="hdr__util-btn hdr__util-lock">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Main nav ─── */}
      <nav className={`hdr__nav ${menuOpen ? "hdr__nav--open" : ""}`}>
        <div className="container hdr__nav-inner">
          {/* Nav links with pipe separators */}
          <div className="hdr__links">
            {navLinks.map((link, i) => (
              <span key={link.to} className="hdr__link-wrap">
                {i > 0 && <span className="hdr__pipe">|</span>}
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `hdr__link ${isActive ? "hdr__link--active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </span>
            ))}
          </div>

          {/* Search */}
          <form className="hdr__search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="hdr__search-input"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="hdr__search-btn"
              aria-label="Search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </form>

          {/* Mobile burger */}
          <button
            className={`hdr__burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
