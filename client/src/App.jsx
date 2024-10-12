import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/products";
import AdminOrders from "./pages/admin/orders";
import AdminFeatures from "./pages/admin/features";
import ShoppingLayout from "./components/shopping/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping/home";
import ShoppingProducts from "./pages/shopping/products";
import ShoppingCheckout from "./pages/shopping/checkout";
import ShoppingAccount from "./pages/shopping/account";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={<ShoppingHome />} />
        <Route path="*" element={<NotFound />} />
        {/* authentification router */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* admin router */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        {/* shop router */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="products" element={<ShoppingProducts />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
