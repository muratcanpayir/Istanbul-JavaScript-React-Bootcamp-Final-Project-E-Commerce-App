import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hats from "../pages/Hats/Hats";
import Signup from "../pages/Signup/Signup";
import Tshirts from "../pages/Tshirts/Tshirts";
import Login from "../pages/Login/Login";
import TshirtDetail from "../pages/TshirtDetail/TshirtDetail";
import HatDetail from "../pages/HatDetail/HatDetail";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";

function Routes() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //if access token exist isLoggedIn true
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      {/* if isLoggedIn true, you can only go to this pages */}
      {isLoggedIn ? (
        <Switch>
          <Route path="/cart">
            <Cart totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
          </Route>
          <Route path="/tshirts">
            <Tshirts />
          </Route>
          <Route path="/hats">
            <Hats />
          </Route>
          <Route path="/tshirt-details/:id">
            <TshirtDetail />
          </Route>
          <Route path="/hat-details/:id">
            <HatDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      ) : (
        // if isLoggedIn false, you can only go to this pages
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/tshirts">
            <Tshirts />
          </Route>
          <Route path="/hats">
            <Hats />
          </Route>
          <Route path="/tshirt-details/:id">
            <TshirtDetail />
          </Route>
          <Route path="/hat-details/:id">
            <HatDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default Routes;
