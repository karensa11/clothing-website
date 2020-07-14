import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage";
import ShopComponent from "./components/shop/shop.component";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/shop" component={ShopComponent} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
