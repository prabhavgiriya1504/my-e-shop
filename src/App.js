import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/component/footer/Footer';
import Product from './customer/component/Product/Product.jsx';

function App() {
  return (
    <div className="">
      <Navigation />
       <div>
        {/* <HomePage /> */}
        <Product />
       </div>
     <Footer />
    </div>
  );
}

export default App;
