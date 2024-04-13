import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import "./styles/tailwind.css";
import "./styles/App.css";

import Home from "./pages/Home";
import Products from "./pages/products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Categories from "./pages/categories";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./pages/Checkout";



function App() {
  const ProtectedRoute = ({ children }) => {
    let location = useLocation();
    const token = localStorage.getItem('token')
    if (token === null) {
      return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
  
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={
                   <ProtectedRoute>
                   <Profile />
                   </ProtectedRoute>
        } />
          <Route path="wishlist" element={
                           <ProtectedRoute>
                           <Wishlist />
                           </ProtectedRoute>
        } />
           <Route path="cart" element={
           <ProtectedRoute>
           <Cart/>
           </ProtectedRoute>} /> 
          

          <Route path="orders" element={
                     <ProtectedRoute>
                     <Orders />
                     </ProtectedRoute>
        } />
          <Route path="admin" element={<Admin />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
