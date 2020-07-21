import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../routes//Home";
import Book from "../routes//Book";
import Menu from "../routes//Menu";
import Review from "../routes//Review";

const IsLogin = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Book" component={Book} />
    <Route path="/Menu" component={Menu} />
    <Route path="/Review" component={Review} />
    <Redirect path="*" to="/" />
  </Switch>
);
const IsLogout = () => (
  <>
    Ad
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Book" component={Book} />
      <Route path="/Menu" component={Menu} />
      <Route path="/Review" component={Review} />
      <Redirect path="*" to="/" />
    </Switch>
    Ad
  </>
);

const Routes = ({ isLogIn }) => (isLogIn ? <IsLogin /> : <IsLogout />);

Routes.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
};

export default Routes;
