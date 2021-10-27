import React from "react";
import "./App.css";
import Product from "./components/product/product";
// import Headbar from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from './components/buy-now/Item';
import Login from './components/login/login';
import Fetchdata from "./components/api/api";
import { ShippingPage } from "./components/Shipping_progress/Shipping_progress/shippingPage/ShippingPage";
import { Navbar } from "./components/Shipping_progress/Shipping_progress/Navbar/Navbar";
import Home from "./components/home/home";
import Homepage from "./components/HomePage/App";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/e-commerce" exact>
              <Navbar />
              <Product />
            </Route>
            <Route path="/home" exact>
              <Homepage />
            </Route>
            <Route path="/main-page" exact>
              <Navbar />
              <Item />
            </Route>
            <Route path="/shipping_page" exact>
              <Navbar />
              <ShippingPage />
            </Route>
            <Route path="/sign-in" exact>
              <Login />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
