import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Account from './pages/Account'
import Dashboard from './pages/Dashboard';

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" component={Account} exact />
      </Switch>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
  </BrowserRouter>;
}

export default App;
