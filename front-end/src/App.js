import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import CostumerOrders from './pages/CustomerOrders';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import MyProvider from './context/MyProvider';
import CustomerCheckout from './pages/CustomerCheckout';

function App() {
  return (

    <MyProvider>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ RegisterPage } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/orders" component={ CostumerOrders } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
    </Switch>
    </MyProvider>
  );
}

export default App;
