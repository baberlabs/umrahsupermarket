import { testimonials } from '../data/products';
import './Testimonials.css';

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star star--filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <div className="testi__header">
          <p className="section-label">Customer Reviews</p>
          <h2 className="testi__title">Loved by the community</h2>
        </div>

        <div className="testi__grid">
          {testimonials.map(t => (
            <blockquote key={t.id} className="testi__card">
              <Stars count={t.rating} />
              <p className="testi__text">"{t.text}"</p>
              <footer className="testi__author">
                <div className="testi__avatar">{t.initials}</div>
                <div>
                  <div className="testi__name">{t.name}</div>
                  <div className="testi__loc">{t.location}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="testi__aggregate">
          <div className="testi__agg-score">4.9</div>
          <div>
            <Stars count={5} />
            <p>Based on 200+ reviews across Google &amp; Facebook</p>
          </div>
        </div>
      </div>
    </section>
  );
}
