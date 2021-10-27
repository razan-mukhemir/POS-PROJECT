import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import Products from "../products/Products";
import Categories from "../categories/Categories";
import Expenses from "../expenses/Expenses";
import EditProduct from "../products/EditProduct";
import Navbar from "../../components/navbar/Navbar";
const ShellPage: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/editProduct/:id" component={EditProduct} />
      </Switch>
    </Router>
  );
};

export default ShellPage;
