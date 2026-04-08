import { Link } from 'react-router-dom';
import './About.css';

const values = [
  { icon: '☪️', title: 'Faith & Integrity',   desc: 'Our halal commitment is non-negotiable. We work only with certified suppliers and maintain the highest standards.' },
  { icon: '🌍', title: 'Cultural Pride',       desc: 'We celebrate the richness of African, Caribbean, and Asian food cultures — and the communities that carry them.' },
  { icon: '🌱', title: 'Fresh & Honest',       desc: 'No misleading dates, no watered-down freshness. We sell food we\'d be proud to cook for our own families.' },
  { icon: '🤝', title: 'Community Roots',      desc: 'We source locally where we can, employ locally always, and reinvest in the neighbourhoods we call home.' },
];

const team = [
  { initials: 'AH', name: 'Ahmed Hassan',    role: 'Founder & Director',       origin: '🇸🇴 Somalia / Birmingham' },
  { initials: 'GW', name: 'Grace Williams',  role: 'Head of Produce',           origin: '🇬🇭 Ghana / Wolverhampton' },
  { initials: 'MO', name: 'Marcia Olivier',  role: 'Customer Experience Lead',  origin: '🇯🇲 Jamaica / Birmingham' },
  { initials: 'RS', name: 'Rajan Singh',     role: 'Pantry & Spices Buyer',     origin: '🇮🇳 India / Coventry' },
];

const timeline = [
  { year: '2014', event: 'Opened our first small shop on Alum Rock Road with just 80 product lines.' },
  { year: '2017', event: 'Expanded to a full supermarket, adding a dedicated fresh meat counter.' },
  { year: '2019', event: 'Launched Caribbean and Asian sections after listening to our growing community.' },
  { year: '2022', event: 'Introduced online ordering and local delivery across Birmingham.' },
  { year: '2024', event: 'Serving 2,000+ customers weekly — and still growing.' },
];

export default function About() {
  return (
    <main className="about">
      {/* Hero */}
      <section className="about__hero">
        <div className="about__hero-bg" aria-hidden="true" />
        <div className="container">
          <p className="section-label">Our Story</p>
          <h1 className="about__hero-title">
            Built from the community.<br />
            <span className="gold">Run for the community.</span>
          </h1>
          <p className="about__hero-desc">
            Umrah Supermarket was born from a simple frustration: why did families from
            West Africa, the Caribbean, and South Asia have to travel across the city
            to find the ingredients they grew up with? We decided to fix that.
          </p>
          <div className="about__hero-ctas">
            <Link to="/groceries" className="btn-primary">Shop Now →</Link>
            <Link to="/contact" className="btn-outline">Visit Us</Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about__mission">
        <div className="container about__mission-inner">
          <div className="about__mission-text">
            <p className="section-label">Our Mission</p>
            <h2 className="about__section-title">
              Bringing the world's flavours<br />to your doorstep
            </h2>
            <p>
              We believe that authentic ingredients shouldn't be a luxury or a long journey.
              Whether you're making jollof rice for 20, a slow-cooked goat curry, or fresh
              coconut chutney — you should be able to find everything you need, fresh and halal,
              right here in your community.
            </p>
            <p>
              Every product we stock has been hand-selected because someone on our team
              — or someone in our community — told us it was essential. We don't stock things
              we don't understand. We stock things we love.
            </p>
          </div>
          <div className="about__mission-stats">
            <div className="about__stat">
              <span className="about__stat-num gold">500+</span>
              <span className="about__stat-label">Products</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num gold">10</span>
              <span className="about__stat-label">Years serving the community</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num gold">2,000+</span>
              <span className="about__stat-label">Weekly shoppers</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num gold">100%</span>
              <span className="about__stat-label">Halal certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about__values" id="values">
        <div className="container">
          <div className="about__values-header">
            <p className="section-label">What We Stand For</p>
            <h2 className="about__section-title">Our values, not just our words</h2>
          </div>
          <div className="about__values-grid">
            {values.map((v, i) => (
              <div key={i} className="about__value-card">
                <span className="about__value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about__timeline">
        <div className="container">
          <div className="about__timeline-header">
            <p className="section-label">Our Journey</p>
            <h2 className="about__section-title">A decade in the making</h2>
          </div>
          <div className="about__timeline-list">
            {timeline.map((t, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-year">{t.year}</div>
                <div className="about__timeline-dot" />
                <div className="about__timeline-event">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about__team" id="team">
        <div className="container">
          <div className="about__team-header">
            <p className="section-label">The People Behind Umrah</p>
            <h2 className="about__section-title">Meet the team</h2>
          </div>
          <div className="about__team-grid">
            {team.map((m, i) => (
              <div key={i} className="about__team-card">
                <div className="about__team-avatar">{m.initials}</div>
                <div className="about__team-name">{m.name}</div>
                <div className="about__team-role">{m.role}</div>
                <div className="about__team-origin">{m.origin}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <div className="container">
          <div className="about__cta-inner">
            <h2>Come and see for yourself</h2>
            <p>Pop in to our store or browse online — we'd love to be your go-to supermarket.</p>
            <div className="about__cta-btns">
              <Link to="/groceries" className="btn-primary">Shop Online →</Link>
              <Link to="/contact" className="btn-outline">Find Our Store</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
