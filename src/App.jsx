import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import Groceries from "./pages/Groceries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Account from "./pages/Account";
import Basket from "./pages/Basket";
import Deals from "./pages/Deals";
import Blog from "./pages/Blog";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, search]);
  return null;
}

function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        gap: "16px",
        padding: "60px 24px",
      }}
    >
      <span style={{ fontSize: 56 }}>🛒</span>
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 64,
          color: "var(--gold)",
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: 22, color: "var(--text-primary)" }}>
        Page not found
      </h2>
      <p
        style={{ color: "var(--text-secondary)", maxWidth: 360, fontSize: 15 }}
      >
        This aisle doesn't exist. Head back to the shop floor.
      </p>
      <a href="/" className="btn-primary" style={{ marginTop: 8 }}>
        ← Back to Home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/account" element={<Account />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
