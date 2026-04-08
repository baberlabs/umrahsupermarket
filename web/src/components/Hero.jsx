import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './Hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow fade-up">Quality · Freshness · Best Prices</p>

          <h1 className="hero__heading fade-up fade-up-delay-1">
            World Flavours.<br />
            <span className="hero__heading--gold">Local Prices.</span>
          </h1>

          <p className="hero__desc fade-up fade-up-delay-2">
            Premium Halal meats, fresh seasonal produce, and authentic ingredients
            from African, Caribbean, and Asian markets — all under one roof.
          </p>

          <div className="hero__ctas fade-up fade-up-delay-3">
            <Link to="/categories" className="btn-primary">
              Shop Now &rarr;
            </Link>
            <Link to="/about" className="btn-outline hero__outline">
              Our Story
            </Link>
          </div>

          <div className="hero__stats fade-up fade-up-delay-4">
            {[
              { num: '500+', label: 'Products' },
              { num: '100%', label: 'Halal Certified' },
              { num: '10yrs', label: 'Serving Birmingham' },
            ].map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__3d" aria-hidden="true">
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/3EZb0fbZKHGuBR7r/scene.splinecode" />
          </Suspense>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="hero__bottom-fade" aria-hidden="true" />
    </section>
  );
}
