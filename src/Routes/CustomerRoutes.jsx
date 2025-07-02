import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage.jsx";
import Cart from "../customer/component/Cart/Cart.jsx";
import Navigation from "../customer/component/Navigation/Navigation.jsx";
import Footer from "../customer/component/footer/Footer.jsx";
import Product from "../customer/component/Product/Product.jsx";
import Checkout from "../customer/component/Checkout/Checkout.jsx";
import ProductDetails from "../customer/component/ProductDetails/ProductDetils.jsx";
import Order from "../customer/component/Order/Order.jsx";
import OrderDetails from "../customer/component/Order/OrderDetails.jsx";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Routes>

          <Route path="/login" element={<HomePage/>}></Route>
          <Route path="/register" element={<HomePage/>}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/:lavel1/:lavel2/:lavel3" element={<Product />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />}></Route>
          <Route path="/checkout" element={<Checkout /> }></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route path="/account/order/:order_id" element={<OrderDetails />}></Route>

        </Routes>
      </div>



      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
