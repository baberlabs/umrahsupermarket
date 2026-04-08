import { Link } from "react-router-dom";
import "./Footer.css";

function UmrahLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50"
        y="74"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="78"
        fontWeight="900"
        textAnchor="middle"
        fill="#D4960A"
      >
        U
      </text>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Gold divider line */}
      <div className="footer__line" />

      <div className="container footer__top">
        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <UmrahLogo />
            <span className="footer__logo-name">UMRAH SUPERMARKET</span>
          </div>
          <p className="footer__tagline">
            World Flavours. Local Prices.
            <br />
            Premium Halal — 100% certified.
          </p>
          <div className="footer__socials">
            {["Facebook", "Instagram", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        <div className="footer__group">
          <h4>Shop</h4>
          <ul>
            <li>
              <Link to="/groceries?cat=meat">Halal Meat</Link>
            </li>
            <li>
              <Link to="/groceries?cat=produce">Fresh Produce</Link>
            </li>
            <li>
              <Link to="/groceries?cat=pantry">Pantry</Link>
            </li>
            <li>
              <Link to="/groceries?cat=spices">Spices</Link>
            </li>
            <li>
              <Link to="/categories">All Categories</Link>
            </li>
          </ul>
        </div>

        <div className="footer__group">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer__group">
          <h4>Help</h4>
          <ul>
            <li>
              <Link to="/faq">FAQ & Help Centre</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="footer__contact">
            <p>Unit 9, St Georges Retail Park, Leicester LE1 1SG</p>
            <p>📞 07448 208201</p>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Umrah Supermarket. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Cookies</a>
        </div>
        <div className="footer__certs">
          <span>☪️ Halal Certified</span>
          <span>🇬🇧 UK Registered</span>
        </div>
      </div>
    </footer>
  );
}
