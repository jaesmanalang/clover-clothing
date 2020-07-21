import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/homepage/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
