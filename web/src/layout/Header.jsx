import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Header = () => {
  return (
    <header className="bg-black text-white border-b border-[#F3AA34]">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Logo />
          <SearchBar />
          <SecondaryNav />
        </div>
        <div className="mt-4 pt-4 border-t border-white">
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
    <form className="flex flex-col gap-2 w-full md:max-w-xl" role="search">
      <label
        htmlFor="search-products"
        className="text-xs uppercase tracking-wide"
      >
        Find your products quickly
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <select
          id="category"
          name="category"
          className="h-11 min-w-32 rounded-md border border-white bg-black px-3 text-white"
        >
          {categories.map(({ value, label }) => {
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <div className="relative flex-1">
          <input
            id="search-products"
            type="text"
            name="search-products"
            placeholder="Search products..."
            className="h-11 w-full rounded-md border border-white bg-white px-3 pr-24 text-sm text-black placeholder:text-black"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 h-9 rounded-md bg-[#F3AA34] px-3 text-xs font-semibold uppercase text-black"
          >
            Search
          </button>
        </div>
      </div>
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
      <ul className="flex flex-wrap items-center gap-2 md:gap-4">
        {navLinks.map(({ label, to }) => (
          <li key={label}>
            <NLink to={to} label={label} />
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
      <ul className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
        {utilityLinks.map(({ label, to }) => (
          <li key={label}>
            <NLink
              to={to}
              label={label}
              className="inline-flex h-10 items-center rounded-md border border-white px-3"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NLink = ({ to, label, className }) => {
  const baseClass =
    "inline-flex h-10 items-center rounded-md px-3 text-sm uppercase tracking-wide text-white transition-colors hover:bg-[#F3AA34] hover:text-black";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${baseClass} bg-[#F3AA34] text-black font-semibold ${className || ""}`
          : `${baseClass} ${className || ""}`
      }
    >
      {label}
    </NavLink>
  );
};
