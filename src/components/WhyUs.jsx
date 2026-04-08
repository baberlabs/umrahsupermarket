import './WhyUs.css';

const pillars = [
  {
    icon: '☪️',
    title: '100% Halal Certified',
    desc: 'Every piece of meat and poultry is sourced from certified halal suppliers — always. No exceptions, no compromise.',
  },
  {
    icon: '🌍',
    title: 'Three Cultures. One Roof.',
    desc: 'Authentic ingredients from West Africa, the Caribbean, and South & East Asia — curated by people who cook with them.',
  },
  {
    icon: '🌱',
    title: 'Fresh, Not Frozen',
    desc: 'Our produce arrives daily. No weeks in cold storage — just the freshest seasonal ingredients at honest prices.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    desc: "We exist to serve our neighbourhood. Local suppliers, local jobs, and prices that don't price out the people we grew up with.",
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No loyalty card gimmicks. No inflated prices slashed in half. Just honest, fair prices every single day.',
  },
  {
    icon: '🚚',
    title: 'Free Local Delivery',
    desc: 'Order online and get free delivery on orders over £50 within 5 miles. Same-day available on most orders.',
  },
];

export default function WhyUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="why__header">
          <p className="section-label">Why Umrah?</p>
          <h2 className="why__title">We're different. <span className="gold">Here's how.</span></h2>
          <p className="why__sub">
            Built by the community, for the community — a supermarket that actually
            understands the food you cook and the values you hold.
          </p>
        </div>

        <div className="why__grid">
          {pillars.map((p, i) => (
            <div className="why__card" key={i}>
              <div className="why__card-icon">{p.icon}</div>
              <h3 className="why__card-title">{p.title}</h3>
              <p className="why__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
