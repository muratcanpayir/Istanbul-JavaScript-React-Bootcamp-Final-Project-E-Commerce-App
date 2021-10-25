import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Hats from "../pages/Hats/Hats";
import Signup from "../pages/Signup/Signup";
import Tshirts from "../pages/Tshirts/Tshirts";
import Login from "../pages/Login/Login";
import TshirtDetail from "../pages/TshirtDetail/TshirtDetail";
import HatDetail from "../pages/HatDetail/HatDetail";

function Routes() {
  return (
    <Router>
      
      {/* <Redirect to="/products" /> */}
      <Switch>
        <Route path="/tshirts">
          <Tshirts />
        </Route>
        <Route path="/hats">
          <Hats />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/tshirt-details/:id">
          <TshirtDetail />
        </Route>
        <Route path="/hat-details/:id">
          <HatDetail />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
