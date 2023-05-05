import React from 'react';
import './App.css';
import CustomerProducts from './pages/CustomerProducts';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ RegisterPage } />
      <Route path="/customer/products" component={ CustomerProducts } />
    </Switch>
  )};

export default App;
