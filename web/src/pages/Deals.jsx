import { Link } from "react-router-dom";
import { products } from "../data/products";
import { onImageError } from "../utils/imageFallback";
import "./Deals.css";

const dealProducts = products
  .filter(
    (p) =>
      p.badge === "Best Seller" ||
      p.badge === "Top Rated" ||
      p.badge === "Popular",
  )
  .slice(0, 8)
  .map((p) => ({ ...p, oldPrice: (p.price * 1.2).toFixed(2) }));

export default function Deals() {
  return (
    <main className="deals">
      <section className="deals__hero">
        <div className="container">
          <p className="section-label">Limited Time</p>
          <h1 className="deals__title">Deals & Offers</h1>
          <p className="deals__sub">
            Weekly savings on halal essentials, pantry staples, and everyday
            fresh picks.
          </p>
          <Link to="/groceries" className="btn-primary">
            Shop All Deals →
          </Link>
        </div>
      </section>

      <section className="deals__bands">
        <div className="container deals__bands-grid">
          <article className="deals__band">
            <h2>Double Deal</h2>
            <p>Mix and match selected items and save more at checkout.</p>
          </article>
          <article className="deals__band">
            <h2>Weekend Saver</h2>
            <p>Special weekend-only prices on meat, produce, and bakery.</p>
          </article>
          <article className="deals__band">
            <h2>Basket Bonus</h2>
            <p>Spend over £50 and unlock free local delivery eligibility.</p>
          </article>
        </div>
      </section>

      <section className="deals__grid-wrap">
        <div className="container">
          <div className="deals__head">
            <h2>This Week's Promotions</h2>
            <Link to="/groceries" className="btn-outline">
              Browse Groceries
            </Link>
          </div>

          <div className="deals__grid">
            {dealProducts.map((item) => (
              <article key={item.id} className="deals__card">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={onImageError}
                />
                <div className="deals__card-body">
                  <p className="deals__category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <div className="deals__price-row">
                    <span className="deals__price">
                      £{item.price.toFixed(2)}
                    </span>
                    <span className="deals__old">£{item.oldPrice}</span>
                  </div>
                  <p className="deals__unit">{item.unit}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
