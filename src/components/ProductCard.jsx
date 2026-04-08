import { useState } from "react";
import "./ProductCard.css";
import { onImageError } from "../utils/imageFallback";

function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="pcard__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => (
        <span key={`f${i}`} className="star star--full">
          ★
        </span>
      ))}
      {half && <span className="star star--half">★</span>}
      {Array.from({ length: empty }, (_, i) => (
        <span key={`e${i}`} className="star star--empty">
          ★
        </span>
      ))}
      <span className="pcard__rating-num">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setQty(1);
  };
  const inc = (e) => {
    e.preventDefault();
    setQty((q) => q + 1);
  };
  const dec = (e) => {
    e.preventDefault();
    setQty((q) => Math.max(0, q - 1));
  };

  return (
    <article className="pcard">
      {product.badge && (
        <span
          className="pcard__badge"
          style={{ "--badge-color": product.badgeColor || "var(--gold)" }}
        >
          {product.badge}
        </span>
      )}

      {/* Product image */}
      <div className="pcard__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="pcard__img"
          loading="lazy"
          onError={onImageError}
        />
      </div>

      {/* Info */}
      <div className="pcard__body">
        <h3 className="pcard__name">{product.name}</h3>

        <Stars rating={product.rating} />

        <div className="pcard__footer">
          <div>
            <span className="pcard__price">£{product.price.toFixed(2)}</span>
            <span className="pcard__unit">{product.unit}</span>
          </div>

          {qty === 0 ? (
            <button className="pcard__btn" onClick={add}>
              Add to Cart
            </button>
          ) : (
            <div className="pcard__qty">
              <button onClick={dec} aria-label="Decrease">
                −
              </button>
              <span>{qty}</span>
              <button onClick={inc} aria-label="Increase">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
