import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductDetailPage from './Pages/ProductDetailPage';
import CagaloguePage from './Pages/CataloguePage/CataloguePage';
import Cart from './Pages/CartPage/CartPage';
import { CartProvider } from './Containers/CartContext';
import BuyOrder from './components/Order/BuyOrder';
import Footer from './components/Footer/Footer';
import IndexPage from './Pages/IndexPage/IndexPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import Contact from './Pages/ContactPage/Contact';

function App () {
    return(
    <CartProvider>
      <div className="body">
        <Router>
          <NavBar/>
          <Switch>
              <Route exact path="/">
                <IndexPage/>
              </Route>
              <Route exact path="/Tienda">
                <CagaloguePage />
              </Route>
              <Route exact path="/Tienda/:id">
            <ProductDetailPage/>
              </Route>
              <Route exact path="/Carrito">
                <Cart/>
              </Route>
              <Route path="/Carrito/Buy">
              <BuyOrder/>
              </Route>
              <Route path="/AboutUs">
              <AboutUsPage/>
              </Route>
              <Route path="/Contact">
              <Contact/>
              </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </CartProvider>
    )
  }

export default App;
