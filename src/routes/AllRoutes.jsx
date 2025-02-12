import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Placed from "../pages/Placed";
import ProtectedRoute from "./ProtectedRoute";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-placed" element={<Placed />} />
            </Route>
        </Routes>
    );
};

export default AllRoutes;
