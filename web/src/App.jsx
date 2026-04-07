import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Newsletter, Footer } from "./layout";
import {
  About,
  Account,
  Checkout,
  Contact,
  Groceries,
  Home,
  NotFound,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
