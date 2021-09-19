import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../products/Products";
import Categories from "../categories/Categories";
import Expenses from "../expenses/Expenses";
import Navbar from "../../components/navbar/Navbar";
const ShellPage: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Products" component={Products} />
        <Route path="/Categories" component={Categories} />
        <Route path="/Expenses" component={Expenses} />
      </Switch>
    </Router>
  );
};

export default ShellPage;
