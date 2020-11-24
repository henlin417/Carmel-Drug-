import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeProductScreen from './screens/HomeProductScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import TermsScreen from './screens/TermsScreen';
import PrivacyScreen from './screens/PrivacyScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" className="header__logo"><img src="/images/logo/Carmel_HeaderLogo.png" alt="header logo" width="380" /></Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <Link to="/homeproductscreen">Shop</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
                <Link to="/signin">Sign In</Link>
              )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <img src="/images/logo/Carmel_Logo.png" alt="sidebar logo" />
          <h2>Shopping Categories</h2>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <h3>Reading Glasses</h3>
            <li>
              <Link to="/category/Zoom" className="categories__name">Zoom</Link>
            </li>

            <li>
              <Link to="/category/Edell" className="categories__name">Dr. Dean Edell</Link>
            </li>

            <li>
              <Link to="/category/Studio" className="categories__name">Studio</Link>
            </li>
            
            <br/>
       
            <h3>Local Products</h3>
            <li>
              <Link to="/category/Bonny Doon Farm" className="categories__name">Bonny Doon Farm</Link>
            </li>

            <li>
              <Link to="/category/Sierra Essentials" className="categories__name">Sierra Essentials</Link>
            </li>

            <br/>

            <h3>Fine Fragrances</h3>
            <li>
              <Link to="/category/Geo F. Trumper" className="categories__name">Geo F. Trumper</Link>
            </li>

            <li>
              <Link to="/category/Royall Lyme" className="categories__name">Royall Lyme</Link>
            </li>

            <br/>

            <h3>Luxury Ensemble</h3>
            <li>
              <Link to="/category/Marvis" className="categories__name">Marvis Toothpaste</Link>
            </li>

            <li>
              <Link to="/category/Taylor" className="categories__name">Taylor of Old Bond Street</Link>
            </li>

            <br/>

            <h3>Bath Care</h3>
            <li>
              <Link to="/category/MAJA" className="categories__name">MAJA</Link>
            </li>

            <li>
              <Link to="/category/SpaCell" className="categories__name">SpaCell</Link>
            </li>

            <br/>

            <h3>Skin Care</h3>
            <li>
              <Link to="/category/Vitabath" className="categories__name">Vitabath</Link>
            </li>

            <br/>

            <h3>Hair Products</h3>
            <li>
              <Link to="/category/Speert" className="categories__name">Speert Combs</Link>
            </li>

            <li>
              <Link to="/category/Mason" className="categories__name">Mason Pearson Comb & Brush</Link>
            </li>

            <li>
              <Link to="/category/Kent" className="categories__name">Kent Comb</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeProductScreen} />
            <Route path="/terms" component={TermsScreen} />
            <Route path="/privacy" component={PrivacyScreen} />
            <Route path="/homeproductscreen" exact={true} component={HomeProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          <span>
            &copy;{new Date().getFullYear()} Copyright Carmel Drug Store. 
          </span>
          <Link to="/privacy" className="footer__item">Privacy Policy</Link>
          <Link to="/Terms" className="footer__item">Terms & Conditions</Link>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
