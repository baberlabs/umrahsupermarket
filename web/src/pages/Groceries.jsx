import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories, subCategories, categoryCards } from '../data/products';
import './Groceries.css';

const PAGE_SIZE = 8;

const PRICE_RANGES = [
  { label: 'Under £2',    min: 0,  max: 2    },
  { label: '£2 – £5',    min: 2,  max: 5    },
  { label: '£5 – £10',   min: 5,  max: 10   },
  { label: 'Over £10',   min: 10, max: Infinity },
];

const ORIGINS = ['All', 'West Africa', 'Caribbean', 'South Asia', 'UK Local', 'Mediterranean'];

const DIETARY = ['Halal', 'Organic', 'Gluten-Free', 'Vegan', 'Vegetarian'];

function FilterBox({ title, icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="filterbox">
      <button className="filterbox__head" onClick={() => setOpen(v => !v)}>
        {icon && <span className="filterbox__icon">{icon}</span>}
        <span>{title}</span>
        <svg
          className={`filterbox__chevron ${open ? 'open' : ''}`}
          width="12" height="12" viewBox="0 0 12 12"
          fill="none" stroke="currentColor" strokeWidth="1.8"
        >
          <path d="M2 4l4 4 4-4"/>
        </svg>
      </button>
      {open && <div className="filterbox__body">{children}</div>}
    </div>
  );
}

export default function Groceries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState(null);
  const [dietaryFilter, setDietaryFilter] = useState([]);
  const [subCat, setSubCat] = useState('All');
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const activeCat = searchParams.get('cat') || 'all';

  useEffect(() => {
    const q = searchParams.get('search');
    if (q) setSearch(q);
    setPage(1);
    setSubCat('All');
  }, [searchParams]);

  const setCat = (cat) => {
    const next = new URLSearchParams(searchParams);
    if (cat === 'all') next.delete('cat');
    else next.set('cat', cat);
    next.delete('search');
    setSearch('');
    setPage(1);
    setSubCat('All');
    setSearchParams(next);
  };

  // Hero image from categoryCards
  const heroCard = categoryCards.find(c => c.id === activeCat);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCat !== 'all') list = list.filter(p => p.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q)
      );
    }
    if (priceFilter) {
      list = list.filter(p => p.price >= priceFilter.min && p.price < priceFilter.max);
    }
    return list;
  }, [activeCat, search, priceFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const activeCatLabel = categories.find(c => c.id === activeCat)?.label || 'All Products';
  const subCats = activeCat !== 'all' ? (subCategories[activeCat] || []) : [];

  return (
    <main className="groc">
      {/* ── Category hero banner ─────────────────── */}
      {heroCard ? (
        <div className="groc__hero" style={{ '--hero-img': `url(${heroCard.image})` }}>
          <div className="groc__hero-overlay" />
          <div className="container groc__hero-inner">
            <div className="groc__hero-text">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="breadcrumb__sep">›</span>
                <Link to="/categories">Categories</Link>
                <span className="breadcrumb__sep">›</span>
                <span className="breadcrumb__current">{heroCard.label}</span>
              </nav>
              <h1 className="groc__hero-title">{heroCard.label}</h1>
              <p className="groc__hero-sub">{heroCard.subLabel}</p>
            </div>
          </div>
          {/* Sub-category icon tabs */}
          {subCats.length > 0 && (
            <div className="groc__subcats">
              <div className="container groc__subcats-inner">
                {subCats.map(s => (
                  <button
                    key={s}
                    className={`groc__subcat ${subCat === s ? 'active' : ''}`}
                    onClick={() => setSubCat(s)}
                  >
                    <div className="groc__subcat-circle">
                      <span>{s[0]}</span>
                    </div>
                    <span className="groc__subcat-label">{s}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="groc__simple-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb__sep">›</span>
              <span className="breadcrumb__current">All Groceries</span>
            </nav>
            <h1 className="groc__simple-title">
              {search ? `Results for "${search}"` : 'All Groceries'}
            </h1>
          </div>
        </div>
      )}

      {/* ── Layout: sidebar + products ──────────── */}
      <div className="container groc__body">
        {/* Sidebar */}
        <aside className="groc__sidebar">
          <div className="groc__smart-filters">
            <div className="groc__sf-head">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              <span>Smart Filters</span>
            </div>

            <FilterBox title="Category" icon="✓">
              <ul className="groc__filter-list">
                {categories.map(c => (
                  <li key={c.id}>
                    <button
                      className={`groc__filter-opt ${activeCat === c.id ? 'active' : ''}`}
                      onClick={() => setCat(c.id)}
                    >
                      <span className="groc__filter-check">
                        {activeCat === c.id && '✓'}
                      </span>
                      {c.label}
                      <span className="groc__filter-count">
                        {c.id === 'all' ? products.length : products.filter(p => p.category === c.id).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </FilterBox>

            <FilterBox title="Price" icon="✓">
              <ul className="groc__filter-list">
                <li>
                  <button
                    className={`groc__filter-opt ${!priceFilter ? 'active' : ''}`}
                    onClick={() => setPriceFilter(null)}
                  >
                    <span className="groc__filter-check">{!priceFilter && '✓'}</span>
                    Any price
                  </button>
                </li>
                {PRICE_RANGES.map(r => (
                  <li key={r.label}>
                    <button
                      className={`groc__filter-opt ${priceFilter?.label === r.label ? 'active' : ''}`}
                      onClick={() => setPriceFilter(priceFilter?.label === r.label ? null : r)}
                    >
                      <span className="groc__filter-check">
                        {priceFilter?.label === r.label && '✓'}
                      </span>
                      {r.label}
                    </button>
                  </li>
                ))}
              </ul>
            </FilterBox>

            <FilterBox title="Origin" icon="✓">
              <ul className="groc__filter-list">
                {ORIGINS.map(o => (
                  <li key={o}>
                    <button className="groc__filter-opt">
                      <span className="groc__filter-check" />
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            </FilterBox>

            <FilterBox title="Dietary" icon="🔍" defaultOpen={false}>
              <ul className="groc__filter-list">
                {DIETARY.map(d => (
                  <li key={d}>
                    <button
                      className={`groc__filter-opt ${dietaryFilter.includes(d) ? 'active' : ''}`}
                      onClick={() => setDietaryFilter(prev =>
                        prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
                      )}
                    >
                      <span className="groc__filter-check">
                        {dietaryFilter.includes(d) && '✓'}
                      </span>
                      {d}
                    </button>
                  </li>
                ))}
              </ul>
            </FilterBox>
          </div>
        </aside>

        {/* Products */}
        <div className="groc__main">
          {/* Toolbar */}
          <div className="groc__toolbar">
            <div className="groc__search-wrap">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                className="groc__search"
              />
            </div>
            <span className="groc__count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {/* Grid */}
          {paginated.length > 0 ? (
            <div className="groc__grid">
              {paginated.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="groc__empty">
              <span>🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your filters or search term.</p>
              <button className="btn-outline" onClick={() => { setCat('all'); setSearch(''); setPriceFilter(null); }}>
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="groc__pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  className={`groc__page-btn ${p === page ? 'active' : ''}`}
                  onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {p}
                </button>
              ))}
              {page < totalPages && (
                <button
                  className="groc__page-btn groc__page-next"
                  onClick={() => { setPage(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  Next ›
                </button>
              )}
            </div>
          )}

          {/* Popular Picks + Guide panel */}
          {paginated.length > 0 && (
            <div className="groc__bottom-panels">
              <div className="groc__popular">
                <h3 className="groc__panel-title">Popular Picks</h3>
                <p className="groc__popular-reviews">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                  &amp; 5,506 Reviews across all products
                </p>
                <div className="groc__popular-grid">
                  {products.filter(p => p.badge === 'Top Rated' || p.badge === 'Best Seller').slice(0, 2).map(p => (
                    <div key={p.id} className="groc__popular-card">
                      <img src={p.image} alt={p.name} />
                      <div>
                        <p className="groc__popular-name">{p.name}</p>
                        <p className="groc__popular-price">£{p.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="groc__guide">
                <h3 className="groc__panel-title">A Guide to Halal Standards</h3>
                <p className="groc__guide-intro">All meat at Umrah is certified by a recognised UK halal authority.</p>
                <ul className="groc__guide-list">
                  <li><strong>Hand-slaughtered:</strong> Individual slaughter with prayer, as required.</li>
                  <li><strong>No stunning:</strong> Unless specifically requested and certified permissible.</li>
                  <li><strong>Full traceability:</strong> Farm-to-counter records available on request.</li>
                  <li><strong>Weekly audits:</strong> Our suppliers undergo regular certification checks.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
