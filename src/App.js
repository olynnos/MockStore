import React from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Default from "./pages/DefaultPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SideCart from "./components/SideCart";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route component={Default} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
