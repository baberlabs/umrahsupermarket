import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Header = () => {
  return (
    <header className="bg-[#000000] text-[#fefefe] border-b border-[#1a1a1a] font-sans">
      <div className="max-w-7xl mx-auto px-7">
        <div className="flex items-center justify-between gap-4 py-3.5">
          <Logo />
          <SearchBar />
          <SecondaryNav />
        </div>
        <div className="border-t border-[#141414] py-2.5">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

const SearchBar = () => {
  const categories = [
    { value: "all", label: "All" },
    { value: "bakery", label: "Bakery" },
    { value: "beverages", label: "Beverages" },
    { value: "dairy", label: "Dairy" },
    { value: "frozen", label: "Frozen Foods" },
    { value: "household", label: "Household" },
    { value: "meat", label: "Meat & Poultry" },
    { value: "pantry", label: "Pantry Staples" },
    { value: "personal-care", label: "Personal Care" },
    { value: "produce", label: "Fresh Produce" },
    { value: "seafood", label: "Seafood" },
    { value: "snacks", label: "Snacks" },
  ];

  return (
    <form
      className="flex flex-1 max-w-[520px] items-center gap-2 bg-[#111] border border-[#2a2a2a] rounded-full px-3 py-1.5 focus-within:border-[#f3aa34] transition-colors"
      role="search"
    >
      <label htmlFor="search-products" className="sr-only">
        Find your products quickly
      </label>
      <select
        id="category"
        name="category"
        className="bg-transparent border-none text-[#999] text-xs outline-none cursor-pointer border-r border-[#2a2a2a] pr-2 mr-1"
      >
        {categories.map(({ value, label }) => (
          <option
            key={value}
            value={value}
            className="bg-[#111] text-[#fefefe]"
          >
            {label}
          </option>
        ))}
      </select>
      <input
        id="search-products"
        type="text"
        name="search-products"
        placeholder="Search products…"
        className="flex-1 bg-transparent border-none outline-none text-[#fefefe] text-sm placeholder:text-[#555]"
      />
      <button
        type="submit"
        className="bg-[#f3aa34] text-black rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider flex-shrink-0 hover:bg-[#e09a20] transition-colors"
      >
        Search
      </button>
    </form>
  );
};

const MainNav = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Groceries", to: "/groceries" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {navLinks.map(({ label, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#f3aa34] text-black"
                  : "inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#666] hover:text-[#fefefe] hover:bg-[#111] transition-colors"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SecondaryNav = () => {
  const utilityLinks = [
    { label: "Account", to: "/account" },
    { label: "Basket", to: "/checkout" },
    { label: "Help", to: "/contact" },
  ];

  return (
    <nav aria-label="Secondary navigation">
      <ul className="flex items-center gap-1">
        {utilityLinks.map(({ label, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#222] text-[#999] text-xs font-medium hover:border-[#f3aa34] hover:text-[#f3aa34] transition-colors"
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
