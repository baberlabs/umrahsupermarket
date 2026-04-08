import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import Groceries from './pages/Groceries';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname, search]);
  return null;
}

function PlaceholderPage({ title, emoji }) {
  return (
    <main style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '60vh', gap: '16px',
      textAlign: 'center', padding: '60px 24px'
    }}>
      <span style={{ fontSize: 56 }}>{emoji}</span>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--text-primary)' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 380 }}>
        This page is coming soon. Check back later for exciting content.
      </p>
      <a href="/" className="btn-outline" style={{ marginTop: 8 }}>← Back to Home</a>
    </main>
  );
}

function NotFound() {
  return (
    <main style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '60vh', textAlign: 'center', gap: '16px', padding: '60px 24px'
    }}>
      <span style={{ fontSize: 56 }}>🛒</span>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 64, color: 'var(--gold)', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: 22, color: 'var(--text-primary)' }}>Page not found</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 360, fontSize: 15 }}>
        This aisle doesn't exist. Head back to the shop floor.
      </p>
      <a href="/" className="btn-primary" style={{ marginTop: 8 }}>← Back to Home</a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/groceries"  element={<Groceries />} />
        <Route path="/about"      element={<About />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/deals"      element={<PlaceholderPage title="Deals & Offers" emoji="🏷️" />} />
        <Route path="/blog"       element={<PlaceholderPage title="Blog & Recipes" emoji="📖" />} />
        <Route path="/account"    element={<PlaceholderPage title="My Account" emoji="👤" />} />
        <Route path="/basket"     element={<PlaceholderPage title="My Basket" emoji="🛒" />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
