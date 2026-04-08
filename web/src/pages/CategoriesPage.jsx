import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryCards } from '../data/products';
import './CategoriesPage.css';

const PAGE_SIZE = 12;

export default function CategoriesPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = categoryCards.slice(0, visible);
  const hasMore = visible < categoryCards.length;

  return (
    <main className="catpage">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" className="breadcrumb__chevron">
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <Link to="/">Home</Link>
          <span className="breadcrumb__sep">›</span>
          <span className="breadcrumb__current">All Categories</span>
        </nav>

        {/* Page heading */}
        <div className="catpage__head">
          <h1 className="catpage__title">All Categories</h1>
          <div className="catpage__divider" />
          <p className="catpage__sub">
            Browse the best of our diverse grocery selection.<br />
            Click on a category to start exploring.
          </p>
        </div>

        {/* Image grid */}
        <div className="catpage__grid">
          {shown.map(cat => (
            <Link
              key={cat.id}
              to={`/groceries?cat=${cat.id}`}
              className="catpage__card"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="catpage__card-img"
                loading="lazy"
              />
              <div className="catpage__card-overlay" />
              <div className="catpage__card-foot">
                <span className="catpage__card-label">{cat.label}</span>
                <span className="catpage__card-arrow">›</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Show more */}
        {hasMore && (
          <div className="catpage__more">
            <button
              className="catpage__more-btn"
              onClick={() => setVisible(v => v + PAGE_SIZE)}
            >
              Show {Math.min(PAGE_SIZE, categoryCards.length - visible)} More Products
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
