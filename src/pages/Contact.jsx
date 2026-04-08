import { useState } from "react";
import "./Contact.css";

const hours = [
  { day: "Monday – Saturday", time: "8:00am – 10:00pm" },
  { day: "Sunday", time: "10:00am – 6:00pm" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <main className="contact">
      {/* Header */}
      <section className="contact__hero">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1 className="contact__title">We'd love to hear from you</h1>
          <p className="contact__sub">
            Questions, feedback, supplier enquiries, or just want to say hello —
            we're always happy to chat.
          </p>
        </div>
      </section>

      <div className="container contact__layout">
        {/* Info */}
        <div className="contact__info">
          <div className="contact__info-card">
            <div className="contact__info-icon">📍</div>
            <div>
              <h3>Our Store</h3>
              <p>Unit 9, St Georges Retail Park</p>
              <p>Leicester, LE1 1SG</p>
              <p>East Midlands, UK</p>
            </div>
          </div>

          <div className="contact__info-card">
            <div className="contact__info-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <a href="tel:01210000000">07448 2082010</a>
              <p className="contact__info-note">
                Mon–Sat 8am–10pm, Sun 10am-6pm
              </p>
            </div>
          </div>

          <div className="contact__info-card">
            <div className="contact__info-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:hello@umrahsupermarkets.com">
                hello@umrahsupermarkets.com
              </a>
              <p className="contact__info-note">We reply within 24 hours</p>
            </div>
          </div>

          <div className="contact__hours">
            <h3>Opening Hours</h3>
            <ul>
              {hours.map((h, i) => (
                <li key={i} className="contact__hour-row">
                  <span>{h.day}</span>
                  <span className="gold">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="contact__hours-note">
              <div className="contact__dot-live" />
              <span>Open now — closing at 10:00pm</span>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="contact__map">
            <div className="contact__map-inner">
              <span>🗺️</span>
              <p>Unit 9, St Georges Retail Park, Leceister LE1 1SG</p>
              <a
                href="https://www.google.com/maps?q=Unit+9+St+Georges+Retail+Park+Leceister+LE1+1SG"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-link"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact__form-wrap">
          <div className="contact__form-header">
            <h2>Send us a message</h2>
            <p>
              Fill out the form and we'll get back to you within one working
              day.
            </p>
          </div>

          {status === "success" ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>
                Thanks for getting in touch. We'll reply to{" "}
                <strong>{form.email || "you"}</strong> within 24 hours.
              </p>
              <button className="btn-outline" onClick={() => setStatus("idle")}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject…</option>
                  <option>General enquiry</option>
                  <option>Product availability</option>
                  <option>Delivery question</option>
                  <option>Halal certification</option>
                  <option>Supplier enquiry</option>
                  <option>Feedback / complaint</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help…"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary contact__submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Social strip */}
      <section className="contact__social-strip">
        <div className="container">
          <p>Follow us for deals, new arrivals &amp; community updates</p>
          <div className="contact__social-links">
            <a href="#" className="contact__social-btn">
              📘 Facebook
            </a>
            <a href="#" className="contact__social-btn">
              📷 Instagram
            </a>
            <a href="#" className="contact__social-btn">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
