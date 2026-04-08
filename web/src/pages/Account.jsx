import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

const demoUsers = [
  {
    id: 1,
    name: 'Fatima Okafor',
    email: 'fatima.o@example.com',
    initials: 'FO',
    location: 'Alum Rock, Birmingham',
    memberSince: 'March 2022',
    orders: [
      { id: '#UM-4821', date: '2 Apr 2026', items: 'Whole Halal Chicken, Plantain (Ripe), Suya Spice Blend', total: '£18.47', status: 'Delivered' },
      { id: '#UM-4756', date: '26 Mar 2026', items: 'Basmati Rice 5kg, Palm Oil, Lamb Shoulder', total: '£31.96', status: 'Delivered' },
      { id: '#UM-4701', date: '19 Mar 2026', items: 'Tiger Prawns, Free-Range Eggs, Hibiscus Drink', total: '£14.77', status: 'Delivered' },
    ],
    savedAddress: '14 Pelham Road, Birmingham, B8 1NJ',
    favourites: ['Whole Halal Chicken', 'Plantain (Ripe)', 'Suya Spice Blend', 'Palm Oil'],
  },
  {
    id: 2,
    name: 'Delroy Manning',
    email: 'delroy.m@example.com',
    initials: 'DM',
    location: 'Wolverhampton',
    memberSince: 'July 2021',
    orders: [
      { id: '#UM-4819', date: '1 Apr 2026', items: 'Goat Pieces, Scotch Bonnet Peppers, All-Purpose Seasoning', total: '£11.97', status: 'Delivered' },
      { id: '#UM-4744', date: '22 Mar 2026', items: 'Tilapia (Whole), Okra, Yam (White)', total: '£10.97', status: 'Delivered' },
      { id: '#UM-4689', date: '14 Mar 2026', items: 'Chicken Thighs, Mango Juice x4, Coconut Milk x2', total: '£16.04', status: 'Delivered' },
    ],
    savedAddress: '7 Church Street, Wolverhampton, WV1 1EY',
    favourites: ['Goat Pieces', 'Scotch Bonnet Peppers', 'Tilapia', 'Okra'],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    email: 'priya.s@example.com',
    initials: 'PS',
    location: 'Coventry',
    memberSince: 'January 2023',
    orders: [
      { id: '#UM-4820', date: '2 Apr 2026', items: 'Basmati Rice 5kg, Coriander Seeds, Greek Yoghurt', total: '£13.27', status: 'Delivered' },
      { id: '#UM-4748', date: '24 Mar 2026', items: 'Lamb Shoulder x2, Coconut Milk x3, Tin Tomatoes x4', total: '£26.05', status: 'Delivered' },
      { id: '#UM-4693', date: '17 Mar 2026', items: 'All-Purpose Seasoning, Mango Juice, Free-Range Eggs', total: '£7.17', status: 'Delivered' },
    ],
    savedAddress: '32 Binley Road, Coventry, CV3 1HG',
    favourites: ['Basmati Rice', 'Lamb Shoulder', 'Coriander Seeds', 'Coconut Milk'],
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    email: 'ahmed.h@example.com',
    initials: 'AH',
    location: 'Small Heath, Birmingham',
    memberSince: 'October 2020',
    orders: [
      { id: '#UM-4818', date: '31 Mar 2026', items: 'Lamb Shoulder, Beef Mince 500g x2, Basmati Rice 5kg', total: '£32.46', status: 'Delivered' },
      { id: '#UM-4750', date: '23 Mar 2026', items: 'Whole Halal Chicken x3, Tiger Prawns, Smoked Mackerel', total: '£32.94', status: 'Delivered' },
      { id: '#UM-4681', date: '14 Mar 2026', items: 'Palm Oil, Suya Spice Blend x2, Tin Tomatoes x6', total: '£14.67', status: 'Delivered' },
    ],
    savedAddress: '88 Coventry Road, Small Heath, Birmingham, B10 0TL',
    favourites: ['Lamb Shoulder', 'Whole Halal Chicken', 'Basmati Rice', 'Palm Oil'],
  },
];

const statusColor = { Delivered: '#2d8a4e', Processing: '#c9a452', Shipped: '#6096ba' };

export default function Account() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('orders');

  const login = (u) => {
    setUser(u);
    setLoggedIn(true);
    setActiveTab('orders');
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  if (!loggedIn) {
    return (
      <main className="acct">
        <section className="acct__login-hero">
          <div className="acct__login-hero-bg" aria-hidden="true" />
          <div className="container">
            <p className="section-label">My Account</p>
            <h1 className="acct__login-title">Welcome back</h1>
            <p className="acct__login-sub">
              Choose a demo account below to explore the account dashboard.
            </p>
          </div>
        </section>

        <div className="container acct__login-body">
          <p className="acct__demo-note">
            <span>Demo Mode</span> — Select any account to log in and explore order history, saved addresses, and favourites.
          </p>
          <div className="acct__demo-grid">
            {demoUsers.map(u => (
              <button key={u.id} className="acct__demo-card" onClick={() => login(u)}>
                <div className="acct__demo-avatar">{u.initials}</div>
                <div className="acct__demo-info">
                  <div className="acct__demo-name">{u.name}</div>
                  <div className="acct__demo-email">{u.email}</div>
                  <div className="acct__demo-location">📍 {u.location}</div>
                  <div className="acct__demo-since">Member since {u.memberSince}</div>
                </div>
                <span className="acct__demo-login-btn">Log In →</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="acct">
      {/* Account header */}
      <section className="acct__dash-hero">
        <div className="acct__login-hero-bg" aria-hidden="true" />
        <div className="container acct__dash-hero-inner">
          <div className="acct__user-badge">
            <div className="acct__user-avatar">{user.initials}</div>
            <div>
              <h1 className="acct__user-name">{user.name}</h1>
              <p className="acct__user-email">{user.email}</p>
              <p className="acct__user-meta">📍 {user.location} · Member since {user.memberSince}</p>
            </div>
          </div>
          <button className="acct__logout" onClick={logout}>Log Out</button>
        </div>
      </section>

      <div className="container acct__dash-body">
        {/* Tabs */}
        <div className="acct__tabs">
          {['orders', 'favourites', 'address', 'settings'].map(tab => (
            <button
              key={tab}
              className={`acct__tab ${activeTab === tab ? 'acct__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'orders' && '📦 Order History'}
              {tab === 'favourites' && '❤️ Favourites'}
              {tab === 'address' && '📍 Saved Address'}
              {tab === 'settings' && '⚙️ Settings'}
            </button>
          ))}
        </div>

        {/* Orders tab */}
        {activeTab === 'orders' && (
          <div className="acct__panel">
            <h2 className="acct__panel-title">Your Orders</h2>
            <div className="acct__orders">
              {user.orders.map(order => (
                <div key={order.id} className="acct__order-card">
                  <div className="acct__order-top">
                    <span className="acct__order-id">{order.id}</span>
                    <span
                      className="acct__order-status"
                      style={{ color: statusColor[order.status] || 'var(--gold)' }}
                    >
                      ● {order.status}
                    </span>
                  </div>
                  <div className="acct__order-date">{order.date}</div>
                  <div className="acct__order-items">{order.items}</div>
                  <div className="acct__order-bottom">
                    <span className="acct__order-total">{order.total}</span>
                    <button className="acct__order-reorder">Reorder</button>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/groceries" className="btn-outline" style={{ marginTop: 24, display: 'inline-flex' }}>
              Shop Again →
            </Link>
          </div>
        )}

        {/* Favourites tab */}
        {activeTab === 'favourites' && (
          <div className="acct__panel">
            <h2 className="acct__panel-title">Your Favourites</h2>
            <div className="acct__favs">
              {user.favourites.map((fav, i) => (
                <div key={i} className="acct__fav-item">
                  <span className="acct__fav-heart">❤️</span>
                  <span className="acct__fav-name">{fav}</span>
                  <Link to="/groceries" className="acct__fav-shop">Shop →</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Address tab */}
        {activeTab === 'address' && (
          <div className="acct__panel">
            <h2 className="acct__panel-title">Saved Address</h2>
            <div className="acct__address-card">
              <div className="acct__address-label">🏠 Home Address</div>
              <div className="acct__address-value">{user.savedAddress}</div>
              <div className="acct__address-default">✓ Default delivery address</div>
            </div>
            <div className="acct__address-info">
              <p>Your delivery address is used to calculate delivery eligibility and fees. We currently deliver within 5 miles of our Alum Rock Road store.</p>
            </div>
          </div>
        )}

        {/* Settings tab */}
        {activeTab === 'settings' && (
          <div className="acct__panel">
            <h2 className="acct__panel-title">Account Settings</h2>
            <div className="acct__settings-list">
              <div className="acct__setting-item">
                <div className="acct__setting-label">Full Name</div>
                <div className="acct__setting-value">{user.name}</div>
              </div>
              <div className="acct__setting-item">
                <div className="acct__setting-label">Email Address</div>
                <div className="acct__setting-value">{user.email}</div>
              </div>
              <div className="acct__setting-item">
                <div className="acct__setting-label">Newsletter</div>
                <div className="acct__setting-value">
                  <span className="acct__setting-badge">Subscribed</span>
                </div>
              </div>
              <div className="acct__setting-item">
                <div className="acct__setting-label">Halal Preference</div>
                <div className="acct__setting-value">
                  <span className="acct__setting-badge">Halal Only ☪️</span>
                </div>
              </div>
              <div className="acct__setting-item">
                <div className="acct__setting-label">Language</div>
                <div className="acct__setting-value">English (UK)</div>
              </div>
            </div>
            <p className="acct__settings-note">This is a demo account — settings changes are not saved.</p>
          </div>
        )}
      </div>
    </main>
  );
}
