import { Link } from "react-router-dom";
import { onImageError } from "../utils/imageFallback";
import "./Blog.css";

const posts = [
  {
    slug: "halal-kitchen-staples",
    title: "5 Halal Kitchen Staples Every Home Should Keep",
    excerpt:
      "A practical starter list for everyday meals, batch cooking, and family favourites.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "weekly-meal-prep",
    title: "Weekly Meal Prep with Fresh Produce in Under 60 Minutes",
    excerpt:
      "How to prep smart, reduce waste, and keep weekday cooking simple.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "spice-basics",
    title: "Spice Basics: Building Flavour Across African and Asian Dishes",
    excerpt:
      "From whole spices to blends, this guide helps you season with confidence.",
    image:
      "https://images.unsplash.com/photo-1505253213348-cd54c92b37e6?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "budget-basket",
    title: "Budget Basket Guide: Shop Better Without Compromising Quality",
    excerpt:
      "Tips for balancing value, nutrition, and flavour on every grocery trip.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Blog() {
  return (
    <main className="blog">
      <section className="blog__hero">
        <div className="container">
          <p className="section-label">Blog & Recipes</p>
          <h1 className="blog__title">
            Food stories, recipes, and shopping tips
          </h1>
          <p className="blog__sub">
            Helpful reads for halal shopping, weekly cooking, and pantry
            planning.
          </p>
        </div>
      </section>

      <section className="blog__list">
        <div className="container">
          <div className="blog__grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog__card">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  onError={onImageError}
                />
                <div className="blog__body">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link to="/groceries" className="blog__read">
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
