import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
      <BrowserRouter>
          <div className="content">
              <Header />
              <Switch>
                  <Route exact path="/" component={HomepageComponent} />
                  <Route exact path="/shop" component={ShopComponent} />
                  <Route exact path="/signIn" component={SignInAndSignUp} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
