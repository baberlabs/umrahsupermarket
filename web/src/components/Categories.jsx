import { Link } from "react-router-dom";
import { categoryCards } from "../data/products";
import { onImageError } from "../utils/imageFallback";
import "./Categories.css";

export default function Categories() {
  const shown = categoryCards.slice(0, 6);

  return (
    <section className="cats">
      <div className="container">
        <div className="cats__head">
          <div>
            <p className="section-label">Shop by Category</p>
            <h2 className="cats__title">All Categories</h2>
            <p className="cats__sub">
              Browse the best of our diverse grocery selection. Click on a
              category to start exploring.
            </p>
          </div>
          <Link to="/categories" className="cats__see-all">
            View all →
          </Link>
        </div>

        <div className="cats__grid">
          {shown.map((cat) => (
            <Link
              key={cat.id}
              to={`/groceries?cat=${cat.id}`}
              className="cats__card"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="cats__card-img"
                loading="lazy"
                onError={onImageError}
              />
              <div className="cats__card-overlay" />
              <div className="cats__card-foot">
                <span className="cats__card-label">{cat.label}</span>
                <span className="cats__card-arrow">›</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
