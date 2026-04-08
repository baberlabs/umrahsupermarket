import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './FeaturedProducts.css';

const featured = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Top Rated').slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="feat">
      <div className="container feat__wrap">
        <div className="feat__head">
          <div>
            <p className="section-label">This Week's Picks</p>
            <h2 className="feat__title">Fresh In &amp; Fan Favourites</h2>
          </div>
          <Link to="/groceries" className="btn-outline">Browse All →</Link>
        </div>

        <div className="feat__grid">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
