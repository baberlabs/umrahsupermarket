import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const faqs = [
  {
    category: 'Orders & Delivery',
    items: [
      {
        q: 'Do you offer home delivery?',
        a: 'Yes! We offer free local delivery on all orders over £50 within a 5-mile radius of our Alum Rock Road store. Orders under £50 carry a flat £3.99 delivery fee. Same-day delivery is available on most orders placed before 2pm, Monday to Saturday. We deliver Monday–Saturday between 9am and 7pm. Simply add your items to your basket, proceed to checkout, and enter your postcode to confirm eligibility.',
      },
      {
        q: 'How do I track my order?',
        a: 'Once your order has been dispatched, you will receive an SMS and email confirmation with an estimated delivery window. Our drivers carry mobile phones and will call you approximately 15 minutes before arrival. If you have an account, you can also log in and view real-time order status from your dashboard under "My Orders."',
      },
      {
        q: 'Can I collect in-store instead of getting delivery?',
        a: 'Absolutely. Click & Collect is available at our store at 123 Alum Rock Road, Birmingham B8 1JL. Select "Collect In-Store" at checkout, choose your preferred collection slot, and your order will be packed and ready. Collection slots are available 7 days a week from 8am to 8pm. There is no minimum order for collection and no collection fee.',
      },
      {
        q: 'What areas do you deliver to?',
        a: 'We currently deliver across Birmingham, including Alum Rock, Saltley, Small Heath, Bordesley Green, Washwood Heath, Erdington, Handsworth, Sparkhill, and surrounding areas within a 5-mile radius. We are actively expanding our delivery zone — enter your postcode at checkout to check whether you are covered. If your area is not yet available, please contact us and we will add you to our expansion list.',
      },
      {
        q: 'What happens if an item I ordered is out of stock?',
        a: 'In the rare event that an item you ordered is unavailable, our team will contact you before packing your order to offer a suitable substitution or a refund for that item. You will never be charged for an item you do not receive. We update stock levels daily to minimise this happening.',
      },
    ],
  },
  {
    category: 'Halal & Certification',
    items: [
      {
        q: 'Are all your meat products Halal certified?',
        a: 'Yes, 100%. Every single piece of meat and poultry sold at Umrah Supermarket is sourced exclusively from HFA (Halal Food Authority) and HFCE certified suppliers. We do not stock non-halal meat under any circumstances. Our halal certification documentation is available in-store and can be provided on request. We conduct regular audits of our supply chain to ensure compliance at every stage.',
      },
      {
        q: 'Which certification bodies do you work with?',
        a: 'We work with the Halal Food Authority (HFA), the Halal Certification Europe (HFCE), and the Islamic Food and Nutrition Council. For our imported products from West Africa, the Caribbean, and South Asia, we additionally verify certification through local Islamic certification bodies in the country of origin. All certification records are maintained on-site and reviewed annually.',
      },
      {
        q: 'Do you stock any non-halal products?',
        a: 'Our entire fresh meat and poultry range is strictly halal certified. For packaged and processed foods, we clearly label any items that may contain non-halal ingredients (e.g., E-numbers derived from animal sources). We recommend checking the product label and ingredient list if you have specific dietary requirements. Our staff are trained to assist with any queries about specific products.',
      },
      {
        q: 'Do you sell alcohol?',
        a: 'No. Umrah Supermarket does not sell alcohol or any products containing alcohol. This is a fundamental part of our values as a halal-committed supermarket. Our beverage range includes a wide selection of non-alcoholic drinks including juices, cordials, sparkling waters, soft drinks, and traditional African and Asian beverages such as zobo (hibiscus), bissap, and tamarind drinks.',
      },
    ],
  },
  {
    category: 'Products & Availability',
    items: [
      {
        q: 'Do you stock African, Caribbean, and Asian groceries?',
        a: 'This is our speciality. We stock an extensive range of ingredients from West Africa (Nigeria, Ghana, Senegal, Cameroon), the Caribbean (Jamaica, Trinidad, Barbados, Guyana), and South & East Asia (India, Pakistan, Bangladesh, Sri Lanka, the Philippines). Our buyers travel regularly to source authentic products that are hard to find elsewhere in Birmingham. If there is something specific you are looking for, speak to our team and we will do our best to source it.',
      },
      {
        q: 'How often do you receive fresh produce?',
        a: 'Our fresh produce, meat, and fish deliveries arrive daily, Monday to Saturday. Exotic produce such as plantain, yam, cassava, okra, African eggplant, and ackee is restocked several times per week depending on demand. Our shelves are checked and rotated every morning to ensure only the freshest items are on display. Any produce approaching its best-before date is discounted or donated to local food banks.',
      },
      {
        q: 'Can I request a product you do not currently stock?',
        a: 'Yes, and we actively encourage it! Our product range has grown largely through customer requests. Simply speak to any member of staff in-store, contact us via our website, or send us a message on WhatsApp. If there is sufficient demand and we can source the product from a reliable certified supplier, we will add it to our range. We review all product requests monthly.',
      },
      {
        q: 'Do you sell wholesale quantities?',
        a: 'Yes, we accommodate wholesale and bulk orders for restaurants, catering businesses, community groups, and mosques. We offer competitive pricing on bulk quantities of rice, spices, cooking oils, meat, and pantry staples. Please contact us at least 48 hours in advance to arrange a bulk order. A dedicated team member will work with you on pricing and scheduling.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    items: [
      {
        q: 'What is your returns policy?',
        a: 'We accept returns on non-perishable items within 14 days of purchase, provided they are unused, in original packaging, and accompanied by a receipt or proof of purchase. For perishable items (fresh meat, produce, dairy), we ask that any quality concerns are raised within 24 hours of purchase or delivery. We will offer a full refund or replacement — no quibbles. Simply bring the item in-store or contact us if the issue relates to a delivery order.',
      },
      {
        q: 'What if my delivery arrives damaged or incorrect?',
        a: 'We take great care when packing orders, but if something arrives damaged or is not what you ordered, please contact us within 24 hours with a photo of the issue. We will arrange a free replacement on your next delivery or issue a full refund to your original payment method within 3–5 working days. We do not charge a return delivery fee for items that are damaged or incorrect on our end.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Refunds to card payments typically take 3–5 working days to appear in your account, depending on your bank. Refunds for cash purchases are issued in-store immediately. If you paid via bank transfer for a bulk order, refunds are processed within 2 working days. You will receive an email confirmation as soon as your refund has been processed.',
      },
    ],
  },
  {
    category: 'Store & Contact',
    items: [
      {
        q: 'What are your opening hours?',
        a: 'We are open 7 days a week. Our standard hours are Monday to Saturday 8:00am – 9:00pm, and Sunday 9:00am – 7:00pm. We remain open on most bank holidays — please check our social media or call ahead on bank holiday weekends. During Ramadan, we extend our evening hours to 11:00pm to serve the community.',
      },
      {
        q: 'Where is the store located?',
        a: 'We are located at 123 Alum Rock Road, Birmingham, B8 1JL. We are conveniently situated on the main Alum Rock Road, with easy access by bus (routes 14 and 55 stop directly outside), and there is a free customer car park at the rear of the building, accessible via the side entrance on Pelham Road. The store is fully accessible with step-free entrance and wide aisles.',
      },
      {
        q: 'How can I contact you?',
        a: 'You can reach us by phone on 0121 000 0000 (Mon–Sat 8am–8pm, Sun 9am–6pm), by email at hello@umrahsupermarket.co.uk, or via the contact form on our website. We are also active on WhatsApp for quick queries — scan the QR code in-store or message the number above. For wholesale enquiries, please email wholesale@umrahsupermarket.co.uk.',
      },
      {
        q: 'Do you have parking?',
        a: 'Yes, we have a free customer car park at the rear of the store with 20 spaces, including 2 designated disabled bays. The car park is accessible from Pelham Road (the side street running alongside the store). Parking is free for up to 2 hours for customers. There is also on-street parking available on Alum Rock Road, though this can be busy during peak hours.',
      },
    ],
  },
  {
    category: 'Allergens & Dietary',
    items: [
      {
        q: 'Can you help with allergen information?',
        a: 'All packaged products in-store carry full ingredient and allergen information on their labels in compliance with UK food labelling regulations. The 14 major allergens (celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, nuts, peanuts, sesame, soya, and sulphur dioxide) are highlighted in bold on all applicable products. For loose products such as fresh meat and bulk spices, please ask a member of staff who can provide allergen information.',
      },
      {
        q: 'Do you cater for vegetarians and vegans?',
        a: 'Yes. We stock a wide range of vegetarian and vegan products, including plant-based alternatives, a full fresh produce section, legumes, grains, and vegan-certified pantry items. Our fresh fruit and vegetable range is entirely plant-based. We clearly label vegan and vegetarian products where applicable. Our spices, dried grains, and tinned goods sections are largely vegan-friendly.',
      },
      {
        q: 'Do you stock gluten-free products?',
        a: 'We stock a dedicated gluten-free range including pasta, bread, crackers, flours (rice flour, cassava flour, plantain flour), and snacks. Many of our traditional African and Caribbean staples — such as fufu, cassava, rice, and yam — are naturally gluten-free. Please check individual product labels for certification. If you have coeliac disease, please speak to our staff for guidance on cross-contamination risks for loose products.',
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq__chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq__answer"><p>{a}</p></div>}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <main className="faq">
      {/* Hero */}
      <section className="faq__hero">
        <div className="faq__hero-bg" aria-hidden="true" />
        <div className="container">
          <p className="section-label">Help Centre</p>
          <h1 className="faq__title">Frequently Asked Questions</h1>
          <p className="faq__subtitle">
            Everything you need to know about shopping at Umrah Supermarket.
            Can't find what you're looking for? <Link to="/contact" className="faq__contact-link">Get in touch →</Link>
          </p>
        </div>
      </section>

      <div className="container faq__body">
        {/* Category tabs */}
        <div className="faq__tabs">
          <button
            className={`faq__tab ${activeCategory === 'all' ? 'faq__tab--active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Topics
          </button>
          {faqs.map(f => (
            <button
              key={f.category}
              className={`faq__tab ${activeCategory === f.category ? 'faq__tab--active' : ''}`}
              onClick={() => setActiveCategory(f.category)}
            >
              {f.category}
            </button>
          ))}
        </div>

        {/* FAQ sections */}
        <div className="faq__sections">
          {filtered.map(section => (
            <div key={section.category} className="faq__section">
              <h2 className="faq__section-title">{section.category}</h2>
              <div className="faq__list">
                {section.items.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="faq__cta">
          <div className="faq__cta-inner">
            <span className="faq__cta-icon">💬</span>
            <h3>Still have a question?</h3>
            <p>Our team is available 7 days a week to help you with any query.</p>
            <div className="faq__cta-btns">
              <Link to="/contact" className="btn-primary">Contact Us →</Link>
              <a href="tel:01210000000" className="btn-outline">Call 0121 000 0000</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
