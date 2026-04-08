import { Link } from 'react-router-dom';
import './Footer.css';

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
            <svg width="28" height="22" viewBox="0 0 72 54" fill="none">
              <path d="M36 4L48 22L64 8L56 42H16L8 8L24 22L36 4Z" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round"/>
              <rect x="14" y="44" width="44" height="6" rx="1" fill="var(--gold)"/>
            </svg>
            <span className="footer__logo-name">UMRAH SUPERMARKET</span>
          </div>
          <p className="footer__tagline">
            World Flavours. Local Prices.<br />
            Premium Halal — 100% certified.
          </p>
          <div className="footer__socials">
            {['Facebook','Instagram','WhatsApp'].map(s => (
              <a key={s} href="#" className="footer__social" aria-label={s}>{s[0]}</a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        <div className="footer__group">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/groceries?cat=meat">Halal Meat</Link></li>
            <li><Link to="/groceries?cat=produce">Fresh Produce</Link></li>
            <li><Link to="/groceries?cat=pantry">Pantry</Link></li>
            <li><Link to="/groceries?cat=spices">Spices</Link></li>
            <li><Link to="/categories">All Categories</Link></li>
          </ul>
        </div>

        <div className="footer__group">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer__group">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Delivery Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Halal Certification</a></li>
            <li><a href="#">Allergens</a></li>
            <li><Link to="/contact">Find Our Store</Link></li>
          </ul>
          <div className="footer__contact">
            <p>📍 123 Alum Rock Rd, Birmingham B8 1JL</p>
            <p>📞 0121 000 0000</p>
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
