import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/App.css";

import Home from "./pages/Home";
import Products from "./pages/products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Categories from "./pages/categories";
import CategoryDetails from "./components/categories/CategoryDetails";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:categoryId" element={<CategoryDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin" element={<Admin />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
