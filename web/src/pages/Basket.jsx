import { useState } from "react";
import { Link } from "react-router-dom";
import { onImageError } from "../utils/imageFallback";
import "./Basket.css";

const img = (id, w = 80, h = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const initialItems = [
  {
    id: 1,
    name: "Whole Halal Chicken",
    origin: "Local Farm",
    unit: "per bird (~1.5kg)",
    price: 5.99,
    qty: 2,
    image: img("photo-1604503468958-1e2b7ca47cc5"),
  },
  {
    id: 2,
    name: "Basmati Rice (Long Grain)",
    origin: "Pakistan",
    unit: "per 5kg bag",
    price: 7.99,
    qty: 1,
    image: img("photo-1586201375761-83865001e31c"),
  },
  {
    id: 3,
    name: "Plantain (Ripe)",
    origin: "Ghana",
    unit: "per bunch",
    price: 1.29,
    qty: 3,
    image: img("photo-1528360983277-13d401cdc186"),
  },
  {
    id: 4,
    name: "Suya Spice Blend",
    origin: "Nigeria",
    unit: "per 100g",
    price: 2.49,
    qty: 2,
    image: img("photo-1505253716362-afaea1d3d1af"),
  },
  {
    id: 5,
    name: "Free-Range Eggs (15 pack)",
    origin: "UK Local",
    unit: "per 15 eggs",
    price: 3.29,
    qty: 1,
    image: img("photo-1582722872445-44dc5f7e3c8f"),
  },
];

const DELIVERY_THRESHOLD = 50;
const DELIVERY_FEE = 3.99;

export default function Basket() {
  const [items, setItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const afterDiscount = subtotal - discount;
  const deliveryFee = afterDiscount >= DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = afterDiscount + deliveryFee;

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "UMRAH10") {
      setPromoApplied(true);
    }
  };

  if (checkoutDone) {
    return (
      <main className="basket">
        <div className="container basket__confirm">
          <div className="basket__confirm-icon">✅</div>
          <h1 className="basket__confirm-title">Order Placed!</h1>
          <p className="basket__confirm-sub">
            Thank you for your order. You will receive a confirmation email and
            SMS shortly. Your delivery is scheduled for{" "}
            <strong>today between 4pm – 7pm</strong>.
          </p>
          <div className="basket__confirm-ref">
            Order reference: <strong>#UM-4922</strong>
          </div>
          <div className="basket__confirm-btns">
            <Link to="/account" className="btn-primary">
              View Order →
            </Link>
            <Link to="/groceries" className="btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="basket">
        <div className="container basket__empty">
          <div className="basket__empty-icon">🛒</div>
          <h1 className="basket__empty-title">Your basket is empty</h1>
          <p className="basket__empty-sub">Add some items to get started.</p>
          <Link to="/groceries" className="btn-primary">
            Browse Products →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="basket">
      {/* Hero */}
      <section className="basket__hero">
        <div className="basket__hero-bg" aria-hidden="true" />
        <div className="container">
          <p className="section-label">My Basket</p>
          <h1 className="basket__title">Your Shopping Basket</h1>
          <p className="basket__sub">
            {items.length} item{items.length !== 1 ? "s" : ""} · Estimated
            delivery today
          </p>
        </div>
      </section>

      <div className="container basket__body">
        <div className="basket__layout">
          {/* Items list */}
          <div className="basket__items">
            {afterDiscount < DELIVERY_THRESHOLD && (
              <div className="basket__delivery-banner">
                🚚 Add{" "}
                <strong>
                  £{(DELIVERY_THRESHOLD - afterDiscount).toFixed(2)}
                </strong>{" "}
                more for <strong>free delivery</strong>
                <div className="basket__delivery-bar">
                  <div
                    className="basket__delivery-fill"
                    style={{
                      width: `${Math.min(100, (afterDiscount / DELIVERY_THRESHOLD) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {afterDiscount >= DELIVERY_THRESHOLD && (
              <div className="basket__delivery-banner basket__delivery-banner--free">
                ✅ You've unlocked <strong>free delivery!</strong>
              </div>
            )}

            {items.map((item) => (
              <div key={item.id} className="basket__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="basket__item-img"
                  onError={onImageError}
                />
                <div className="basket__item-info">
                  <div className="basket__item-name">{item.name}</div>
                  <div className="basket__item-origin">
                    {item.origin} · {item.unit}
                  </div>
                  <div className="basket__item-price">
                    £{item.price.toFixed(2)} each
                  </div>
                </div>
                <div className="basket__item-qty">
                  <button
                    className="basket__qty-btn"
                    onClick={() => updateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="basket__qty-val">{item.qty}</span>
                  <button
                    className="basket__qty-btn"
                    onClick={() => updateQty(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="basket__item-line-total">
                  £{(item.price * item.qty).toFixed(2)}
                </div>
                <button
                  className="basket__item-remove"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}

            <div className="basket__continue">
              <Link to="/groceries" className="basket__continue-link">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order summary */}
          <aside className="basket__summary">
            <h2 className="basket__summary-title">Order Summary</h2>

            <div className="basket__summary-rows">
              <div className="basket__summary-row">
                <span>
                  Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)
                </span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="basket__summary-row basket__summary-row--discount">
                  <span>Promo code (UMRAH10)</span>
                  <span>−£{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="basket__summary-row">
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="basket__free">FREE</span>
                  ) : (
                    `£${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>
            </div>

            {/* Promo code */}
            {!promoApplied && (
              <div className="basket__promo">
                <input
                  type="text"
                  placeholder="Promo code (try UMRAH10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="basket__promo-input"
                />
                <button className="basket__promo-btn" onClick={applyPromo}>
                  Apply
                </button>
              </div>
            )}

            <div className="basket__summary-total">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>

            <button
              className="basket__checkout"
              onClick={() => setCheckoutDone(true)}
            >
              Proceed to Checkout →
            </button>

            <div className="basket__trust">
              <span>☪️ All products halal certified</span>
              <span>🔒 Secure checkout</span>
              <span>🚚 Same-day delivery available</span>
            </div>

            <div className="basket__payment-icons">
              <span className="basket__payment-icon">VISA</span>
              <span className="basket__payment-icon">MC</span>
              <span className="basket__payment-icon">AMEX</span>
              <span className="basket__payment-icon">PayPal</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
