import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/component/footer/Footer';
import Product from './customer/component/Product/Product.jsx';
import ProductDetails from './customer/component/ProductDetails/ProductDetils.jsx';
import Cart from './customer/component/Cart/Cart.jsx';
import Checkout from './customer/component/Checkout/Checkout.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routes/CustomerRoutes.jsx';
import Order from './customer/component/Order/Order.jsx';
import OrderDetails from './customer/component/Order/OrderDetails.jsx';

function App() {
  return (
    <div className="">

      <Routes>
           <Route path='/*' element={<CustomerRoutes />}></Route>
           
      </Routes>
      
        
    </div>
  );
}

export default App;
