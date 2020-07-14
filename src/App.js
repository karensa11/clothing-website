import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage";
import ShopComponent from "./components/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
      <BrowserRouter>
          <div className="content">
              <Header />
              <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/shop" component={ShopComponent} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
