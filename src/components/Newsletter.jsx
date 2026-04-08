import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="nl">
      <div className="container">
        <div className="nl__inner">
          <div className="nl__bg-orb" aria-hidden="true" />

          <div className="nl__content">
            <p className="section-label">Stay Connected</p>
            <h2 className="nl__title">Get weekly deals &amp; fresh arrivals</h2>
            <p className="nl__sub">
              Be first to know about new products, seasonal specials, and exclusive
              offers — straight to your inbox. No spam, ever.
            </p>

            {status === 'success' ? (
              <div className="nl__success">
                <span>✓</span> You're in! Check your inbox for a welcome offer.
              </div>
            ) : (
              <form className="nl__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="nl__input"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="nl__btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
            )}

            <p className="nl__privacy">
              By subscribing you agree to receive marketing emails. Unsubscribe any time.
            </p>
          </div>

          <div className="nl__perks">
            <div className="nl__perk">
              <span>🎁</span>
              <div>
                <strong>Welcome Discount</strong>
                <p>10% off your first order</p>
              </div>
            </div>
            <div className="nl__perk">
              <span>📦</span>
              <div>
                <strong>Weekly Deals</strong>
                <p>Exclusive subscriber pricing</p>
              </div>
            </div>
            <div className="nl__perk">
              <span>🥬</span>
              <div>
                <strong>Fresh Alerts</strong>
                <p>Know when seasonal stock arrives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
